import{_ as r,r as c,o as i,c as u,a as n,b as a,w as t,F as k,e as s,d as e}from"./app.59c2e06b.js";const d={},g=n("h1",{id:"\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92","aria-hidden":"true"},"#"),s(" \u4E0E\u670D\u52A1\u7AEF\u4EA4\u4E92")],-1),h=s("\u6846\u67B6\u4F7F\u7528 "),m={href:"https://axios-http.com/",target:"_blank",rel:"noopener noreferrer"},_=s("Axios"),y=s(" \u505A\u4E3A\u5F02\u6B65\u8BF7\u6C42\u5DE5\u5177\uFF0C\u5E76\u8FDB\u884C\u4E86\u7B80\u5355\u7684\u5C01\u88C5\u3002"),v=e('<h2 id="\u63A5\u53E3\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF7\u6C42" aria-hidden="true">#</a> \u63A5\u53E3\u8BF7\u6C42</h2><h3 id="\u8BBE\u7F6E-baseurl" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E-baseurl" aria-hidden="true">#</a> \u8BBE\u7F6E baseURL</h3><p>\u5728\u6839\u76EE\u5F55 <code>.env.*</code> \u6587\u4EF6\u91CC\u7684 <code>VITE_APP_API_BASEURL</code> \u8FD9\u4E2A\u53C2\u6570\u5C31\u662F\u914D\u7F6E axios \u7684 <code>baseURL</code> \u3002</p><p>\u4F8B\u5982\u9879\u76EE\u7684\u771F\u5B9E\u63A5\u53E3\u8BF7\u6C42\u5730\u5740\u4E3A\uFF1A</p><ul><li><code>http://api.test.com/news/list</code></li><li><code>http://api.test.com/news/create</code></li><li><code>http://api.test.com/shop/info</code></li></ul><p>\u5219\u53EF\u8BBE\u7F6E\u4E3A <code>VITE_APP_API_BASEURL = http://api.test.com/</code> \u3002</p><h3 id="\u8BF7\u6C42\u8C03\u7528" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u8C03\u7528" aria-hidden="true">#</a> \u8BF7\u6C42\u8C03\u7528</h3><p>\u5E38\u7528\u7684 get \u548C post \u8BF7\u6C42\u53EF\u4F7F\u7528\u4EE5\u4E0B\u7684\u65B9\u6CD5\uFF1A</p>',8),x=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'news/list'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"page"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"size"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"10"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u540E\u7EED\u4E1A\u52A1\u4EE3\u7801"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),f=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'news/create'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65B0\u95FB\u6807\u9898'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u65B0\u95FB\u5185\u5BB9'"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u540E\u7EED\u4E1A\u52A1\u4EE3\u7801"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])])],-1),b=e('<h3 id="\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#\u62E6\u622A\u5668" aria-hidden="true">#</a> \u62E6\u622A\u5668</h3><p>\u5728 <code>/src/api/index.js</code> \u6587\u4EF6\u91CC\u5B9E\u4F8B\u5316\u4E86 axios \u5BF9\u8C61\uFF0C\u5E76\u5BF9 <code>request</code> \u548C <code>response</code> \u8BBE\u7F6E\u4E86\u62E6\u622A\u5668\uFF0C\u62E6\u622A\u5668\u7684\u7528\u5904\u5C31\u662F\u62E6\u622A\u6BCF\u4E00\u6B21\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u7136\u540E\u505A\u4E00\u4E9B\u5168\u5C40\u7684\u5904\u7406\u3002\u4F8B\u5982\u63A5\u53E3\u54CD\u5E94\u62A5\u9519\uFF0C\u53EF\u4EE5\u5728\u62E6\u622A\u5668\u91CC\u7528\u7EDF\u4E00\u7684\u62A5\u9519\u63D0\u793A\u6765\u5C55\u793A\uFF0C\u65B9\u4FBF\u4E1A\u52A1\u5F00\u53D1\u3002\u4F46\u56E0\u4E3A\u6BCF\u4E2A\u516C\u53F8\u63D0\u4F9B\u7684\u63A5\u53E3\u6807\u51C6\u4E0D\u540C\uFF0C\u6240\u4EE5\u8BE5\u6587\u4EF6\u62E6\u622A\u5668\u90E8\u5206\u7684\u4EE3\u7801\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u53BB\u4FEE\u6539\u8C03\u6574\u3002</p><p>\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C\u9996\u5148\u521D\u59CB\u5316 axios \u5BF9\u8C61\uFF0C\u7136\u540E <code>axios.interceptors.request.use()</code> \u548C <code>axios.interceptors.response.use()</code> \u5C31\u5206\u522B\u662F\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u62E6\u622A\u4EE3\u7801\u4E86\u3002</p><p>\u53C2\u8003\u4EE3\u7801\u91CC\u53EA\u505A\u4E86\u7B80\u5355\u7684\u62E6\u622A\u5904\u7406\uFF0C\u4F8B\u5982\u8BF7\u6C42\u7684\u65F6\u5019\u4F1A\u81EA\u52A8\u5E26\u4E0A token \uFF0C\u54CD\u5E94\u7684\u65F6\u5019\u4F1A\u6839\u636E\u9519\u8BEF\u4FE1\u606F\u5224\u65AD\u662F\u767B\u5F55\u5931\u6548\u8FD8\u662F\u63A5\u53E3\u62A5\u9519\uFF0C\u5E76\u505A\u76F8\u5E94\u52A8\u4F5C\u3002</p><h2 id="\u8DE8\u57DF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u57DF\u5904\u7406" aria-hidden="true">#</a> \u8DE8\u57DF\u5904\u7406</h2><p>\u751F\u4EA7\u73AF\u5883\u7684\u8DE8\u57DF\u9700\u8981\u670D\u52A1\u7AEF\u53BB\u89E3\u51B3\uFF0C\u5F00\u53D1\u73AF\u5883\u7684\u8DE8\u57DF\u95EE\u9898\u53EF\u5728\u672C\u5730\u8BBE\u7F6E\u4EE3\u7406\u89E3\u51B3\u3002\u5982\u679C\u672C\u5730\u5F00\u53D1\u73AF\u5883\u8BF7\u6C42\u63A5\u53E3\u63D0\u793A\u8DE8\u57DF\uFF0C\u53EF\u4EE5\u8BBE\u7F6E <code>.env.development</code> \u6587\u4EF6\u91CC <code>VITE_OPEN_PROXY = true</code> \u5F00\u542F\u4EE3\u7406\u3002</p>',6),w=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'news/list'"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// http://localhost:3000/proxy/news/list"),s(`
`)])])],-1),j=n("div",{class:"language-javascript ext-js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("$api"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"post"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'news/add'"),n("span",{class:"token punctuation"},")"),s("  "),n("span",{class:"token comment"},"// http://localhost:3000/proxy/news/add"),s(`
`)])])],-1),P=e(`<p>\u5F00\u542F\u4EE3\u7406\u540E\uFF0C\u539F\u6709\u8BF7\u6C42\u90FD\u4F1A\u88AB\u6307\u5411\u5230\u672C\u5730 <code>http://localhost:3000/proxy</code> \uFF0C\u56E0\u4E3A <code>/proxy</code> \u5339\u914D\u5230\u4E86 vite.config.js \u91CC\u4EE3\u7406\u90E8\u5206\u7684\u8BBE\u7F6E\uFF0C\u6240\u4EE5\u5B9E\u9645\u662F\u8BF7\u6C42\u4F9D\u65E7\u662F <code>VITE_APP_API_BASEURL</code> \u6240\u8BBE\u7F6E\u7684\u5730\u5740\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js \u4E2D proxy \u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u5373\u7528\u4E8E\u4EE3\u7406 API \u8BF7\u6C42</span>
<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/proxy&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u591A\u6570\u636E\u6E90" tabindex="-1"><a class="header-anchor" href="#\u591A\u6570\u636E\u6E90" aria-hidden="true">#</a> \u591A\u6570\u636E\u6E90</h2><p>\u5982\u679C\u9879\u76EE\u91CC\u9700\u8981\u4ECE\u591A\u4E2A\u4E0D\u540C\u5730\u5740\u7684\u6570\u636E\u6E90\u8BF7\u6C42\u6570\u636E\uFF0C\u4F60\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\u3002</p><p>\u5982\u679C\u53EA\u662F\u51E0\u4E2A\u63A5\u53E3\u9700\u6C42\u4ECE\u5176\u5B83\u6570\u636E\u6E90\u8BF7\u6C42\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8986\u76D6 <code>baseURL</code> \u7684\u65B9\u5F0F\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://baidu.com/&#39;</span> <span class="token comment">// \u76F4\u63A5\u8986\u76D6 baseURL</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u8FD9\u79CD\u65B9\u5F0F\u7684\u524D\u63D0\u662F\uFF0C\u4E24\u4E2A\u6570\u636E\u6E90\u7684 <code>request</code> \u548C <code>response</code> \u89C4\u5219\u8981\u4FDD\u6301\u4E00\u81F4\uFF0C\u56E0\u4E3A\u53EA\u662F\u8986\u76D6 <code>baseURL</code> \uFF0C\u62E6\u622A\u5668\u8FD8\u662F\u7528\u7684\u540C\u4E00\u5957\u89C4\u5219\u3002</p><p>\u6240\u4EE5\u5982\u679C\u4E24\u4E2A\u6570\u636E\u6E90\u7684\u8BF7\u6C42\u548C\u54CD\u5E94\u662F\u5B8C\u5168\u4E0D\u540C\u7684\u6807\u51C6\uFF0C\u4F60\u9700\u8981\u7ED9\u7B2C\u4E8C\u4E2A\u6570\u636E\u6E90\u5355\u72EC\u5B9E\u4F8B\u5316\u4E00\u4E2A axios \u5BF9\u8C61\u3002\u9996\u5148\u5728 <code>.env.*</code> \u6587\u4EF6\u91CC\u914D\u7F6E\u7B2C\u4E8C\u4E2A\u6570\u636E\u6E90\u7684 <code>baseURL</code> \uFF1A</p><div class="language-dot ext-dot"><pre class="language-dot"><code><span class="token comment"># \u547D\u540D\u53EF\u968F\u610F\uFF0C\u4EE5 VITE_APP_ \u5F00\u5934\u5373\u53EF</span>
<span class="token attr-name">VITE_APP_API_BASEURL_2</span> <span class="token operator">=</span> <span class="token attr-value">\u6B64\u5904\u586B\u5199\u63A5\u53E3\u5730\u5740</span>
</code></pre></div><p>\u7136\u540E\u628A <code>/src/api/index.js</code> \u6587\u4EF6\u590D\u5236\u4E00\u4EFD\uFF0C\u4F8B\u5982\u5C31\u53EB <code>/src/api/index2.js</code> \uFF0C\u5E76\u4E14\u5C06\u4EE3\u7801\u4E2D\u4F7F\u7528\u5230 <code>VITE_APP_API_BASEURL</code> \u4E5F\u66FF\u6362\u4E3A <code>VITE_APP_API_BASEURL_2</code> \uFF0C\u6700\u540E\u5728 <code>/src/util/global.properties.js</code> \u6587\u4EF6\u91CC\u5F15\u5165\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">import</span> api2 <span class="token keyword">from</span> <span class="token string">&#39;@/api/index2&#39;</span>

app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$api2 <span class="token operator">=</span> api2
</code></pre></div><p>\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u5728\u9875\u9762\u4E2D\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5206\u522B\u8BF7\u6C42\u4E24\u4E2A\u6570\u636E\u6E90\u7684\u6570\u636E\u4E86\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// \u8BF7\u6C42\u9ED8\u8BA4\u6570\u636E\u6E90</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u8BF7\u6C42\u7B2C 2 \u4E2A\u6570\u636E\u6E90</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$api2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/new/list&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u9700\u6CE8\u610F\uFF0C\u5982\u679C\u7B2C\u4E8C\u4E2A\u6570\u636E\u6E90\u4E5F\u9700\u8981\u5F00\u542F\u8DE8\u57DF\u5904\u7406\u7684\u8BDD\uFF0C\u9700\u8981\u5728 <code>/src/api/index2.js</code> \u91CC\u5B9A\u4E00\u4E2A\u65B0\u7684 proxy \u8DEF\u5F84\uFF0C\u4F8B\u5982 <code>/proxy2/</code> \uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> api <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEV</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">===</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;/proxy2/&#39;</span> <span class="token operator">:</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL_2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div></div><p>\u540C\u65F6\u5728 vite.config.js \u91CC\u589E\u52A0\u4E00\u6BB5\u65B0\u7684 proxy \u914D\u7F6E\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// vite.config.js \u4E2D proxy \u914D\u7F6E\uFF0C\u8BE5\u914D\u7F6E\u5373\u7528\u4E8E\u4EE3\u7406 API \u8BF7\u6C42</span>
<span class="token literal-property property">server</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;/proxy&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">&#39;/proxy2&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_APP_API_BASEURL_2</span><span class="token punctuation">,</span>
            <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> command <span class="token operator">===</span> <span class="token string">&#39;serve&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token constant">VITE_OPEN_PROXY</span> <span class="token operator">==</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">rewrite</span><span class="token operator">:</span> <span class="token parameter">path</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/proxy2</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br></div></div><h2 id="mock" tabindex="-1"><a class="header-anchor" href="#mock" aria-hidden="true">#</a> Mock</h2><p>Mock \u6570\u636E\u662F\u524D\u7AEF\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684\u4E00\u73AF\uFF0C\u662F\u5206\u79BB\u524D\u540E\u7AEF\u5F00\u53D1\u7684\u5173\u952E\u94FE\u8DEF\u3002\u901A\u8FC7\u9884\u5148\u8DDF\u670D\u52A1\u5668\u7AEF\u7EA6\u5B9A\u597D\u7684\u63A5\u53E3\uFF0C\u6A21\u62DF\u8BF7\u6C42\u6570\u636E\u751A\u81F3\u903B\u8F91\uFF0C\u80FD\u591F\u8BA9\u524D\u7AEF\u5F00\u53D1\u72EC\u7ACB\u81EA\u4E3B\uFF0C\u4E0D\u4F1A\u88AB\u670D\u52A1\u7AEF\u7684\u5F00\u53D1\u6240\u963B\u585E\u3002</p>`,19),E={class:"custom-container tip"},I=n("p",{class:"custom-container-title"},"TIP",-1),A=s("\u6A21\u677F\u4F7F\u7528 "),R={href:"https://github.com/anncwb/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},L=s("vite-plugin-mock"),T=s(" \u63D0\u4F9B\u5F00\u53D1\u548C\u751F\u4EA7\u6A21\u62DF\u670D\u52A1\u3002"),U=s("Mock \u6570\u636E\u7F16\u5199\u89C4\u5219\u8BF7\u9605\u8BFB "),V={href:"https://github.com/nuysoft/Mock",target:"_blank",rel:"noopener noreferrer"},O=s("Mockjs"),B=s(" \u5B98\u65B9\u6587\u6863\u3002"),S=e(`<h3 id="\u5F00\u53D1\u73AF\u5883-mock" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883-mock" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883 mock</h3><p>mock \u6587\u4EF6\u5B58\u653E\u5728 <code>/src/mock/</code> \u4E0B\uFF0C\u5EFA\u8BAE\u6309\u7167\u4E0D\u540C\u6A21\u5757\u533A\u5206\u6587\u4EF6\u5939\u3002\u6587\u4EF6\u65B0\u589E\u6216\u4FEE\u6539\u540E\u4F1A\u81EA\u52A8\u66F4\u65B0\uFF0C\u4E0D\u9700\u8981\u624B\u52A8\u91CD\u542F\uFF0C\u53EF\u4EE5\u5728\u4EE3\u7801\u63A7\u5236\u53F0\u67E5\u770B\u65E5\u5FD7\u4FE1\u606F\u3002</p><p>\u4EE5\u4E0B\u4E3A\u793A\u4F8B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/mock/news/list&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> query <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&#39;list|5-10&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span>
                            <span class="token string-property property">&#39;title&#39;</span><span class="token operator">:</span> <span class="token string">&#39;@ctitle&#39;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">]</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\u53C2\u6570\u83B7\u53D6\uFF1A</p><ul><li>GET\uFF1A<code>({ query }) =&gt; { }</code></li><li>POST\uFF1A<code>({ body }) =&gt; { }</code></li></ul><p>\u4E3A\u4E86\u8BA9 mock \u63A5\u53E3\u4E0E\u771F\u5B9E\u63A5\u53E3\u5171\u5B58\uFF0C\u5373\u9879\u76EE\u5F00\u53D1\u4E2D\uFF0C\u90E8\u5206\u8BF7\u6C42 mock \u63A5\u53E3\uFF0C\u90E8\u5206\u8BF7\u6C42\u771F\u5B9E\u63A5\u53E3\u3002\u9700\u8981\u5728\u914D\u7F6E mock \u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u7ED9 <code>url</code> \u53C2\u6570\u7EDF\u4E00\u8BBE\u7F6E <code>/mock/</code> \u524D\u7F00\uFF0C\u5E76\u5728\u8C03\u7528\u63A5\u53E3\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 <code>baseURL</code> \u5F3A\u5236\u4FEE\u6539\u6B64\u6B21\u8BF7\u6C42\u7684\u5730\u5740\u3002</p><p>\u5982\u4E0B\u6240\u793A\uFF0C\u5176\u4E2D <code>news/list</code> \u4F1A\u8BF7\u6C42\u672C\u5730\u7684 mock \u63A5\u53E3\uFF0C\u800C <code>news/add</code> \u4F9D\u65E7\u8BF7\u6C42\u771F\u5B9E\u63A5\u53E3\uFF0C\u5373\u4F7F\u5F00\u542F\u8DE8\u57DF\u4EE3\u7406\u4E5F\u4E0D\u5F71\u54CD\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;news/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;/mock/&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">size</span><span class="token operator">:</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u540E\u7EED\u4E1A\u52A1\u4EE3\u7801</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">this</span><span class="token punctuation">.</span>$api<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;news/create&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u6807\u9898&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">&#39;\u65B0\u95FB\u5185\u5BB9&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u540E\u7EED\u4E1A\u52A1\u4EE3\u7801</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div></div><h3 id="\u751F\u4EA7\u73AF\u5883-mock" tabindex="-1"><a class="header-anchor" href="#\u751F\u4EA7\u73AF\u5883-mock" aria-hidden="true">#</a> \u751F\u4EA7\u73AF\u5883 mock</h3><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u751F\u4EA7\u73AF\u5883\u4E00\u822C\u90FD\u662F\u8C03\u7528\u771F\u5B9E\u63A5\u53E3\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528 mock \u4E5F\u53EA\u9002\u7528\u4E8E\u4E00\u4E9B\u7B80\u5355\u7684\u793A\u4F8B\u7F51\u7AD9\u53CA\u9884\u89C8\u7F51\u7AD9\u3002</p></div><p>\u6A21\u677F\u9ED8\u8BA4\u5DF2\u7ECF\u914D\u7F6E\u597D\u751F\u4EA7\u73AF\u5883 mock \uFF0C\u5982\u679C\u4E0D\u60F3\u8BA9\u751F\u4EA7\u73AF\u5883\u91CC\u7684\u8BF7\u6C42\u8D70 mock \uFF0C\u53EF\u5728\u63A5\u53E3\u8C03\u7528\u5904\u5220\u9664 baseURL \u8BBE\u7F6E\uFF0C\u6216\u76F4\u63A5\u5220\u9664 mock \u63A5\u53E3\u6587\u4EF6\u3002</p><p>\u9700\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C\u5982\u679C\u9879\u76EE\u4E2D\u6709\u6D89\u53CA\u5230\u4E0A\u4F20\u529F\u80FD\uFF0C\u8BF7\u5F7B\u5E95\u5173\u95ED\u7EBF\u4E0A\u73AF\u5883 mock \uFF0C\u5728\u73AF\u5883\u914D\u7F6E\u91CC\u8BBE\u7F6E <code>VITE_BUILD_MOCK = false</code> \uFF0C\u4E0D\u7136\u7EBF\u4E0A\u73AF\u5883\u5C06\u4F1A\u62A5\u9519\u3002</p><p>\u5F00\u53D1\u73AF\u5883\u4E0E\u751F\u4EA7\u73AF\u5883\u4F7F\u7528 mock \u5DEE\u5F02\u4E0D\u5927\uFF0C\u6BD4\u8F83\u5927\u7684\u533A\u522B\u662F\u751F\u4EA7\u73AF\u5883\u91CC\u8C03\u7528 mock \u63A5\u53E3\uFF0C\u5728\u63A7\u5236\u53F0\u5185\u770B\u4E0D\u5230\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7\u3002</p>`,14),$=s("\u66F4\u591A\u4ECB\u7ECD\u8BF7\u79FB\u6B65 "),N={href:"https://github.com/anncwb/vite-plugin-mock",target:"_blank",rel:"noopener noreferrer"},C=s("vite-plugin-mock");function M(q,G){const p=c("ExternalLinkIcon"),o=c("CodeGroupItem"),l=c("CodeGroup");return i(),u(k,null,[g,n("p",null,[h,n("a",m,[_,a(p)]),y]),v,a(l,null,{default:t(()=>[a(o,{title:"get"},{default:t(()=>[x]),_:1}),a(o,{title:"post"},{default:t(()=>[f]),_:1})]),_:1}),b,a(l,null,{default:t(()=>[a(o,{title:"get"},{default:t(()=>[w]),_:1}),a(o,{title:"post"},{default:t(()=>[j]),_:1})]),_:1}),P,n("div",E,[I,n("p",null,[A,n("a",R,[L,a(p)]),T]),n("p",null,[U,n("a",V,[O,a(p)]),B])]),S,n("p",null,[$,n("a",N,[C,a(p)])])],64)}var Y=r(d,[["render",M],["__file","axios.html.vue"]]);export{Y as default};
