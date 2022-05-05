
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{bl as e,d as t,E as l,O as a,ao as s,B as r,r as i,C as o,_ as n,aS as d,m as u,h as m,f as c,X as p,ad as f,i as b,c as v,b0 as j,a1 as h,e as g}from"./index.cc1bbbc5.js";import{E as x}from"./el-time-picker.6e2dffc2.js";import"./el-input.aeca5281.js";import"./el-scrollbar.9a2c9297.js";import"./el-popper.47c362c7.js";import{_ as y}from"./index.3db21fe3.js";/* empty css               */import{a as S}from"./el-select.53cb8af7.js";import{_ as V}from"./index.1922c0c6.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";import{c as T,b as I}from"./panel-time-pick.9ccdc4e2.js";import"./index.e78a28cf.js";import"./_baseFlatten.8b289c41.js";import"./isEqual.6d21abe3.js";import"./index.b70656fd.js";import"./typescript.b0ac2d0c.js";import"./event.75bf56a9.js";import"./index.5dd31558.js";import"./index.b88bc1db.js";import"./error.b438369f.js";import"./isNil.aac33454.js";import"./event.561dcd8a.js";/* empty css                */import"./index.236d052b.js";import"./index.7486c8f0.js";import"./resize-event.6a6cb7ee.js";import"./scroll.86130aa3.js";import"./debounce.8f59af2d.js";import"./index.6eb1fb05.js";import"./validator.86336933.js";import"./deprecation.31cc81cd.js";import"./index.16f4bf6f.js";import"./arrow-up.0e5f2f38.js";import"./el-alert.2f531b5d.js";import"./index.2b8a8e6d.js";import"./arrow-down.d9c7c4da.js";e.extend(T);const{Option:E}=S,$=e=>{const t=(e||"").split(":");if(t.length>=2){let l=Number.parseInt(t[0],10);const a=Number.parseInt(t[1],10),s=e.toUpperCase();return s.includes("AM")&&12===l?l=0:s.includes("PM")&&12!==l&&(l+=12),{hours:l,minutes:a}}return null},k=(e,t)=>{const l=$(e),a=$(t),s=l.minutes+60*l.hours,r=a.minutes+60*a.hours;return s===r?0:s>r?1:-1},H=e=>`${e}`.padStart(2,"0"),U=e=>`${H(e.hours)}:${H(e.minutes)}`,w=(e,t)=>{const l=$(e),a=$(t),s={hours:l.hours,minutes:l.minutes};return s.minutes+=a.minutes,s.hours+=a.hours,s.hours+=Math.floor(s.minutes/60),s.minutes=s.minutes%60,U(s)};var z=n(t({name:"ElTimeSelect",components:{ElSelect:S,ElOption:E,ElIcon:l},model:{prop:"value",event:"change"},props:{format:{type:String,default:"HH:mm"},modelValue:String,disabled:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},effect:{type:String,default:"light"},clearable:{type:Boolean,default:!0},size:{type:String,values:a,default:""},placeholder:{type:String,default:""},start:{type:String,default:"09:00"},end:{type:String,default:"18:00"},step:{type:String,default:"00:30"},minTime:{type:String,default:""},maxTime:{type:String,default:""},name:{type:String,default:""},prefixIcon:{type:[String,Object],default:I},clearIcon:{type:[String,Object],default:s}},emits:["change","blur","focus","update:modelValue"],setup(t){const l=r("input"),a=i(null),s=o((()=>t.modelValue)),n=o((()=>{const e=$(t.start);return U(e)})),d=o((()=>{const e=$(t.end);return U(e)})),u=o((()=>{const e=$(t.step);return U(e)})),m=o((()=>{const e=$(t.minTime);return e?U(e):null})),c=o((()=>{const e=$(t.maxTime);return e?U(e):null})),p=o((()=>{const l=[];if(t.start&&t.end&&t.step){let a,s=n.value;for(;k(s,d.value)<=0;)a=e(s,"HH:mm").format(t.format),l.push({value:a,disabled:k(s,m.value||"-1:-1")<=0||k(s,c.value||"100:100")>=0}),s=w(s,u.value)}return l}));return{nsInput:l,select:a,value:s,items:p,blur:()=>{var e,t;null==(t=null==(e=a.value)?void 0:e.blur)||t.call(e)},focus:()=>{var e,t;null==(t=null==(e=a.value)?void 0:e.focus)||t.call(e)}}}}),[["render",function(e,t,l,a,s,r){const i=d("el-option"),o=d("el-icon"),n=d("el-select");return u(),m(n,{ref:"select","model-value":e.value,disabled:e.disabled,clearable:e.clearable,"clear-icon":e.clearIcon,size:e.size,effect:e.effect,placeholder:e.placeholder,"default-first-option":"",filterable:e.editable,"onUpdate:modelValue":t[0]||(t[0]=t=>e.$emit("update:modelValue",t)),onChange:t[1]||(t[1]=t=>e.$emit("change",t)),onBlur:t[2]||(t[2]=t=>e.$emit("blur",t)),onFocus:t[3]||(t[3]=t=>e.$emit("focus",t))},{prefix:c((()=>[e.prefixIcon?(u(),m(o,{key:0,class:p(e.nsInput.e("prefix-icon"))},{default:c((()=>[(u(),m(f(e.prefixIcon)))])),_:1},8,["class"])):b("v-if",!0)])),default:c((()=>[(u(!0),v(h,null,j(e.items,(e=>(u(),m(i,{key:e.value,label:e.value,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])))),128))])),_:1},8,["model-value","disabled","clearable","clear-icon","size","effect","placeholder","filterable"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/time-select/src/time-select.vue"]]);z.install=e=>{e.component(z.name,z)};const B=z;const M=(e,t)=>{const l=[];for(let a=e;a<=t;a++)l.push(a);return l};var O=_({data:()=>({value:"",value1:new Date(2016,9,10,18,40),startTime:"",endTime:""}),methods:{disabledHours:()=>M(0,16).concat(M(19,23)),disabledMinutes:e=>17===e?M(0,29):18===e?M(31,59):void 0,disabledSeconds(e,t){if(18===e&&30===t)return M(1,59)}}},[["render",function(e,t,l,a,s,r){const i=V,o=B,n=y,d=x;return u(),v("div",null,[g(i),g(n,{title:"固定时间点",class:"demo"},{default:c((()=>[g(o,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),start:"08:30",step:"00:15",end:"18:30",placeholder:"选择时间"},null,8,["modelValue"])])),_:1}),g(n,{title:"任意时间点",class:"demo"},{default:c((()=>[g(d,{modelValue:s.value1,"onUpdate:modelValue":t[1]||(t[1]=e=>s.value1=e),"disabled-hours":r.disabledHours,"disabled-minutes":r.disabledMinutes,"disabled-seconds":r.disabledSeconds,placeholder:"任意时间点"},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])])),_:1}),g(n,{title:"固定时间范围",class:"demo"},{default:c((()=>[g(o,{modelValue:s.startTime,"onUpdate:modelValue":t[2]||(t[2]=e=>s.startTime=e),placeholder:"起始时间",start:"08:30",step:"00:15",end:"18:30",style:{"margin-right":"10px"}},null,8,["modelValue"]),g(o,{modelValue:s.endTime,"onUpdate:modelValue":t[3]||(t[3]=e=>s.endTime=e),placeholder:"结束时间",start:"08:30",step:"00:15",end:"18:30","min-time":s.startTime},null,8,["modelValue","min-time"])])),_:1})])}]]);export{O as default};