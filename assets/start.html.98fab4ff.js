import{_ as n,r as c,o as a,c as d,a as t,b as p,w as i,F as r,d as e,e as o}from"./app.59c2e06b.js";const l={},u=e(`<h1 id="\u5F00\u59CB" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a> \u5F00\u59CB</h1><p>\u505A\u597D\u51C6\u5907\u5DE5\u4F5C\u540E\uFF0C\u8BF7\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token function">pnpm</span> <span class="token function">install</span>

<span class="token comment"># \u8FD0\u884C</span>
<span class="token function">pnpm</span> run dev
</code></pre></div><p>\u8FD0\u884C\u6210\u529F\u540E\uFF0C\u4F1A\u81EA\u52A8\u8BBF\u95EE\u9875\u9762\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5730\u5740\u4E3A <code>http://localhost:9000</code></p>`,4),m={class:"custom-container warning"},_=e('<p class="custom-container-title">\u6CE8\u610F</p><p>husky \u5728\u5B89\u88C5\u65F6\u4F1A\u68C0\u6D4B\u5F53\u524D\u76EE\u5F55\u4E0B\u662F\u5426\u5B58\u5728 <code>.git/</code> \u76EE\u5F55\uFF0C\u6240\u4EE5\u8BF7\u786E\u4FDD\u5DF2\u7ECF\u4F7F\u7528 <code>git init</code> \u5BF9\u9879\u76EE\u8FDB\u884C\u8FC7 git \u73AF\u5883\u521D\u59CB\u5316\uFF0C\u5426\u5219\u4F1A\u63D0\u793A husky \u5B89\u88C5\u5931\u8D25\u3002\u4F46\u5982\u679C\u6846\u67B6\u6839\u76EE\u5F55\u5E76\u4E0D\u662F\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u4F8B\u5982\u9879\u76EE\u76EE\u5F55\u662F <code>project/</code> \uFF0C\u800C\u6846\u67B6\u76EE\u5F55\u662F <code>project/one-step-admin/</code> \u7684\u8BDD\uFF0C\u5219\u9700\u8981\u5728 <code>package.json</code> \u91CC\u627E\u5230 <code>&quot;prepare&quot;: &quot;husky install&quot;</code> \u5E76\u4FEE\u6539\u4E3A <code>&quot;prepare&quot;: &quot;cd .. &amp;&amp; husky install&quot;</code> \u3002</p>',2),h=o("\u4E86\u89E3\u66F4\u591A\u8BF7\u9605\u8BFB\u300A"),g=o("\u4EE3\u7801\u89C4\u8303 - husky & lint-staged"),k=o("\u300B\u3002"),f=e('<div class="custom-container warning"><p class="custom-container-title">\u8FD0\u884C\u62A5\u9519</p><p>\u5982\u679C\u8FD0\u884C\u63D0\u793A\u300C &#39;vite&#39; \u4E0D\u662F\u5185\u90E8\u6216\u5916\u90E8\u547D\u4EE4\uFF0C\u4E5F\u4E0D\u662F\u53EF\u8FD0\u884C\u7684\u7A0B\u5E8F\u6216\u6279\u5904\u7406\u6587\u4EF6 \u300D\uFF0C\u53EF\u80FD\u662F\u56E0\u4E3A\u4F9D\u8D56\u672A\u5B89\u88C5\u6210\u529F\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u6267\u884C <code>pnpm config set registry http://registry.npm.taobao.org</code> \u5207\u6362\u4E3A\u56FD\u5185\u6DD8\u5B9D\u6E90\u540E\uFF0C\u5220\u9664\u6839\u76EE\u5F55\u4E0B <code>./node_modules</code> \u6587\u4EF6\u5939\u5E76\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002</p><p>\u5982\u679C\u4F9D\u65E7\u65E0\u6CD5\u8FD0\u884C\uFF0C\u53EF\u5C1D\u8BD5\u5220\u9664\u6839\u76EE\u5F55\u4E0B <code>./node_modules</code> \u6587\u4EF6\u5939\u4E0E <code>pnpm-lock.yaml</code> \u6587\u4EF6\u540E\u91CD\u65B0\u5B89\u88C5\uFF0C\u6216\u4F7F\u7528 <code>npm / yarn</code> \u8FDB\u884C\u5B89\u88C5\u4F9D\u8D56\u3002\u4F46\u9700\u8981\u6E05\u695A\uFF0C\u8FD9\u6837\u64CD\u4F5C\u5C06\u65E0\u6CD5\u4E0E\u5B98\u65B9\u73AF\u5883\u9501\u5B9A\u7684\u4F9D\u8D56\u5305\u7248\u672C\u4FDD\u6301\u4E00\u81F4\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u65E0\u6CD5\u9884\u77E5\u7684\u95EE\u9898\u3002\u975E\u5FC5\u8981\u60C5\u51B5\u4E0B\uFF0C\u8BF7\u52FF\u5220\u9664 <code>pnpm-lock.yaml</code> \u6216\u4F7F\u7528\u5176\u5B83\u4F9D\u8D56\u5305\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u3002</p></div>',1);function y(v,q){const s=c("RouterLink");return a(),d(r,null,[u,t("div",m,[_,t("p",null,[h,p(s,{to:"/guide/coding-standard.html#husky-lint-staged"},{default:i(()=>[g]),_:1}),k])]),f],64)}var b=n(l,[["render",y],["__file","start.html.vue"]]);export{b as default};
