
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as g}from"./plugin-vue_export-helper.5a098b48.js";import{a4 as x,aa as b,r,an as h,K as $,o as y,I,l as s,j as i,m as U}from"./vendor.6b4522dc.js";const V={props:{id:{type:[Number,String],default:""}},setup(n,{expose:m}){const u=n,{proxy:t}=U(),e=x({loading:!1,form:{id:u.id,title:""},rules:{title:[{required:!0,message:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0",trigger:"blur"}]}});b(()=>{e.value.form.id!=""&&d()});function d(){e.value.loading=!0,t.$api.get("pages_example/department/detail",{baseURL:"/mock/",params:{id:e.value.form.id}}).then(a=>{e.value.loading=!1,e.value.form.title=a.data.title})}return m({submit(a){e.value.form.id==""?t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/department/create",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u65B0\u589E\u6210\u529F",center:!0}),a&&a()})}):t.$refs.form.validate(o=>{o&&t.$api.post("pages_example/department/edit",e.value.form,{baseURL:"/mock/"}).then(()=>{t.$message.success({message:"\u6A21\u62DF\u7F16\u8F91\u6210\u529F",center:!0}),a&&a()})})}}),(a,o)=>{const p=r("el-input"),f=r("el-form-item"),_=r("el-form"),c=h("loading");return $((y(),I("div",null,[s(_,{ref:(l,v)=>{v.form=l},model:e.value.form,rules:e.value.rules,"label-width":"120px","label-suffix":"\uFF1A"},{default:i(()=>[s(f,{label:"\u90E8\u95E8",prop:"title"},{default:i(()=>[s(p,{modelValue:e.value.form.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value.form.title=l),placeholder:"\u8BF7\u8F93\u5165\u90E8\u95E8\u540D\u79F0"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])],512)),[[c,e.value.loading]])}}};var C=g(V,[["__scopeId","data-v-7b150428"]]);export{C as default};
