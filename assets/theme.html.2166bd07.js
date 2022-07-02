import{_ as s,d as n}from"./app.59c2e06b.js";const a={},e=n(`<h1 id="\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898" aria-hidden="true">#</a> \u4E3B\u9898</h1><h2 id="\u57FA\u7840\u7248" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7248" aria-hidden="true">#</a> \u57FA\u7840\u7248</h2><p>\u57FA\u7840\u7248\u4E3B\u9898\u6837\u5F0F\u5B58\u653E\u5728 <code>/src/assets/styles/resources/themes.scss</code> \u6587\u4EF6\u4E2D\uFF0C\u5747\u4E3A scss \u53D8\u91CF\uFF0C\u4FEE\u6539\u540E\u5373\u53EF\u5728\u9875\u9762\u4E0A\u67E5\u770B\u6548\u679C\u3002</p><h2 id="\u4E13\u4E1A\u7248" tabindex="-1"><a class="header-anchor" href="#\u4E13\u4E1A\u7248" aria-hidden="true">#</a> \u4E13\u4E1A\u7248</h2><p>\u4E0E\u57FA\u7840\u7248\u4E0D\u540C\uFF0C\u4E13\u4E1A\u7248\u9ED8\u8BA4\u63D0\u4F9B\u4E86 6 \u6B3E\u4E3B\u9898\uFF0C\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u5C31\u53EF\u8F7B\u677E\u5207\u6362\u3002\u5E76\u4E14\u591A\u6B3E\u4E3B\u9898\u5171\u5B58\uFF0C\u652F\u6301\u5728\u9879\u76EE\u8FD0\u884C\u65F6\u52A8\u6001\u5207\u6362\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * \u4E3B\u9898\uFF0C\u9ED8\u8BA4\u63D0\u4F9B 6 \u6B3E
 * default \u9ED8\u8BA4
 * vue-cli Vue CLI \u98CE\u683C
 * gitee \u7801\u4E91\u98CE\u683C
 * freshness \u6E05\u65B0
 * elegant \u7D20\u96C5
 * pure-white \u7EAF\u767D
 */</span>
<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span>
</code></pre></div><p>\u5982\u679C\u6846\u67B6\u63D0\u4F9B\u7684\u4E3B\u9898\u98CE\u683C\u6EE1\u8DB3\u4E0D\u4E86\u4F60\u7684\u9700\u6C42\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65B0\u7684\u4E3B\u9898\uFF0C\u5728 <code>/src/assets/styles/resources/</code> \u76EE\u5F55\u91CC\uFF0C <code>theme-*.scss</code> \u5373\u4E3B\u9898\u6837\u5F0F\u6587\u4EF6\uFF0C\u4EE5\u9ED8\u8BA4\u4E3B\u9898\u4E3A\u4F8B\uFF1A</p><div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-default</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token comment">// \u4E3B\u533A\u57DF\u80CC\u666F\u8272</span>
    <span class="token property">g-main-bg</span><span class="token punctuation">:</span> #f0f2f5<span class="token punctuation">,</span>
    <span class="token comment">// \u3010\u5934\u90E8\u3011</span>
    <span class="token comment">// \u5934\u90E8\u80CC\u666F\u8272</span>
    <span class="token property">g-header-bg</span><span class="token punctuation">:</span> #222b45<span class="token punctuation">,</span>
    <span class="token comment">// \u5934\u90E8\u5BFC\u822A\u6587\u5B57\u989C\u8272</span>
    <span class="token property">g-header-menu-color</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">,</span>
    <span class="token comment">// \u5934\u90E8\u5BFC\u822A\u6587\u5B57\u9009\u4E2D\u989C\u8272</span>
    <span class="token property">g-header-menu-active-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">,</span>
    <span class="token comment">// \u5934\u90E8\u5BFC\u822A\u9009\u4E2D\u80CC\u666F\u8272</span>
    <span class="token property">g-header-menu-active-bg</span><span class="token punctuation">:</span> #334067<span class="token punctuation">,</span>
    ...
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u9ED8\u8BA4\u4E3B\u9898\u7684\u6837\u5F0F\u90FD\u5B58\u653E\u5728 <code>$theme-default</code> \u8FD9\u4E2A\u53D8\u91CF\u91CC\uFF0C\u6240\u4EE5\u5982\u679C\u60F3\u521B\u5EFA\u4E00\u4E2A\u65B0\u4E3B\u9898\uFF0C\u4F60\u53EF\u4EE5\u5C06 <code>theme-default.scss</code> \u6587\u4EF6\u590D\u5236\u4E00\u4EFD\uFF0C\u4F8B\u5982\u6211\u4EEC\u8981\u589E\u52A0\u4E00\u4E2A\u7EA2\u8272\u4E3B\u9898\uFF0C\u5219\u9700\u8981\u5C06\u6587\u4EF6\u540D\u6539\u4E3A <code>theme-red.scss</code> \uFF0C\u7136\u540E\u5C06\u6587\u4EF6\u91CC\u7684 <code>$theme-default</code> \u53D8\u91CF\u540D\u4E5F\u4FEE\u6539\u4E3A <code>$theme-red</code> \uFF0C\u6700\u540E\u6253\u5F00 <code>/src/assets/styles/resources/themes.scss</code> \u6587\u4EF6\uFF0C\u7136\u540E\u589E\u52A0\u4EE5\u4E0B\u4E00\u884C\u4EE3\u7801\u5373\u53EF\u3002</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$themes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token property">default</span><span class="token punctuation">:</span> <span class="token variable">$theme-default</span><span class="token punctuation">,</span>
    <span class="token property">vue-cli</span><span class="token punctuation">:</span> <span class="token variable">$theme-vue-cli</span><span class="token punctuation">,</span>
    <span class="token property">gitee</span><span class="token punctuation">:</span> <span class="token variable">$theme-gitee</span><span class="token punctuation">,</span>
    <span class="token property">freshness</span><span class="token punctuation">:</span> <span class="token variable">$theme-freshness</span><span class="token punctuation">,</span>
    <span class="token property">elegant</span><span class="token punctuation">:</span> <span class="token variable">$theme-elegant</span><span class="token punctuation">,</span>
    <span class="token property">pure-white</span><span class="token punctuation">:</span> <span class="token variable">$theme-pure-white</span><span class="token punctuation">,</span>
	<span class="token property">red</span><span class="token punctuation">:</span> <span class="token variable">$theme-red</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u540E\u5728\u6846\u67B6\u914D\u7F6E\u91CC\u4FEE\u6539\u4E3B\u9898\u4E3A <code>red</code> \u5C31\u53EF\u4EE5\u8C03\u7528\u8FD9\u4E2A\u6211\u4EEC\u521B\u5EFA\u7684\u4E3B\u9898\u4E86\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;red&#39;</span>
</code></pre></div>`,12);function t(p,c){return e}var l=s(a,[["render",t],["__file","theme.html.vue"]]);export{l as default};
