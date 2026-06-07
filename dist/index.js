"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var c=q(function(G,x){
var g=require('@stdlib/strided-base-reinterpret-boolean/dist');function B(r,e,i,u,a,t,o){var p,n,v,s,f;if(r<=0)return a;for(p=g(a,0),n=!0,v=u,s=o,f=0;f<r;f++)n&&e[v]&&(n=!1),p[s]=n,v+=i,s+=t;return a}x.exports=B
});var j=q(function(H,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),E=c();function h(r,e,i,u,a){var t=l(r,i),o=l(r,a);return E(r,e,i,t,u,a,o)}y.exports=h
});var _=q(function(I,R){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=j(),w=c();k(m,"ndarray",w);R.exports=m
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=_(),d,b=A(z(__dirname,"./native.js"));C(b)?d=D:d=b;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
