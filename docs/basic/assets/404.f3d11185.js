
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as t}from"./index.8868c02f.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{C as e,f as o,D as s,e as n,I as r,J as c,r as i,o as d,P as l,M as u}from"./vendor.2ae12b47.js";const f={beforeRouteLeave(t,a,e){clearInterval(this.inter),e()},data:()=>({inter:null,countdown:5}),mounted(){this.inter=setInterval((()=>{this.countdown--,0==this.countdown&&(clearInterval(this.inter),this.goBack())}),1e3)},methods:{goBack(){this.$router.push("/")}}},v=t=>(r("data-v-31afb51c"),t=t(),c(),t),h={class:"notfound"},p={class:"content"},m=v((()=>s("h1",null,"404",-1))),_=v((()=>s("div",{class:"desc"},"抱歉，你访问的页面不存在",-1)));var b=a(f,[["render",function(a,r,c,f,v,b){const k=t,I=i("el-button");return d(),e("div",h,[o(k,{name:"404"}),s("div",p,[m,_,o(I,{type:"primary",onClick:b.goBack},{default:n((()=>[l(u(v.countdown)+"秒后，返回首页",1)])),_:1},8,["onClick"])])])}],["__scopeId","data-v-31afb51c"]]);export{b as default};
