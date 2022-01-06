import api from '@/api'
import { auth, authAll } from '@/util'
import { useWindowOutsideStore } from '@/store/modules/window'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Cookies from 'js-cookie'
import hotkeys from 'hotkeys-js'
import mitt from 'mitt'

const eventBus = mitt()

export default function globalProperties(app) {
    const windowOutsideStore = useWindowOutsideStore()
    // 请求
    app.config.globalProperties.$api = api
    // 鉴权
    app.config.globalProperties.$auth = auth
    app.config.globalProperties.$authAll = authAll
    // 窗口
    app.config.globalProperties.$window = {
        // 新增窗口
        add: windowName => {
            windowOutsideStore.add(windowName)
            eventBus.emit('scrollToWindow', typeof windowName === 'string' ? windowName : windowName.name)
        },
        // 关闭窗口
        remove: windowName => {
            windowOutsideStore.remove(windowName)
        },
        // 窗口刷新
        reload: windowName => {
            windowOutsideStore.reload(windowName)
            setTimeout(() => {
                windowOutsideStore.reload(windowName)
            }, 0)
        }
    }
    dayjs.locale('zh-cn')
    app.config.globalProperties.$dayjs = dayjs
    app.config.globalProperties.$cookies = Cookies
    app.config.globalProperties.$hotkeys = hotkeys
    app.config.globalProperties.$eventBus = eventBus
}
