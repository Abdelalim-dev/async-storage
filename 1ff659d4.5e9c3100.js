(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),c=(n(0),n(157)),i={id:"install",title:"Installation",sidebar_label:"Installation"},o={id:"install",title:"Installation",description:"### Get library",source:"@site/docs/Installation.md",permalink:"/async-storage/docs/install",editUrl:"https://github.com/react-native-async-storage/async-storage/edit/master/website/docs/Installation.md",sidebar_label:"Installation",sidebar:"docs",next:{title:"Usage",permalink:"/async-storage/docs/usage"}},l=[{value:"Get library",id:"get-library",children:[]},{value:"Link",id:"link",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"get-library"},"Get library"),Object(c.b)("p",null,"With npm:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install @react-native-async-storage/async-storage\n")),Object(c.b)("p",null,"With Yarn:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @react-native-async-storage/async-storage\n")),Object(c.b)("h3",{id:"link"},"Link"),Object(c.b)("h4",{id:"android--ios"},"Android & iOS"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"React Native 0.60+"))),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"}),"CLI autolink feature")," links the module while building the app."),Object(c.b)("p",null,"On iOS, use CocoaPods to add the native ",Object(c.b)("inlineCode",{parentName:"p"},"RNAsyncStorage")," to your project:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx pod-install\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"React Native <= 0.59"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"react-native link @react-native-async-storage/async-storage\n")),Object(c.b)("h4",{id:"windows"},"Windows"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"React Native Windows >= 0.63"),"\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://microsoft.github.io/react-native-windows/docs/native-modules-autolinking"}),"CLI autolink feature")," links the module while building the app.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"React Native Windows <= 0.62"),"\nFor earlier versions check ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/async-storage/docs/link"}),"manual linking")))),Object(c.b)("h4",{id:"macos"},"macOS"),Object(c.b)("p",null,"For ",Object(c.b)("inlineCode",{parentName:"p"},"macOS")," the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/async-storage/docs/link"}),"manual linking")," is currently the only linking option."))}s.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,O=p["".concat(i,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(O,o({ref:t},b,{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);