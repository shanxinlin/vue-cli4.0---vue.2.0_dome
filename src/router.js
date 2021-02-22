import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/vuex",
      name: "vuex",
      component: () => import("./views/vuex.vue"),
    },
    {
      path: "/Echart",
      name: "Echart",
      component: () => import("./views/Echart.vue"),
    },
    {
      path: "/waterfall",
      name: "waterfall",
      component: () => import("./views/waterfall.vue"),
    },
    {
      path: "/video",
      name: "video",
      component: () => import("./views/video.vue"),
    },
    {
      path: "/quillEditor",
      name: "quillEditor",
      component: () => import("./views/quillEditor.vue"),
      children: [
        {
          path: "/",
          name: "quillEditorA",
          component: () => import("./components/quillcom/quillEditorA.vue"),
        },
        {
          path: "/quillEditor/quillEditorA",
          name: "quillEditorA",
          component: () => import("./components/quillcom/quillEditorA.vue"),
        },
        {
          path: "/quillEditor/quillEditorB",
          name: "quillEditorB",
          component: () => import("./components/quillcom/quillEditorB.vue"),
        },
      ],
    },
    {
      path: "/upFile",
      name: "upFile",
      component: () => import("./views/upFile.vue"),
    },
    {
      path: "/MaiTrack",
      name: "MaiTrack",
      component: () => import("./views/MaiTrack.vue"),
    },
    {
      path: "/Promise",
      name: "Promise",
      component: () => import("./views/Promise.vue"),
    },
    {
      path: "/share",
      name: "share",
      component: () => import("./views/share.vue"),
    },
    {
      path: "/regExp",
      name: "regExp",
      component: () => import("./views/regExp.vue"),
    },
    {
      path: "/Animate",
      name: "Animate",
      component: () => import("./views/Animate.vue"),
    },
    {
      path: "/axios",
      name: "axios",
      component: () => import("./views/axios.vue"),
      children: [
        {
          path: "/",
          name: "axiosA",
          component: () => import("./components/axioscom/axiosA.vue"),
        },
        {
          path: "/axios/axiosA",
          name: "axiosA",
          component: () => import("./components/axioscom/axiosA.vue"),
        },
        {
          path: "/axios/axiosB",
          name: "axiosB",
          component: () => import("./components/axioscom/axiosB.vue"),
        },
      ],
    },
    {
      path: "/amap",
      name: "amap",
      component: () => import("./views/amap.vue"),
    },
    {
      path: "/linkage",
      name: "linkage",
      component: () => import("./views/linkage.vue"),
    },
    {
      path: "/byVal",
      name: "byVal",
      component: () => import("./views/byVal.vue"),
    },
    {
      path: "/imgUpData",
      name: "imgUpData",
      component: () => import("./views/imgUpData.vue"),
    },
    {
      path: "/cropImg",
      name: "cropImg",
      component: () => import("./views/cropImg.vue"),
    },
  ],
});
