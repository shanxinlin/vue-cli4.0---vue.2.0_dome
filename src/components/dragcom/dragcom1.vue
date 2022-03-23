<template>
 <div class="demo">
  <div v-for="menu in menus" :key="menu.id">
   <h3>{{ menu.name }}</h3>
   <ul>
    <li
     v-for="item in menu.children"
     :key="item.id"
     draggable="true"
     @dragend="dragEnd(item, menu)"
     @dragover.prevent
     @drop="drop(item, menu)"
    >{{ item.id }}{{ item.name }}</li>
   </ul>
  </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
   menus: {
    menu1: {
     name: "菜单一",
     id: 111,
     children: [
      { id: 1, name: '用户管理' },
      { id: 2, name: '系统管理' },
      { id: 3, name: '角色管理' },
      { id: 4, name: '权限管理' },
     ]
    },
    menu2: {
     name: "菜单二",
     id: 222,
     children: [
      { id: 5, name: '数据概览' },
      { id: 6, name: '业务管理' },
      { id: 7, name: '菜单管理' }
     ]
    }
   },
   dragItem: null,
   targetItem: null,
   dragParent: null,
   targetParent: null,
   across: false
  }
 },
 methods: {
  dragEnd(menu, parent) {
   this.dragItem = menu
   this.dragParent = parent
   let targetIndex = this.targetParent.children.findIndex(item => item.id === this.targetItem.id)
   let dragIndex = this.dragParent.children.findIndex(item => item.id === this.dragItem.id)
   if (this.across) {
    // 允许跨级
    this.dragParent.children.splice(dragIndex, 1)
    this.targetParent.children.splice(targetIndex, 0, this.dragItem)
   } else {
    // 不允许跨级
    if (this.dragParent.id === this.targetParent.id) {
     this.dragParent.children.splice(dragIndex, 1)
     this.targetParent.children.splice(targetIndex, 0, this.dragItem)
    }
   }
  },
  drop(menu, parent) {
   this.targetItem = menu
   this.targetParent = parent
  }
 }
}
</script>

<style lang="less" scoped>
.demo {
 padding: 40px;
 ul {
  display: flex;
  flex-wrap: wrap;
  li {
   width: 100px;
   height: 100px;
   background-color: pink;
   margin: 20px;
  }
 }
}
</style>