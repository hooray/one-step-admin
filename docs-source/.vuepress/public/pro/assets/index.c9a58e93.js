
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as r}from"./index.2ac40c50.js";import{_ as p}from"./index.f02e00aa.js";import{_ as m}from"./index.0947c737.js";import{x as l,j as d,A as t,z as n,o as u,_ as i}from"./vendor.6c58eadc.js";const f={methods:{getPermission(){this.$store.dispatch("user/getPermissions").then(e=>{this.$notify({title:"\u5F53\u524D\u7528\u6237\u6743\u9650",dangerouslyUseHTMLString:!0,message:e.map(o=>`<p>${o}</p>`).join("")})})},open(e){window.open(e,"top")}}},k=i("Mock.js \u5B98\u7F51"),x=i("\u6D4B\u8BD5\uFF1A\u83B7\u53D6\u7528\u6237\u6743\u9650");function g(e,o,h,j,$,s){const c=l("el-button"),_=p,a=r;return u(),d("div",null,[t(_,{title:"Mock",content:"\u901A\u8FC7\u62E6\u622A Ajax \u8BF7\u6C42\uFF0C\u8FD4\u56DE\u6A21\u62DF\u7684\u54CD\u5E94\u6570\u636E\uFF0C\u53EF\u4EE5\u8BA9\u524D\u7AEF\u5DE5\u7A0B\u5E08\u72EC\u7ACB\u4E8E\u540E\u7AEF\u8FDB\u884C\u5F00\u53D1\uFF0C\u672C\u6F14\u793A\u7AD9\u7684\u767B\u5F55\u548C\u6743\u9650\u83B7\u53D6\u5C31\u662F\u901A\u8FC7 mock \u5B9E\u73B0\u7684\u3002\u66F4\u591A Mock \u8BED\u6CD5\u89C4\u5219\u8BF7\u67E5\u8BE2\u5B98\u65B9\u6587\u6863"},{default:n(()=>[t(c,{icon:"el-icon-link",onClick:o[0]||(o[0]=v=>s.open("http://mockjs.com/"))},{default:n(()=>[k]),_:1})]),_:1}),t(a,null,{default:n(()=>[t(c,{onClick:s.getPermission},{default:n(()=>[x]),_:1},8,["onClick"])]),_:1})])}var b=m(f,[["render",g]]);export{b as default};
