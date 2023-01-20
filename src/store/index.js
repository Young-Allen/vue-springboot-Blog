import Vue from 'vue'
import Vuex from 'vuex'
import router, { resetRouter } from "@/router";
import { getblogdata } from '@/api/blog'
import storage from '@/utils/storage'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        currentPathName: '',
        isIndex: true,
        showTab: JSON.parse(storage.get('showTab') || '1'),
        searchContent: JSON.parse(storage.get('searchContent') || null),
        blogData: JSON.parse(storage.get('blogData') || '{}')
    },
    mutations: {
        saveToStorage(state) {
            storage.set('blogData', JSON.stringify(state.blogData))
            storage.set('searchContent', JSON.stringify(state.searchContent))
            storage.set('showTab', JSON.stringify(state.showTab))
        },
        setShowTab(state, palyLoad) {
            state.showTab = palyLoad
            this.commit('saveToStorage')
        },
        setSearch(state, data) {
            console.log("hasknvklnasndfsh");
            state.searchContent = data
        },
        setBlogData(state, data) {
            state.blogData = {...data }
            this.commit('saveToStorage')
        },
        updateIsIndex(state, change) {
            if (change) state.isIndex = !state.isIndex
        },
        setPath(state) {
            state.currentPathName = localStorage.getItem("currentPathName")
        },
        logout() {
            // 清空缓存
            localStorage.removeItem("user")
            localStorage.removeItem("menus")
            router.push("/login")
                // 重置路由
            resetRouter()
        },
        logoutFront() {
            // 清空缓存
            localStorage.removeItem("user")
            localStorage.removeItem("menus")
            router.push("/front/login")
                // 重置路由
            resetRouter()
        }
    },
    actions: {
        async getBlogData(context, parm) {
            const res = await getblogdata(parm)
            context.commit('setBlogData', res.data)
            return res
        },
        async updateSearch(context, palyLoad) {
            context.commit('setSearch', palyLoad)
        }
    }
})

export default store