
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.e4264495.js";import{_ as e,C as i,o as r,j as s,w as o,a,g as d,ab as n,i as p,E as l,c}from"./index.b046d3e8.js";import{E as m}from"./el-image-viewer.f410bb0a.js";/* empty css                */import{_ as f}from"./index.f1e68254.js";import{_ as u}from"./index.f15ab100.js";import"./typescript.14beffb5.js";import"./browser.32092e0d.js";import"./index.a1803c34.js";import"./arrow-left.e56cde29.js";import"./arrow-right.361e9889.js";import"./debounce.b773226e.js";import"./index.a16a43f7.js";import"./index.b8b1886a.js";import"./scroll.df30964b.js";import"./style.3c5afb48.js";const g={class:"image-slot"};var h=e({props:{src:{type:String,required:!0},width:{type:[Number,String],default:""},height:{type:[Number,String],default:""}},setup(t){const e=t,c=i((()=>"string"==typeof e.width?e.width:`${e.width}px`)),u=i((()=>"string"==typeof e.height?e.height:`${e.height}px`));return(e,i)=>{const h=f,b=l,w=m;return r(),s(w,{src:t.src,fit:"cover",style:n(`width:${p(c)};height:${p(u)};`),"preview-src-list":[t.src]},{error:o((()=>[a("div",g,[d(b,null,{default:o((()=>[d(h,{name:"image-load-fail"})])),_:1})])])),_:1},8,["src","style","preview-src-list"])}}},[["__scopeId","data-v-17f7f46f"]]);var b=e({props:{},data:()=>({}),computed:{locationOrigin:()=>location.origin},created(){},mounted(){},methods:{}},[["render",function(e,i,s,n,p,l){const m=u,f=h,g=t;return r(),c("div",null,[d(m,{title:"图片预览",content:"ImagePreview"}),d(g,null,{default:o((()=>[a("div",null,[d(f,{src:`https://hooray.${l.locationOrigin.includes("gitee")?"gitee":"github"}.io/fantastic-admin/logo.png`,width:200},null,8,["src"])])])),_:1}),d(g,{title:"图片加载失败时"},{default:o((()=>[a("div",null,[d(f,{src:"http://www.baidu.com",width:"100px",height:"100px"})])])),_:1})])}],["__scopeId","data-v-3599e071"]]);export{b as default};
