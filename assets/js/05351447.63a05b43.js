"use strict";(self.webpackChunkchisel_docs=self.webpackChunkchisel_docs||[]).push([[5573],{3905:(e,t,A)=>{A.d(t,{Zo:()=>s,kt:()=>g});var n=A(7294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function a(e,t){if(null==e)return{};var A,n,o=function(e,t){if(null==e)return{};var A,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var A=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),h=c(A),p=o,g=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return A?n.createElement(g,i(i({ref:t},s),{},{components:A})):n.createElement(g,i({ref:t},s))}));function g(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=A.length,i=new Array(r);i[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[h]="string"==typeof e?e:o,i[1]=a;for(var c=2;c<r;c++)i[c]=A[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,A)}p.displayName="MDXCreateElement"},848:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=A(7462),o=(A(7294),A(3905));const r={sidebar_position:6},i="Info, History, Fullscreen",a={unversionedId:"walkthrough/info-and-history",id:"walkthrough/info-and-history",title:"Info, History, Fullscreen",description:"Now let's check out the other icons way over to the right. First up is the info panel. To get there, click on the icon that has an 'i' in a circle, or invoke the launcher and select \"Open Info\".",source:"@site/docs/walkthrough/info-and-history.md",sourceDirName:"walkthrough",slug:"/walkthrough/info-and-history",permalink:"/chisel-docs/docs/walkthrough/info-and-history",draft:!1,editUrl:"https://github.com/egonSchiele/chisel-docs/blob/main/docs/walkthrough/info-and-history.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"The Launcher",permalink:"/chisel-docs/docs/walkthrough/the-launcher"},next:{title:"Folds",permalink:"/chisel-docs/docs/walkthrough/folds"}},l={},c=[],s={toc:c},h="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"info-history-fullscreen"},"Info, History, Fullscreen"),(0,o.kt)("p",null,"Now let's check out the other icons way over to the right. First up is the info panel. To get there, click on the icon that has an 'i' in a circle, or invoke the launcher and select \"Open Info\"."),(0,o.kt)("p",null,"This panel will give you basic info about the chapter you're working on, such as word count."),(0,o.kt)("p",null,"Moving on, we've got the suggestions panel. We already covered this one, so no need to explain it again."),(0,o.kt)("p",null,"The icon that looks like a clock is the history panel. This panel is where all your changes are tracked. This means you can go back to a previous version of your chapter if you mess up. Let's give it a try."),(0,o.kt)("p",null,"Type this text in the editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"First line\n")),(0,o.kt)("p",null,"and manually save with ",(0,o.kt)("inlineCode",{parentName:"p"},"command+s"),". Tada, a new entry in the history panel!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the first line in history",src:A(5501).Z,width:"286",height:"115"})),(0,o.kt)("p",null,"Let's make a small change. Add another line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"First line\nSecond line\n")),(0,o.kt)("p",null,"Hit save again, and you'll see another entry with the changes. You can click on any of the entries in the history panel to get back to that version."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the second line in history",src:A(6659).Z,width:"284",height:"269"})),(0,o.kt)("admonition",{title:"Note",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Entries are added to the history when you manually save using command+s. They are not added on auto-save.")),(0,o.kt)("p",null,"Next up is the full screen icon. Click that icon and the rightmost column will take over your whole screen. This is great if you need more space to read all those suggestions or check out your history."),(0,o.kt)("p",null,"We've checked out all the panels. Now let's focus on the editor."))}u.isMDXComponent=!0},5501:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},6659:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/second-line-03f56606c467e6d0e11d2e2335a4a0ab.png"}}]);