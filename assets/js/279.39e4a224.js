(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[279],{2928:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>we});var a=n(7294),r=n(833),l=n(902);const o=a.createContext(null);function s(e){let{children:t,content:n}=e;const r=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return a.createElement(o.Provider,{value:r},t)}function c(){const e=(0,a.useContext)(o);if(null===e)throw new l.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:n}=c();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(6010),d=n(7524),m=n(3562);function p(){const{metadata:e}=c();return a.createElement(m.Z,{previous:e.previous,next:e.next})}var h=n(2263),f=n(9960),b=n(5999),g=n(143),v=n(5281),E=n(373),y=n(4477);const k={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return a.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function N(e){const t=k[e.versionMetadata.banner];return a.createElement(t,e)}function C(e){let{versionLabel:t,to:n,onClick:r}=e;return a.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(f.Z,{to:n,onClick:r},a.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:r}}=(0,h.Z)(),{pluginId:l}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,E.J)(l),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,g.Jo)(l),i=s??(d=c).docs.find((e=>e.id===d.mainDocId));var d;return a.createElement("div",{className:(0,u.Z)(t,v.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(N,{siteTitle:r,versionMetadata:n})),a.createElement("div",{className:"margin-top--md"},a.createElement(C,{versionLabel:c.label,to:i.path,onClick:()=>o(c.name)})))}function _(e){let{className:t}=e;const n=(0,y.E)();return n.banner?a.createElement(L,{className:t,versionMetadata:n}):null}function Z(e){let{className:t}=e;const n=(0,y.E)();return n.badge?a.createElement("span",{className:(0,u.Z)(t,v.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function w(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function T(e){let{lastUpdatedBy:t}=e;return a.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function B(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:v.k.common.lastUpdated},a.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(w,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(T,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var x=n(7462);const I={iconEdit:"iconEdit_Z9Sw"};function S(e){let{className:t,...n}=e;return a.createElement("svg",(0,x.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(I.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function A(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},a.createElement(S,null),a.createElement(b.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const H={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function V(e){let{permalink:t,label:n,count:r}=e;return a.createElement(f.Z,{href:t,className:(0,u.Z)(H.tag,r?H.tagWithCount:H.tagRegular)},n,r&&a.createElement("span",null,r))}const j={tags:"tags_jXut",tag:"tag_QGVx"};function M(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(b.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,u.Z)(j.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:j.tag},a.createElement(V,{label:t,permalink:n}))}))))}const O={lastUpdated:"lastUpdated_vwxv"};function U(e){return a.createElement("div",{className:(0,u.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(M,e)))}function P(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:r,formattedLastUpdatedAt:l}=e;return a.createElement("div",{className:(0,u.Z)(v.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(A,{editUrl:t})),a.createElement("div",{className:(0,u.Z)("col",O.lastUpdated)},(n||r)&&a.createElement(B,{lastUpdatedAt:n,formattedLastUpdatedAt:l,lastUpdatedBy:r})))}function D(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:r,lastUpdatedBy:l,tags:o}=e,s=o.length>0,i=!!(t||n||l);return s||i?a.createElement("footer",{className:(0,u.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(U,{tags:o}),i&&a.createElement(P,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,formattedLastUpdatedAt:r})):null}var R=n(6043),W=n(6668);function z(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...r}=e;n>=0?t[n].children.push(r):a.push(r)})),a}function $(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=$({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function q(e){const t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function F(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>q(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function G(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,W.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Y(e){const t=(0,a.useRef)(void 0),n=G();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:r,minHeadingLevel:l,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let r=t;r<=n;r+=1)a.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=F(s,{anchorTopOffset:n.current}),i=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function J(e){let{toc:t,className:n,linkClassName:r,isChild:l}=e;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(J,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const X=a.memo(J);function K(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:o,maxHeadingLevel:s,...c}=e;const i=(0,W.L)(),u=o??i.tableOfContents.minHeadingLevel,d=s??i.tableOfContents.maxHeadingLevel,m=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>$({toc:z(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:u,maxHeadingLevel:d});return Y((0,a.useMemo)((()=>{if(r&&l)return{linkClassName:r,linkActiveClassName:l,minHeadingLevel:u,maxHeadingLevel:d}}),[r,l,u,d])),a.createElement(X,(0,x.Z)({toc:m,className:n,linkClassName:r},c))}const Q={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function ee(e){let{collapsed:t,...n}=e;return a.createElement("button",(0,x.Z)({type:"button"},n,{className:(0,u.Z)("clean-btn",Q.tocCollapsibleButton,!t&&Q.tocCollapsibleButtonExpanded,n.className)}),a.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const te={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function ne(e){let{toc:t,className:n,minHeadingLevel:r,maxHeadingLevel:l}=e;const{collapsed:o,toggleCollapsed:s}=(0,R.u)({initialState:!0});return a.createElement("div",{className:(0,u.Z)(te.tocCollapsible,!o&&te.tocCollapsibleExpanded,n)},a.createElement(ee,{collapsed:o,onClick:s}),a.createElement(R.z,{lazy:!0,className:te.tocCollapsibleContent,collapsed:o},a.createElement(K,{toc:t,minHeadingLevel:r,maxHeadingLevel:l})))}const ae={tocMobile:"tocMobile_ITEo"};function re(){const{toc:e,frontMatter:t}=c();return a.createElement(ne,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(v.k.docs.docTocMobile,ae.tocMobile)})}const le={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},oe="table-of-contents__link toc-highlight",se="table-of-contents__link--active";function ce(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,u.Z)(le.tableOfContents,"thin-scrollbar",t)},a.createElement(K,(0,x.Z)({},n,{linkClassName:oe,linkActiveClassName:se})))}function ie(){const{toc:e,frontMatter:t}=c();return a.createElement(ce,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var ue=n(2503),de=n(3905),me=n(1769);function pe(e){let{children:t}=e;return a.createElement(de.Zo,{components:me.Z},t)}function he(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=c();return t.hide_title||void 0!==n?null:e.title}();return a.createElement("div",{className:(0,u.Z)(v.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(ue.Z,{as:"h1"},n)),a.createElement(pe,null,t))}var fe=n(3438),be=n(8596),ge=n(4996);function ve(e){return a.createElement("svg",(0,x.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const Ee={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ye(){const e=(0,ge.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(f.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},a.createElement(ve,{className:Ee.breadcrumbHomeIcon})))}const ke={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function Ne(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(f.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function Ce(e){let{children:t,active:n,index:r,addMicrodata:l}=e;return a.createElement("li",(0,x.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function Le(){const e=(0,fe.s1)(),t=(0,be.Ns)();return e?a.createElement("nav",{className:(0,u.Z)(v.k.docs.docBreadcrumbs,ke.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(ye,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(Ce,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Ne,{href:t.href,isLast:r},t.label))})))):null}const _e={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function Ze(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=c(),n=(0,d.i)(),r=e.hide_table_of_contents,l=!r&&t.length>0;return{hidden:r,mobile:l?a.createElement(re,null):void 0,desktop:!l||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(ie,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,u.Z)("col",!n.hidden&&_e.docItemCol)},a.createElement(_,null),a.createElement("div",{className:_e.docItemContainer},a.createElement("article",null,a.createElement(Le,null),a.createElement(Z,null),n.mobile,a.createElement(he,null,t),a.createElement(D,null)),a.createElement(p,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function we(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(s,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(i,null),a.createElement(Ze,null,a.createElement(n,null))))}},2503:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(6010),o=n(5999),s=n(6668),c=n(9960);const i={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function u(e){let{as:t,id:n,...u}=e;const{navbar:{hideOnScroll:d}}=(0,s.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},u,{id:void 0}));const m=(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof u.children?u.children:n});return r.createElement(t,(0,a.Z)({},u,{className:(0,l.Z)("anchor",d?i.anchorWithHideOnScrollNavbar:i.anchorWithStickyNavbar,u.className),id:n}),u.children,r.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":m,title:m},"\u200b"))}},8614:(e,t,n)=>{"use strict";n.d(t,{Z:()=>ce});var a=n(7462),r=n(7294),l=n(5742);var o=n(2389),s=n(6010),c=n(2949),i=n(6668);function u(){const{prism:e}=(0,i.L)(),{colorMode:t}=(0,c.I)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var d=n(5281),m=n(7594),p=n.n(m);const h=/title=(?<quote>["'])(?<title>.*?)\1/,f=/\{(?<range>[\d,-]+)\}/,b={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function g(e,t){const n=e.map((e=>{const{start:n,end:a}=b[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${a})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function v(e,t){let n=e.replace(/\n$/,"");const{language:a,magicComments:r,metastring:l}=t;if(l&&f.test(l)){const e=l.match(f).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${l}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,a=p()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(a),code:n}}if(void 0===a)return{lineClassNames:{},code:n};const o=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return g(["js","jsBlock"],t);case"jsx":case"tsx":return g(["js","jsBlock","jsx"],t);case"html":return g(["js","jsBlock","html"],t);case"python":case"py":case"bash":return g(["bash"],t);case"markdown":case"md":return g(["html","jsx","bash"],t);default:return g(Object.keys(b),t)}}(a,r),s=n.split("\n"),c=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),d=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let p=0;p<s.length;){const e=s[p].match(o);if(!e){p+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?c[i[t]].range+=`${p},`:u[t]?c[u[t]].start=p:d[t]&&(c[d[t]].range+=`${c[d[t]].start}-${p-1},`),s.splice(p,1)}n=s.join("\n");const m={};return Object.entries(c).forEach((e=>{let[t,{range:n}]=e;p()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}const E={codeBlockContainer:"codeBlockContainer_Ckt0"};function y(e){let{as:t,...n}=e;const l=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[a,r]=e;const l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(u());return r.createElement(t,(0,a.Z)({},n,{style:l,className:(0,s.Z)(n.className,E.codeBlockContainer,d.k.common.codeBlock)}))}const k={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function N(e){let{children:t,className:n}=e;return r.createElement(y,{as:"pre",tabIndex:0,className:(0,s.Z)(k.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:k.codeBlockLines},t))}var C=n(902);const L={attributes:!0,characterData:!0,childList:!0,subtree:!0};function _(e,t){const[n,a]=(0,r.useState)(),l=(0,r.useCallback)((()=>{a(e.current?.closest("[role=tabpanel][hidden]"))}),[e,a]);(0,r.useEffect)((()=>{l()}),[l]),function(e,t,n){void 0===n&&(n=L);const a=(0,C.zX)(t),l=(0,C.Ql)(n);(0,r.useEffect)((()=>{const t=new MutationObserver(a);return e&&t.observe(e,l),()=>t.disconnect()}),[e,a,l])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),l())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const Z={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(7410).Z,theme:Z};function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}var x=/\r\n|\r|\n/,I=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},S=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function A(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var H=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),T(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=B({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=B({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),T(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=B({},A(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?B({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),T(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),T(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=B({},A(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?B({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),T(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=a[o]++)<r[o];){var i=void 0,u=t[o],d=n[o][l];if("string"==typeof d?(u=o>0?u:["plain"],i=d):(u=S(u,d.type),d.alias&&(u=S(u,d.alias)),i=d.content),"string"==typeof i){var m=i.split(x),p=m.length;s.push({types:u,content:m[0]});for(var h=1;h<p;h++)I(s),c.push(s=[]),s.push({types:u,content:m[h]})}else o++,t.push(u),n.push(i),a.push(0),r.push(i.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return I(s),c}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const V=H,j={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function M(e){let{line:t,classNames:n,showLineNumbers:l,getLineProps:o,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=o({line:t,className:(0,s.Z)(n,l&&j.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,a.Z)({key:t},c({token:e,key:t})))));return r.createElement("span",i,l?r.createElement(r.Fragment,null,r.createElement("span",{className:j.codeLineNumber}),r.createElement("span",{className:j.codeLineContent},u)):u,r.createElement("br",null))}var O=n(5999);function U(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function P(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const D={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function R(e){let{code:t,className:n}=e;const[a,l]=(0,r.useState)(!1),o=(0,r.useRef)(void 0),c=(0,r.useCallback)((()=>{!function(e,{target:t=document.body}={}){if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection(),l=r.rangeCount>0&&r.getRangeAt(0);t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}n.remove(),l&&(r.removeAllRanges(),r.addRange(l)),a&&a.focus()}(t),l(!0),o.current=window.setTimeout((()=>{l(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(o.current)),[]),r.createElement("button",{type:"button","aria-label":a?(0,O.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,O.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,D.copyButton,a&&D.copyButtonCopied),onClick:c},r.createElement("span",{className:D.copyButtonIcons,"aria-hidden":"true"},r.createElement(U,{className:D.copyButtonIcon}),r.createElement(P,{className:D.copyButtonSuccessIcon})))}function W(e){return r.createElement("svg",(0,a.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const z={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function $(e){let{className:t,onClick:n,isEnabled:a}=e;const l=(0,O.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,a&&z.wordWrapButtonEnabled),"aria-label":l,title:l},r.createElement(W,{className:z.wordWrapButtonIcon,"aria-hidden":"true"}))}function q(e){let{children:t,className:n="",metastring:l,title:o,showLineNumbers:c,language:d}=e;const{prism:{defaultLanguage:m,magicComments:p}}=(0,i.L)(),f=d??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,b=u(),g=function(){const[e,t]=(0,r.useState)(!1),[n,a]=(0,r.useState)(!1),l=(0,r.useRef)(null),o=(0,r.useCallback)((()=>{const n=l.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[l,e]),s=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=l.current,n=e>t||l.current.querySelector("code").hasAttribute("style");a(n)}),[l]);return _(l,s),(0,r.useEffect)((()=>{s()}),[e,s]),(0,r.useEffect)((()=>(window.addEventListener("resize",s,{passive:!0}),()=>{window.removeEventListener("resize",s)})),[s]),{codeBlockRef:l,isEnabled:e,isCodeScrollable:n,toggle:o}}(),E=function(e){return e?.match(h)?.groups.title??""}(l)||o,{lineClassNames:N,code:C}=v(t,{metastring:l,language:f,magicComments:p}),L=c??function(e){return Boolean(e?.includes("showLineNumbers"))}(l);return r.createElement(y,{as:"div",className:(0,s.Z)(n,f&&!n.includes(`language-${f}`)&&`language-${f}`)},E&&r.createElement("div",{className:k.codeBlockTitle},E),r.createElement("div",{className:k.codeBlockContent},r.createElement(V,(0,a.Z)({},w,{theme:b,code:C,language:f??"text"}),(e=>{let{className:t,tokens:n,getLineProps:a,getTokenProps:l}=e;return r.createElement("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,s.Z)(t,k.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.Z)(k.codeBlockLines,L&&k.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(M,{key:t,line:e,getLineProps:a,getTokenProps:l,classNames:N[t],showLineNumbers:L})))))})),r.createElement("div",{className:k.buttonGroup},(g.isEnabled||g.isCodeScrollable)&&r.createElement($,{className:k.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),r.createElement(R,{className:k.codeButton,code:C}))))}function F(e){let{children:t,...n}=e;const l=(0,o.Z)(),s=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof s?q:N;return r.createElement(c,(0,a.Z)({key:String(l)},n),s)}var G=n(9960);var Y=n(6043);const J={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function X(e){return!!e&&("SUMMARY"===e.tagName||X(e.parentElement))}function K(e,t){return!!e&&(e===t||K(e.parentElement,t))}function Q(e){let{summary:t,children:n,...l}=e;const c=(0,o.Z)(),i=(0,r.useRef)(null),{collapsed:u,setCollapsed:d}=(0,Y.u)({initialState:!l.open}),[m,p]=(0,r.useState)(l.open),h=r.isValidElement(t)?t:r.createElement("summary",null,t??"Details");return r.createElement("details",(0,a.Z)({},l,{ref:i,open:m,"data-collapsed":u,className:(0,s.Z)(J.details,c&&J.isBrowser,l.className),onMouseDown:e=>{X(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;X(t)&&K(t,i.current)&&(e.preventDefault(),u?(d(!1),p(!0)):d(!0))}}),h,r.createElement(Y.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{d(e),p(!e)}},r.createElement("div",{className:J.collapsibleContent},n)))}const ee={details:"details_b_Ee"},te="alert alert--info";function ne(e){let{...t}=e;return r.createElement(Q,(0,a.Z)({},t,{className:(0,s.Z)(te,ee.details,t.className)}))}var ae=n(2503);function re(e){return r.createElement(ae.Z,e)}const le={containsTaskList:"containsTaskList_mC6p"};function oe(e){if(void 0!==e)return(0,s.Z)(e,e?.includes("contains-task-list")&&le.containsTaskList)}const se={img:"img_ev3q"};const ce={head:function(e){const t=r.Children.map(e.children,(e=>r.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return r.createElement(e.props.originalType,a)}return e}(e):e));return r.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props?.mdxType)))?r.createElement("code",e):r.createElement(F,e)},a:function(e){return r.createElement(G.Z,e)},pre:function(e){return r.createElement(F,(0,r.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>r.isValidElement(e)&&"summary"===e.props?.mdxType)),l=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(ne,(0,a.Z)({},e,{summary:n}),l)},ul:function(e){return r.createElement("ul",(0,a.Z)({},e,{className:oe(e.className)}))},img:function(e){return r.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,se.img))}));var t},h1:e=>r.createElement(re,(0,a.Z)({as:"h1"},e)),h2:e=>r.createElement(re,(0,a.Z)({as:"h2"},e)),h3:e=>r.createElement(re,(0,a.Z)({as:"h3"},e)),h4:e=>r.createElement(re,(0,a.Z)({as:"h4"},e)),h5:e=>r.createElement(re,(0,a.Z)({as:"h5"},e)),h6:e=>r.createElement(re,(0,a.Z)({as:"h6"},e)),admonition:n(9130).Z,mermaid:()=>null}},2244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),r=n(6010),l=n(9960);function o(e){const{permalink:t,title:n,subLabel:o,isNext:s}=e;return a.createElement(l.Z,{className:(0,r.Z)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&a.createElement("div",{className:"pagination-nav__sublabel"},o),a.createElement("div",{className:"pagination-nav__label"},n))}},5162:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),s=n(6550),c=n(1980),i=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[c,i]=h({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),b=(()=>{const e=c??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),f(e)}),[i,f,l]),tabValues:l}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==s&&(d(t),c(a))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function E(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(E,(0,a.Z)({},e,t)))}function k(e){const t=(0,b.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},4477:(e,t,n)=>{"use strict";n.d(t,{E:()=>s,q:()=>o});var a=n(7294),r=n(902);const l=a.createContext(null);function o(e){let{children:t,version:n}=e;return a.createElement(l.Provider,{value:n},t)}function s(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:(e,t)=>{function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);