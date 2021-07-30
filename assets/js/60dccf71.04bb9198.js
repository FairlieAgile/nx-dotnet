(self.webpackChunknx_dotnet=self.webpackChunknx_dotnet||[]).push([[776],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(m,l(l({ref:t},s),{},{components:r})):n.createElement(m,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5719:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>u,default:()=>p});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),l={},a="@nx-dotnet/core:serve",c={unversionedId:"core/executors/serve",id:"core/executors/serve",isDocsHomePage:!1,title:"@nx-dotnet/core:serve",description:"NxDotnet Serve Executor",source:"@site/../../docs/core/executors/serve.md",sourceDirName:"core/executors",slug:"/core/executors/serve",permalink:"/docs/core/executors/serve",editUrl:"https://github.com/nx-dotnet/nx-dotnet/edit/master/docs/../../docs/core/executors/serve.md",version:"current",frontMatter:{},sidebar:"someSidebar",previous:{title:"@nx-dotnet/core:publish",permalink:"/docs/core/executors/publish"},next:{title:"@nx-dotnet/core:test",permalink:"/docs/core/executors/test"}},u=[{value:"NxDotnet Serve Executor",id:"nxdotnet-serve-executor",children:[]},{value:"Options",id:"options",children:[{value:"configuration",id:"configuration",children:[]},{value:"framework",id:"framework",children:[]},{value:"force",id:"force",children:[]},{value:"launch-profile",id:"launch-profile",children:[]},{value:"no-launch-profile",id:"no-launch-profile",children:[]},{value:"runtime",id:"runtime",children:[]},{value:"verbosity",id:"verbosity",children:[]}]}],s={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nx-dotnetcoreserve"},"@nx-dotnet/core:serve"),(0,i.kt)("h2",{id:"nxdotnet-serve-executor"},"NxDotnet Serve Executor"),(0,i.kt)("p",null,"Uses ",(0,i.kt)("inlineCode",{parentName:"p"},"dotnet run")," and chokidar to run a .NET app."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"configuration"},"configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Defines the build configuration. The default for most projects is Debug, but you can override the build configuration settings in your project.")),(0,i.kt)("h3",{id:"framework"},"framework"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Builds and runs the app using the specified framework. The framework must be specified in the project file.")),(0,i.kt)("h3",{id:"force"},"force"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Forces all dependencies to be resolved even if the last restore was successful. Specifying this flag is the same as deleting the project.assets.json file.")),(0,i.kt)("h3",{id:"launch-profile"},"launch-profile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): The name of the launch profile (if any) to use when launching the application. Launch profiles are defined in the launchSettings.json file and are typically called Development, Staging, and Production. For more information, see Working with multiple environments.")),(0,i.kt)("h3",{id:"no-launch-profile"},"no-launch-profile"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(boolean): Doesn","'","t try to use launchSettings.json to configure the application.")),(0,i.kt)("h3",{id:"runtime"},"runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Specifies the target runtime to restore packages for. For a list of Runtime Identifiers (RIDs), see the RID catalog. -r short option available since .NET Core 3.0 SDK.")),(0,i.kt)("h3",{id:"verbosity"},"verbosity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"(string): Sets the verbosity level of the command. Allowed values are q","[uiet]",", m","[inimal]",", n","[ormal]",", d","[etailed]",", and diag","[nostic]",". The default value is m. Available since .NET Core 2.1 SDK.")))}p.isMDXComponent=!0}}]);