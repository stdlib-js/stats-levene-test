// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-anova1@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mean@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nan@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.2.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-roundn@v0.2.2-esm/index.mjs";function f(e,s){return e-s}function c(s){var r,i,n;if(i=4,r=!0,arguments.length>0){if(!e(s))throw new TypeError(t("1Lf2V",s));if(l(s,"digits")){if(!h(s.digits))throw new TypeError(t("1Lf3P","digits",s.digits));i=s.digits}if(l(s,"decision")){if(!p(s.decision))throw new TypeError(t("1Lf2o","decision",s.decision));r=s.decision}}return n="",n+=this.method,n+="\n\n",n+="Null hypothesis: The variances in all groups are the same.",n+="\n\n",n+="    df 1: "+m(this.df[0],-i)+"\n",n+="    df 2: "+m(this.df[1],-i)+"\n",n+="    F score: "+m(this.statistic,-i)+"\n",n+="    P Value: "+m(this.pValue,-i)+"\n",n+="\n",r&&(n+="Test Decision: ",this.rejected?n+="Reject null in favor of alternative at "+100*this.alpha+"% significance level":n+="Fail to reject null in favor of alternative at "+100*this.alpha+"% significance level",n+="\n"),n}function j(){var h,p,m,j,g,v,u,b,w,x,y,L;if(g=[],v={},e(arguments[(L=arguments.length)-1])){if(h=arguments[L-1],L-=1,b=function(s,r){return e(r)?l(r,"alpha")&&(s.alpha=r.alpha,!a(s.alpha)||d(s.alpha))?new TypeError(t("1Lf8P","alpha",s.alpha)):l(r,"groups")&&(s.groups=r.groups,!o(s.groups))?new TypeError(t("1Lf8Z","groups",s.groups)):null:new TypeError(t("1Lf2V",r))}(v,h),b)throw b}else h={};if(v.groups){if(g=arguments[0],j=function(e){var s,t,r,i;for((e=e.slice()).sort(f),s=e.length,r=1,i=0;r<s;r++)t=e[r],e[i]!==t&&(e[i+=1]=t);return e.length=i+1,e}(m=v.groups),(L=j.length)<2)throw new Error(t("1Lf9v","groups",j))}else for(m=[],g=[],j=[],x=0;x<L;x++){if(0===(u=arguments[x]).length)throw new Error(t("1Lf9w",u));for(g=g.concat(u),y=0;y<u.length;y++)m.push(x);j.push(x)}return g=function(e,s,t){var r,o={},a={},d=e.length,l=[];for(r=0;r<t.length;r++)o[t[r]]=i();for(r=0;r<d;r++)o[s[r]](e[r]);for(r=0;r<t.length;r++)a[t[r]]=o[t[r]]();for(r=0;r<d;r++)l.push(n(e[r]-a[s[r]]));return l}(g,m,j),p=r(g,m,h),s(w={},"rejected",p.rejected),s(w,"alpha",p.alpha),s(w,"pValue",p.pValue),s(w,"statistic",p.statistic),s(w,"df",[p.treatment.df,p.error.df]),s(w,"method","Levene's test for Homogeneity of Variance"),s(w,"print",c),w}export{j as default};
//# sourceMappingURL=index.mjs.map
