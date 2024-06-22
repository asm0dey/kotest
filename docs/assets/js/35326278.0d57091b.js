"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[9482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),f=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=f(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=f(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(d,l(l({ref:t},c),{},{components:n})):a.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var f=2;f<s;f++)l[f]=n[f];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>f});var a=n(87462),r=(n(67294),n(3905));const s={id:"fail_fast",title:"Fail Fast",slug:"fail-fast.html",sidebar_label:"Fail Fast"},l=void 0,o={unversionedId:"framework/fail_fast",id:"version-5.6/framework/fail_fast",title:"Fail Fast",description:"Kotest can eagerly fail a list of tests if one of those tests fails. This is called fail fast.",source:"@site/versioned_docs/version-5.6/framework/fail_fast.md",sourceDirName:"framework",slug:"/framework/fail-fast.html",permalink:"/docs/5.6/framework/fail-fast.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/fail_fast.md",tags:[],version:"5.6",frontMatter:{id:"fail_fast",title:"Fail Fast",slug:"fail-fast.html",sidebar_label:"Fail Fast"},sidebar:"framework",previous:{title:"Blocking Tests",permalink:"/docs/5.6/framework/timeouts/blocking-tests.html"},next:{title:"Fail On Empty Test Suite",permalink:"/docs/5.6/framework/fail-on-empty-test-suite.html"}},i={},f=[],c={toc:f};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest can eagerly fail a list of tests if one of those tests fails. This is called ",(0,r.kt)("em",{parentName:"p"},"fail fast"),"."),(0,r.kt)("p",null,"Fail fast can take affect at the spec level, or at a parent test level."),(0,r.kt)("p",null,"In the following example, we enable failfast for a parent test, and the first failure inside that context,\nwill cause the rest to be skipped."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FailFastTests() : FunSpec() {\n   init {\n      context("context with fail fast enabled").config(failfast = true) {\n         test("a") {} // pass\n         test("b") { error("boom") } // fail\n         test("c") {} // skipped\n         context("d") {  // skipped\n            test("e") {} // skipped\n         }\n      }\n   }\n}\n')),(0,r.kt)("p",null,"This can be enabled for all scopes in a Spec by setting failfast at the spec level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class FailFastTests() : FunSpec() {\n   init {\n\n      failfast = true\n\n      context("context with fail fast enabled at the spec level") {\n         test("a") {} // pass\n         test("b") { error("boom") } // fail\n         test("c") {} // skipped\n         context("d") {  // skipped\n            test("e") {} // skipped\n         }\n      }\n   }\n}\n')))}p.isMDXComponent=!0}}]);