
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.3db21fe3.js";import{c as a,e as t,f as r,m as l,b as o}from"./index.cc1bbbc5.js";import{E as d}from"./el-date-picker.d6076dd0.js";import"./el-input.aeca5281.js";import"./el-scrollbar.9a2c9297.js";import"./el-popper.47c362c7.js";import"./el-button.1491974b.js";import{_ as i}from"./index.1922c0c6.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";/* empty css                */import"./index.236d052b.js";import"./panel-time-pick.9ccdc4e2.js";import"./validator.86336933.js";import"./index.e78a28cf.js";import"./index.b70656fd.js";import"./error.b438369f.js";import"./isEqual.6d21abe3.js";import"./index.2b8a8e6d.js";import"./event.561dcd8a.js";import"./arrow-up.0e5f2f38.js";import"./arrow-down.d9c7c4da.js";import"./debounce.8f59af2d.js";import"./arrays.2485f575.js";import"./index.6eb1fb05.js";import"./arrow-left.53fb0366.js";import"./arrow-right.210e654d.js";import"./typescript.b0ac2d0c.js";import"./event.75bf56a9.js";import"./index.5dd31558.js";import"./index.b88bc1db.js";import"./isNil.aac33454.js";import"./el-alert.2f531b5d.js";const s={data:()=>({value1:"",value2:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value3:""})},m=o("div",null,"起始日期时刻为 12:00:00，结束日期时刻为 08:00:00",-1);var n=p(s,[["render",function(o,p,s,n,c,u){const j=i,f=d,b=e;return l(),a("div",null,[t(j),t(b,{title:"日期和时间点",class:"demo"},{default:r((()=>[t(f,{modelValue:c.value1,"onUpdate:modelValue":p[0]||(p[0]=e=>c.value1=e),type:"datetime",placeholder:"选择日期时间"},null,8,["modelValue"])])),_:1}),t(b,{title:"日期和时间范围",class:"demo"},{default:r((()=>[t(f,{modelValue:c.value2,"onUpdate:modelValue":p[1]||(p[1]=e=>c.value2=e),type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},null,8,["modelValue"])])),_:1}),t(b,{title:"默认的起始与结束时刻",class:"demo"},{default:r((()=>[m,t(f,{modelValue:c.value3,"onUpdate:modelValue":p[2]||(p[2]=e=>c.value3=e),type:"datetimerange",align:"right","start-placeholder":"开始日期","end-placeholder":"结束日期","default-time":[new Date(2e3,1,1,12,0,0),new Date(2e3,2,1,8,0,0)]},null,8,["modelValue","default-time"])])),_:1})])}]]);export{n as default};
