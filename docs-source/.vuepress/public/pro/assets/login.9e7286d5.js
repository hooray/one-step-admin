
/**
 * 由 One-step-admin 提供技术支持
 * https://hooray.gitee.io/one-step-admin/
 * Powered by One-step-admin
 * https://hooray.github.io/one-step-admin/
 */
    
import{_ as e,a}from"./index.363a16b8.js";import{_ as l}from"./index.621b7b03.js";import{_ as o,d as t,u as s,a as n,r,s as u,o as d,c as p,b as i,w as c,e as m,f as g,v as f,g as v,h as w,i as b,p as h,j as _,k as x,l as y,m as V,n as k,t as $,q as C,x as q,y as z,z as P,A as U}from"./index.93ad63e3.js";const j=e=>(h("data-v-12b4e914"),e=e(),_(),e),F=j((()=>m("div",{class:"bg-banner"},null,-1))),R=j((()=>m("i",{class:"ri-translate"},null,-1))),K={id:"login-box"},L=j((()=>m("div",{class:"login-banner"},null,-1))),O={class:"title-container"},A={class:"title"},I={class:"flex-bar"},B=z("记住我"),D=z("忘记密码"),E={style:{"margin-top":"20px","margin-bottom":"-10px",color:"#666","font-size":"14px","text-align":"center","font-weight":"bold"}},G=j((()=>m("span",{style:{"margin-right":"5px"}},"演示帐号一键登录：",-1))),H=z("admin"),J=z("test"),M=j((()=>m("div",{class:"title-container"},[m("h3",{class:"title"},"重置密码")],-1))),N=t({name:"Login"});var Q=o(Object.assign(N,{setup(o){const{proxy:t}=U(),h=x(),_=y(),j=s(),N=n(),Q=r("login"),S=r({account:u.local.get("login_account"),password:"",remember:u.local.has("login_account")}),T=r({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],password:[{required:!0,trigger:"blur",message:"请输入密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),W=r({account:u.local.get("login_account"),captcha:"",newPassword:""}),X=r({account:[{required:!0,trigger:"blur",message:"请输入用户名"}],captcha:[{required:!0,trigger:"blur",message:"请输入验证码"}],newPassword:[{required:!0,trigger:"blur",message:"请输入新密码"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}]}),Y=r(!1),Z=r("password"),ee=r(null);function ae(){Z.value="password"===Z.value?"":"password",P((()=>{t.$refs.password.focus()}))}function le(){t.$refs.loginFormRef.validate((e=>{e&&(Y.value=!0,N.login(S.value).then((()=>{Y.value=!1,S.value.remember?u.local.set("login_account",S.value.account):u.local.remove("login_account"),_.push(ee.value)})).catch((()=>{Y.value=!1})))}))}function oe(){t.$message({message:"重置密码仅提供界面演示，无实际功能，需开发者自行扩展",type:"info"}),t.$refs.resetFormRef.validate((e=>{}))}function te(e){S.value.account=e,S.value.password="123456",le()}return d((()=>{var e;ee.value=null!=(e=h.query.redirect)?e:"/"})),(o,t)=>{const s=e,n=l,r=V("el-input"),u=V("el-form-item"),d=V("el-checkbox"),h=V("el-button"),_=V("el-form"),x=V("el-col"),y=V("el-row"),P=a;return k(),p("div",null,[F,i(s,{class:"i18n-selector"},{default:c((()=>[R])),_:1}),m("div",K,[L,g(i(_,{ref:"loginFormRef",model:S.value,rules:T.value,class:"login-form",autocomplete:"on","label-position":"left"},{default:c((()=>[m("div",O,[m("h3",A,$(v("One-step-admin 专业版"))+"管理后台",1)]),m("div",null,[i(u,{prop:"account"},{default:c((()=>[i(r,{ref:"name",modelValue:S.value.account,"onUpdate:modelValue":t[0]||(t[0]=e=>S.value.account=e),placeholder:o.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[i(n,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(u,{prop:"password"},{default:c((()=>[i(r,{ref:"password",modelValue:S.value.password,"onUpdate:modelValue":t[1]||(t[1]=e=>S.value.password=e),type:Z.value,placeholder:o.$t("app.password"),tabindex:"2",autocomplete:"on",onKeyup:C(le,["enter"])},{prefix:c((()=>[i(n,{name:"password"})])),suffix:c((()=>[i(n,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type","placeholder","onKeyup"])])),_:1})]),m("div",I,[i(d,{modelValue:S.value.remember,"onUpdate:modelValue":t[2]||(t[2]=e=>S.value.remember=e)},{default:c((()=>[B])),_:1},8,["modelValue"]),i(h,{type:"text",onClick:t[3]||(t[3]=e=>Q.value="reset")},{default:c((()=>[D])),_:1})]),i(h,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:q(le,["prevent"])},{default:c((()=>[z($(o.$t("app.login")),1)])),_:1},8,["loading","onClick"]),m("div",E,[G,i(h,{type:"danger",size:"small",onClick:t[4]||(t[4]=e=>te("admin"))},{default:c((()=>[H])),_:1}),i(h,{type:"danger",size:"small",plain:"",onClick:t[5]||(t[5]=e=>te("test"))},{default:c((()=>[J])),_:1})])])),_:1},8,["model","rules"]),[[f,"login"==Q.value]]),g(i(_,{ref:"resetFormRef",model:W.value,rules:X.value,class:"login-form","auto-complete":"on","label-position":"left"},{default:c((()=>[M,m("div",null,[i(u,{prop:"account"},{default:c((()=>[i(r,{ref:"name",modelValue:W.value.account,"onUpdate:modelValue":t[6]||(t[6]=e=>W.value.account=e),placeholder:o.$t("app.account"),type:"text",tabindex:"1",autocomplete:"on"},{prefix:c((()=>[i(n,{name:"user"})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(u,{prop:"captcha"},{default:c((()=>[i(r,{ref:"captcha",modelValue:W.value.captcha,"onUpdate:modelValue":t[7]||(t[7]=e=>W.value.captcha=e),placeholder:o.$t("app.captcha"),type:"text",tabindex:"2",autocomplete:"on"},{prefix:c((()=>[i(n,{name:"captcha"})])),append:c((()=>[i(h,null,{default:c((()=>[z($(o.$t("app.sendCaptcha")),1)])),_:1})])),_:1},8,["modelValue","placeholder"])])),_:1}),i(u,{prop:"newPassword"},{default:c((()=>[i(r,{ref:"newPassword",modelValue:W.value.newPassword,"onUpdate:modelValue":t[8]||(t[8]=e=>W.value.newPassword=e),type:Z.value,placeholder:o.$t("app.newPassword"),tabindex:"3",autocomplete:"on"},{prefix:c((()=>[i(n,{name:"password"})])),suffix:c((()=>[i(n,{name:"password"===Z.value?"eye":"eye-open",onClick:ae},null,8,["name"])])),_:1},8,["modelValue","type","placeholder"])])),_:1})]),i(y,{gutter:15,style:{"padding-top":"20px"}},{default:c((()=>[i(x,{md:6},{default:c((()=>[i(h,{size:"large",style:{width:"100%"},onClick:t[9]||(t[9]=e=>Q.value="login")},{default:c((()=>[z($(o.$t("app.goLogin")),1)])),_:1})])),_:1}),i(x,{md:18},{default:c((()=>[i(h,{loading:Y.value,type:"primary",size:"large",style:{width:"100%"},onClick:q(oe,["prevent"])},{default:c((()=>[z($(o.$t("app.check")),1)])),_:1},8,["loading","onClick"])])),_:1})])),_:1})])),_:1},8,["model","rules"]),[[f,"reset"==Q.value]])]),v(j).copyright.enable?(k(),w(P,{key:0})):b("v-if",!0)])}}}),[["__scopeId","data-v-12b4e914"]]);export{Q as default};
