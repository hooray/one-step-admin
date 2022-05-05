import{_ as o,r,o as c,c as i,a as e,b as a,w as p,F as d,d as n,e as t}from"./app.9d3d0d51.js";const h={},u=n(`<h1 id="\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A" aria-hidden="true">#</a> \u5BFC\u822A</h1><p>\u9879\u76EE\u5BFC\u822A\u914D\u7F6E\u5B58\u653E\u5728 <code>/src/menu/modules/</code> \u76EE\u5F55\u4E0B\uFF0C\u6BCF\u4E00\u4E2A js \u6587\u4EF6\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u5BFC\u822A\u6A21\u5757\u3002</p><p>\u6240\u6709\u914D\u7F6E\u7684\u5BFC\u822A\u6A21\u5757\u5747\u9700\u8981\u5728 <code>/src/menu/index.js</code> \u6587\u4EF6\u91CC\u8FDB\u884C\u5F15\u5165\u5E76\u653E\u5230\u4E3B\u5BFC\u822A\u4E0B\u3002</p><h3 id="\u4E00\u7EA7\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u4E00\u7EA7\u5BFC\u822A" aria-hidden="true">#</a> \u4E00\u7EA7\u5BFC\u822A</h3><p>\u4E00\u4E2A\u5BFC\u822A\u6A21\u5757\u5305\u542B\u4EE5\u4E0B\u7ED3\u6784\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowName</span><span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F\u4E8B\u9879</p><ul><li>\u6574\u4E2A\u9879\u76EE\u6240\u6709\u5BFC\u822A\u7684 <code>windowName</code> \u4E0D\u80FD\u91CD\u590D</li></ul></div><h3 id="\u591A\u7EA7\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u591A\u7EA7\u5BFC\u822A" aria-hidden="true">#</a> \u591A\u7EA7\u5BFC\u822A</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A\u9875\u9762&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">windowName</span><span class="token operator">:</span> <span class="token string">&#39;Example&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5916\u94FE" tabindex="-1"><a class="header-anchor" href="#\u5916\u94FE" aria-hidden="true">#</a> \u5916\u94FE</h3><p>\u53EA\u9700\u8981\u5C06 <code>windowName</code> \u8BBE\u7F6E\u4E3A\u9700\u8981\u8DF3\u8F6C\u7684 HTTP \u5730\u5740\u5373\u53EF\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5B98\u7F51&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowName</span><span class="token operator">:</span> <span class="token string">&#39;https://hooray.gitee.io/one-step-admin/&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4E3B\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u5BFC\u822A" aria-hidden="true">#</a> \u4E3B\u5BFC\u822A</h3><p>\u4E3B\u5BFC\u822A\u4F1A\u5C06\u6211\u4EEC\u914D\u7F6E\u597D\u7684\u5BFC\u822A\u6A21\u5757\u8FDB\u884C\u5F52\u7C7B\uFF0C\u5728 <code>/src/menu/index.js</code> \u91CC\u8FDB\u884C\u8BBE\u7F6E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u6F14\u793A&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;sidebar-default&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            WindowExample<span class="token punctuation">,</span>
            ComponentBasicExample
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u5176\u5B83&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;sidebar-other&#39;</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            MockExample<span class="token punctuation">,</span>
            PermissionExample
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E3B\u5BFC\u822A\u53EA\u9700\u8BBE\u7F6E <code>title</code> \u3001<code>icon</code> \u548C <code>children</code> \u4E09\u4E2A\u53C2\u6570\uFF0C\u5176\u4E2D <code>children</code> \u5219\u662F\u5B58\u653E\u6211\u4EEC\u914D\u7F6E\u7684\u5BFC\u822A\u6A21\u5757\u6570\u636E\u3002</p><h2 id="\u5BFC\u822A\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u914D\u7F6E" aria-hidden="true">#</a> \u5BFC\u822A\u914D\u7F6E</h2><h3 id="title" tabindex="-1"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">\u2714\uFE0F</td><td style="text-align:left;">\u5BFC\u822A\u5C55\u793A\u7684\u6807\u9898</td></tr></tbody></table><h3 id="windowname" tabindex="-1"><a class="header-anchor" href="#windowname" aria-hidden="true">#</a> windowName</h3><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">\u2714\uFE0F</td><td style="text-align:left;">\u7A97\u53E3\u7EC4\u4EF6\u540D\uFF0C\u786E\u4FDD\u552F\u4E00</td></tr></tbody></table>`,21),y={id:"i18n",tabindex:"-1"},g=e("a",{class:"header-anchor",href:"#i18n","aria-hidden":"true"},"#",-1),b=t(" i18n "),k=n('<table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:left;">\u6807\u9898\u56FD\u9645\u5316\u5BF9\u5E94\u7684 key \u503C</td></tr></tbody></table>',1),x={id:"notitle",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#notitle","aria-hidden":"true"},"#",-1),_=t(" noTitle "),f=n('<table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">boolean</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u7A97\u53E3\u6807\u9898\u680F</td></tr></tbody></table><h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> icon</h3><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">string</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:center;">/</td><td style="text-align:left;">\u5BFC\u822A\u4E2D\u663E\u793A\u7684\u56FE\u6807</td></tr></tbody></table>',3),v=t("\u8BE5\u9879\u914D\u7F6E\u6700\u7EC8\u4F1A\u901A\u8FC7 "),w=e("code",null,"<svg-icon />",-1),j=t(" \u7EC4\u4EF6\u8FDB\u884C\u5C55\u793A\uFF0C\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u4E5F\u53EF\u4F7F\u7528 Iconify \u63D0\u4F9B\u7684\u56FE\u6807\uFF0C\u8BE6\u7EC6\u53EF\u9605\u8BFB\u300A"),E=t("SVG \u56FE\u6807"),B=t("\u300B\u3002"),N=n('<h3 id="auth" tabindex="-1"><a class="header-anchor" href="#auth" aria-hidden="true">#</a> auth</h3><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">string / array</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:left;">\u8BE5\u8DEF\u7531\u8BBF\u95EE\u6743\u9650\uFF0C\u652F\u6301\u591A\u4E2A\u6743\u9650\u53E0\u52A0\uFF0C\u53EA\u8981\u6EE1\u8DB3\u4E00\u4E2A\uFF0C\u5373\u53EF\u8FDB\u5165</td></tr></tbody></table>',2),V=t("\u7528\u6237\u5728\u767B\u5F55\u65F6\uFF0C\u4F1A\u83B7\u53D6\u7528\u6237\u6743\u9650\uFF0C\u6839\u636E\u6743\u9650\u53BB\u8FC7\u6EE4\u5E76\u52A8\u6001\u6CE8\u518C\u8DEF\u7531\u3002\u6240\u4EE5\u6CA1\u6709\u6743\u9650\u7684\u8DEF\u7531\u4E0D\u4F1A\u88AB\u6CE8\u518C\uFF0C\u4E5F\u4E0D\u4F1A\u5728\u4FA7\u8FB9\u680F\u5BFC\u822A\u91CC\u663E\u793A\uFF0C\u8BE6\u7EC6\u53EF\u9605\u8BFB\u300A"),R=t("\u6743\u9650 - \u8DEF\u7531\u6743\u9650"),T=t("\u300B\u3002"),C={id:"badge",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),S=t(" badge "),A=n(`<table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">boolean / number / string</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:left;">\u5BFC\u822A\u6807\u8BB0</td></tr></tbody></table><p>\u8BBE\u7F6E\u4E0D\u540C\u7684\u7C7B\u578B\u503C\uFF0C\u5C55\u793A\u6548\u679C\u4E5F\u4F1A\u4E0D\u540C\u3002</p><ul><li><code>boolean</code> \u5C55\u793A\u5F62\u5F0F\u4E3A\u70B9\uFF0C\u5F53\u503C\u4E3A false \u65F6\u9690\u85CF</li><li><code>number</code> \u5C55\u793A\u5F62\u5F0F\u4E3A\u6587\u672C\uFF0C\u5F53\u503C\u5C0F\u4E8E\u7B49\u4E8E 0 \u65F6\u9690\u85CF</li><li><code>string</code> \u5C55\u793A\u5F62\u5F0F\u4E3A\u6587\u672C\uFF0C\u5F53\u503C\u4E3A\u7A7A\u65F6\u9690\u85CF</li></ul><p>\u5982\u679C\u6807\u8BB0\u9700\u8981\u52A8\u6001\u66F4\u65B0\uFF0C\u8BF7\u8BBE\u7F6E\u4E3A\u7BAD\u5934\u51FD\u6570\u5F62\u5F0F\uFF0C\u5E76\u8FD4\u56DE\u5916\u90E8\u53D8\u91CF\uFF0C\u4F8B\u5982\u642D\u914D pinia \u4E00\u8D77\u4F7F\u7528\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function-variable function">badge</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> globalStore<span class="token punctuation">.</span>number
</code></pre></div><h3 id="params" tabindex="-1"><a class="header-anchor" href="#params" aria-hidden="true">#</a> params</h3><table><thead><tr><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u662F\u5426\u5FC5\u987B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">object</td><td style="text-align:center;">\u2716\uFE0F</td><td style="text-align:left;">\u7A97\u53E3\u5916\u90E8\u4F20\u5165\u53C2\u6570</td></tr></tbody></table><p>\u8BE5\u5C5E\u6027\u901A\u5E38\u4E0D\u5728\u5BFC\u822A\u91CC\u76F4\u63A5\u914D\u7F6E\uFF0C\u800C\u662F\u901A\u8FC7\u8C03\u7528\u5168\u5C40 <code>this.$window.add()</code> \u6253\u5F00\u975E\u5BFC\u822A\u7A97\u53E3\u65F6\u52A8\u6001\u4F20\u5165\u7A97\u53E3\u6240\u9700\u8981\u7684\u53C2\u6570\u3002</p><h2 id="\u540E\u7AEF\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF\u751F\u6210" aria-hidden="true">#</a> \u540E\u7AEF\u751F\u6210</h2><p>\u5728\u6846\u67B6\u914D\u7F6E\u91CC\u5F00\u542F\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">enableBackendReturnMenu</span><span class="token operator">:</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5F00\u542F\u540E\u8BBF\u95EE <code>/src/store/modules/menu.js</code> \u6587\u4EF6\uFF0C\u627E\u5230 <code>generateRoutesAtBack()</code> \u8FD9\u4E2A action \u65B9\u6CD5\uFF0C\u4F60\u8981\u505A\u7684\u5C31\u662F\u4FEE\u6539\u8FD9\u4E2A\u65B9\u6CD5\u91CC\u7684\u8BF7\u6C42\u5730\u5740\uFF0C\u8BF7\u6C42\u8FD4\u56DE\u7684\u6570\u636E\u5C31\u662F\u5BFC\u822A\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u5728 <code>/src/mock/menu.js</code> \u91CC\u67E5\u770B mock \u6570\u636E\u3002</p><p>\u5F00\u542F\u540E\u7AEF\u751F\u6210\u540E\uFF0C\u5BFC\u822A\u6743\u9650\u6709\u4E24\u79CD\u505A\u6CD5\uFF0C\u4E00\u79CD\u662F\u540E\u7AEF\u76F4\u63A5\u8FD4\u56DE\u7528\u6237\u5177\u5907\u8BBF\u95EE\u6743\u9650\u7684\u5BFC\u822A\u6570\u636E\uFF0C\u53E6\u4E00\u79CD\u5219\u8FD4\u56DE\u5168\u90E8\u7684\u5BFC\u822A\u7684\u6570\u636E\uFF0C\u8BA9\u6846\u67B6\u81EA\u884C\u5904\u7406\u3002\u4E24\u79CD\u505A\u6CD5\u7684\u533A\u522B\u5728\u4E8E\u7B2C\u4E00\u79CD\u8FD4\u56DE\u7684\u5BFC\u822A\u6570\u636E\u91CC\uFF0C\u65E0\u9700\u8BBE\u7F6E auth \u53C2\u6570\u3002</p>`,13);function L(M,P){const s=r("Badge"),l=r("RouterLink");return c(),i(d,null,[u,e("h3",y,[g,b,a(s,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),k,e("h3",x,[m,_,a(s,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),f,e("p",null,[v,w,j,a(l,{to:"/guide/svg-icon.html"},{default:p(()=>[E]),_:1}),B]),N,e("p",null,[V,a(l,{to:"/guide/permission.html#%E8%B7%AF%E7%94%B1%E6%9D%83%E9%99%90"},{default:p(()=>[R]),_:1}),T]),e("h3",C,[F,S,a(s,{type:"tip",text:"\u4E13\u4E1A\u7248",vertical:"top"})]),A],64)}var G=o(h,[["render",L],["__file","menu.html.vue"]]);export{G as default};