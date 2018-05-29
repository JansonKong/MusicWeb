<template>
	<div class="password">
		<el-form :model="ruleForm" :rules="rules" label-width="90px" ref="ruleForm" style="margin-right:30% ;margin-left:30%  ">
			<el-form-item  label ="新密码"prop="pass"  >
			<el-input v-model="ruleForm.pass" placeholder="请输入新密码" type="password"    >
			</el-input>
      	</el-form-item>
        <br>
      	<el-form-item label ="确认新密码"  prop="checkPass">
			<el-input v-model="ruleForm.checkPass" placeholder="请确认新密码" type="password" >
			</el-input>
      	</el-form-item>
		</el-form>
	</div>
</template>
<script >
	 export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
       var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
   		     pass:'',
           checkPass: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        
        }
      };
    },
    methods: {
    
    }
  }
</script>
<style>
</style>