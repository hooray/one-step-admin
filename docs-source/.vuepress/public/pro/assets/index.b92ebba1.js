
/**
 * 由 Fantastic-admin 提供技术支持
 * https://hooray.gitee.io/fantastic-admin/
 * Powered by Fantastic-admin
 * https://hooray.github.io/fantastic-admin/
 */
    
import{_ as c}from"./plugin-vue_export-helper.5a098b48.js";import{a2 as i,o as a,G as s,O as r,K as l,X as p,S as u,T as d,L as _,M as f,H as v}from"./vendor.e2abc40b.js";const h=e=>(_("data-v-6a4cf472"),e=e(),f(),e),m={key:0,class:"title-container"},g=h(()=>v("i",{class:"el-icon-arrow-down"},null,-1)),y=[g],S={props:{title:{type:String,default:""},collaspe:{type:Boolean,default:!1},height:{type:String,default:""}},setup(e){const t=i(e.collaspe);function o(){t.value=!1}return(n,x)=>(a(),s("div",{class:u({"page-main":!0,"is-collaspe":t.value}),style:d({height:t.value?e.height:""})},[e.title?(a(),s("div",m,r(e.title),1)):l("v-if",!0),p(n.$slots,"default",{},void 0,!0),t.value?(a(),s("div",{key:1,class:"collaspe",title:"\u5C55\u5F00",onClick:o},y)):l("v-if",!0)],6))}};var I=c(S,[["__scopeId","data-v-6a4cf472"]]);export{I as _};
