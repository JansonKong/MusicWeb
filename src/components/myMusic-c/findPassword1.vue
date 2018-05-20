<template>
	<div class="email" >
		<el-form :model="ruleForm":rules="rules" label-width="60px" style="margin-right:25% ;margin-left:25%  ">
			<el-form-item v-model="ruleForm.enail" label ="邮箱" prop="email" >
			<el-input placeholder="请输入邮箱"  icon="search" >
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
   				email:''
        },
        rules: {
          email: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
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