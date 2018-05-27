<template>

	<div class="mod_profile_forget" >
		<div class="section_inner">
			<div class="title">找回密码</div>
			<div class="process">
			
				<el-steps :active="active" finish-status="success" align-center>
					<el-step title="填写邮箱"></el-step>
					<el-step title="密保问题"></el-step>
					<el-step title="重置密码"></el-step>
				</el-steps>
			
				
			</div>    
		</div>

	<div class="section_inner">
		<template v-if="active===0">
		<div style="margin-top:10px">
			<div>
			<find-password1  style="margin-top: 100px;"></find-password1>
		     </div>
		     <div style="margin-bottom: 10px" >
          <el-button style="margin-top: 12px;" @click="backStep">上一步</el-button>
			   <el-button style="margin-top: 12px;" @click="nextStep">下一步</el-button>
		    </div>
		</div>
		</template>
		<template v-else-if="active=== 1" >
      <div>
			<find-password2 style="margin-top: 100px;"></find-password2>
      <el-button style="margin-top: 12px;" @click="backStep">上一步</el-button>
			<el-button style="margin-top: 12px;" @click="nextStep">下一步</el-button>
    </div>
		</template>
		<template v-else-if="active=== 2">
			<div>
			<find-password3 style="margin-top: 100px"></find-password3>
        <el-button style="margin-top: 12px;" @click="backStep">上一步</el-button>
			<el-button  @click="nextStep">下一步</el-button>
    </div>
		</template>
		 <template v-else-if="active=== 3">
			<div> 
	<!-- 		<el-dialog width="30%":visible.sync="dialogVisible" >
                 <span >找回密码成功！</span>
                <div slot="footer" class="dialog-footer">
			
			</div>
		    </el-dialog> -->
			 <el-button  style="margin-top: 12px;" @click="back">进入我的音乐</el-button>
    </div>
		 </template> 
	
	</div>
	
</div>

</template>


<script>
import findPassword1 from './findPassword1';
import findPassword2 from './findPassword2';
import findPassword3 from './findPassword3';
	
  export default {
  	components:{
  		findPassword1,
		  findPassword2,
        findPassword3
  	},
    data() {
      return {
        active: 0,
        //dialogVisible:false
      };
    },

    methods: {
      backStep(){
       if(this.active--<=0) 
        this.active=0;

      },
      nextStep() {
        if (this.active++ > 2) 
          this.active = 0;
        console.log(findPassword1.ruleForm);
      },
      nextInfo(){
          this.$alert('找回密码成功！', '提示', {
                confirmButtonText: '确定',
                type: 'success',
                center:true
              });
      },
      back(){
      	 this.$router.push({path: '/unlogin'})
      }
    }
  }

</script>
<style>
	@media screen and (max-height: 800px) {
  .mod_profile_forget {
    height: 500px;
    background-color: rgba(250, 250, 250, 1.0);
    overflow: hidden;
  }
   .title {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-family: "微软雅黑",sans-serif;
    font-size:200% ; 
  }
   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .process{
 
  	margin-top:2%;
	margin-left:23%;

  }
  .success{
  	font-family: "微软雅黑",sans-serif;
  	font-size:200% ; 
  	margin-top:10%;
  	margin-bottom:10%
  }

}
</style>
