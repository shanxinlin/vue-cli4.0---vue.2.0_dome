<template>
 <div style="padding:40px;">
  <transition-group class="container" name="sort">
   <div
    class="app-item"
    v-for="(app, index) in customApps"
    :key="app.id"
    :draggable="true"
    @dragstart="dragstart(app, index)"
    @dragenter="dragenter(customApps, app, index)"
    @dragend="getDragend(customApps, index)"
   >
    <div>
     <div class="ellipsis">{{ app.name }}</div>
    </div>
   </div>
  </transition-group>
  <br>
  <br>
  <br>
  方法二：
  <dragcom1></dragcom1>

  方法三：
  <a href="https://github.com/hilongjw/vue-dragging">https://github.com/hilongjw/vue-dragging</a>
  <br>
  <br>
  <br>
  方法四(推荐)：
  <a href="https://www.itxst.com/vue-draggable/tutorial.html">https://www.itxst.com/vue-draggable/tutorial.html</a>
  <dragcom2></dragcom2>
 </div>
</template>

<script>
export default {
 components:{
   dragcom1: () => import('@/components/dragcom/dragcom1.vue'),
   dragcom2: () => import('@/components/dragcom/dragcom2.vue')
 },
 data() {
  return {
   oldData: [],
   newData: [],
   customApps: [
    {
     id: 0,
     name: 'one'
    },
    {
     id: 1,
     name: 'two'
    },
    {
     id: 2,
     name: 'three'
    },
    {
     id: 3,
     name: 'four'
    },
    {
     id: 4,
     name: 'five'
    }
   ],
   dragStartId: '',
   dragEndId: ''
  }
 },
 methods: {
  dragstart(value, index) {
   this.oldData = value
   this.dragStartId = index
  },
  dragenter(listData, value, index) {
   this.newData = value
   this.dragEndId = index

  },
  getDragend(listData, index) {
   if (this.oldData !== this.newData) {
    let oldIndex = this.dragStartId
    let newIndex = this.dragEndId
    let newItems = [...listData]
    // 删除之前DOM节点
    // newItems.splice(oldIndex, 1)
    // // 在拖拽结束目标位置增加新的DOM节点
    // newItems.splice(newIndex, 0, this.oldData)

    newItems.splice(oldIndex,1,...newItems.splice(newIndex,1,newItems[oldIndex]))

    // 每次拖拽结束后，将拖拽处理完成的数据，赋值原数组，使DOM视图更新，页面显示拖拽动画
    this.customApps = newItems
   }
  }
 },
}
</script>

<style lang="less" scoped>
.app-item {
 line-height: 30px;
 border: 1px solid red;
 margin-bottom: 10px;
}
.sort-move {
 transition: transform 0.2s;
}
</style>