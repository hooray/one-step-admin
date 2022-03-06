
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.6307f162.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{y as a,A as t,C as s,f as d,e as o,r as u,o as i,D as n,I as c,J as m,P as r,R as p}from"./vendor.2ae12b47.js";import"./index.8868c02f.js";const v=e=>(c("data-v-e976b086"),e=e(),m(),e),f=v((()=>n("h2",null,"基本设置",-1))),_=r("保存"),b=v((()=>n("h2",null,"安全设置",-1))),h={class:"setting-list"},g={class:"item"},V=v((()=>n("div",{class:"content"},[n("div",{class:"title"},"账户密码"),n("div",{class:"desc"},"当前密码强度：强")],-1))),x={class:"action"},w=r("修改"),y={class:"item"},q=v((()=>n("div",{class:"content"},[n("div",{class:"title"},"密保手机"),n("div",{class:"desc"},"已绑定手机：187****3441")],-1))),j={class:"action"},U=r("修改"),P={class:"item"},Q=v((()=>n("div",{class:"content"},[n("div",{class:"title"},"备用邮箱"),n("div",{class:"desc"},"当前未绑定备用邮箱")],-1))),k={class:"action"},C=r("绑定"),D=a({name:"PersonalSetting"});var I=l(Object.assign(D,{setup(l){const{proxy:a}=p(),c=t({headimg:"",mobile:"",name:"",qq:"",wechat:""});function m(e){""==e.error?c.value.headimg=e.data.path:a.$message.warning(e.error)}function r(){a.$window.add("PersonalEditPassword")}return(l,a)=>{const t=u("el-input"),p=u("el-form-item"),v=u("el-button"),D=u("el-form"),I=u("el-col"),O=e,S=u("el-row"),$=u("el-tab-pane"),A=u("el-tabs");return i(),s("div",null,[d(A,{"tab-position":"left"},{default:o((()=>[d($,{label:"基本设置",class:"basic"},{default:o((()=>[f,d(S,{gutter:20},{default:o((()=>[d(I,{span:16},{default:o((()=>[d(D,{ref_key:"form",ref:c,model:c.value,"label-width":"120px","label-suffix":"："},{default:o((()=>[d(p,{label:"名 称"},{default:o((()=>[d(t,{modelValue:c.value.name,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value.name=e),placeholder:"请输入你的名称"},null,8,["modelValue"])])),_:1}),d(p,{label:"手机号"},{default:o((()=>[d(t,{modelValue:c.value.mobile,"onUpdate:modelValue":a[1]||(a[1]=e=>c.value.mobile=e),placeholder:"请输入你的手机号"},null,8,["modelValue"])])),_:1}),d(p,{label:"QQ 号"},{default:o((()=>[d(t,{modelValue:c.value.qq,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value.qq=e),placeholder:"请输入你的 QQ 号"},null,8,["modelValue"])])),_:1}),d(p,{label:"微信号"},{default:o((()=>[d(t,{modelValue:c.value.wechat,"onUpdate:modelValue":a[3]||(a[3]=e=>c.value.wechat=e),placeholder:"请输入你的微信号"},null,8,["modelValue"])])),_:1}),d(p,null,{default:o((()=>[d(v,{type:"primary"},{default:o((()=>[_])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),d(I,{span:8},{default:o((()=>[d(O,{url:c.value.headimg,"onUpdate:url":a[4]||(a[4]=e=>c.value.headimg=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKD628431923530324"},notip:"",class:"headimg-upload",onOnSuccess:m},null,8,["url"])])),_:1})])),_:1})])),_:1}),d($,{label:"安全设置",class:"security"},{default:o((()=>[b,n("div",h,[n("div",g,[V,n("div",x,[d(v,{type:"text",onClick:r},{default:o((()=>[w])),_:1})])]),n("div",y,[q,n("div",j,[d(v,{type:"text"},{default:o((()=>[U])),_:1})])]),n("div",P,[Q,n("div",k,[d(v,{type:"text"},{default:o((()=>[C])),_:1})])])])])),_:1})])),_:1})])}}}),[["__scopeId","data-v-e976b086"]]);export{I as default};
