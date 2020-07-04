export default `
<template>
  <!--   多选框设置默认值，且默认值不能删除 -->
  <el-form :model="form">
    <el-form-item label="品类：" prop="Type">
      <el-select multiple v-model="form.Type" @remove-tag="removeTagHandle">
        <el-option
          :disabled="dType.includes(item.value)"
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        Type: []
      },
      options: [
        {
          value: "1",
          label: "黄金糕"
        },
        {
          value: "2",
          label: "双皮奶"
        },
        {
          value: "3",
          label: "蚵仔煎"
        },
        {
          value: "4",
          label: "龙须面"
        },
        {
          value: "5",
          label: "北京烤鸭"
        }
      ],
      dType: [] //默认值存放
    };
  },
  methods: {
    removeTagHandle(value) {
      const index = this.dType.indexOf(value);
      if (index !== -1) {
        this.form.Type.splice(index, 0, value);
      }
    }
  },
  mounted() {
    this.dType = this.form.Type = ["1", "2"];
  }
};
</script>
`;
