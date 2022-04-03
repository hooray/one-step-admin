
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.64b0a20f.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{m as t,n as l,c as i,e as a,f as r,b as c,t as d,i as n,P as o,x as u}from"./index.8b6d4e84.js";import{_ as f}from"./index.246b70e5.js";const p={class:"result"},v={key:0,class:"icon icon-success"},y={key:1,class:"icon icon-warning"},_={key:2,class:"icon icon-error"},m={key:3,class:"desc"},x={key:4,class:"extra"},g={key:5,class:"actions"};var b=s({props:{type:{type:String,validator:e=>["success","warning","error"].includes(e),required:!0},title:{type:String,required:!0},desc:{type:String,default:""}},setup:e=>(s,u)=>{const f=t("el-icon-success-filled"),b=t("el-icon"),k=t("el-icon-warning-filled"),j=t("el-icon-circle-close-filled");return l(),i("div",p,["success"===e.type?(l(),i("div",v,[a(b,null,{default:r((()=>[a(f)])),_:1})])):"warning"===e.type?(l(),i("div",y,[a(b,null,{default:r((()=>[a(k)])),_:1})])):(l(),i("div",_,[a(b,null,{default:r((()=>[a(j)])),_:1})])),c("h1",null,d(e.title),1),e.desc?(l(),i("div",m,d(e.desc),1)):n("v-if",!0),s.$slots.extra?(l(),i("div",x,[o(s.$slots,"extra",{},void 0,!0)])):n("v-if",!0),s.$slots.default?(l(),i("div",g,[o(s.$slots,"default",{},void 0,!0)])):n("v-if",!0)])}},[["__scopeId","data-v-cef7b02c"]]);const k={},j=u("返回列表"),w=u("打印"),$=c("div",null,"您提交的内容有如下错误：",-1),h=c("div",null,[u(" 您的账户已被冻结 "),c("a",{href:"###"},"打印")],-1),S=u("返回修改");var q=s(k,[["render",function(s,c){const d=f,n=t("el-button"),o=b,u=e;return l(),i("div",null,[a(d,{title:"处理结果",content:"Result"}),a(u,{title:"成功"},{default:r((()=>[a(o,{type:"success",title:"提交成功",desc:"提交结果页用于反馈一系列操作任务的处理结果。"},{default:r((()=>[a(n,{type:"primary"},{default:r((()=>[j])),_:1}),a(n,null,{default:r((()=>[w])),_:1})])),_:1})])),_:1}),a(u,{title:"失败"},{default:r((()=>[a(o,{type:"error",title:"提交失败",desc:"灰色额外区域可以显示一些补充的信息。请核对并修改以下信息后，再重新提交。"},{extra:r((()=>[$,h])),default:r((()=>[a(n,{type:"primary"},{default:r((()=>[S])),_:1})])),_:1})])),_:1})])}]]);export{q as default};
