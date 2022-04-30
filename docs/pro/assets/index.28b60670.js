
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{o as e,c as t,a,_ as i,j as s,w as l,g as r,k as n,p as o,l as p,A as d,E as c,y as u,r as m,G as h,F as f,ab as g,h as v,v as x,a1 as y}from"./index.b046d3e8.js";import{E as b,a as w,_ as j,b as _}from"./index.1d5dd628.js";import{E as k}from"./el-alert.026aaf76.js";/* empty css                */import{E as $,a as z}from"./el-image-viewer.f410bb0a.js";import{_ as S}from"./plus.08710cca.js";import{_ as M}from"./delete.5280896a.js";import{_ as C}from"./index.e4264495.js";import{_ as O}from"./index.f15ab100.js";import"./check.a1584861.js";import"./error.76088f19.js";import"./isNil.aac33454.js";import"./typescript.14beffb5.js";import"./index.a1803c34.js";import"./index.a16a43f7.js";import"./index.2b0c4341.js";import"./browser.32092e0d.js";import"./arrow-left.e56cde29.js";import"./arrow-right.361e9889.js";import"./debounce.b773226e.js";import"./index.b8b1886a.js";import"./scroll.df30964b.js";import"./style.3c5afb48.js";const A={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},I=[a("path",{fill:"currentColor",d:"M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"},null,-1)];var B={name:"ep-upload-filled",render:function(a,i){return e(),t("svg",A,I)}};const V={class:"slot"},E=(e=>(o("data-v-b65ae32e"),e=e(),p(),e))((()=>a("div",{class:"el-upload__text"},[u("将文件拖到此处，或"),a("em",null,"点击上传")],-1))),L={key:0,class:"el-upload__tip"},N={style:{display:"inline-block"}};var U=i({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(i,{emit:o}){const p=i;function u(e){const t=e.name.split("."),a=t[t.length-1],i=p.ext.indexOf(a)>=0,s=e.size/1024/1024<p.size;return i||d.error(`上传文件只支持 ${p.ext.join(" / ")} 格式！`),s||d.error(`上传文件大小不能超过 ${p.size}MB！`),i&&s}function m(){d.warning("文件上传超过限制")}function h(e,t){o("on-success",e,t)}return(o,p)=>{const d=B,f=c,g=k,v=b;return e(),s(v,{action:i.action,data:i.data,name:i.name,"before-upload":u,"on-exceed":m,"on-success":h,"file-list":i.files,limit:i.max,drag:""},{tip:l((()=>[i.notip?n("v-if",!0):(e(),t("div",L,[a("div",N,[r(g,{title:`上传文件支持 ${i.ext.join(" / ")} 格式，单个文件大小不超过 ${i.size}MB，且文件数量不超过 ${i.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:l((()=>[a("div",V,[r(f,{class:"el-icon--upload"},{default:l((()=>[r(d)])),_:1}),E])])),_:1},8,["action","data","name","file-list","limit"])}}},[["__scopeId","data-v-b65ae32e"]]);const R={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},H=[a("path",{fill:"currentColor",d:"M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"},null,-1)];var T={name:"ep-right",render:function(a,i){return e(),t("svg",R,H)}};const K={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},Y=[a("path",{fill:"currentColor",d:"M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"},null,-1),a("path",{fill:"currentColor",d:"m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"},null,-1)];var q={name:"ep-back",render:function(a,i){return e(),t("svg",K,Y)}};const F={class:"upload-container"},G={class:"mask"},D={class:"actions"},J=["onClick"],P=["onClick"],Q=["onClick"],W=["onClick"],X={key:0,class:"el-upload__tip"},Z={style:{display:"inline-block"}};var ee=i({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(i,{emit:o}){const p=i,u=m({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function _(){u.value.imageViewerVisible=!1}function C(e,t){let a=p.url;"left"==t&&0!=e&&(a[e]=a.splice(e-1,1,a[e])[0]),"right"==t&&e!=a.length-1&&(a[e]=a.splice(e+1,1,a[e])[0]),o("update:url",a)}function O(e){const t=e.name.split("."),a=t[t.length-1],i=p.ext.indexOf(a)>=0,s=e.size/1024/1024<p.size;return i||d.error(`上传图片只支持 ${p.ext.join(" / ")} 格式！`),s||d.error(`上传图片大小不能超过 ${p.size}MB！`),i&&s&&(u.value.progress.preview=URL.createObjectURL(e)),i&&s}function A(e){u.value.progress.percent=~~e.percent}function I(e){u.value.progress.preview="",u.value.progress.percent=0,o("on-success",e)}return(d,m)=>{const B=$,V=j,E=c,L=M,N=q,U=T,R=S,H=w,K=b,Y=k,ee=z;return e(),t("div",F,[(e(!0),t(h,null,f(i.url,((d,c)=>(e(),t("div",{key:c,class:"images"},[c<i.max?(e(),s(B,{key:0,src:d,style:g(`width:${i.width}px;height:${i.height}px;`),fit:"cover"},null,8,["src","style"])):n("v-if",!0),a("div",G,[a("div",D,[a("span",{title:"预览",onClick:e=>function(e){u.value.dialogImageIndex=e,u.value.imageViewerVisible=!0}(c)},[r(E,null,{default:l((()=>[r(V)])),_:1})],8,J),a("span",{title:"移除",onClick:e=>function(e){let t=p.url;t.splice(e,1),o("update:url",t)}(c)},[r(E,null,{default:l((()=>[r(L)])),_:1})],8,P),v(a("span",{title:"左移",class:y({disabled:0==c}),onClick:e=>C(c,"left")},[r(E,null,{default:l((()=>[r(N)])),_:1})],10,Q),[[x,i.url.length>1]]),v(a("span",{title:"右移",class:y({disabled:c==i.url.length-1}),onClick:e=>C(c,"right")},[r(E,null,{default:l((()=>[r(U)])),_:1})],10,W),[[x,i.url.length>1]])])])])))),128)),v(r(K,{"show-file-list":!1,headers:i.headers,action:i.action,data:i.data,name:i.name,"before-upload":O,"on-progress":A,"on-success":I,drag:"",class:"images-upload"},{default:l((()=>[a("div",{class:"image-slot",style:g(`width:${i.width}px;height:${i.height}px;`)},[r(E,null,{default:l((()=>[r(R)])),_:1})],4),v(a("div",{class:"progress",style:g(`width:${i.width}px;height:${i.height}px;`)},[r(B,{src:u.value.progress.preview,style:g(`width:${i.width}px;height:${i.height}px;`),fit:"fill"},null,8,["src","style"]),r(H,{type:"circle",width:.8*Math.min(i.width,i.height),percentage:u.value.progress.percent},null,8,["width","percentage"])],4),[[x,u.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[x,i.url.length<i.max]]),i.notip?n("v-if",!0):(e(),t("div",X,[a("div",Z,[r(Y,{title:`上传图片支持 ${i.ext.join(" / ")} 格式，单张图片大小不超过 ${i.size}MB，建议图片尺寸为 ${i.width}*${i.height}，且图片数量不超过 ${i.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),u.value.imageViewerVisible?(e(),s(ee,{key:1,"url-list":i.url,"initial-index":u.value.dialogImageIndex,onClose:_},null,8,["url-list","initial-index"])):n("v-if",!0)])}}},[["__scopeId","data-v-cd550470"]]);var te=i({data:()=>({image:"",images:[],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:d.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):d.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(d.warning(e.error),this.files.pop())}))}}},[["render",function(a,i,s,n,o,p){const d=O,c=_,u=C,m=ee,h=U;return e(),t("div",null,[r(d,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),r(u,{title:"单图上传"},{default:l((()=>[r(c,{url:o.image,"onUpdate:url":i[0]||(i[0]=e=>o.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),r(u,{title:"多图上传（默认最多3张）"},{default:l((()=>[r(m,{url:o.images,"onUpdate:url":i[1]||(i[1]=e=>o.images=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),r(u,{title:"文件上传（默认最多3个）"},{default:l((()=>[r(h,{files:o.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:p.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{te as default};