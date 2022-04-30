
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,d=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o,r=(e,a)=>{for(var l in a||(a={}))s.call(a,l)&&d(e,l,a[l]);if(o)for(var l of o(a))n.call(a,l)&&d(e,l,a[l]);return e},i=(e,o)=>a(e,l(o));import{I as t,X as u,ao as c,Y as b,r as p,N as m,C as f,d as v,J as y,a2 as g,z as h,o as V,c as x,a as w,a1 as k,h as S,bp as R,H as G,y as I,t as j,x as z,q as B,ab as K,f as O,K as C,$ as P,a0 as E,Z as N,aw as _,L as A,ad as $}from"./index.b046d3e8.js";import{b as q,u as U,c as D}from"./index.2b0c4341.js";import{U as F}from"./event.e7ca8317.js";import{u as H}from"./index.16ef6f7e.js";import{d as J}from"./error.76088f19.js";const L=Symbol("radioGroupKey"),T=t({size:q,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),X=t(i(r({},T),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),Y={[F]:e=>u(e)||c(e)||b(e),change:e=>u(e)||c(e)||b(e)},Z=(e,a)=>{const l=p(),o=m(L,void 0),s=f((()=>!!o)),n=f({get:()=>s.value?o.modelValue:e.modelValue,set(n){s.value?o.changeEvent(n):a(F,n),l.value.checked=e.modelValue===e.label}}),d=U(f((()=>null==o?void 0:o.size))),r=D(f((()=>null==o?void 0:o.disabled))),i=p(!1),t=f((()=>r.value||s.value&&n.value!==e.label?-1:0));return{radioRef:l,isGroup:s,radioGroup:o,focus:i,size:d,disabled:r,tabIndex:t,modelValue:n}},M=v({name:"ElRadio",props:X,emits:Y,setup(e,{emit:a}){const l=y("radio"),{radioRef:o,isGroup:s,focus:n,size:d,disabled:r,tabIndex:i,modelValue:t}=Z(e,a);return{ns:l,focus:n,isGroup:s,modelValue:t,tabIndex:i,size:d,disabled:r,radioRef:o,handleChange:function(){h((()=>a("change",t.value)))}}}}),Q=["aria-checked","aria-disabled","tabindex"],W=["value","name","disabled"];var ee=g(M,[["render",function(e,a,l,o,s,n){return V(),x("label",{class:k([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[5]||(a[5]=B(z((a=>e.modelValue=e.disabled?e.modelValue:e.label),["stop","prevent"]),["space"]))},[w("span",{class:k([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[w("span",{class:k(e.ns.e("inner"))},null,2),S(w("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=a=>e.modelValue=a),class:k(e.ns.e("original")),value:e.label,type:"radio","aria-hidden":"true",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=a=>e.focus=!0),onBlur:a[2]||(a[2]=a=>e.focus=!1),onChange:a[3]||(a[3]=(...a)=>e.handleChange&&e.handleChange(...a))},null,42,W),[[R,e.modelValue]])],2),w("span",{class:k(e.ns.e("label")),onKeydown:a[4]||(a[4]=z((()=>{}),["stop"]))},[G(e.$slots,"default",{},(()=>[I(j(e.label),1)]))],34)],42,Q)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ae=v({name:"ElRadioButton",props:t(i(r({},T),{name:{type:String,default:""}})),setup(e,{emit:a}){const l=y("radio"),{radioRef:o,isGroup:s,focus:n,size:d,disabled:r,tabIndex:i,modelValue:t,radioGroup:u}=Z(e,a);return{ns:l,isGroup:s,size:d,disabled:r,tabIndex:i,modelValue:t,focus:n,activeStyle:f((()=>({backgroundColor:(null==u?void 0:u.fill)||"",borderColor:(null==u?void 0:u.fill)||"",boxShadow:(null==u?void 0:u.fill)?`-1px 0 0 0 ${u.fill}`:"",color:(null==u?void 0:u.textColor)||""}))),radioRef:o}}}),le=["aria-checked","aria-disabled","tabindex"],oe=["value","name","disabled"];var se=g(ae,[["render",function(e,a,l,o,s,n){return V(),x("label",{class:k([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=B(z((a=>e.modelValue=e.disabled?e.modelValue:e.label),["stop","prevent"]),["space"]))},[S(w("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=a=>e.modelValue=a),class:k(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=a=>e.focus=!0),onBlur:a[2]||(a[2]=a=>e.focus=!1)},null,42,oe),[[R,e.modelValue]]),w("span",{class:k(e.ns.be("button","inner")),style:K(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=z((()=>{}),["stop"]))},[G(e.$slots,"default",{},(()=>[I(j(e.label),1)]))],38)],42,le)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);var ne=g(v({name:"ElRadioGroup",props:t({size:q,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},textColor:{type:String,default:""}}),emits:Y,setup(e,a){const l=y("radio"),o=p(),{formItem:s}=H();return O((()=>{const e=o.value.querySelectorAll("[type=radio]"),a=e[0];!Array.from(e).some((e=>e.checked))&&a&&(a.tabIndex=0)})),C(L,P(i(r({},E(e)),{changeEvent:e=>{a.emit(F,e),h((()=>a.emit("change",e)))}}))),N((()=>e.modelValue),(()=>null==s?void 0:s.validate("change").catch((e=>J())))),{ns:l,radioGroupRef:o,handleKeydown:e=>{if(!o.value)return;const a=e.target,l="INPUT"===a.nodeName?"[type=radio]":"[role=radio]",s=o.value.querySelectorAll(l),n=s.length,d=Array.from(s).indexOf(a),r=o.value.querySelectorAll("[role=radio]");let i=null;switch(e.code){case _.left:case _.up:e.stopPropagation(),e.preventDefault(),i=0===d?n-1:d-1;break;case _.right:case _.down:e.stopPropagation(),e.preventDefault(),i=d===n-1?0:d+1}null!==i&&(r[i].click(),r[i].focus())}}}}),[["render",function(e,a,l,o,s,n){return V(),x("div",{ref:"radioGroupRef",class:k(e.ns.b("group")),role:"radiogroup",onKeydown:a[0]||(a[0]=(...a)=>e.handleKeydown&&e.handleKeydown(...a))},[G(e.$slots,"default")],34)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const de=A(ee,{RadioButton:se,RadioGroup:ne}),re=$(ne),ie=$(se);export{ie as E,re as a,de as b};