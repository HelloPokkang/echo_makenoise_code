// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Buefy from 'buefy'
import VueScrollTo from 'vue-scrollto'

// import VueScrollTo from 'vue-scrollto'
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false


Vue.use(VueScrollTo, {
    container: "body",
    // container: "body",
    duration: 500,
    easing: "ease",
    offset: -100,
    // cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})


// Vue.use(VueScrollTo, {
//     container: "body",
//     duration: 500,
//     easing: "ease",
//     offset: -60,
//     cancelable: true,
//     onStart: false,
//     onDone: false,
//     onCancel: false,
//     x: false,
//     y: true
// })

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '#content'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
