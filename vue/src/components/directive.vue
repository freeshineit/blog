<template>
  <div>
    vue directive vue 指令
    <input type="" v-focus name="" v-model='input'>
    <div v-Clipboard:copy='input' v-Clipboard:success='clipboardSuccess'>
      asdfasd
    </div>
  </div>
</template>
<script type="text/javascript">
  import Clipboard from '@/directive/clipboard/index';

  export default {
    name: 'directive',
    data () {
      return {
        input: '自动获取获取焦点'
      }
    },
    directives: {
      // 局部定义指令
        focus: {
          // 指令的定义
          inserted: function (el) {
            el.focus()
          }
        },
        Clipboard
    },
    mounted () {
    },
    methods: {
        clipboardSuccess() {
          alert('复制成功')
        }
    }
  }
</script>