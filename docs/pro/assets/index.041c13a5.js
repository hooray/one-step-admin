
/**
 * 由 Fantastic-admin-discovery 提供技术支持
 * https://hooray.gitee.io/fantastic-admin-discovery/
 * Powered by Fantastic-admin-discovery
 * https://hooray.github.io/fantastic-admin-discovery/
 */
    
import{_ as c}from"./index.1ee8d9f4.js";import{_ as m}from"./index.e01cfd04.js";import{_ as f}from"./plugin-vue_export-helper.5a098b48.js";import{r,I as x,l as e,j as o,o as b,T as d}from"./vendor.6b4522dc.js";const v={data(){return{input:"",input2:""}},methods:{copy(){this.$clipboard(this.input),this.$message.success(`\u590D\u5236\u6210\u529F\uFF1A${this.input}`)},open(l){window.open(l,"top")}}},V=d("vue3-clipboard \u5B98\u7F51"),g=d("\u590D\u5236");function h(l,t,k,j,n,i){const s=r("el-button"),a=m,u=r("el-input"),_=c;return b(),x("div",null,[e(a,{title:"\u526A\u8D34\u677F"},{default:o(()=>[e(s,{icon:"el-icon-link",onClick:t[0]||(t[0]=p=>i.open("https://github.com/soerenmartius/vue3-clipboard"))},{default:o(()=>[V]),_:1})]),_:1}),e(_,{title:"\u8F93\u5165\u5185\u5BB9\uFF0C\u5E76\u70B9\u51FB\u590D\u5236\u6309\u94AE"},{default:o(()=>[e(u,{modelValue:n.input,"onUpdate:modelValue":t[1]||(t[1]=p=>n.input=p)},{append:o(()=>[e(s,{onClick:i.copy},{default:o(()=>[g]),_:1},8,["onClick"])]),_:1},8,["modelValue"])]),_:1}),e(_,{title:"\u590D\u5236\u6210\u529F\u540E\u53EF\u5728\u8FD9\u7C98\u8D34\u6D4B\u8BD5"},{default:o(()=>[e(u,{modelValue:n.input2,"onUpdate:modelValue":t[2]||(t[2]=p=>n.input2=p)},null,8,["modelValue"])]),_:1})])}var N=f(v,[["render",h]]);export{N as default};