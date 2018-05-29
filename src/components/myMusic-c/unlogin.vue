<template>
	<div class="mod_profile_unlogin" >
		<div class="section_inner">
			<h2 class="profile_unlogin__tit">
				<div class="icon_txt">听我喜欢听的歌</div>
			</h2>
			<div class="profile_unlogin__desc"></div>
		   
			<el-button class="mod_btn_green profile_unlogin__btn js_login" @click="dialogVisible=true">立即登录</el-button> 

			<el-dialog width="30%" title="欢迎来到云音乐" :visible.sync="dialogVisible":before-close="handleClose">
				<el-tabs v-model="activeName" @tab-click="handleClick" style="margin-right:10% ;margin-left:10%  ">
					<el-tab-pane  label="登录" name="first">
						<el-form :model="form">
							<el-form-item label="账号" :label-width="formLabelWidth">
								<el-input type="text" v-model="form.id" auto-complete="off" placeholder="请输入账号"></el-input>
							</el-form-item>
							<el-form-item label="密码" :label-width="formLabelWidth">
								<el-input type="password" v-model="form.password" placeholder="请输入密码" ></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="success" @click="login(form)">登录</el-button>
							</el-form-item>
						</el-form>
	                     <router-link :to= "{path:'forget'}" id="ForgetPassword" style="color:#888888">忘记密码 </router-link>
				    </el-tab-pane>


					<el-tab-pane label="注册" name="second">
						<el-form :model="ruleForm":rules="rules" label-width="80px"ref="ruleForm">
						<el-form-item label="昵称"  prop="name">
							<el-input type="text" v-model="ruleForm.name" auto-complete="off" placeholder="请输入昵称"></el-input>
						</el-form-item>
						<el-form-item label="邮箱"  prop="id">
							<el-input type="text" v-model="ruleForm.id" placeholder="请输入邮箱"></el-input>
						</el-form-item>
						<el-form-item label="性别" class="left" prop="gender">
							<el-radio-group v-model="ruleForm.gender">
								<el-radio label="男" value="male"></el-radio>
								<el-radio label="女" value="female"></el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item label="密码"  prop="password">
							<el-input type="password" v-model="ruleForm.password" placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item label="密保问题" class="left" prop="question" >
							<el-select v-model="ruleForm.question" size="100%" placeholder="请选择密保问题">
								<el-option label="你爸爸叫什么" value="q1"></el-option>
								<el-option label="你妈妈叫什么" value="q2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="密保答案"  prop="answer">
							<el-input v-model="ruleForm.answer" placeholder="请输入密保问题的答案"></el-input>
						</el-form-item>
					    </el-form>
					
                     <el-button type="success" @click="regist(ruleForm,'ruleForm')">注册</el-button>
					</el-tab-pane>
				</el-tabs>	
		</el-dialog>
		
		</div>
	</div>
	
</template>



<script>
export default {
	data(){
		return{
			dialogVisible:false,
			activeName:'first',
			isLogin:'',
			formLabelWidth: '40px',
			form:{

				password:'',
				id:'',
			},
			ruleForm: {
				name: '',
				password:'',
				id:'',
				gender:'',
				question:'',
				answer:''
			},
			rules:{
				name:[
				{ required: true, message: '请输入昵称', trigger: 'blur' },
				{ min: 1, max: 25, message: '长度在1到25个字符', trigger: 'blur' }
				],
				password:[
				{ required: true, message: '请输入密码', trigger: 'blur' },
				],
				id:[
				{ required: true, message: '请输入邮箱', trigger: 'blur'},
				{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
				],
				gender:[
				{required: true, message: '请选择性别', trigger: 'blur'}
				],
				question:[
				{required: true, message: '请选择问题', trigger: 'blur'}
				],
				answer:[
				{required: true, message: '请输入答案', trigger: 'blur'}
				]
			}
		}
	},

	methods: 
	{
	   handleClick(tab, event) {
        console.log(tab, event);
        } ,
		handleClose(done) {
        		this.$refs.ruleForm.resetFields();	
        		done();
               this.activeName='first';
        },
       
		login:function(form){
            
             this.axios.get('http://localhost:8080/MusicWeb/user/checkUserIDExisted',{
             	params:{
                     userID:form.id,
                  
                 }
             	}).then(res=>{
             		if(res.data){
             this.axios.get('http://localhost:8080/MusicWeb/user/login',{
             	params:{
                     userID:form.id,
                     password:form.password
                 }
             	}).then(res=>{
             		if(res.data){
                         console.log(res);
                         this.$router.push({path:'/myMusicInfo'});
                        // this.$store.commit('', )
                        this.$store.state.isLogin=true;
                        this.isLogin= this.$store.state.isLogin;
						 this.$store.state.user.userId=form.id;
						
                          this.$root.Bus.$emit('login','isLogin')
                          
             		}
             		else {
             			this.$alert('密码不正确', '提示', {
								confirmButtonText: '确定',
								type: 'error',
								center:true
							});
             		}
                   
             	});
             }
             else {
             	this.$alert('账号不存在', '提示', {
             		confirmButtonText: '确定',
             		type: 'error',
             		center:true
             	});
             }
             });
		},
		regist:function(formname,formName){
			//console.log(this);
             var isvalid=false;
			this.$refs[formName].validate((valid) => {
   
				if (valid) {
					//alert('submit!');
				  
				this.axios.get('http://localhost:8080/MusicWeb/user/register',{
						params:{
							userID:formname.id,
							userName:formname.name,
							password:formname.password, 
							userIcon:null,  
							gender:formname.gender, 
							securityQuestion:formname.question, 
							securityAnswer:formname.answer
						}                                       
					}).then(res => {

						if(res.data==true){
						 // this.$router.push({path:'/myMusicInfo'});
						  this.$refs.ruleForm.resetFields();	
						  this.$alert('注册成功！', '提示', {
								confirmButtonText: '确定',
								type: 'success',
								center:true
							});
						  this.activeName='first'
						}
						else
						{
							this.$alert('该邮箱已被注册', '提示', {
								confirmButtonText: '确定',
								type: 'error',
								center:true
							});
						}

                //
            });
              
				} else {
					console.log('error submit!!');
					return false;
				}
			});
			 
		},
	
        
        }
}


</script>

<style lang="scss">
@import "./style/unlogin.scss";
.left{
	text-align:left;
}
</style>
