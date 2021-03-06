/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var setReadOnly = require( '@stdlib/utils-define-read-only-property' );
var format = require( '@stdlib/string-format' );
var anova1 = require( '@stdlib/stats-anova1' );
var absMeanDiff = require( './absdiff.js' );
var validate = require( './validate.js' );
var unique = require( './unique.js' );
var print = require( './print.js' ); // eslint-disable-line stdlib/no-redeclare


// MAIN //

/**
* Computes Levene's test for equal variances.
*
* @param {...NumericArray} arguments - either two or more number arrays or a single numeric array if provided an array of group indicators
* @param {Options} [options] - function options
* @param {number} [options.alpha=0.05] - significance level
* @param {Array} [options.groups] - array of group indicators
* @throws {TypeError} must provide array-like arguments
* @throws {RangeError} alpha option must be a number on the interval `[0,1]`
* @throws {Error} must provide at least two array-like arguments if `groups` is not provided
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Object} test results
*
* @example
* // Data from Hollander & Wolfe (1973), p. 116:
* var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
* var y = [ 3.8, 2.7, 4.0, 2.4 ];
* var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];
*
* var out = levene( x, y, z );
* // returns {...}
*/
function levene() {
	var options;
	var result;
	var groups;
	var levels;
	var args;
	var opts;
	var arg;
	var err;
	var out;
	var i;
	var j;
	var k;

	k = arguments.length;
	args = [];
	opts = {};
	if ( isPlainObject( arguments[ k-1 ] ) ) {
		options = arguments[ k-1 ];
		k -= 1;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		options = {};
	}
	if ( opts.groups ) {
		args = arguments[ 0 ];
		groups = opts.groups;
		levels = unique( groups );
		k = levels.length;
		if ( k < 2 ) {
			throw new Error( format( 'invalid option. `%s` option must contain at least two unique elements. Value: `%s`.', 'groups', levels ) );
		}
	} else {
		groups = [];
		args = [];
		levels = [];
		for ( i = 0; i < k; i++ ) {
			arg = arguments[ i ];
			if ( arg.length === 0 ) {
				throw new Error( format( 'invalid argument. Provided arrays cannot be empty. Value: `%s`.', arg ) );
			}
			args = args.concat( arg );
			for ( j = 0; j < arg.length; j++ ) {
				groups.push( i );
			}
			levels.push( i );
		}
	}
	args = absMeanDiff( args, groups, levels );
	result = anova1( args, groups, options );
	out = {};
	setReadOnly( out, 'rejected', result.rejected );
	setReadOnly( out, 'alpha', result.alpha );
	setReadOnly( out, 'pValue', result.pValue );
	setReadOnly( out, 'statistic', result.statistic );
	setReadOnly( out, 'df', [ result.treatment.df, result.error.df ] );
	setReadOnly( out, 'method', 'Levene\'s test for Homogeneity of Variance' );
	setReadOnly( out, 'print', print );
	return out;
}


// EXPORTS //

module.exports = levene;
