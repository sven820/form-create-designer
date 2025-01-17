<template>
  <div class="formTable">
    <el-table :data="tableOptions.tableData" :border="tableOptions.showBorder" size="default" style="width: fit-content">
      <!--多选列-->
      <el-table-column v-if="tableOptions.showMultiSelect" type="selection" width="50" align="center" />
      <!--序号列-->
      <el-table-column v-if="tableOptions.showIndex" type="index" label="序号" width="50" align="center" />
      <!--数据列-->
      <el-table-column v-for="column in tableOptions.tableColumns" :key="column.value" :label="column.label" :prop="column.value" width="120" align="center">
        <template #default="scope">
          <span v-if="tableOptions.readonly">
            {{ scope.row[column.value] }}
          </span>
          <el-input v-else v-model="scope.row[column.value]" :value="scope.row[column.value]" />
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80" align="center" v-if="!tableOptions.readonly">
        <template #default="scope">
          <el-button type="danger" icon="delete" @click="deleteRow(scope.$index)">
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button v-if="!tableOptions.readonly" type="text" icon="plus" @click="addRow">
      添加一行
    </el-button>

  </div>
</template>

<script>
import uniqueId from '@form-create/utils/lib/unique';
export default {
  name: 'formTable',
  props: ['value', 'formCreateInject'],
  // inject: ['designer'],
  data() {
    return {
      tableOptions: {
        tableData: [],
        showBorder: true,
        showMultiSelect: false,
        showIndex: true,
        tableColumns: [
          {
            label: '表头字段1',
            value: '123'
          }
        ],
        readonly: false,
      }
    };
  },
  watch: {
    'value': {
      handler(val) {
        console.log('value6666', val);
      }
    },
    // 'designer': {
    //   handler(val) {
    //     console.log('designer', val);
    //   },
    // },
    //formCreateInject为组件生成时会给自定义组件注入的参数
    "formCreateInject": {
      handler(val) {
        // console.log('designer', this.designer);
        // console.log('formCreateInject===', val);
        //当表单设计器的自定义设置规则修改时，同步更新FormCreateDesiger中的自定义组件
        this.tableOptions.tableColumns = val.options;
        // 数据回显
        if (val.rule && val.rule.value) {
          this.tableOptions.tableData = val.rule.value
        }
        // 控制表格disable
        if (val.rule && val.api.config.submitBtn.show) {
          this.tableOptions.readonly = false
        } else {
          this.tableOptions.readonly = true
        }
      },
      deep: true,
      immediate: true,
    },
  },
  created() {
  },
  methods: {
    addRow() {
      this.tableOptions.tableData.push({ id: uniqueId() })
    },
    deleteRow(index) {
      this.tableOptions.tableData.splice(index, 1);
    }
  }
}
</script>

<style>
</style>