import router from './index.js'
import store from '../store'


// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
    console.log(to)
   store.dispatch('app/settingTitle',to.meta.title)
   next()
})
