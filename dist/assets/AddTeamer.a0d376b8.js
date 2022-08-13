import{c as e}from"./index.5dbf8fd3.js";import"./vendor.c3957063.js";const a={computed:{uploadUrl:function(){return e.baseApi+"/api/upload"}},data(){return{TeamerInfo:{name:"",position:"",experience:"",thumbnail:""},headers:{Authorization:this.$storage.getItem("token")},rules:{name:[{required:!0,message:"姓名为必填项",trigger:"blur"},{min:2,max:10,message:"长度在 3 到10个字符",trigger:"blur"}],position:[{required:!0,message:"职位为必填项",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],experience:[{required:!0,message:"履历为必填项",trigger:"blur"},{min:10,max:500,message:"长度在 10 到 500 个字符",trigger:"blur"}]}}},methods:{submit(e){const a=this;this.$refs[e].validate((e=>{e&&(a.$refs.thumbUpload.uploadRef.fileList.length?a.$refs.thumbUpload.submit():a.$ElMessage.error("请上传成员头像"))}))},handleThumbnailSuccess(e){let a=this,{path:o}=e.data;this.TeamerInfo.thumbnail=o;let t=this.TeamerInfo;this.$api.addTeam(t).then((e=>{40001==e.code?a.$refs.thumbUpload.clearFiles():(a.$ElMessage.success(e.mes),a.reset())}))},reset(){this.$refs.thumbUpload.clearFiles(),this.TeamerInfo.name="",this.TeamerInfo.position="",this.TeamerInfo.experience=""}}},o=Vue.withScopeId("data-v-49f3398b");Vue.pushScopeId("data-v-49f3398b");const t={class:"addTeamer"},r=Vue.createVNode("i",{class:"icon iconfont icon-shangchuan"},null,-1),l=Vue.createVNode("div",{class:"el-upload__tip"}," 尺寸宽高比为：1:2 ",-1),s=Vue.createTextVNode("提交"),u=Vue.createTextVNode("重置");Vue.popScopeId();const n=o(((e,a,n,d,i,m)=>{const p=Vue.resolveComponent("el-upload"),c=Vue.resolveComponent("el-form-item"),V=Vue.resolveComponent("el-input"),f=Vue.resolveComponent("el-button"),h=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock("div",t,[Vue.createVNode(h,{rules:i.rules,ref:"teamerForm","label-position":"left","label-width":"80px",model:i.TeamerInfo},{default:o((()=>[Vue.createVNode(c,{label:"成员头像"},{default:o((()=>[Vue.createVNode(p,{ref:"thumbUpload",class:"avatar-uploader","list-type":"picture-card",limit:1,"auto-upload":!1,action:m.uploadUrl,headers:i.headers,"show-file-list":!0,"on-success":m.handleThumbnailSuccess},{tip:o((()=>[l])),default:o((()=>[r])),_:1},8,["action","headers","on-success"])])),_:1}),Vue.createVNode(c,{label:"成员姓名",prop:"name"},{default:o((()=>[Vue.createVNode(V,{modelValue:i.TeamerInfo.name,"onUpdate:modelValue":a[1]||(a[1]=e=>i.TeamerInfo.name=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(c,{label:"成员职位",prop:"position"},{default:o((()=>[Vue.createVNode(V,{modelValue:i.TeamerInfo.position,"onUpdate:modelValue":a[2]||(a[2]=e=>i.TeamerInfo.position=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(c,{label:"成员履历",prop:"experience"},{default:o((()=>[Vue.createVNode(V,{type:"textarea",rows:4,placeholder:"多条履历用 '|' 符号隔开",modelValue:i.TeamerInfo.experience,"onUpdate:modelValue":a[3]||(a[3]=e=>i.TeamerInfo.experience=e)},null,8,["modelValue"])])),_:1}),Vue.createVNode(c,null,{default:o((()=>[Vue.createVNode(f,{type:"primary",onClick:a[4]||(a[4]=e=>m.submit("teamerForm"))},{default:o((()=>[s])),_:1}),Vue.createVNode(f,{type:"primary",onClick:m.reset},{default:o((()=>[u])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","model"])])}));a.render=n,a.__scopeId="data-v-49f3398b";export{a as default};
