<template>
	<div class="password">
		<el-form :model="ruleForm":rules="rules" label-width="90px" style="margin-right:30% ;margin-left:30%  ">
			<el-form-item v-model="ruleForm.oldPassword" label ="新密码"  >
			<el-input placeholder="请输入新密码" type="password"   prop="oldPassword">
			</el-input>
      	</el-form-item>
      	<el-form-item v-model="ruleForm.newPassword" label ="确认新密码"  >
			<el-input placeholder="请确认新密码" type="password"  prop="newPassword">
			</el-input>
      	</el-form-item>
		</el-form>
	</div>
</template>
<script >
	 export default {
    data() {
      return {
        ruleForm: {
   				oldPassword:'',
   				newPassword:''
        },
        rules: {
          newPassword: [
            { required: true, message: '请再次输入密码', trigger: 'blur' },
          ],
          oldPassword: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
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