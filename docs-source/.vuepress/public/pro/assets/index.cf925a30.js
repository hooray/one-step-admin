
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,B as a,m as t,n as l,c as s,b as n,w as d,g as c,V as i,t as o,i as r,E as u,y as h}from"./index.25647206.js";const g={class:"batch-action-bar"},m=h("当页全选"),f={key:0,class:"tips"};var p=e({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:h}){const p=e,b=a({get:function(){let e=!1;return 0!=p.data.length&&p.data.length==p.selectionData.length&&(e=!0),e},set:function(e){h(e?"check-all":"check-null")}}),v=a((()=>{let e=!1;return p.selectionData.length>0&&p.selectionData.length<p.data.length&&(e=!0),e}));return(a,h)=>{const p=t("el-checkbox"),D=t("el-form");return l(),s("div",g,[n(p,{modelValue:c(b),"onUpdate:modelValue":h[0]||(h[0]=e=>i(b)?b.value=e:null),indeterminate:c(v),disabled:!e.data.length},{default:d((()=>[m])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(l(),s("div",f,"已选 "+o(e.selectionData.length)+" 项",1)):r("v-if",!0),n(D,{disabled:!e.selectionData.length},{default:d((()=>[u(a.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);export{p as _};