
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as v}from"./index.7fb28950.js";import{a1 as h,a2 as g,r as y,o as e,i,j as u,I as n,J as m,l as d,M as a,U as l,Y as r,X as c,k,Q as j,a3 as $}from"./vendor.6b4522dc.js";import b from"./index.e3965937.js";import w from"./index.5d0efe54.js";import C from"./index.217421a8.js";import{_ as M}from"./plugin-vue_export-helper.5a098b48.js";import"./logo.96f1da49.js";import"./index.5a6fd50d.js";import"./index.bdb509c0.js";import"./index.fe95d298.js";const S={key:0},B={class:"header-container"},I={class:"main"},N=["onClick"],V={key:1},x=h({name:"Header"});function z(L){const _=g("switchMenu");return(s,U)=>{const p=v,f=y("el-menu");return e(),i($,{name:"header"},{default:u(()=>[["head","only-head"].includes(s.$store.state.settings.menuMode)?(e(),n("header",S,[m("div",B,[m("div",I,[d(b),a(" \u9876\u90E8\u6A21\u5F0F "),s.$store.state.settings.menuMode==="head"?(e(),n("div",{key:0,class:l(["nav",{"nav-radius":s.$store.state.settings.menuStyle==="radius","nav-arrow":s.$store.state.settings.menuStyle==="arrow"}])},[(e(!0),n(r,null,c(s.$store.getters["menu/menus"],(t,o)=>(e(),n(r,{key:o},[t.children&&t.children.length!==0?(e(),n("div",{key:0,class:l(["item",{active:o==s.$store.state.menu.headerActived}]),onClick:A=>k(_)(o)},[t.icon?(e(),i(p,{key:0,name:t.icon,class:"icon"},null,8,["name"])):a("v-if",!0),t.title?(e(),n("span",V,j(t.title),1)):a("v-if",!0)],10,N)):a("v-if",!0)],64))),128))],2)):s.$store.state.settings.menuMode==="only-head"?(e(),n(r,{key:1},[a(" \u9876\u90E8\u7CBE\u7B80\u6A21\u5F0F "),d(f,{mode:"horizontal",class:l(["el-menu-nav",{"el-menu-nav-radius":s.$store.state.settings.menuStyle==="radius","el-menu-nav-arrow":s.$store.state.settings.menuStyle==="arrow"}])},{default:u(()=>[(e(!0),n(r,null,c(s.$store.getters["menu/menus"],(t,o)=>(e(),i(C,{key:o,item:t},null,8,["item"]))),128))]),_:1},8,["class"])],2112)):a("v-if",!0)]),d(w)])])):a("v-if",!0)]),_:1})}}const H=Object.assign(x,{setup:z});var G=M(H,[["__scopeId","data-v-0b6d4faf"]]);export{G as default};
