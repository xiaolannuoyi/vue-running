export default `
<template>
  <!--  element-ui el-table与el-form同用,并校验  -->
  <div>
    <el-link
      href="https://blog.csdn.net/qq_31126175/article/details/97265338"
      type="primary"
      target="_blank"
    >
      文章地址：element-ui el-table与el-form同用,并校验
    </el-link>
    <!-- 代码开始 -->

    <el-form ref="form" :model="form" label-width="20px">
      <el-table
        ref="table"
        :data="form.tableData"
        empty-text="暂无数据"
        header-cell-class-name="requiredclass"
      >
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <el-form-item
              label=" "
              :prop="'tableData.' + scope.$index + '.name'"
              :rules="{ required: true, trigger: 'blur', validator: checkName }"
            >
              <el-input v-model="scope.row.name"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="年龄">
          <template slot-scope="scope">
            <el-form-item
              label=" "
              :prop="'tableData.' + scope.$index + '.age'"
              :rules="{ required: true, trigger: 'blur', validator: checkAge }"
            >
              <el-input v-model.number="scope.row.age" type="number"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="电话号码">
          <template slot-scope="scope">
            <el-form-item
              label=" "
              :prop="'tableData.' + scope.$index + '.tel'"
              :rules="{ required: true, trigger: 'blur', validator: checkTel }"
            >
              <el-input v-model.number="scope.row.tel" type="number"></el-input>
            </el-form-item>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="mini"
              @click="del(scope.$index)"
              icon="el-icon-delete"
            ></el-button>
            <el-button
              type="primary"
              size="mini"
              @click="add"
              icon="el-icon-plus"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>
    <el-button type="primary" size="mini" @click="confirm">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        tableData: [
          {
            name: "张一",
            age: 19,
            tel: 13333333332
          },
          {
            name: "张二",
            age: 11,
            tel: 13333333333
          },
          {
            name: "张三",
            age: 11,
            tel: 13333
          },
          {
            name: "",
            age: "",
            tel: ""
          }
        ]
      }
    };
  },
  methods: {
    add() {
      this.form.tableData.push({
        name: "",
        age: ""
      });
    },
    del(index) {
      this.form.tableData.splice(index, 1);
      // this.$refs.form.validate()
    },
    checkAge(rule, value, callback) {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else if (value < 18) {
        callback(new Error("必须年满18岁"));
      } else if (value > 50) {
        callback(new Error("小于50岁"));
      } else {
        callback();
      }
    },
    checkName(rule, value, callback) {
      let regName = /^[\u4e00-\u9fa5]{2,4}$/;
      let index = rule.field.split(".")[1];
      if (!value) {
        return callback(new Error("姓名不能为空"));
      } else if (!regName.test(value)) {
        callback(new Error("请输入正确的姓名"));
      } else if (this.nameequalCheck(index, value)) {
        callback(new Error("姓名重复,请重新填写"));
      } else {
        callback();
      }
    },
    checkTel(rule, value, callback) {
      let regTel = /^(((1[3456789][0-9]{1})|(15[0-9]{1}))+\d{8})$/;
      let index = rule.field.split(".")[1];
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      } else if (!regTel.test(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else if (this.telequalCheck(index, value)) {
        callback(new Error("电话号码重复,请重新填写"));
      } else {
        callback();
      }
    },
    //相等判断
    telequalCheck(index, value) {
      return this.form.tableData.some(({ tel }, i) => {
        return i == index ? false : tel === value;
      });
    },
    nameequalCheck(index, value) {
      return this.form.tableData.some(({ name }, i) => {
        return i == index ? false : name === value;
      });
    },
    confirm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "提交成功",
            type: "success"
          });
        } else {
          this.$message({
            message: "提交失败",
            type: "error"
          });
        }
      });
    }
  }
};
</script>

`;
