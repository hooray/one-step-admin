import{r as e,c as o,a,b as n,w as s,F as t,e as c,d as p,o as d}from"./app.77b6466b.js";import{_ as i}from"./plugin-vue_export-helper.5a098b48.js";const l={},r=c('<h1 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h1><p>做好准备工作后，请在项目根目录下依次执行以下命令：</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 安装依赖</span>\n<span class="token function">pnpm</span> <span class="token function">install</span>\n\n<span class="token comment"># 运行</span>\n<span class="token function">pnpm</span> run dev\n</code></pre></div><p>运行成功后，会自动访问页面，默认情况下，地址为 <code>http://localhost:9000</code></p>',4),u={class:"custom-container warning"},m=c('<p class="custom-container-title">注意</p><p>husky 在安装时会检测当前目录下是否存在 <code>.git/</code> 目录，所以请确保已经使用 <code>git init</code> 对项目进行过 git 环境初始化，否则会提示 husky 安装失败。但如果框架根目录并不是项目根目录，例如项目目录是 <code>project/</code> ，而框架目录是 <code>project/one-step-admin/</code> 的话，则需要在 <code>package.json</code> 里找到 <code>&quot;prepare&quot;: &quot;husky install&quot;</code> 并修改为 <code>&quot;prepare&quot;: &quot;cd .. &amp;&amp; husky install&quot;</code> 。</p>',2),h=p("了解更多请阅读《"),g=p("代码规范 - husky & lint-staged"),k=p("》。"),y=c('<div class="custom-container warning"><p class="custom-container-title">运行报错</p><p>如果运行提示「 &#39;vite&#39; 不是内部或外部命令，也不是可运行的程序或批处理文件 」，可能是因为依赖未安装成功，可以尝试执行 <code>pnpm config set registry http://registry.npm.taobao.org</code> 切换为国内淘宝源后，删除根目录下 <code>./node_modules</code> 文件夹并重新安装依赖。</p><p>如果依旧无法运行，可尝试删除根目录下 <code>./node_modules</code> 文件夹与 <code>pnpm-lock.yaml</code> 文件后重新安装，或使用 <code>npm / yarn</code> 进行安装依赖。但需要清楚，这样操作将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题。非必要情况下，请勿删除 <code>pnpm-lock.yaml</code> 或使用其它依赖包管理工具安装。</p></div>',1);var f=i(l,[["render",function(c,p){const i=e("RouterLink");return d(),o(t,null,[r,a("div",u,[m,a("p",null,[h,n(i,{to:"/guide/coding-standard.html#husky-lint-staged"},{default:s((()=>[g])),_:1}),k])]),y],64)}]]);export{f as default};
