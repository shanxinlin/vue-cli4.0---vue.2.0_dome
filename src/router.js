import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/vuex",
      name: "vuex",
      component: () => import("./views/vuex.vue")
    },
    {
      path: "/Echart",
      name: "Echart",
      component: () => import("./views/Echart.vue")
    },
    {
      path: "/waterfall",
      name: "waterfall",
      component: () => import("./views/waterfall.vue")
    },
    {
      path: "/video",
      name: "video",
      component: () => import("./views/video.vue")
    },
    {
      path: "/quillEditor",
      name: "quillEditor",
      component: () => import("./views/quillEditor.vue"),
      children: [
        {
          path: "/",
          name: "quillEditorA",
          component: () => import("./views/quillEditorA.vue")
        },
        {
          path: "/quillEditor/quillEditorA",
          name: "quillEditorA",
          component: () => import("./views/quillEditorA.vue")
        },
        {
          path: "/quillEditor/quillEditorB",
          name: "quillEditorB",
          component: () => import("./views/quillEditorB.vue")
        }
      ]
    },
    {
      path: "/upFile",
      name: "upFile",
      component: () => import("./views/upFile.vue")
    },
    {
      path: "/MaiTrack",
      name: "MaiTrack",
      component: () => import("./views/MaiTrack.vue")
    },
    {
      path: "/Promise",
      name: "Promise",
      component: () => import("./views/Promise.vue")
    },
    {
      path: "/share",
      name: "share",
      component: () => import("./views/share.vue")
    },
    {
      path: "/regExp",
      name: "regExp",
      component: () => import("./views/regExp.vue")
    },
    {
      path: "/Animate",
      name: "Animate",
      component: () => import("./views/Animate.vue")
    },
    {
      path: "/axios",
      name: "axios",
      component: () => import("./views/axios.vue")
    },
    {
      path: "/amap",
      name: "amap",
      component: () => import("./views/amap.vue")
    }
  ]
});