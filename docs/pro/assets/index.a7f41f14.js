
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as m}from"./index.836a9402.js";import{_ as u}from"./index.4e4aa5c1.js";import{a as d}from"./index.9d0f40da.js";import{x as f,k,A as t,z as n,o as g,$ as c,C as x}from"./vendor.4acdc30d.js";const j=c("Mock.js \u5B98\u7F51"),C=c("\u6D4B\u8BD5\uFF1A\u83B7\u53D6\u7528\u6237\u6743\u9650"),S={setup(h){const{proxy:a}=x(),i=d();function r(){i.getPermissions().then(e=>{a.$notify({title:"\u5F53\u524D\u7528\u6237\u6743\u9650",dangerouslyUseHTMLString:!0,message:e.map(o=>`<p>${o}</p>`).join("")})})}function _(e){window.open(e,"top")}return(e,o)=>{const s=f("el-button"),p=u,l=m;return g(),k("div",null,[t(p,{title:"Mock",content:"\u901A\u8FC7\u62E6\u622A Ajax \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u6A21\u62DF\u7684\u54CD\u5E94\u6570\u636E\uFF0C\u53EF\u4EE5\u8BA9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u672C\u6F14\u793A\u7AD9\u7684\u767B\u5F55\u548C\u6743\u9650\u83B7\u53D6\u5C31\u662F\u901A\u8FC7 mock \u5B9E\u73B0\u7684\u3002\u66F4\u591A Mock \u8BED\u6CD5\u89C4\u5219\u8BF7\u67E5\u8BE2\u5B98\u65B9\u6587\u6863"},{default:n(()=>[t(s,{icon:"el-icon-link",onClick:o[0]||(o[0]=v=>_("http://mockjs.com/"))},{default:n(()=>[j]),_:1})]),_:1}),t(l,null,{default:n(()=>[t(s,{onClick:r},{default:n(()=>[C]),_:1})]),_:1})])}}};export{S as default};
