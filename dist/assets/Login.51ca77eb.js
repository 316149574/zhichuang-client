const e={name:"login",data:()=>({user:{username:"",password:""},rules:{username:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:10,message:"用户名长度为2~12位",trigger:"blur"}],password:[{required:!0,message:"密码名长度为3~12位",trigger:"blur"},{min:3,max:10,message:"密码名长度为3~12位",trigger:"blur"}]}}),methods:{login(){this.$refs.userForm.validate((e=>{e&&this.$api.login(this.user).then((e=>{let{username:o,token:r}=e.data;this.$store.commit("saveUserInfo",o),this.$storage.setItem("token",r),this.$router.push("/admin")}))}))}}},o=Vue.withScopeId("data-v-2b46c3df");Vue.pushScopeId("data-v-2b46c3df");const r={class:"login-box"},s={class:"modal"},a=Vue.createVNode("h3",{class:"title"},"智创后台管理系统",-1),t=Vue.createTextVNode("登陆");Vue.popScopeId();const u=o(((e,u,l,d,n,i)=>{const m=Vue.resolveComponent("el-input"),c=Vue.resolveComponent("el-form-item"),p=Vue.resolveComponent("el-button"),V=Vue.resolveComponent("el-form");return Vue.openBlock(),Vue.createBlock("div",r,[Vue.createVNode("div",s,[Vue.createVNode(V,{ref:"userForm",model:n.user,"status-icon":"",rules:n.rules},{default:o((()=>[a,Vue.createVNode(c,{prop:"username"},{default:o((()=>[Vue.createVNode(m,{modelValue:n.user.username,"onUpdate:modelValue":u[1]||(u[1]=e=>n.user.username=e),placeholder:"username","prefix-icon":"el-icon-user",type:"text"},null,8,["modelValue"])])),_:1}),Vue.createVNode(c,{prop:"password"},{default:o((()=>[Vue.createVNode(m,{modelValue:n.user.password,"onUpdate:modelValue":u[2]||(u[2]=e=>n.user.password=e),placeholder:"password","prefix-icon":"el-icon-view",type:"password"},null,8,["modelValue"])])),_:1}),Vue.createVNode(c,null,{default:o((()=>[Vue.createVNode(p,{type:"primary",onClick:i.login},{default:o((()=>[t])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])])])}));e.render=u,e.__scopeId="data-v-2b46c3df";export{e as default};
