import{c as e}from"./index.5dbf8fd3.js";import"./vendor.c3957063.js";const o={computed:{uploadUrl:function(){return e.baseApi+"/api/upload"}},mounted(){const e=this;this.$api.getCompanyInfo().then((o=>{const a=o.data[0];o.data.length&&(e.CompanyInfo.name=a.name,e.CompanyInfo.copyright=a.copyright,e.CompanyInfo.address=a.address,e.CompanyInfo.contacts=a.contacts,e.CompanyInfo.qq=a.qq,e.CompanyInfo.map=a.map,e.CompanyInfo.logo=a.logo,e.CompanyInfo.wechat=a.wechat)}))},data(){return{CompanyInfo:{name:"",logo:"",wechat:"",address:"",copyright:"",contacts:"",qq:"",map:""},headers:{Authorization:this.$storage.getItem("token")},rules:{name:[{required:!0,message:"公司名称为必填项",trigger:"blur"},{min:2,max:30,message:"长度在 2 到30个字符",trigger:"blur"}],address:[{required:!0,message:"业务描述为必填项",trigger:"blur"}],copyright:[{required:!0,message:"备案号为必填项",trigger:"blur"}],contacts:[{required:!0,message:"联系人为必填项",trigger:"blur"}],qq:[{required:!0,message:"QQ号为必填项",trigger:"blur"}],map:[{required:!0,message:"地图代码为必填项",trigger:"blur"}]}}},methods:{error(){console.log(this.$refs.logoUpload)},logochange(){this.showlogo=!0},wechatchange(){this.showwechat=!0},submit(e){const o=this;this.$refs[e].validate((e=>{if(e)if(o.$refs.logoUpload.uploadRef.fileList.length&&o.$refs.wechatUpload.uploadRef.fileList.length)o.$refs.logoUpload.submit();else if(o.CompanyInfo.logo||o.CompanyInfo.wechat){const e=o.CompanyInfo;this.$api.addCompanyInfo(e).then((e=>{40001==e.code||o.$ElMessage.success(e.mes)}))}else o.$ElMessage.error("请上传logo和二维码图片")}))},handleLogoSuccess(e){let{path:o}=e.data;this.CompanyInfo.logo=o,this.$refs.wechatUpload.submit()},handleWechatSuccess(e){let o=this,{path:a}=e.data;this.CompanyInfo.wechat=a;let t=this.CompanyInfo;this.$api.addCompanyInfo(t).then((e=>{40001==e.code||o.$ElMessage.success(e.mes)}))}}},a=Vue.withScopeId("data-v-7282ea8b");Vue.pushScopeId("data-v-7282ea8b");const t={class:"companyInfo"},l=Vue.createVNode("i",{class:"icon iconfont icon-shangchuan"},null,-1),n=Vue.createVNode("i",{class:"icon iconfont icon-shangchuan"},null,-1),s=Vue.createTextVNode("提交/更新");Vue.popScopeId();const d=a(((e,o,d,r,c,u)=>{const p=Vue.resolveComponent("el-input"),m=Vue.resolveComponent("el-form-item"),i=Vue.resolveComponent("el-upload"),h=Vue.resolveComponent("el-button"),f=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock("div",t,[Vue.createVNode(f,{rules:c.rules,ref:"companyInfo","label-position":"left","label-width":"100px",model:c.CompanyInfo},{default:a((()=>[Vue.createVNode(m,{label:"公司名称",prop:"name"},{default:a((()=>[Vue.createVNode(p,{modelValue:c.CompanyInfo.name,"onUpdate:modelValue":o[1]||(o[1]=e=>c.CompanyInfo.name=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,{label:"公司logo"},{default:a((()=>[Vue.createVNode(i,{ref:"logoUpload",class:"uploadlogo","list-type":"picture-card",limit:1,"on-change":u.logochange,"auto-upload":!1,action:u.uploadUrl,headers:c.headers,"on-success":u.handleLogoSuccess},{default:a((()=>[l])),_:1},8,["on-change","action","headers","on-success"])])),_:1}),Vue.createVNode(m,{label:"微信二维码"},{default:a((()=>[Vue.createVNode(i,{ref:"wechatUpload",class:"uploadwechat","list-type":"picture-card",limit:1,"on-change":u.wechatchange,"auto-upload":!1,action:u.uploadUrl,headers:c.headers,"show-file-list":e.showwechat,"on-success":u.handleWechatSuccess},{default:a((()=>[n])),_:1},8,["on-change","action","headers","show-file-list","on-success"])])),_:1}),Vue.createVNode(m,{label:"公司地址",prop:"address"},{default:a((()=>[Vue.createVNode(p,{type:"textarea",rows:4,placeholder:"如果有地址路线描述,请在公司地址后面用 '|'符号隔开， 例如： 天府三街新希望大厦2号楼107号 | 乘坐地铁1号线或者18号线，在天府三街地铁口B出口出站，出站后右转就可以看到新希望大厦 ",modelValue:c.CompanyInfo.address,"onUpdate:modelValue":o[2]||(o[2]=e=>c.CompanyInfo.address=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,{label:"备案号",prop:"copyright"},{default:a((()=>[Vue.createVNode(p,{modelValue:c.CompanyInfo.copyright,"onUpdate:modelValue":o[3]||(o[3]=e=>c.CompanyInfo.copyright=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,{label:"联系人",prop:"contacts"},{default:a((()=>[Vue.createVNode(p,{placeholder:"格式为: 段礼|15182546309 姓名和电话用 '|'符号隔开    多个联系人用'&'符号隔开 例如：段礼|15182546309 & 蒋静|17780256700 ",modelValue:c.CompanyInfo.contacts,"onUpdate:modelValue":o[4]||(o[4]=e=>c.CompanyInfo.contacts=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,{label:"QQ号",prop:"qq"},{default:a((()=>[Vue.createVNode(p,{modelValue:c.CompanyInfo.qq,"onUpdate:modelValue":o[5]||(o[5]=e=>c.CompanyInfo.qq=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,{label:"地图代码",prop:"map"},{default:a((()=>[Vue.createVNode(p,{type:"textarea",rows:4,placeholder:"将第三方地图代码生成粘贴到此处",modelValue:c.CompanyInfo.map,"onUpdate:modelValue":o[6]||(o[6]=e=>c.CompanyInfo.map=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(m,null,{default:a((()=>[Vue.createVNode(h,{type:"primary",onClick:o[7]||(o[7]=e=>u.submit("companyInfo"))},{default:a((()=>[s])),_:1})])),_:1})])),_:1},8,["rules","model"])])}));o.render=d,o.__scopeId="data-v-7282ea8b";export{o as default};
