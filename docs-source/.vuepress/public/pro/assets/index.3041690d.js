
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,l,o)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[l]=o;import{_ as s}from"./index.538e7de7.js";import{_ as d}from"./index.ed5f6291.js";import{_ as u}from"./index.cf925a30.js";import{_ as i}from"./index.89cbdca2.js";import{_ as m}from"./index.bc6ef411.js";import{_ as c,r as p,o as f,m as g,aa as b,f as v,n as h,c as _,b as y,w,y as x,A as V,B as k,h as $,g as C,V as z,i as U,U as P,e as L,d as M,q as j,v as S}from"./index.25647206.js";import{u as O}from"./usePagination.24311aa1.js";const R=x("保密"),K=x("男"),q=x("女");var D=c({props:{id:{type:[Number,String],default:""}},setup(e,{expose:a}){const l=e,{proxy:o}=V(),t=p({loading:!1,form:{id:l.id,account:"",name:"",mobile:"",sex:"2"},rules:{account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(e,a,l)=>{let r={key:"mobile",value:a};""!=t.value.form.id&&(r.id=t.value.form.id),o.$api.get("pages_example/manager/check",{baseURL:"/mock/",params:r}).then((e=>{e.data.exist?l(new Error("手机号已存在")):l()}))},trigger:"blur"}]}});return f((()=>{""!=t.value.form.id&&(t.value.loading=!0,o.$api.get("pages_example/manager/detail",{baseURL:"/mock/",params:{id:t.value.form.id}}).then((e=>{t.value.loading=!1,t.value.form.account=e.data.account,t.value.form.name=e.data.name,t.value.form.mobile=e.data.mobile})))})),a({submit(e){""==t.value.form.id?o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/manager/create",t.value.form,{baseURL:"/mock/"}).then((()=>{o.$message.success({message:"模拟新增成功",center:!0}),e&&e()}))})):o.$refs.form.validate((a=>{a&&o.$api.post("pages_example/manager/edit",t.value.form,{baseURL:"/mock/"}).then((()=>{o.$message.success({message:"模拟编辑成功",center:!0}),e&&e()}))}))}}),(e,a)=>{const l=g("el-input"),o=g("el-form-item"),r=g("el-radio-button"),n=g("el-radio-group"),s=g("el-form"),d=b("loading");return v((h(),_("div",null,[y(s,{ref:"form",model:t.value.form,rules:t.value.rules,"label-width":"120px","label-suffix":"："},{default:w((()=>[y(o,{label:"帐号",prop:"account"},{default:w((()=>[y(l,{modelValue:t.value.form.account,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value.form.account=e),placeholder:"请输入帐号"},null,8,["modelValue"])])),_:1}),y(o,{label:"姓名",prop:"name"},{default:w((()=>[y(l,{modelValue:t.value.form.name,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value.form.name=e),placeholder:"请输入姓名"},null,8,["modelValue"])])),_:1}),y(o,{label:"手机号",prop:"mobile"},{default:w((()=>[y(l,{modelValue:t.value.form.mobile,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value.form.mobile=e),placeholder:"请输入手机号"},null,8,["modelValue"])])),_:1}),y(o,{label:"性别",prop:"sex"},{default:w((()=>[y(n,{modelValue:t.value.form.sex,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value.form.sex=e),size:"small"},{default:w((()=>[y(r,{label:"2"},{default:w((()=>[R])),_:1}),y(r,{label:"1"},{default:w((()=>[K])),_:1}),y(r,{label:"0"},{default:w((()=>[q])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),[[d,t.value.loading]])}}},[["__scopeId","data-v-aa80d99c"]]);const I=x("取 消"),A=x("确 定"),E={class:"buttons"},B=x("取 消"),N=x("确 定"),T={props:(F=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&n(e,l,a[l]);if(o)for(var l of o(a))r.call(a,l)&&n(e,l,a[l]);return e})({},D.props),G={modelValue:{type:Boolean,default:!1},mode:{type:String,default:"dialog",validator:e=>["dialog","drawer"].includes(e)}},a(F,l(G))),emits:["update:modelValue","success"],setup(e,{emit:a}){const l=e,{proxy:o}=V();let t=k({get:function(){return l.modelValue},set:function(e){a("update:modelValue",e)}});const r=k((()=>""==l.id?"新增管理员":"编辑管理员"));function n(){o.$refs.form.submit((()=>{a("success"),s()}))}function s(){t.value=!1}return(e,a)=>{const o=g("el-button"),d=g("el-dialog"),u=g("el-drawer");return h(),_("div",null,["dialog"===l.mode?(h(),$(d,{key:0,modelValue:C(t),"onUpdate:modelValue":a[0]||(a[0]=e=>z(t)?t.value=e:t=e),title:C(r),width:"600px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":""},{footer:w((()=>[y(o,{size:"large",onClick:s},{default:w((()=>[I])),_:1}),y(o,{type:"primary",size:"large",onClick:n},{default:w((()=>[A])),_:1})])),default:w((()=>[y(D,P({ref:"form"},e.$props),null,16)])),_:1},8,["modelValue","title"])):"drawer"===l.mode?(h(),$(u,{key:1,modelValue:C(t),"onUpdate:modelValue":a[1]||(a[1]=e=>z(t)?t.value=e:t=e),title:C(r),size:"600px","close-on-click-modal":!1,"custom-class":"form-mode-drawer","destroy-on-close":""},{default:w((()=>[y(D,P({ref:"form"},e.$props,{class:"form-container"}),null,16),L("div",E,[y(o,{size:"large",onClick:s},{default:w((()=>[B])),_:1}),y(o,{type:"primary",size:"large",onClick:n},{default:w((()=>[N])),_:1})])])),_:1},8,["modelValue","title"])):U("v-if",!0)])}}};var F,G,H=c(T,[["__scopeId","data-v-240f849c"]]);const J=x("新增管理员"),Q=x("全部"),W=x("男"),X=x("女"),Y=x("保密"),Z=x("筛 选"),ee=x("批量操作"),ae=x("男"),le=x("女"),oe=x("保密"),te=x("编辑"),re=x(" 更多操作 "),ne=x("重置密码"),se=x("删除"),de=M({name:"PagesExampleManagerList"});var ue=c(Object.assign(de,{setup(e){const{pagination:a,getParams:l,onSizeChange:o,onCurrentChange:t,onSortChange:r}=O(),{proxy:n}=V(),c=p({loading:!1,formMode:"dialog",formModeProps:{visible:!1,id:""},search:{account:"",name:"",mobile:"",sex:""},searchMore:!1,batch:{enable:!0,selectionDataList:[]},dataList:[]});function x(){c.value.loading=!0;let e=l();c.value.search.account&&(e.account=c.value.search.account),c.value.search.name&&(e.name=c.value.search.name),c.value.search.mobile&&(e.mobile=c.value.search.mobile),""!=c.value.search.sex&&(e.sex=c.value.search.sex),n.$api.get("pages_example/manager/list",{baseURL:"/mock/",params:e}).then((e=>{c.value.loading=!1,c.value.dataList=e.data.list,a.value.total=e.data.total}))}function k(e){o(e).then((()=>x()))}function z(e){t(e).then((()=>x()))}function P(e,a){r(e,a).then((()=>x()))}function L(){c.value.formModeProps.id="",c.value.formModeProps.visible=!0}function M(e,a){switch(e){case"resetPassword":!function(e){n.$confirm(`确认将「${e.account}」的密码重置为 “123456” 吗？`,"确认信息").then((()=>{n.$api.post("pages_example/manager/password/reset",{id:e.id},{baseURL:"/mock/"}).then((()=>{n.$message.success({message:"模拟重置成功",center:!0})}))})).catch((()=>{}))}(a);break;case"delete":!function(e){n.$confirm(`确认删除「${e.account}」管理员吗？`,"确认信息").then((()=>{n.$api.post("pages_example/manager/delete",{id:e.id},{baseURL:"/mock/"}).then((()=>{x(),n.$message.success({message:"模拟删除成功",center:!0})}))})).catch((()=>{}))}(a)}}return f((()=>{x()})),(e,l)=>{const o=m,t=g("el-button"),r=g("el-input"),p=g("el-form-item"),f=g("el-col"),V=g("el-row"),O=g("el-radio-button"),R=g("el-radio-group"),K=g("el-form"),q=i,D=u,I=g("el-table-column"),A=g("el-tag"),E=g("el-switch"),B=d,N=g("el-dropdown-item"),T=g("el-dropdown-menu"),F=g("el-dropdown"),G=g("el-table"),de=g("el-pagination"),ue=s,ie=b("loading");return h(),_("div",null,[y(o,{title:"管理员管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),y(ue,null,{default:w((()=>[y(t,{type:"primary",size:"large",icon:"el-icon-plus",onClick:L},{default:w((()=>[J])),_:1}),y(q,{"show-more":"",onToggle:l[4]||(l[4]=e=>c.value.searchMore=e)},{default:w((()=>[y(K,{model:c.value.search,size:"default","label-width":"100px","label-suffix":"："},{default:w((()=>[y(V,null,{default:w((()=>[y(f,{md:8},{default:w((()=>[y(p,{label:"帐号"},{default:w((()=>[y(r,{modelValue:c.value.search.account,"onUpdate:modelValue":l[0]||(l[0]=e=>c.value.search.account=e),placeholder:"请输入帐号，支持模糊查询",clearable:"",onKeydown:j(x,["enter"]),onClear:x},null,8,["modelValue","onKeydown"])])),_:1})])),_:1}),y(f,{md:8},{default:w((()=>[y(p,{label:"姓名"},{default:w((()=>[y(r,{modelValue:c.value.search.name,"onUpdate:modelValue":l[1]||(l[1]=e=>c.value.search.name=e),placeholder:"请输入姓名，支持模糊查询",clearable:"",onKeydown:j(x,["enter"]),onClear:x},null,8,["modelValue","onKeydown"])])),_:1})])),_:1}),y(f,{md:8},{default:w((()=>[y(p,{label:"手机号"},{default:w((()=>[y(r,{modelValue:c.value.search.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>c.value.search.mobile=e),placeholder:"请输入手机号",clearable:"",onKeydown:j(x,["enter"]),onClear:x},null,8,["modelValue","onKeydown"])])),_:1})])),_:1})])),_:1}),v(y(V,null,{default:w((()=>[y(f,{md:8},{default:w((()=>[y(p,{label:"性别"},{default:w((()=>[y(R,{modelValue:c.value.search.sex,"onUpdate:modelValue":l[3]||(l[3]=e=>c.value.search.sex=e),onChange:x},{default:w((()=>[y(O,{label:""},{default:w((()=>[Q])),_:1}),y(O,{label:"1"},{default:w((()=>[W])),_:1}),y(O,{label:"0"},{default:w((()=>[X])),_:1}),y(O,{label:"2"},{default:w((()=>[Y])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},512),[[S,c.value.searchMore]]),y(p,null,{default:w((()=>[y(t,{type:"primary",icon:"el-icon-search",onClick:x},{default:w((()=>[Z])),_:1})])),_:1})])),_:1},8,["model"])])),_:1}),c.value.batch.enable?(h(),$(D,{key:0,data:c.value.dataList,"selection-data":c.value.batch.selectionDataList,onCheckAll:l[5]||(l[5]=a=>e.$refs.table.toggleAllSelection()),onCheckNull:l[6]||(l[6]=a=>e.$refs.table.clearSelection())},{default:w((()=>[y(t,{size:"default"},{default:w((()=>[ee])),_:1})])),_:1},8,["data","selection-data"])):U("v-if",!0),v((h(),$(G,{ref:"table",class:"list-table",data:c.value.dataList,border:"",stripe:"","highlight-current-row":"",onSortChange:P,onSelectionChange:l[7]||(l[7]=e=>c.value.batch.selectionDataList=e)},{default:w((()=>[c.value.batch.enable?(h(),$(I,{key:0,type:"selection",align:"center",fixed:""})):U("v-if",!0),y(I,{prop:"account",sortable:"",label:"帐号"}),y(I,{prop:"name",label:"姓名",width:"100",align:"center"}),y(I,{prop:"sex",label:"性别",width:"100",align:"center"},{default:w((e=>[1==e.row.sex?(h(),$(A,{key:0,type:"success",size:"small"},{default:w((()=>[ae])),_:1})):0==e.row.sex?(h(),$(A,{key:1,type:"warning",size:"small"},{default:w((()=>[le])),_:1})):(h(),$(A,{key:2,type:"info",size:"small"},{default:w((()=>[oe])),_:1}))])),_:1}),y(I,{prop:"mobile",label:"手机号",width:"150",align:"center"}),y(I,{label:"状态",width:"100",align:"center"},{default:w((e=>[y(E,{modelValue:e.row.status,"onUpdate:modelValue":a=>e.row.status=a,onChange:a=>{return l=a,o=e.row,void n.$confirm(`确认${l?"启用":"停用"}「${o.account}」吗？`,"确认信息").then((()=>{n.$api.post("pages_example/manager/change/status",{id:o.id,status:l},{baseURL:"/mock/"}).then((()=>{n.$message.success({message:`模拟${l?"启用":"停用"}成功`,center:!0})}))})).catch((()=>{o.status=!l}));var l,o}},null,8,["modelValue","onUpdate:modelValue","onChange"])])),_:1}),y(I,{label:"操作",width:"200",align:"center",fixed:"right"},{default:w((e=>[y(t,{type:"primary",size:"small",plain:"",onClick:a=>{return l=e.row,c.value.formModeProps.id=l.id,void(c.value.formModeProps.visible=!0);var l}},{default:w((()=>[te])),_:2},1032,["onClick"]),y(F,{onCommand:a=>M(a,e.row)},{dropdown:w((()=>[y(T,null,{default:w((()=>[y(N,{command:"resetPassword"},{default:w((()=>[ne])),_:1}),y(N,{command:"delete",divided:""},{default:w((()=>[se])),_:1})])),_:1})])),default:w((()=>[y(t,{size:"small"},{default:w((()=>[re,y(B,{name:"el-icon-arrow-down"})])),_:1})])),_:2},1032,["onCommand"])])),_:1})])),_:1},8,["data"])),[[ie,c.value.loading]]),y(de,{"current-page":C(a).page,total:C(a).total,"page-size":C(a).size,"page-sizes":C(a).sizes,layout:C(a).layout,"hide-on-single-page":!1,class:"pagination",background:"",onCurrentChange:z,onSizeChange:k},null,8,["current-page","total","page-size","page-sizes","layout"])])),_:1}),["dialog","drawer"].includes(c.value.formMode)?(h(),$(H,{key:0,id:c.value.formModeProps.id,modelValue:c.value.formModeProps.visible,"onUpdate:modelValue":l[8]||(l[8]=e=>c.value.formModeProps.visible=e),mode:c.value.formMode,onSuccess:x},null,8,["id","modelValue","mode"])):U("v-if",!0)])}}}),[["__scopeId","data-v-65f2f370"]]);export{ue as default};
