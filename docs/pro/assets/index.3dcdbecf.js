
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
var F=Object.defineProperty,M=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var g=(t,e,o)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,x=(t,e)=>{for(var o in e||(e={}))T.call(e,o)&&g(t,o,e[o]);if(k)for(var o of k(e))U.call(e,o)&&g(t,o,e[o]);return t},b=(t,e)=>M(t,S(e));import _ from"./index.641ae710.js";import{_ as z}from"./plugin-vue_export-helper.5a098b48.js";import{h as C,r as f,I as D,i as w,j as s,k as u,ae as h,M as E,o as y,l as r,ad as B,J,T as c,m as P}from"./vendor.6b4522dc.js";const R=c("\u53D6 \u6D88"),$=c("\u786E \u5B9A"),q={class:"buttons"},A=c("\u53D6 \u6D88"),G=c("\u786E \u5B9A"),H={props:b(x({},_.props),{modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:t=>["dialog","drawer"].includes(t)}}),emits:["update:modelValue","success"],setup(t,{emit:e}){const o=t,{proxy:j}=P();let l=C({get:function(){return o.modelValue},set:function(d){e("update:modelValue",d)}});const V=C(()=>o.id==""?"\u65B0\u589E\u804C\u4F4D":"\u7F16\u8F91\u804C\u4F4D");function v(){j.$refs.form.submit(()=>{e("success"),m()})}function m(){l.value=!1}return(d,n)=>{const i=f("el-button"),N=f("el-dialog"),I=f("el-drawer");return y(),D("div",null,[o.mode==="dialog"?(y(),w(N,{key:0,modelValue:u(l),"onUpdate:modelValue":n[0]||(n[0]=a=>h(l)?l.value=a:l=a),title:u(V),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:s(()=>[r(i,{onClick:m},{default:s(()=>[R]),_:1}),r(i,{type:"primary",onClick:v},{default:s(()=>[$]),_:1})]),default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props),null,16)]),_:1},8,["modelValue","title"])):o.mode==="drawer"?(y(),w(I,{key:1,modelValue:u(l),"onUpdate:modelValue":n[1]||(n[1]=a=>h(l)?l.value=a:l=a),title:u(V),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:s(()=>[r(_,B({ref:(a,p)=>{p.form=a}},d.$props,{class:"form-container"}),null,16),J("div",q,[r(i,{onClick:m},{default:s(()=>[A]),_:1}),r(i,{type:"primary",onClick:v},{default:s(()=>[G]),_:1})])]),_:1},8,["modelValue","title"])):E("v-if",!0)])}}};var W=z(H,[["__scopeId","data-v-030a53ac"]]);export{W as default};
