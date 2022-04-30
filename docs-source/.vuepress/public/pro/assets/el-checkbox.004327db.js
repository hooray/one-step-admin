
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,l,n)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[l]=n,t=(e,a)=>{for(var l in a||(a={}))o.call(a,l)&&i(e,l,a[l]);if(n)for(var l of n(a))s.call(a,l)&&i(e,l,a[l]);return e};import{N as r,C as d,r as u,ak as c,Z as b,B as m,d as h,J as p,a2 as v,o as f,c as k,a as g,a1 as x,h as y,al as C,H as S,G as L,y as B,t as z,k as G,ab as D,K as j,a0 as E,am as N,z as V,L as O,ad as F}from"./index.b046d3e8.js";import{f as w,a as A,u as $}from"./index.2b0c4341.js";import{U as _}from"./event.e7ca8317.js";import{d as I}from"./error.76088f19.js";import{i as P}from"./validator.b6b6feae.js";const U={modelValue:{type:[Boolean,Number,String],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},tabindex:[String,Number],size:String},H=()=>{const e=r(w,{}),a=r(A,{}),l=r("CheckboxGroup",{}),n=d((()=>l&&"ElCheckboxGroup"===(null==l?void 0:l.name))),o=d((()=>a.size));return{isGroup:n,checkboxGroup:l,elForm:e,elFormItemSize:o,elFormItem:a}},J=e=>{const{model:a,isLimitExceeded:l}=(e=>{const a=u(!1),{emit:l}=m(),{isGroup:n,checkboxGroup:o}=H(),s=u(!1);return{model:d({get(){var l,s;return n.value?null==(l=o.modelValue)?void 0:l.value:null!=(s=e.modelValue)?s:a.value},set(e){var i;n.value&&Array.isArray(e)?(s.value=void 0!==o.max&&e.length>o.max.value,!1===s.value&&(null==(i=null==o?void 0:o.changeEvent)||i.call(o,e))):(l(_,e),a.value=e)}}),isLimitExceeded:s}})(e),{focus:n,size:o,isChecked:s,checkboxSize:i}=((e,{model:a})=>{const{isGroup:l,checkboxGroup:n}=H(),o=u(!1),s=$(null==n?void 0:n.checkboxGroupSize,{prop:!0});return{isChecked:d((()=>{const l=a.value;return"[object Boolean]"===c(l)?l:Array.isArray(l)?l.includes(e.label):null!=l?l===e.trueLabel:!!l})),focus:o,size:s,checkboxSize:$(d((()=>{var e;return l.value?null==(e=null==n?void 0:n.checkboxGroupSize)?void 0:e.value:void 0})))}})(e,{model:a}),{isDisabled:t}=((e,{model:a,isChecked:l})=>{const{elForm:n,isGroup:o,checkboxGroup:s}=H(),i=d((()=>{var e,n;const o=null==(e=s.max)?void 0:e.value,i=null==(n=s.min)?void 0:n.value;return!(!o&&!i)&&a.value.length>=o&&!l.value||a.value.length<=i&&l.value}));return{isDisabled:d((()=>{var a,l;const t=e.disabled||n.disabled;return null!=(l=o.value?(null==(a=s.disabled)?void 0:a.value)||t||i.value:e.disabled||n.disabled)&&l})),isLimitDisabled:i}})(e,{model:a,isChecked:s}),{handleChange:r}=((e,{isLimitExceeded:a})=>{const{elFormItem:l}=H(),{emit:n}=m();return b((()=>e.modelValue),(()=>{var e;null==(e=l.validate)||e.call(l,"change").catch((e=>I()))})),{handleChange:function(l){var o,s;if(a.value)return;const i=l.target.checked?null==(o=e.trueLabel)||o:null!=(s=e.falseLabel)&&s;n("change",i,l)}}})(e,{isLimitExceeded:l});return((e,{model:a})=>{e.checked&&(Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0)})(e,{model:a}),{isChecked:s,isDisabled:t,checkboxSize:i,model:a,handleChange:r,focus:n,size:o}},K=h({name:"ElCheckbox",props:{modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:P},tabindex:[String,Number]},emits:[_,"change"],setup(e){const a=p("checkbox");return t({ns:a},J(e))}}),Z=["id","aria-controls"],q=["tabindex","role","aria-checked"],M=["aria-hidden","name","tabindex","disabled","true-value","false-value"],Q=["aria-hidden","disabled","value","name","tabindex"];var R=v(K,[["render",function(e,a,l,n,o,s){return f(),k("label",{id:e.id,class:x([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null},[g("span",{class:x([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":!!e.indeterminate&&"mixed"},[g("span",{class:x(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?y((f(),k("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=a=>e.model=a),class:x(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...a)=>e.handleChange&&e.handleChange(...a)),onFocus:a[2]||(a[2]=a=>e.focus=!0),onBlur:a[3]||(a[3]=a=>e.focus=!1)},null,42,M)),[[C,e.model]]):y((f(),k("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=a=>e.model=a),class:x(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...a)=>e.handleChange&&e.handleChange(...a)),onFocus:a[6]||(a[6]=a=>e.focus=!0),onBlur:a[7]||(a[7]=a=>e.focus=!1)},null,42,Q)),[[C,e.model]])],10,q),e.$slots.default||e.label?(f(),k("span",{key:0,class:x(e.ns.e("label"))},[S(e.$slots,"default"),e.$slots.default?G("v-if",!0):(f(),k(L,{key:0},[B(z(e.label),1)],2112))],2)):G("v-if",!0)],10,Z)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const T=h({name:"ElCheckboxButton",props:U,emits:[_,"change"],setup(e){const{focus:a,isChecked:l,isDisabled:n,size:o,model:s,handleChange:i}=J(e),{checkboxGroup:t}=H(),r=p("checkbox");return{focus:a,isChecked:l,isDisabled:n,model:s,handleChange:i,activeStyle:d((()=>{var e,a,l,n;const o=null!=(a=null==(e=null==t?void 0:t.fill)?void 0:e.value)?a:"";return{backgroundColor:o,borderColor:o,color:null!=(n=null==(l=null==t?void 0:t.textColor)?void 0:l.value)?n:"",boxShadow:o?`-1px 0 0 0 ${o}`:null}})),size:o,ns:r}}}),W=["aria-checked","aria-disabled"],X=["name","tabindex","disabled","true-value","false-value"],Y=["name","tabindex","disabled","value"];var ee=v(T,[["render",function(e,a,l,n,o,s){return f(),k("label",{class:x([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)]),role:"checkbox","aria-checked":e.isChecked,"aria-disabled":e.isDisabled},[e.trueLabel||e.falseLabel?y((f(),k("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=a=>e.model=a),class:x(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...a)=>e.handleChange&&e.handleChange(...a)),onFocus:a[2]||(a[2]=a=>e.focus=!0),onBlur:a[3]||(a[3]=a=>e.focus=!1)},null,42,X)),[[C,e.model]]):y((f(),k("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=a=>e.model=a),class:x(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:a[5]||(a[5]=(...a)=>e.handleChange&&e.handleChange(...a)),onFocus:a[6]||(a[6]=a=>e.focus=!0),onBlur:a[7]||(a[7]=a=>e.focus=!1)},null,42,Y)),[[C,e.model]]),e.$slots.default||e.label?(f(),k("span",{key:2,class:x(e.ns.be("button","inner")),style:D(e.isChecked?e.activeStyle:null)},[S(e.$slots,"default",{},(()=>[B(z(e.label),1)]))],6)):G("v-if",!0)],10,W)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);var ae=v(h({name:"ElCheckboxGroup",props:{modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:P},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},emits:[_,"change"],setup(e,{emit:n,slots:o}){const{elFormItem:s}=H(),i=$(),r=p("checkbox"),u=e=>{n(_,e),V((()=>{n("change",e)}))},c=d({get:()=>e.modelValue,set(e){u(e)}});var m;return j("CheckboxGroup",(m=t({name:"ElCheckboxGroup",modelValue:c},E(e)),a(m,l({checkboxGroupSize:i,changeEvent:u})))),b((()=>e.modelValue),(()=>{var e;null==(e=s.validate)||e.call(s,"change").catch((e=>I()))})),()=>N(e.tag,{class:r.b("group"),role:"group","aria-label":"checkbox-group"},[S(o,"default")])}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const le=O(R,{CheckboxButton:ee,CheckboxGroup:ae}),ne=F(ee),oe=F(ae);export{le as E,oe as a,ne as b};