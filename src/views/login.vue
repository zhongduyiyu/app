<template>
  <div class="login">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="['userName',{rules: [{ required: true, message: '请输入用户名' },],},]"
          placeholder="用户名"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"/>
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input
          v-decorator="['password', { rules: [{ required: true, message: '请输入密码' },],},]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="['remember',{
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
        >
          记住我
        </a-checkbox>
        <!-- <a class="login-form-forgot" href=""> Forgot password </a> -->
        <a-button type="primary" html-type="submit" class="login-form-button">
          登录
        </a-button>
        <!-- <a href=""> register now! </a> -->
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { login } from "@/api/login"
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
         //api 登录
         let res = await login({params:{}})
         console.log(res);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
    //
    .login{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .login-form{
            height: 400px;
            width: 300px;
        }
    }

    #components-form-demo-normal-login .login-form {
    max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-forgot {
    float: right;
    }
    #components-form-demo-normal-login .login-form-button {
    width: 100%;
    }
</style>