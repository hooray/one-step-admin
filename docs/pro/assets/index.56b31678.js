
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as n}from"./index.84a18d1d.js";import{_ as e}from"./index.c51a8d86.js";import{ae as t,c as s,b as a,w as i,m as o,n as u,e as l,t as r,g as c,y as d}from"./index.93ad63e3.js";const m=d("1"),f=d("1"),b={setup(d){const b=t();function p(){b.setNumber(b.number+1)}function _(){b.setNumber(b.number-1)}return(t,d)=>{const x=e,j=o("el-button"),g=n;return u(),s("div",null,[a(x,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),a(g,null,{default:i((()=>[l("div",null,"当前 badge 值："+r(c(b).number),1),a(j,{icon:"el-icon-plus",onClick:p},{default:i((()=>[m])),_:1}),a(j,{icon:"el-icon-minus",onClick:_},{default:i((()=>[f])),_:1})])),_:1})])}}};export{b as default};
