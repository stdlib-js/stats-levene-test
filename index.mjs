// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-anova1@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mean@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.1-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.1.0-esm/index.mjs";function u(t,e,s){var i,o={},a={},l=t.length,d=[];for(i=0;i<s.length;i++)o[s[i]]=n();for(i=0;i<l;i++)o[e[i]](t[i]);for(i=0;i<s.length;i++)a[s[i]]=o[s[i]]();for(i=0;i<l;i++)d.push(r(t[i]-a[e[i]]));return d}function f(e,i){return t(i)?d(i,"alpha")&&(e.alpha=i.alpha,!a(e.alpha)||l(e.alpha))?new TypeError(s("invalid option. `%s` option must be a number. Option: `%s`.","alpha",e.alpha)):d(i,"groups")&&(e.groups=i.groups,!o(e.groups))?new TypeError(s("invalid option. `%s` option must be an array. Option: `%s`.","groups",e.groups)):null:new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",i))}function c(t,e){return t-e}function v(t){var e,s,i,n;for((t=t.slice()).sort(c),e=t.length,i=1,n=0;i<e;i++)s=t[i],t[n]!==s&&(t[n+=1]=s);return t.length=n+1,t}function g(e){var i,n,r;if(n=4,i=!0,arguments.length>0){if(!t(e))throw new TypeError(s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(d(e,"digits")){if(!p(e.digits))throw new TypeError(s("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",e.digits));n=e.digits}if(d(e,"decision")){if(!m(e.decision))throw new TypeError(s("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",e.decision));i=e.decision}}return r="",r+=this.method,r+="\n\n",r+="Null hypothesis: The variances in all groups are the same.",r+="\n\n",r+="    df 1: "+h(this.df[0],-n)+"\n",r+="    df 2: "+h(this.df[1],-n)+"\n",r+="    F score: "+h(this.statistic,-n)+"\n",r+="    P Value: "+h(this.pValue,-n)+"\n",r+="\n",i&&(r+="Test Decision: ",this.rejected?r+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":r+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",r+="\n"),r}function j(){var n,r,o,a,l,d,p,m,h,c,j,b;if(l=[],d={},t(arguments[(b=arguments.length)-1])){if(n=arguments[b-1],b-=1,m=f(d,n))throw m}else n={};if(d.groups){if(l=arguments[0],(b=(a=v(o=d.groups)).length)<2)throw new Error(s("invalid option. `%s` option must contain at least two unique elements. Value: `%s`.","groups",a))}else for(o=[],l=[],a=[],c=0;c<b;c++){if(0===(p=arguments[c]).length)throw new Error(s("invalid argument. Provided arrays cannot be empty. Value: `%s`.",p));for(l=l.concat(p),j=0;j<p.length;j++)o.push(c);a.push(c)}return l=u(l,o,a),r=i(l,o,n),e(h={},"rejected",r.rejected),e(h,"alpha",r.alpha),e(h,"pValue",r.pValue),e(h,"statistic",r.statistic),e(h,"df",[r.treatment.df,r.error.df]),e(h,"method","Levene's test for Homogeneity of Variance"),e(h,"print",g),h}export{j as default};
//# sourceMappingURL=index.mjs.map