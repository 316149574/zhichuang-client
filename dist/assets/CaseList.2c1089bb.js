const e={name:"caseList",data:()=>({category:"all",caseList:[]}),mounted(){this.$api.getCaseList({category:"all"}).then((e=>{this.caseList=e.data}))},methods:{onchange(){this.$api.getCaseList({category:this.category}).then((e=>{this.caseList=e.data}))},deleteRow(e,t){let a=t[e];this.$api.deleteCase({_id:a._id}).then((e=>{this.$ElMessage.success("删除成功")})),t.splice(e,1)},editor(){alert("功能暂未开发")}}},t=Vue.withScopeId("data-v-92f96444");Vue.pushScopeId("data-v-92f96444");const a={class:"select"},l=Vue.createVNode("span",{class:"title"},"请选择案例类别",-1),o=Vue.createTextVNode(": "),c=Vue.createTextVNode(" 　　　　 "),d={width:"80",height:"80",class:"head_pic"},r=Vue.createTextVNode(" 　　 "),s=Vue.createTextVNode(" 编辑 "),i=Vue.createTextVNode(" 移除 ");Vue.popScopeId();const u=t(((e,u,V,n,p,h)=>{const g=Vue.resolveComponent("el-option"),N=Vue.resolveComponent("el-select"),m=Vue.resolveComponent("el-table-column"),v=Vue.resolveComponent("el-button"),b=Vue.resolveComponent("el-table"),C=Vue.resolveDirective("lazy");return Vue.openBlock(),Vue.createBlock(Vue.Fragment,null,[Vue.createVNode("div",a,[l,o,Vue.createVNode(N,{modelValue:p.category,"onUpdate:modelValue":u[1]||(u[1]=e=>p.category=e),onChange:h.onchange},{default:t((()=>[Vue.createVNode(g,{label:"全部案例",value:"all"}),Vue.createVNode(g,{label:"UI设计",value:"ui"}),Vue.createVNode(g,{label:"网站开发",value:"web"}),Vue.createVNode(g,{label:"视频制作",value:"movie"}),Vue.createVNode(g,{label:"广告设计",value:"ad"})])),_:1},8,["modelValue","onChange"])]),Vue.createVNode(b,{class:"table",data:p.caseList,lazy:"",stripe:"",border:""},{default:t((()=>[Vue.createVNode(m,{prop:"thumbnail",align:"center",label:"缩略图"},{default:t((e=>[c,Vue.withDirectives(Vue.createVNode("img",d,null,512),[[C,e.row.thumbnail]]),r])),_:1}),Vue.createVNode(m,{prop:"name",align:"center",label:"项目名称"}),Vue.createVNode(m,{prop:"des",align:"center",label:"项目描述"}),Vue.createVNode(m,{prop:"category",align:"center",label:"案例分类"}),Vue.createVNode(m,{fixed:"right",align:"center",label:"操作",width:"240"},{default:t((e=>[Vue.createVNode(v,{onClick:Vue.withModifiers((t=>h.editor(e.$index,p.caseList)),["prevent"]),type:"primary",size:"small"},{default:t((()=>[s])),_:2},1032,["onClick"]),Vue.createVNode(v,{onClick:Vue.withModifiers((t=>h.deleteRow(e.$index,p.caseList)),["prevent"]),type:"danger",size:"small"},{default:t((()=>[i])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])],64)}));e.render=u,e.__scopeId="data-v-92f96444";export{e as default};
