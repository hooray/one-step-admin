
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_}from"./index.1ee8d9f4.js";import{_ as i}from"./index.e01cfd04.js";import{_ as l}from"./plugin-vue_export-helper.5a098b48.js";import{r as d,I as m,l as e,j as t,o as p,J as u,Q as f,T as s}from"./vendor.6b4522dc.js";const g={methods:{change(){this.$store.commit("menuBadge/setText",this.$store.state.menuBadge.text=="\u70ED\u95E8"?"\u4FC3\u9500":"\u70ED\u95E8")},clear(){this.$store.commit("menuBadge/setText")}}},x=s("\u5207\u6362"),h=s("\u6E05\u7A7A");function B(a,k,v,C,$,o){const c=i,n=d("el-button"),r=_;return p(),m("div",null,[e(c,{title:"\u6587\u5B57\u6807\u8BB0",content:"\u642D\u914D Vuex \u53EF\u5B9E\u73B0\u52A8\u6001\u8BBE\u7F6E\u3002\u8BF7\u63A7\u5236\u6587\u5B57\u5C55\u793A\u957F\u5EA6\uFF0C\u907F\u514D\u5BFC\u822A\u6807\u8BB0\u8986\u76D6\u5BFC\u822A\u6807\u9898"}),e(r,null,{default:t(()=>[u("div",null,"\u5F53\u524D badge \u503C\uFF1A'"+f(a.$store.state.menuBadge.text)+"'",1),e(n,{onClick:o.change},{default:t(()=>[x]),_:1},8,["onClick"]),e(n,{onClick:o.clear},{default:t(()=>[h]),_:1},8,["onClick"])]),_:1})])}var N=l(g,[["render",B]]);export{N as default};
