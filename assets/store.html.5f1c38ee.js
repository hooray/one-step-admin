import{_ as t,r as o,o as p,c,a as n,b as e,F as r,e as s,d as l}from"./app.59c2e06b.js";const i={},u=n("h1",{id:"\u5168\u5C40\u72B6\u6001\u7BA1\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5168\u5C40\u72B6\u6001\u7BA1\u7406","aria-hidden":"true"},"#"),s(" \u5168\u5C40\u72B6\u6001\u7BA1\u7406")],-1),k={class:"custom-container tip"},d=n("p",{class:"custom-container-title"},"\u8BF4\u660E",-1),_={href:"https://pinia.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},m=s("Pinia"),h=s(" \u5DF2\u6B63\u5F0F\u6210\u4E3A Vue.js \u5B98\u65B9\u72B6\u6001\u5E93\uFF0C\u672C\u6846\u67B6\u4E5F\u4ECE Vuex \u66FF\u6362\u4E3A Pinia \u3002"),f=n("p",null,"\u5982\u679C\u4F60\u5BF9 Pinia \u8FD8\u4E0D\u719F\u6089\uFF0C\u6211\u6536\u96C6\u4E86\u4E00\u4E9B\u6587\u5B57/\u89C6\u9891\u7684\u4ECB\u7ECD\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u901F\u4E0A\u624B\u3002",-1),x={href:"https://mp.weixin.qq.com/s/_OlLFedVJfyEapGzYFETuw",target:"_blank",rel:"noopener noreferrer"},g=s("\u6B27\u8036\uFF01Pinia \u6B63\u5F0F\u6210\u4E3A vuejs \u7684\u4E00\u5458"),v={href:"https://mp.weixin.qq.com/s/4B-ZzOXdYrF-Auvm_wWBVQ",target:"_blank",rel:"noopener noreferrer"},w=s("\u5168\u65B0\u7684 Vue3 \u72B6\u6001\u7BA1\u7406\u5DE5\u5177\uFF1APinia"),y={href:"https://www.bilibili.com/video/BV1Mb4y1X7NL/",target:"_blank",rel:"noopener noreferrer"},V=s("\u3010\u63A2\u7D22\u5B66\u4E60\u3011\u9762\u5411\u672A\u6765\u7684 Vuex -- pinia"),b=l(`<p>\u5168\u5C40\u72B6\u6001\u6587\u4EF6\u5B58\u653E\u5728 <code>/src/store/modules/</code> \u76EE\u5F55\u4E0B\uFF0C\u8BF7\u6309\u6A21\u5757\u8FDB\u884C\u533A\u5206\u3002\u540C\u65F6\u8BF7\u4FDD\u8BC1\u6587\u4EF6\u540D\u548C\u6587\u4EF6\u5185\u552F\u4E00ID\u4FDD\u6301\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u4F7F\u7528 <code>pnpm new</code> \u6307\u4EE4\u8FDB\u884C\u521B\u5EFA\u3002</p><p>\u4F8B\u5982\u65B0\u5EFA\u4E00\u4E2A <code>example.js</code> \u7684\u6587\u4EF6\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> useExampleStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span>
    <span class="token comment">// \u552F\u4E00ID</span>
    <span class="token string">&#39;example&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useExampleStore
</code></pre></div><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> useExampleStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/modules/example&#39;</span>
<span class="token keyword">const</span> exampleStore <span class="token operator">=</span> <span class="token function">useExampleStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

exampleStore<span class="token punctuation">.</span>data
exampleStore<span class="token punctuation">.</span><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,5);function j(S,E){const a=o("ExternalLinkIcon");return p(),c(r,null,[u,n("div",k,[d,n("p",null,[n("a",_,[m,e(a)]),h]),f,n("ul",null,[n("li",null,[n("a",x,[g,e(a)])]),n("li",null,[n("a",v,[w,e(a)])]),n("li",null,[n("a",y,[V,e(a)])])])]),b],64)}var F=t(i,[["render",j],["__file","store.html.vue"]]);export{F as default};
