<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Levene's Test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute Levene's test for equal variances.

<section class="intro">

Levene's test is used to test the null hypothesis that the variances of `k` groups are equal against the alternative that at least two of them are different.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-levene-test
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var leveneTest = require( '@stdlib/stats-levene-test' );
```

#### leveneTest( x\[, y, ..., z]\[, opts] )

Calculates Levene's test for input arrays `x`, `y`, ..., `z` holding numeric observations. 

```javascript
// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/
```

The function accepts the following `options`:

-   **alpha**: `number` on the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **groups**: an `array` of group indicators. Only applicable when providing a single numeric array holding all observations.

By default, the test is carried out at a significance level of `0.05`. To test at a different significance level, set the `alpha` option.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z, {
    'alpha': 0.01
});
/* returns
    {
        'rejected': false,
        'alpha': 0.01,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/
```

In addition to providing multiple arrays, the function supports providing a single numeric array holding all observations along with an array of group indicators.

<!-- eslint-disable array-element-newline -->

```javascript
var arr = [
    2.9, 3.0, 2.5, 2.6, 3.2,
    3.8, 2.7, 4.0, 2.4,
    2.8, 3.4, 3.7, 2.2, 2.0
];
var groups = [
    'a', 'a', 'a', 'a', 'a',
    'b', 'b', 'b', 'b',
    'c', 'c', 'c', 'c', 'c'
];
var out = leveneTest( arr, {
    'groups': groups
});
```

The returned object comes with a `.print()` method which, when invoked, prints a formatted output of test results. The method accepts the following options:

-   **digits**: number of decimal digits displayed for the outputs. Default: `4`.
-   **decision**: `boolean` indicating whether to print the test decision. Default: `true`.

```javascript
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
console.log( out.print() );
/* =>
    Levene's test for Homogeneity of Variance

    Null hypothesis: The variances in all groups are the same.

        df 1: 2
        df 2: 11
        F score: 2.0638
        P Value: 0.1733

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var leveneTest = require( '@stdlib/stats-levene-test' );

// Data from Hollander & Wolfe (1973), p. 116:
var x = [ 2.9, 3.0, 2.5, 2.6, 3.2 ];
var y = [ 3.8, 2.7, 4.0, 2.4 ];
var z = [ 2.8, 3.4, 3.7, 2.2, 2.0 ];

var out = leveneTest( x, y, z );
/* returns
    {
        'rejected': false,
        'alpha': 0.05,
        'df': [ 2, 11 ],
        'pValue': ~0.1733,
        'statistic': ~2.0638,
        ...
    }
*/

var table = out.print();
/* returns
    Levene's test for Homogeneity of Variance

    Null hypothesis: The variances in all groups are the same.

        df 1: 2
        df 2: 11
        F score: 2.0638
        P Value: 0.1733

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.examples -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-vartest`][@stdlib/stats/vartest]</span><span class="delimiter">: </span><span class="description">two-sample F-test for equal variances.</span>
-   <span class="package-name">[`@stdlib/stats-bartlett-test`][@stdlib/stats/bartlett-test]</span><span class="delimiter">: </span><span class="description">Bartlett’s test for equal variances.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-levene-test.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-levene-test

[test-image]: https://github.com/stdlib-js/stats-levene-test/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-levene-test/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-levene-test/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-levene-test?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-levene-test.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-levene-test/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-levene-test/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-levene-test/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-levene-test/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-levene-test/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-levene-test/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-levene-test/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-levene-test/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-levene-test/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/vartest]: https://github.com/stdlib-js/stats-vartest

[@stdlib/stats/bartlett-test]: https://github.com/stdlib-js/stats-bartlett-test

<!-- </related-links> -->

</section>

<!-- /.links -->
