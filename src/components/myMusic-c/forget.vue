<template>

	<div class="mod_profile_forget" >
		<div class="section_inner">
			<div class="topTitle ">云音乐安全中心 | 找回密码</div>
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
			<find-password1  ref='f1' style="margin-top: 5%;"></find-password1>
		     </div>
		     <div style="margin-bottom: 10px" >
          <el-button style="margin-top: 12px;" @click="backStep">上一步</el-button>
			   <el-button style="margin-top: 12px;" @click="nextStep">下一步</el-button>
		    </div>
		</div>
		</template>
		<template v-else-if="active=== 1" >
      <div>
			<find-password2 ref='f2' style="margin-top: 5%;"></find-password2>
      <el-button style="margin-top: 12px;" @click="backStep">上一步</el-button>
			<el-button style="margin-top: 12px;" @click="nextStep">下一步</el-button>
    </div>
		</template>
		<template v-else-if="active=== 2">
			<div>
			<find-password3 ref='f3' style="margin-top: 5%"></find-password3>
        <el-button style="margin-top: 12pz;" @click="backStep">上一步</el-button>
			<el-button  @click="nextStep">下一步</el-button>
    </div>
		</template>
		 <template v-else-if="active=== 3">
			<div class="successInfo"> 
	
                 <i class="el-icon-circle-check" style="color:#03c03c"></i><span> 找回密码成功！</span>
               
			
			</div>
		  
			 <el-button type="success" style="margin-top: 12px;" @click="back">进入我的音乐</el-button>

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
        userid:''
        //dialogVisible:false
      };
    },

    methods: {
      backStep(){
       if(this.active--<=0) 
        this.active=0;

      },
      nextStep() {
        // if (this.active++ > 2) 
        //   this.active = 0;
        if(this.active===0){
          if(this.$refs.f1.ruleForm.id){
             this.active++;
             this.userid=this.$refs.f1.ruleForm.id;
             this.$store.state.forgetID=this.userid;
             console.log(this.userid);
             // this.$root.Bus.$emit('findPassword1','userid')
          }
          else{

          }
        
    
         // alert(this.$refs.f1.ruleForm.id);  
        }
        else if(this.active===1){
        
        
       this.axios.get('http://localhost:8080/MusicWeb/user/checkSecurityAnswer', {
        params: {
           //userId: 
           userID:  this.userid,
           answer:  this.$refs.f2.anwser
         }
       })
       .then(res => {
        if(res.data== true){
         this.active++;
        // console.log(true)
        }
        else{
           this.$message.error('答案错误');
        }
       
       
     });

        }
        else if(this.active===2){
       if(this.$refs.f3.ruleForm.pass&&this.$refs.f3.ruleForm.checkPass)
          {if(this.$refs.f3.ruleForm.pass==this.$refs.f3.ruleForm.checkPass)
          {  
            this.axios.get('http://localhost:8080/MusicWeb/user/resetPassword', {
              params: {
           //userId: 
           userID:  this.userid,
           password: this.$refs.f3.ruleForm.checkPass
         }
       })
            .then(res => {
              if(res.data== true){
               this.active++;
               console.log(true);
             }


           });

          }
          else
          {

          }
          }else{}


      }},
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
   .topTitle {
    background-color: #E8E8E8;
    color: #333;
    padding-left:5%;

    text-align: left;
    line-height: 60px;
    font-family: "微软雅黑",sans-serif;
    font-size:160% ; 
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

  .successInfo{
    font-family: "微软雅黑";
     text-align: center;
    font-size:200% ; 
    padding-top:5%;
    padding-bottom:5%;
  
  }

}
</style>
