
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e}from"./index.ed5f6291.js";import{_ as t,r as i,m as s,n as l,c as a,b as r,w as n,h as o,e as p,H as c,x as u,f as d,v as h,i as g,A as f}from"./index.25647206.js";const m={class:"upload-container"},v={class:"image-slot"},y={key:1,class:"image"},w={class:"mask"},x={class:"actions"},$=["onClick"],b=["onClick"],_={key:0,class:"el-upload__tip"},k={style:{display:"inline-block"}};var j=t({props:{action:{type:String,required:!0},headers:{type:Object,default:()=>{}},data:{type:Object,default:()=>{}},name:{type:String,default:"file"},url:{type:String,default:""},size:{type:Number,default:2},width:{type:Number,default:150},height:{type:Number,default:150},placeholder:{type:String,default:""},notip:{type:Boolean,default:!1},ext:{type:Array,default:()=>["jpg","png","gif","bmp"]}},emits:["update:url","on-success"],setup(t,{emit:j}){const V=t,{proxy:z}=f(),C=i({imageViewerVisible:!1,progress:{preview:"",percent:0}});function O(){C.value.imageViewerVisible=!0}function S(){C.value.imageViewerVisible=!1}function B(){j("update:url","")}function M(e){const t=e.name.split("."),i=t[t.length-1],s=V.ext.indexOf(i)>=0,l=e.size/1024/1024<V.size;return s||z.$message.error(`上传图片只支持 ${V.ext.join(" / ")} 格式！`),l||z.$message.error(`上传图片大小不能超过 ${V.size}MB！`),s&&l&&(C.value.progress.preview=URL.createObjectURL(e)),s&&l}function N(e){C.value.progress.percent=~~e.percent}function A(e){C.value.progress.preview="",C.value.progress.percent=0,j("on-success",e)}return(i,f)=>{const j=e,V=s("el-image"),z=s("el-icon-zoom-in"),L=s("el-icon"),R=s("el-icon-delete"),U=s("el-progress"),q=s("el-upload"),H=s("el-alert"),I=s("el-image-viewer");return l(),a("div",m,[r(q,{"show-file-list":!1,headers:t.headers,action:t.action,data:t.data,name:t.name,"before-upload":M,"on-progress":N,"on-success":A,drag:""},{default:n((()=>[""===t.url?(l(),o(V,{key:0,src:""===t.url?t.placeholder:t.url,style:c(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},{error:n((()=>[p("div",v,[r(j,{name:"el-icon-plus"})])])),_:1},8,["src","style"])):(l(),a("div",y,[r(V,{src:t.url,style:c(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},null,8,["src","style"]),p("div",w,[p("div",x,[p("span",{title:"预览",onClick:u(O,["stop"])},[r(L,null,{default:n((()=>[r(z)])),_:1})],8,$),p("span",{title:"移除",onClick:u(B,["stop"])},[r(L,null,{default:n((()=>[r(R)])),_:1})],8,b)])])])),d(p("div",{class:"progress",style:c(`width:${t.width}px;height:${t.height}px;`)},[r(V,{src:C.value.progress.preview,style:c(`width:${t.width}px;height:${t.height}px;`),fit:"fill"},null,8,["src","style"]),r(U,{type:"circle",width:.8*Math.min(t.width,t.height),percentage:C.value.progress.percent},null,8,["width","percentage"])],4),[[h,""===t.url&&C.value.progress.percent]])])),_:1},8,["headers","action","data","name"]),t.notip?g("v-if",!0):(l(),a("div",_,[p("div",k,[r(H,{title:`上传图片支持 ${t.ext.join(" / ")} 格式，且图片大小不超过 ${t.size}MB，建议图片尺寸为 ${t.width}*${t.height}`,type:"info","show-icon":"",closable:!1},null,8,["title"])])])),C.value.imageViewerVisible?(l(),o(I,{key:1,"url-list":[t.url],onClose:S},null,8,["url-list"])):g("v-if",!0)])}}},[["__scopeId","data-v-c67c2356"]]);export{j as _};