# 权限

首先需要在框架配置里开启权限功能。

```js:no-line-numbers
enablePermission: true
```

::: tip 权限是如何运作的
首先需要清楚一点，配置的导航模块，即[主导航](./menu.md#主导航)下的所有导航，并不是立即生效的。

而是在用户进行登录操作成功后，立马获取用户权限，然后根据用户所拥有的权限，对主导航下的导航模块进行一次数据清洗，把没有权限的导航进行剔除，最终清洗后的导航数据才会展示到导航栏。

通过这样的处理，可实现导航栏根据权限动态展示的效果，或者也可以称为**动态导航栏**。
:::

## 导航权限

在导航配置项中，其中有一个 `auth` 参数，这个就是用来配置导航的权限，一个导航可以配置多个权限，当配置多个权限时，只要满足其中任何一个，则视为用户有打开该导航对应窗口的权限，如下：

```js:no-line-numbers
auth: ['news.browse', 'news.edit']
```

框架内部鉴权的逻辑是字符串比对，所以建议对权限有个统一的格式，例如为 `xxx.yyy` ，其中 `xxx` 表示模块名， `yyy` 表示操作类型。那么上面那个例子就表示：

- `news.browse` 新闻模块的浏览权限
- `news.edit` 新闻模块的编辑权限

导航权限是比较暴力的，即没有权限则该导航不会在导航栏中显示。但在实际业务中，遇到更多的情况通常是，可以打开导航对应的窗口，但会根据不同权限，使用页面里的不同功能，这时候就需要用到下面三种鉴权方式。

## 鉴权组件

页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 `<Auth>` 和 `<AuthAll>` 组件，具体使用如下：

```html:no-line-numbers
<!-- 单权限验证 -->
<Auth :value="'department.create'">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</Auth>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<Auth :value="['department.create', 'department.edit']">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</Auth>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<AuthAll :value="['department.create', 'department.edit']">
    <p>你有该权限</p>
    <template #no-auth>
        <p>你没有该权限</p>
    </template>
</AuthAll>
```

## 鉴权指令

对于单个元素，也提供了 `v-auth` 和 `v-auth-all` 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单。

```html:no-line-numbers
<!-- 单权限验证 -->
<button v-auth="'department.create'">新增部门</button>

<!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 -->
<button v-auth="['department.create', 'department.edit']">新增部门</button>

<!-- 多权限验证，用户必须具备全部权限，才验证通过 -->
<button v-auth-all="['department.create', 'department.edit']">新增部门</button>
```

## 鉴权函数

鉴权组件和鉴权指令控制的是页面上的元素，而鉴权函数则更多是使用在业务流程代码里的权限判断。

```js:no-line-numbers
// 单权限验证，返回 true 或 false
this.$auth('department.create')

// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false
this.$auth(['department.create', 'department.edit'])

// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false
this.$authAll(['department.create', 'department.edit'])
```

## 演示

在 `src/store/modules/user.js` 文件里 action 下有个 `getPermissions` 的方法，该方法用于登录成功后获取用户权限，在项目开发中，需要根据实际情况进行修改。框架默认通过 mock 模拟获取用户权限。

```js:no-line-numbers
// 获取我的权限
getPermissions({ state, commit }) {
    return new Promise(resolve => {
        // 通过 mock 获取权限
        api.get('member/permission', {
            baseURL: '/mock/',
            params: {
                account: state.account
            }
        }).then(res => {
            commit('setPermissions', res.data.permissions)
            resolve(res.data.permissions)
        })
    })
}
```

在框架演示中，提供了两组权限，你可以在“权限验证”导航里切换帐号查看不同权限下的效果。如果使用的不是 `admin` 或 `test` 用户名登录，则在导航栏里看不到“权限验证”导航入口。

## 小技巧

由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限。

当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，框架也可以很方便的实现。

```js:no-line-numbers
import Layout from '@/layout/index.vue'

export default {
    path: '/banner',
    component: Layout,
    redirect: '/banner/list',
    name: 'banner',
    meta: {
        title: 'Banner 管理',
        icon: 'banner',
        auth: ['admin', 'editor']
    },
    children: [
        {
            path: 'detail',
            name: 'bannerCreate',
            component: () => import('@/views/banner/detail.vue'),
            meta: {
                title: '新增 Banner',
                auth: ['admin', 'editor']
            }
        },
        {
            path: 'list',
            name: 'bannerList',
            component: () => import('@/views/banner/list.vue'),
            meta: {
                title: 'Banner 列表',
                auth: ['admin']
            }
        },
        {
            path: 'detail/:id',
            name: 'bannerEdit',
            component: () => import('@/views/banner/detail.vue'),
            meta: {
                title: '编辑 Banner',
                auth: ['admin'],
                sidebar: false
            }
        }
    ]
}
```

如上所示，假设有 2 种角色，一个是管理员 `admin` ，一个是编辑员 `editor` ，如果用户是 `admin` 权限，则可以操作 Banner 管理下的所有功能，如果是 `editor` 权限，则只能进行新增 Banner 操作。