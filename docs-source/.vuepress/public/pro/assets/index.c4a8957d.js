
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.538e7de7.js";import{_ as a}from"./index.bc6ef411.js";import{u as t,B as l,c as n,b as o,w as r,m as s,n as u,g as d,V as i,y as m}from"./index.25647206.js";const p=m("开启"),c=m("关闭"),f={setup(m){const f=t(),b=l({get:function(){return f.app.enableWatermark},set:function(e){f.$patch((a=>{a.app.enableWatermark=e}))}});return(t,l)=>{const m=a,f=s("el-radio-button"),_=s("el-radio-group"),x=e;return u(),n("div",null,[o(m,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),o(x,{title:"可在 src\\layout\\components\\Watermark\\index.vue 文件里定制水印文案内容"},{default:r((()=>[o(_,{modelValue:d(b),"onUpdate:modelValue":l[0]||(l[0]=e=>i(b)?b.value=e:null)},{default:r((()=>[o(f,{label:!0},{default:r((()=>[p])),_:1}),o(f,{label:!1},{default:r((()=>[c])),_:1})])),_:1},8,["modelValue"])])),_:1})])}}};export{f as default};
