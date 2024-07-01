(()=>{"use strict";var e,t={93:()=>{const e=window.wp.blocks,t=window.React,n=window.wp.i18n,r=window.wp.blockEditor,o=window.wp.components,a=JSON.parse('{"UU":"create-block/wp-ai-plugin"}');(0,e.registerBlockType)(a.UU,{edit:function({attributes:e,setAttributes:a}){const{backgroundImage:l,backgroundColor:i,title:c,description:u,ctaText:g,ctaUrl:p}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,n.__)("Background Image Settings","wp-ai-plugin")},(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(r.MediaUpload,{onSelect:e=>{a({backgroundImage:e.url})},allowedTypes:["image"],value:l,render:({open:e})=>(0,t.createElement)(o.Button,{onClick:e},l?(0,n.__)("Change Image","wp-ai-plugin"):(0,n.__)("Select Image","wp-ai-plugin"))})),(0,t.createElement)(o.PanelRow,null,(0,t.createElement)(r.ColorPalette,{value:i,onChange:e=>{a({backgroundColor:e})}})))),(0,t.createElement)("div",{...(0,r.useBlockProps)(),style:{backgroundImage:`url(${l})`,backgroundColor:i,backgroundSize:"cover",backgroundPosition:"center",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexDirection:"column",textAlign:"center"}},(0,t.createElement)(r.RichText,{tagName:"h2",value:c,onChange:e=>{a({title:e})},placeholder:(0,n.__)("Title","wp-ai-plugin"),style:{marginBottom:"1rem"}}),(0,t.createElement)(r.RichText,{tagName:"p",value:u,onChange:e=>{a({description:e})},placeholder:(0,n.__)("Description","wp-ai-plugin"),style:{marginBottom:"1rem"}}),(0,t.createElement)(o.TextControl,{label:(0,n.__)("Button Text","wp-ai-plugin"),value:g,onChange:e=>{a({ctaText:e})},style:{marginBottom:"1rem"}}),(0,t.createElement)(r.URLInputButton,{url:p,onChange:e=>{a({ctaUrl:e})}})))},save:function({attributes:e}){const{backgroundImage:n,backgroundColor:o,title:a,description:l,ctaText:i,ctaUrl:c}=e;return(0,t.createElement)("div",{...r.useBlockProps.save(),style:{backgroundImage:`url(${n})`,backgroundColor:o,backgroundSize:"cover",backgroundPosition:"center",height:"300px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexDirection:"column",textAlign:"center"}},(0,t.createElement)(RichText.Content,{tagName:"h2",value:a,style:{marginBottom:"1rem"}}),(0,t.createElement)(RichText.Content,{tagName:"p",value:l,style:{marginBottom:"1rem"}}),(0,t.createElement)("a",{href:c,style:{display:"inline-block",padding:"0.5rem 1rem",backgroundColor:"#007cba",color:"#fff",textDecoration:"none",borderRadius:"4px"}},i))}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(g=0;g<e.length;g++){for(var[n,o,a]=e[g],i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(g--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[n,o,a]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,i,c]=n,u=0;if(l.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var g=c(r)}for(t&&t(n);u<l.length;u++)a=l[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(g)},n=globalThis.webpackChunkwp_ai_plugin=globalThis.webpackChunkwp_ai_plugin||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[350],(()=>r(93)));o=r.O(o)})();