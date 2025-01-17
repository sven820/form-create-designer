<template>
  <div class="CheckboxNote">
    <el-checkbox-group v-model="checkBoxNoteData.checkList" @change="checkboxChange" :disabled="readonly">
      <el-checkbox v-for="(item,index) in checkDataList" :label="item" :key="index">{{item.label}}</el-checkbox>
    </el-checkbox-group>
    <el-input type="textarea" :disabled="readonly" :rows="3" placeholder="请输入备注" v-model="checkBoxNoteData.textarea" style="margin:5px 0 0 0; resize: none ; ">
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'CheckboxNote',
  props: ['value', 'formCreateInject'],
  data() {
    return {
      checkBoxNoteData: {
        checkList: [],
        textarea: '',
      },
      checkDataList: [],
      readonly: false,
    };
  },
  watch: {
    'value': {
      handler(val) {
        console.log('value6666', val);
      }
    },
    //formCreateInject为组件生成时会给自定义组件注入的参数
    "formCreateInject": {
      handler(val) {
        // console.log('formCreateInject===', val);
        this.checkDataList = val.options
        // 数据回显
        if (val.rule && val.rule.value) {
          this.checkBoxNoteData.checkList = val.rule.value.checkList
          this.checkBoxNoteData.textarea = val.rule.value.textarea
        }
        // 控制disable
        // if (val.rule && val.api.config.submitBtn.show) {
        //   this.readonly = false
        // } else {
        //   this.readonly = true
        // }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
  },
  methods: {
    checkboxChange(val) {
      console.log('======', val);
      if (val && val.length) {
        this.checkBoxNoteData.textarea = ''
        val.forEach((item) => {
          this.checkBoxNoteData.textarea += item.label + ':' + '' + ';' + '\n'
        })
      } else {
        this.checkBoxNoteData.textarea = ''
      }
    }
  }
}
</script>
