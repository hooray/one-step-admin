
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,m as t,n as a,h as i,w as s,c as l,e as n,b as r,i as o,p as d,j as u,y as c,A as p,r as m,F as h,D as g,H as f,f as y,v,I as x}from"./index.25647206.js";import{_ as b}from"./index.ed5f6291.js";import{_ as w}from"./index.538e7de7.js";import{_ as $}from"./index.d71cbf81.js";import{_}from"./index.bc6ef411.js";const k={class:"slot"},S=(e=>(d("data-v-5b9249bd"),e=e(),u(),e))((()=>n("div",{class:"el-upload__text"},[c("将文件拖到此处，或"),n("em",null,"点击上传")],-1))),j={key:0,class:"el-upload__tip"},z={style:{display:"inline-block"}};var O=e({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},size:{type:Number,default:2},max:{type:Number,default:3},files:{type:Array,default:()=>[]},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["zip","rar"]}},emits:["on-success"],setup(e,{emit:d}){const u=e,{proxy:c}=p();function m(e){const t=e.name.split("."),a=t[t.length-1],i=u.ext.indexOf(a)>=0,s=e.size/1024/1024<u.size;return i||c.$message.error(`上传文件只支持 ${u.ext.join(" / ")} 格式！`),s||c.$message.error(`上传文件大小不能超过 ${u.size}MB！`),i&&s}function h(){c.$message.warning("文件上传超过限制")}function g(e,t){d("on-success",e,t)}return(d,u)=>{const c=t("el-icon-upload-filled"),p=t("el-icon"),f=t("el-alert"),y=t("el-upload");return a(),i(y,{action:e.action,data:e.data,name:e.name,"before-upload":m,"on-exceed":h,"on-success":g,"file-list":e.files,limit:e.max,drag:""},{tip:s((()=>[e.notip?o("v-if",!0):(a(),l("div",j,[n("div",z,[r(f,{title:`上传文件支持 ${e.ext.join(" / ")} 格式，单个文件大小不超过 ${e.size}MB，且文件数量不超过 ${e.max} 个`,type:"info","show-icon":"",closable:!1},null,8,["title"])])]))])),default:s((()=>[n("div",k,[r(p,{class:"el-icon--upload"},{default:s((()=>[r(c)])),_:1}),S])])),_:1},8,["action","data","name","file-list","limit"])}}},[["__scopeId","data-v-5b9249bd"]]);const I={class:"upload-container"},C={class:"mask"},V={class:"actions"},U=["onClick"],B=["onClick"],N=["onClick"],A=["onClick"],M={key:0,class:"el-upload__tip"},T={style:{display:"inline-block"}};var E=e({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:Array,default:()=>[]},max:{type:Number,default:3},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(e,{emit:d}){const u=e,{proxy:c}=p(),w=m({dialogImageIndex:0,imageViewerVisible:!1,progress:{preview:"",percent:0}});function $(){w.value.imageViewerVisible=!1}function _(e,t){let a=u.url;"left"==t&&0!=e&&(a[e]=a.splice(e-1,1,a[e])[0]),"right"==t&&e!=a.length-1&&(a[e]=a.splice(e+1,1,a[e])[0]),d("update:url",a)}function k(e){const t=e.name.split("."),a=t[t.length-1],i=u.ext.indexOf(a)>=0,s=e.size/1024/1024<u.size;return i||c.$message.error(`上传图片只支持 ${u.ext.join(" / ")} 格式！`),s||c.$message.error(`上传图片大小不能超过 ${u.size}MB！`),i&&s&&(w.value.progress.preview=URL.createObjectURL(e)),i&&s}function S(e){w.value.progress.percent=~~e.percent}function j(e){w.value.progress.preview="",w.value.progress.percent=0,d("on-success",e)}return(c,p)=>{const m=t("el-image"),z=t("el-icon-zoom-in"),O=t("el-icon"),E=t("el-icon-delete"),K=t("el-icon-back"),q=t("el-icon-right"),F=b,L=t("el-progress"),R=t("el-upload"),D=t("el-alert"),H=t("el-image-viewer");return a(),l("div",I,[(a(!0),l(h,null,g(e.url,((t,c)=>(a(),l("div",{key:c,class:"images"},[c<e.max?(a(),i(m,{key:0,src:t,style:f(`width:${e.width}px;height:${e.height}px;`),fit:"cover"},null,8,["src","style"])):o("v-if",!0),n("div",C,[n("div",V,[n("span",{title:"预览",onClick:e=>function(e){w.value.dialogImageIndex=e,w.value.imageViewerVisible=!0}(c)},[r(O,null,{default:s((()=>[r(z)])),_:1})],8,U),n("span",{title:"移除",onClick:e=>function(e){let t=u.url;t.splice(e,1),d("update:url",t)}(c)},[r(O,null,{default:s((()=>[r(E)])),_:1})],8,B),y(n("span",{title:"左移",class:x({disabled:0==c}),onClick:e=>_(c,"left")},[r(O,null,{default:s((()=>[r(K)])),_:1})],10,N),[[v,e.url.length>1]]),y(n("span",{title:"右移",class:x({disabled:c==e.url.length-1}),onClick:e=>_(c,"right")},[r(O,null,{default:s((()=>[r(q)])),_:1})],10,A),[[v,e.url.length>1]])])])])))),128)),y(r(R,{"show-file-list":!1,headers:e.headers,action:e.action,data:e.data,name:e.name,"before-upload":k,"on-progress":S,"on-success":j,drag:"",class:"images-upload"},{default:s((()=>[n("div",{class:"image-slot",style:f(`width:${e.width}px;height:${e.height}px;`)},[r(F,{name:"el-icon-plus"})],4),y(n("div",{class:"progress",style:f(`width:${e.width}px;height:${e.height}px;`)},[r(m,{src:w.value.progress.preview,style:f(`width:${e.width}px;height:${e.height}px;`),fit:"fill"},null,8,["src","style"]),r(L,{type:"circle",width:.8*Math.min(e.width,e.height),percentage:w.value.progress.percent},null,8,["width","percentage"])],4),[[v,w.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),[[v,e.url.length<e.max]]),e.notip?o("v-if",!0):(a(),l("div",M,[n("div",T,[r(D,{title:`上传图片支持 ${e.ext.join(" / ")} 格式，单张图片大小不超过 ${e.size}MB，建议图片尺寸为 ${e.width}*${e.height}，且图片数量不超过 ${e.max} 张`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),w.value.imageViewerVisible?(a(),i(H,{key:1,"url-list":e.url,"initial-index":w.value.dialogImageIndex,onClose:$},null,8,["url-list","initial-index"])):o("v-if",!0)])}}},[["__scopeId","data-v-7164d5f4"]]);var K=e({data:()=>({image:"",images:[],files:[{name:"测试文件.zip",url:"http://images.lookbi.com/uploads/apply/96/d8521fc691e472eec91a170201866e7d.zip"}]}),mounted(){this.image="https://picsum.photos/400",this.images=["https://picsum.photos/400","https://picsum.photos/600","https://picsum.photos/500"]},methods:{handleSuccess1(e){""==e.error?this.image=e.data.path:this.$message.warning(e.error)},handleSuccess2(e){""==e.error?this.images.push(e.data.path):this.$message.warning(e.error)},handleSuccess3(e,t){this.files.push({name:t.name,url:""==e.error?e.data.path:""}),this.$nextTick((()=>{""!=e.error&&(this.$message.warning(e.error),this.files.pop())}))}}},[["render",function(e,t,i,n,o,d){const u=_,c=$,p=w,m=E,h=O;return a(),l("div",null,[r(u,{title:"上传",content:"ImageUpload / ImagesUpload / FileUpload"}),r(p,{title:"单图上传"},{default:s((()=>[r(c,{url:o.image,"onUpdate:url":t[0]||(t[0]=e=>o.image=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",width:250,height:150,data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess1},null,8,["url","onOnSuccess"])])),_:1}),r(p,{title:"多图上传（默认最多3张）"},{default:s((()=>[r(m,{url:o.images,"onUpdate:url":t[1]||(t[1]=e=>o.images=e),action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess2},null,8,["url","onOnSuccess"])])),_:1}),r(p,{title:"文件上传（默认最多3个）"},{default:s((()=>[r(h,{files:o.files,action:"http://scrm.1daas.com/api/upload/upload",name:"image",data:{token:"TKE615916022101558"},onOnSuccess:d.handleSuccess3},null,8,["files","onOnSuccess"])])),_:1})])}]]);export{K as default};
