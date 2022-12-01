// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-anova1@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mean@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@esm/index.mjs";function f(e,s,t){var r,o={},a={},d=e.length,l=[];for(r=0;r<t.length;r++)o[t[r]]=i();for(r=0;r<d;r++)o[s[r]](e[r]);for(r=0;r<t.length;r++)a[t[r]]=o[t[r]]();for(r=0;r<d;r++)l.push(n(e[r]-a[s[r]]));return l}function j(s,r){return e(r)?l(r,"alpha")&&(s.alpha=r.alpha,!a(s.alpha)||d(s.alpha))?new TypeError(t("0fj8h","alpha",s.alpha)):l(r,"groups")&&(s.groups=r.groups,!o(s.groups))?new TypeError(t("0fj8t","groups",s.groups)):null:new TypeError(t("0fj2h",r))}function c(e,s){return e-s}function g(e){var s,t,r,i;for((e=e.slice()).sort(c),s=e.length,r=1,i=0;r<s;r++)t=e[r],e[i]!==t&&(e[i+=1]=t);return e.length=i+1,e}function u(s){var r,i,n;if(i=4,r=!0,arguments.length>0){if(!e(s))throw new TypeError(t("0fj2h",s));if(l(s,"digits")){if(!h(s.digits))throw new TypeError(t("0fj3b","digits",s.digits));i=s.digits}if(l(s,"decision")){if(!p(s.decision))throw new TypeError(t("0fj30","decision",s.decision));r=s.decision}}return n="",n+=this.method,n+="\n\n",n+="Null hypothesis: The variances in all groups are the same.",n+="\n\n",n+="    df 1: "+m(this.df[0],-i)+"\n",n+="    df 2: "+m(this.df[1],-i)+"\n",n+="    F score: "+m(this.statistic,-i)+"\n",n+="    P Value: "+m(this.pValue,-i)+"\n",n+="\n",r&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}function v(){var i,n,o,a,d,l,h,p,m,c,v,b;if(d=[],l={},e(arguments[(b=arguments.length)-1])){if(i=arguments[b-1],b-=1,p=j(l,i))throw p}else i={};if(l.groups){if(d=arguments[0],(b=(a=g(o=l.groups)).length)<2)throw new Error(t("0fjAX","groups",a))}else for(o=[],d=[],a=[],c=0;c<b;c++){if(0===(h=arguments[c]).length)throw new Error(t("0fjAY",h));for(d=d.concat(h),v=0;v<h.length;v++)o.push(c);a.push(c)}return d=f(d,o,a),n=r(d,o,i),s(m={},"rejected",n.rejected),s(m,"alpha",n.alpha),s(m,"pValue",n.pValue),s(m,"statistic",n.statistic),s(m,"df",[n.treatment.df,n.error.df]),s(m,"method","Levene's test for Homogeneity of Variance"),s(m,"print",u),m}export{v as default};
//# sourceMappingURL=index.mjs.map
