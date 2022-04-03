module.exports = {
	bundler: '@vuepress/vite',
	lang: 'zh-CN',
	title: 'One-step-admin',
	description: '一款干啥都快人一步的 Vue 中后台管理系统框架',
	base: '/one-step-admin/',
	dest: 'docs',
	head: [
		['link', { rel: 'icon', href: `./favicon.ico` }],
		['keywords', { content: 'fantastic-admin,one-step-admin,探索,后台系统,管理后台,后台模版,vue后台,vue-admin,vue-element-admin,vue-admin-template' }],
		['description', { content: '一款干啥都快人一步的 Vue 中后台管理系统框架，采用 Vue3 + Vite2 技术栈。' }],
		['script', {}, `var _hmt = _hmt || [];
		_hmt.push(['_requirePlugin', 'UrlChangeTracker', {
			shouldTrackUrlChange: function(newPath, oldPath) {
				return newPath && oldPath;
			}
		}]);
		(function() {
			var hm = document.createElement("script");
			if (location.origin.includes('gitee')) {
				hm.src = "https://hm.baidu.com/hm.js?ba0ee7b31f404b7dc10bfcd8bdc7183d";
			} else {
				hm.src = "https://hm.baidu.com/hm.js?d07a64f7a02cd5e9c01e1b36948ac4a5";
			}
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(hm, s);
		})();`]
	],
	themeConfig: {
		logo: '/logo.png',
		search: false,
		navbar: [
			{
				text: '指南',
				children: [
					{
						text: '文档说明',
						link: '/intro.md',
					},
					{
						text: '开发指南',
						link: '/guide/ready.md',
						activeMatch: '/guide/',
					}
				]
			},
			{
				text: '组件',
				link: '/components/'
			},
			{
				text: '演示地址',
				children: [
					{
						text: '基础版',
						link: 'https://hooray.gitee.io/one-step-admin/basic'
					},
					{
						text: '专业版',
						link: 'https://hooray.gitee.io/one-step-admin/pro'
					},
					{
						text: '备份地址',
						children: [
							{
								text: '基础版',
								link: 'https://hooray.github.io/one-step-admin/basic'
							},
							{
								text: '专业版',
								link: 'https://hooray.github.io/one-step-admin/pro'
							}
						]
					}
				]
			},
			{
				text: '下载基础版',
				children: [
					{
						text: 'Gitee',
						link: 'https://gitee.com/hooray/one-step-admin'
					},
					{
						text: 'Github',
						link: 'https://github.com/hooray/one-step-admin'
					}
				]
			},
			{
				text: '购买专业版',
				link: '/buy.md'
			},
			{
				text: '生态',
				children: [
					{
						text: 'Fantastaic-template',
						link: 'https://hooray.gitee.io/fantastic-template'
					},
					{
						text: 'Fantastaic-admin',
						link: 'https://hooray.gitee.io/fantastic-admin'
					},
					{
						text: 'One-step-admin',
						link: 'https://hooray.gitee.io/one-step-admin'
					}
				]
			}
		],
		sidebar: {
			'/guide/': [
				'intro.md',
				{
					text: '指南',
					children: [
						'ready.md',
						'start.md',
						'coding-standard.md',
						'configure.md',
						'layout.md',
						'theme.md',
						'menu.md',
						'window.md',
						'router.md',
						'axios.md',
						'store.md',
						'global-resources.md',
						'build.md'
					]
				},
				{
					text: '高级',
					children: [
						'permission.md',
						'i18n.md',
						'plop.md',
						'plop-module.md',
						'global-properties.md',
						'storage.md',
						'error-log.md',
						'font.md'
					]
				},
				{
					text: '其它',
					children: [
						'vue3-composition-api.md',
						'upgrade.md',
						'q-a.md'
					]
				}
			],
			'/components/': [
				'readme.md',
				'basic.md',
				{
					text: '扩展组件',
					children: [
						'auth.md',
						'auth-all.md',
						'page-header.md',
						'page-main.md',
						'action-container.md',
						'search-bar.md',
						'batch-action-bar.md',
						'image-upload.md',
						'images-upload.md',
						'file-upload.md',
						'image-preview.md',
						'svg-icon.md',
						'trend.md',
						'cascader-area.md',
						'chip.md',
						'colorful-card.md',
						'icon-picker.md',
						'sparkline.md',
						'i18n-selector.md'
					]
				}
			]
		}
	},
	// plugins: [
	// 	['@vuepress/plugin-docsearch', {
	// 		apiKey: '1a963d3300ae4934911e321fb6eba267',
	// 		indexName: 'fantastic-admin',
	// 		placeholder: '搜索',
	// 		searchParameters: {
	// 			facetFilters: ['lang:zh-CN']
	// 		}
	// 	}]
	// ]
}