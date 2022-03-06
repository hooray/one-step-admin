
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.fef54795.js";import{_ as l}from"./index.b11652ae.js";import{_ as a}from"./index.8d8a4cfe.js";import{k as o,A as d,x as t,z as m,o as u,$ as r}from"./vendor.b0dde714.js";const f={data:()=>({form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}})},n=r("-"),p=r("立即创建"),i=r("取消");var s=a(f,[["render",function(a,r,f,s,c,V){const _=l,b=m("el-input"),y=m("el-form-item"),h=m("el-option"),x=m("el-select"),v=m("el-date-picker"),U=m("el-col"),g=m("el-time-picker"),j=m("el-switch"),k=m("el-checkbox"),w=m("el-checkbox-group"),z=m("el-radio"),A=m("el-radio-group"),$=m("el-button"),q=m("el-form"),B=m("el-row"),C=e;return u(),o("div",null,[d(_,{title:"基础表单",content:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。表单域标签也可支持响应式。"}),d(C,null,{default:t((()=>[d(B,{type:"flex",justify:"center"},{default:t((()=>[d(U,{md:12,sm:18},{default:t((()=>[d(q,{model:c.form,"label-width":"80px"},{default:t((()=>[d(y,{label:"活动名称"},{default:t((()=>[d(b,{modelValue:c.form.name,"onUpdate:modelValue":r[0]||(r[0]=e=>c.form.name=e)},null,8,["modelValue"])])),_:1}),d(y,{label:"活动区域"},{default:t((()=>[d(x,{modelValue:c.form.region,"onUpdate:modelValue":r[1]||(r[1]=e=>c.form.region=e),placeholder:"请选择活动区域"},{default:t((()=>[d(h,{label:"区域一",value:"shanghai"}),d(h,{label:"区域二",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),d(y,{label:"活动时间"},{default:t((()=>[d(U,{span:11},{default:t((()=>[d(v,{modelValue:c.form.date1,"onUpdate:modelValue":r[2]||(r[2]=e=>c.form.date1=e),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),d(U,{class:"line",span:2},{default:t((()=>[n])),_:1}),d(U,{span:11},{default:t((()=>[d(g,{modelValue:c.form.date2,"onUpdate:modelValue":r[3]||(r[3]=e=>c.form.date2=e),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),d(y,{label:"即时配送"},{default:t((()=>[d(j,{modelValue:c.form.delivery,"onUpdate:modelValue":r[4]||(r[4]=e=>c.form.delivery=e)},null,8,["modelValue"])])),_:1}),d(y,{label:"活动性质"},{default:t((()=>[d(w,{modelValue:c.form.type,"onUpdate:modelValue":r[5]||(r[5]=e=>c.form.type=e)},{default:t((()=>[d(k,{label:"美食/餐厅线上活动",name:"type"}),d(k,{label:"地推活动",name:"type"}),d(k,{label:"线下主题活动",name:"type"}),d(k,{label:"单纯品牌曝光",name:"type"})])),_:1},8,["modelValue"])])),_:1}),d(y,{label:"特殊资源"},{default:t((()=>[d(A,{modelValue:c.form.resource,"onUpdate:modelValue":r[6]||(r[6]=e=>c.form.resource=e)},{default:t((()=>[d(z,{label:"线上品牌商赞助"}),d(z,{label:"线下场地免费"})])),_:1},8,["modelValue"])])),_:1}),d(y,{label:"活动形式"},{default:t((()=>[d(b,{modelValue:c.form.desc,"onUpdate:modelValue":r[7]||(r[7]=e=>c.form.desc=e),type:"textarea"},null,8,["modelValue"])])),_:1}),d(y,null,{default:t((()=>[d($,{type:"primary"},{default:t((()=>[p])),_:1}),d($,null,{default:t((()=>[i])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])),_:1})])),_:1})])}]]);export{s as default};
