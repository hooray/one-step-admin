
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as d}from"./index.d1de62ee.js";import{_ as p}from"./index.f4b69430.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,y as a,D as e,F as t,o as _}from"./vendor.6c9a0b3d.js";const V={data(){return{num:1,num2:1,num3:5,num4:1,num5:1}}};function f(x,l,c,b,n,g){const s=p,m=i("el-input-number"),u=d;return _(),a("div",null,[e(s),e(u,{title:"\u57FA\u7840\u7528\u6CD5",class:"demo"},{default:t(()=>[e(m,{modelValue:n.num,"onUpdate:modelValue":l[0]||(l[0]=o=>n.num=o),min:1,max:10,label:"\u63CF\u8FF0\u6587\u5B57"},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7981\u7528\u72B6\u6001",class:"demo"},{default:t(()=>[e(m,{modelValue:n.num2,"onUpdate:modelValue":l[1]||(l[1]=o=>n.num2=o),disabled:!0},null,8,["modelValue"])]),_:1}),e(u,{title:"\u6B65\u6570",class:"demo"},{default:t(()=>[e(m,{modelValue:n.num3,"onUpdate:modelValue":l[2]||(l[2]=o=>n.num3=o),step:2},null,8,["modelValue"])]),_:1}),e(u,{title:"\u7CBE\u5EA6",class:"demo"},{default:t(()=>[e(m,{modelValue:n.num4,"onUpdate:modelValue":l[3]||(l[3]=o=>n.num4=o),precision:2,step:.1,max:10},null,8,["modelValue","step"])]),_:1}),e(u,{title:"\u6309\u94AE\u4F4D\u7F6E",class:"demo"},{default:t(()=>[e(m,{modelValue:n.num5,"onUpdate:modelValue":l[4]||(l[4]=o=>n.num5=o),"controls-position":"right",min:1,max:10},null,8,["modelValue"])]),_:1})])}var C=r(V,[["render",f]]);export{C as default};