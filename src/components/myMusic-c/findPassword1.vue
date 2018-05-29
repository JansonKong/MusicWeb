<template>
	<div   >
		<el-form :model="ruleForm":rules="rules" label-width="60px" style="margin-right:25% ;margin-left:25%  ">
			<el-form-item  label ="邮箱" prop="id" >
			<el-input  type="text" v-model="ruleForm.id" placeholder="请输入邮箱"  >
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
   				id:''
        },
        rules: {
        id:[
        { required: true, message: '请输入邮箱', trigger: 'blur'},
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
        }
      };
    }
  }
</script>
<style>
</style>