
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as d}from"./index.1ee8d9f4.js";import{_}from"./index.e01cfd04.js";import{_ as u}from"./plugin-vue_export-helper.5a098b48.js";import{r as h,I as m,l as e,j as o,o as p,J as s,T as f}from"./vendor.6b4522dc.js";const g={data(){return{url1:"",url2:"",url3:""}},mounted(){this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01").then(t=>{this.url1=t}).catch(t=>{console.log(t)}),this.$qrcode.toCanvas(this.$refs.canvas,"Fantastic-admin \u771F\u68D2\uFF01").then(()=>{console.log("success")}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{color:{dark:"#5482EE",light:"#E8E8E8"}}).then(t=>{this.url2=t}).catch(t=>{console.log(t)}),this.$qrcode.toDataURL("Fantastic-admin \u771F\u68D2\uFF01",{width:100}).then(t=>{this.url3=t}).catch(t=>{console.log(t)})},methods:{open(t){window.open(t,"top")}}},v=f("node-qrcode \u5B98\u7F51"),x=["src"],q={ref:"canvas"},E=["src"],$=["src"];function b(t,a,j,k,c,l){const r=h("el-button"),i=_,n=d;return p(),m("div",null,[e(i,{title:"\u4E8C\u7EF4\u7801"},{default:o(()=>[e(r,{icon:"el-icon-link",onClick:a[0]||(a[0]=w=>l.open("https://github.com/soldair/node-qrcode"))},{default:o(()=>[v]),_:1})]),_:1}),e(n,{title:"\u6E32\u67D3\u6210 img \u6807\u7B7E"},{default:o(()=>[s("img",{src:c.url1},null,8,x)]),_:1}),e(n,{title:"\u6E32\u67D3\u6210 canvas \u6807\u7B7E"},{default:o(()=>[s("canvas",q,null,512)]),_:1}),e(n,{title:"\u81EA\u5B9A\u4E49\u989C\u8272"},{default:o(()=>[s("img",{src:c.url2},null,8,E)]),_:1}),e(n,{title:"\u6307\u5B9A\u5BBD\u5EA6"},{default:o(()=>[s("img",{src:c.url3},null,8,$)]),_:1})])}var L=u(g,[["render",b]]);export{L as default};