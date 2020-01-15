<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    >
    </quill-editor>
    <button v-on:click="saveHtml">保存</button>
  </div>
</template>
<script>
import Vue from 'vue';
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(VueQuillEditor);
export default {
  name: "App",
  data() {
    return {
      content: `<p>hello world</p>`,
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            // ["blockquote", "code-block"], //引用，代码块

            // [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            // [{ list: "ordered" }, { list: "bullet" }], //列表
            // [{ script: "sub" }, { script: "super" }], // 上下标
            // [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{ direction: "rtl" }], // 文本方向
            //欢迎加入前端全栈开发交流圈一起吹水聊天学习交流：619586920

            [{ size: ['small', 'large', 'huge'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6] }], //几级标题

            // [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            [{ font: [] }], //字体
            // [{ align: [] }], //对齐方式

            // ["clean"], //清除字体样式
            // ["image", "video"] //上传图片、上传视频
          ]
        },
        theme: "snow"
      }
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady(editor) {
      console.log(editor);
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      console.log(this.content, event);
    }
  }
};
</script>

<style>
.edit_container{
  width:60%;
  margin:30px auto;
}
</style>
