"use strict";(self.webpackChunkchisel_docs=self.webpackChunkchisel_docs||[]).push([[6307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:9},i="Using your own API key",s={unversionedId:"advanced-features/own-key",id:"advanced-features/own-key",title:"Using your own API key",description:"You can use your own openai key if want to have unlimited tokens. Set it in settings:",source:"@site/docs/advanced-features/own-key.md",sourceDirName:"advanced-features",slug:"/advanced-features/own-key",permalink:"/chisel-docs/docs/advanced-features/own-key",draft:!1,editUrl:"https://github.com/egonSchiele/chisel-docs/blob/main/docs/advanced-features/own-key.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Versions",permalink:"/chisel-docs/docs/advanced-features/versions"}},c={},u=[],l={toc:u},p="wrapper";function y(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-your-own-api-key"},"Using your own API key"),(0,o.kt)("p",null,"You can use your own openai key if want to have unlimited tokens. Set it in settings:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of field in settings",src:n(5333).Z,width:"300",height:"443"})),(0,o.kt)("admonition",{title:"Note",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Giving your key to another person is a huge security risk. If you use this feature, you are taking on that risk.")),(0,o.kt)("p",null,"We don't store the key, but ultimately, your key is your responsibility. Make sure you have a usage limit set. This way, if your key falls into the wrong hands, you won't spend more than a certain amount each month."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"We are not liable for any issues/costs related to your key.")))}y.isMDXComponent=!0},5333:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/own-key-aeaaa973ff5db43423b1ca6899ef3055.png"}}]);