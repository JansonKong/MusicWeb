<template>
	<div class="email">
	 
   <el-row style="margin-right:25% ;margin-left:25%   ; color:  #585858;">
    <el-col :span="4">
      <label for="q">密保问题</label> 
    </el-col>
    <el-col :span="20">
     <span v-model="question" ref="question" id="q" style="float:left">{{question}}</span>
   </el-col>
 </el-row>
   <el-row style="margin-right:25% ;margin-left:25% ;   color: #585858;
">
 <el-col :span="4">
 <label for="a">密保答案</label> 
  </el-col>
     <el-col :span="20">
   <el-input v-model="anwser" id="a" ref="anwser" type="text" placeholder="请输入密保问题的答案"></el-input>
 </el-col>
 </el-form-item>
</el-form>
</el-row>

</div>
</template>

<script >

 
	 export default {
  
    data() {
      
      return {
       userid:'',
       question:'',	
      		anwser:''

      	
      };
    }, 
    mounted(){ 
      this.userid=this.$store.state.forgetID;
      this.setQustion();
     
    },
    methods: {
    setQustion:function(){
     
        //console.log(userId);
        this.axios.get('http://localhost:8080/MusicWeb/user/getSecurityQuestion', {
        params: {
           //userId: 
           userID:  this.userid
         }
       })
       .then(res => {
        if(res.data=="q1"){
            this.question="你的爸爸叫什么？"
        }
        else if(res.data=="q2"){
          this.question="你的妈妈叫什么？"
        }
        else if(res.data=="q3")
         {
          this.question="你叫什么？"
         }
       
     });
        }
       }     
    }

 
</script>
<style>
</style>