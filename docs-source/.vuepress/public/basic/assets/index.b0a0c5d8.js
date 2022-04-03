
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.64b0a20f.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{A as a,m as l,n as d,c as s,e as n,f as o,g as i,S as c,t as r,i as u,P as f,x as p,p as h,j as m,b}from"./index.8b6d4e84.js";import{_}from"./index.246b70e5.js";const g={class:"batch-action-bar"},v=p("当页全选"),D={key:0,class:"tips"};var k=t({props:{data:{type:Array,default:()=>[]},selectionData:{type:Array,default:()=>[]}},emits:["check-all","check-null"],setup(e,{emit:t}){const p=e,h=a({get:function(){let e=!1;return 0!=p.data.length&&p.data.length==p.selectionData.length&&(e=!0),e},set:function(e){t(e?"check-all":"check-null")}}),m=a((()=>{let e=!1;return p.selectionData.length>0&&p.selectionData.length<p.data.length&&(e=!0),e}));return(t,a)=>{const p=l("el-checkbox"),b=l("el-form");return d(),s("div",g,[n(p,{modelValue:i(h),"onUpdate:modelValue":a[0]||(a[0]=e=>c(h)?h.value=e:null),indeterminate:i(m),disabled:!e.data.length},{default:o((()=>[v])),_:1},8,["modelValue","indeterminate","disabled"]),e.selectionData.length?(d(),s("div",D,"已选 "+r(e.selectionData.length)+" 项",1)):u("v-if",!0),n(b,{disabled:!e.selectionData.length},{default:o((()=>[f(t.$slots,"default",{},void 0,!0)])),_:3},8,["disabled"])])}}},[["__scopeId","data-v-9d2c1ba8"]]);const x={name:"ComponentExampleBatchactionbar",props:{},data:()=>({dataList:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],selectionDataList:[]}),created(){},mounted(){},methods:{}},A=e=>(h("data-v-77083f83"),e=e(),m(),e),L=A((()=>b("p",null,"BatchActionBar",-1))),y=A((()=>b("p",{style:{"margin-bottom":"0"}},"该组件需要和 ElTable 搭配使用",-1))),z=p("单个批量操作按钮"),C=p("批量操作按钮组1"),S=p("批量操作按钮组2"),j=p("单个批量操作按钮"),$=p("批量操作按钮组1"),w=p("批量操作按钮组2");var B=t(x,[["render",function(t,a,i,c,r,u){const f=_,p=l("el-button"),h=l("el-button-group"),m=k,b=l("el-table-column"),g=l("el-table"),v=e;return d(),s("div",null,[n(f,{title:"批量操作栏"},{content:o((()=>[L,y])),_:1}),n(v,null,{default:o((()=>[n(m,{data:r.dataList,"selection-data":r.selectionDataList,onCheckAll:a[0]||(a[0]=e=>t.$refs.table.toggleAllSelection()),onCheckNull:a[1]||(a[1]=e=>t.$refs.table.clearSelection())},{default:o((()=>[n(p,{size:"default"},{default:o((()=>[z])),_:1}),n(h,null,{default:o((()=>[n(p,{size:"default"},{default:o((()=>[C])),_:1}),n(p,{size:"default"},{default:o((()=>[S])),_:1})])),_:1})])),_:1},8,["data","selection-data"]),n(g,{ref:"table",data:r.dataList,border:"",stripe:"","highlight-current-row":"",onSelectionChange:a[2]||(a[2]=e=>r.selectionDataList=e)},{default:o((()=>[n(b,{type:"selection",width:"40"}),n(b,{prop:"date",label:"日期",width:"180"}),n(b,{prop:"name",label:"姓名",width:"180"}),n(b,{prop:"address",label:"地址"})])),_:1},8,["data"]),n(m,{data:r.dataList,"selection-data":r.selectionDataList,onCheckAll:a[3]||(a[3]=e=>t.$refs.table.toggleAllSelection()),onCheckNull:a[4]||(a[4]=e=>t.$refs.table.clearSelection())},{default:o((()=>[n(p,{size:"default"},{default:o((()=>[j])),_:1}),n(h,null,{default:o((()=>[n(p,{size:"default"},{default:o((()=>[$])),_:1}),n(p,{size:"default"},{default:o((()=>[w])),_:1})])),_:1})])),_:1},8,["data","selection-data"])])),_:1})])}],["__scopeId","data-v-77083f83"]]);export{B as default};
