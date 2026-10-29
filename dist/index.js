"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=q(function(G,x){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(e,r,a,u,i,t,o){var p,n,v,s,f;if(e<=0)return i;for(p=g(i,0),n=!0,v=u,s=o,f=0;f<e;f++)n&&r[v]&&(n=!1),p[s]=n,v+=a,s+=t;return i}x.exports=B
});var j=q(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(e,r,a,u,i){var t=l(e,a),o=l(e,i);return E(e,r,a,t,u,i,o)}y.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),d,b=A(z(__dirname,"./native.js"));C(b)?d=D:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
