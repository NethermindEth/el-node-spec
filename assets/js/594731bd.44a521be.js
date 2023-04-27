"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[m]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2,id:"backup"},i="Backup service",c={unversionedId:"backup/backup",id:"backup/backup",title:"Backup service",description:"Commit container",source:"@site/docs/backup/backup.md",sourceDirName:"backup",slug:"/backup/",permalink:"/docs/backup/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/backup/backup.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"backup"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/docs/backup/intro"},next:{title:"Restore service",permalink:"/docs/backup/restore"}},p={},l=[{value:"Commit container",id:"commit-container",level:2},{value:"Saving container commit",id:"saving-container-commit",level:3},{value:"Backup volumes",id:"backup-volumes",level:2}],s={toc:l},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-service"},"Backup service"),(0,r.kt)("h2",{id:"commit-container"},"Commit container"),(0,r.kt)("p",null,"Committing container changes into an image is the first step to backup a service. The procedure to do it is the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Stop the docker container that you want to backup",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker stop [container-name]\n"))),(0,r.kt)("li",{parentName:"ol"},"Create a new image from the stopped container using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker commit"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker commit [container-name] [image-name]\n")))),(0,r.kt)("h3",{id:"saving-container-commit"},"Saving container commit"),(0,r.kt)("p",null,"There are two principal options to save the container commit:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"New image could be saved to a ",(0,r.kt)("inlineCode",{parentName:"li"},"tar")," file using ",(0,r.kt)("inlineCode",{parentName:"li"},"docker save"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker save [image-name] > [image-name].tar\n"))),(0,r.kt)("li",{parentName:"ol"},"Leave the image created by the ",(0,r.kt)("inlineCode",{parentName:"li"},"docker commit")," command in the local docker registry")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This proposal recommends the usage of option (1) because both container and volumes ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," files could be saved in a single place for the same container.")),(0,r.kt)("h2",{id:"backup-volumes"},"Backup volumes"),(0,r.kt)("p",null,"Volumes associated with the container could be saved to a ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," file. The procedure is described by the execution of the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -v [volume-name]:/data -v [backup-dest]:/backup alpine tar -czvf /backup/[backup-file-name].tar.gz /data\n")),(0,r.kt)("p",null,"This command will start a new container based on the Alpine Linux image, mount the specified volume to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/data")," directory inside the container, and mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"backup-dest")," directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"/backup")," inside the container. The tar command is then used to create a compressed tar archive of the volume data and save it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/backup")," directory inside the container. The ",(0,r.kt)("inlineCode",{parentName:"p"},"--rm")," flag is used to automatically remove the container after the backup process is complete."))}u.isMDXComponent=!0}}]);