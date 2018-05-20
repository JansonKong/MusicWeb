<template>
	<div class="email">
		<el-form ref="form" :model="form" label-width="80px"style="margin-right:25% ;margin-left:25%  ">
			<el-form-item label="密保问题">
				<el-select v-model="form.question" clearable placeholder="请选择密保问题" size="100%">
					<el-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="密保答案">
			<el-input v-model="form.anwser" placeholder="请输入密保问题的答案"></el-input>
		</el-form-item>
	</el-form>
</div>
</template>

<script >
	 export default {
    data() {
      return {
      	form:{
      		qustion:'',
      		anwser:''
      	},
      options:[{
           value: '选项1',
          label: '你爸爸的名字？'
      },{
         value: '选项2',
          label: '你妈妈的名字？'
      },{
      	value: '选项3',
          label: '你的名字？'
      }
      ],
      value4:''
      };
    },
    methods: {
    
    }
  }
</script>
<style>
</style>