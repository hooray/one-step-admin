
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,s,o)=>s in a?e(a,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[s]=o;import{I as r,V as c,d as i,J as p,C as u,o as f,c as b,a as d,H as g,a1 as m,i as y,j as k,w as v,g as j,bg as O,E as h,k as w,ab as C,ac as E,a2 as P,L as S}from"./index.b046d3e8.js";import{u as _}from"./index.2b0c4341.js";const B=r({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:c,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),x={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},T=i(($=((e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(o)for(var s of o(a))l.call(a,s)&&n(e,s,a[s]);return e})({},{name:"ElTag"}),a($,s({props:B,emits:x,setup(e,{emit:a}){const s=e,o=_(),t=p("tag"),l=u((()=>{const{type:e,hit:a,effect:l,closable:n,round:r}=s;return[t.b(),t.is("closable",n),t.m(e),t.m(o.value),t.m(l),t.is("hit",a),t.is("round",r)]})),n=e=>{e.stopPropagation(),a("close",e)},r=e=>{a("click",e)};return(e,a)=>e.disableTransitions?(f(),k(E,{key:1,name:`${y(t).namespace.value}-zoom-in-center`},{default:v((()=>[d("span",{class:m(y(l)),style:C({backgroundColor:e.color}),onClick:r},[d("span",{class:m(y(t).e("content"))},[g(e.$slots,"default")],2),e.closable?(f(),k(y(h),{key:0,class:m(y(t).e("close")),onClick:n},{default:v((()=>[j(y(O))])),_:1},8,["class"])):w("v-if",!0)],6)])),_:3},8,["name"])):(f(),b("span",{key:0,class:m(y(l)),style:C({backgroundColor:e.color}),onClick:r},[d("span",{class:m(y(t).e("content"))},[g(e.$slots,"default")],2),e.closable?(f(),k(y(h),{key:0,class:m(y(t).e("close")),onClick:n},{default:v((()=>[j(y(O))])),_:1},8,["class"])):w("v-if",!0)],6))}}))));var $;const z=S(P(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]));export{z as E,B as t};
