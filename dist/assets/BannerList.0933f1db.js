const e={name:"BannerList",data:()=>({BannerList:[]}),mounted(){this.$api.getBannerList().then((e=>{this.BannerList=e.data}))},methods:{deleteRow(e,t){let a=t[e];this.$api.deleteBanner({_id:a._id}).then((e=>{this.$ElMessage.success("删除成功")})),t.splice(e,1)},editor(){alert("功能暂未开发")}}},t=Vue.withScopeId("data-v-7701404c");Vue.pushScopeId("data-v-7701404c");const a=Vue.createTextVNode("　　　　 "),l={width:"192",height:"108",class:"head_pic"},n=Vue.createTextVNode(" 　　 "),r=Vue.createTextVNode(" 移除 ");Vue.popScopeId();const o=t(((e,o,d,i,c,s)=>{const u=Vue.resolveComponent("el-table-column"),V=Vue.resolveComponent("el-button"),p=Vue.resolveComponent("el-table"),h=Vue.resolveDirective("lazy");return Vue.openBlock(),Vue.createBlock(p,{class:"table",data:c.BannerList,lazy:"",stripe:"",border:""},{default:t((()=>[Vue.createVNode(u,{prop:"bannerurl",align:"center",label:"轮播图"},{default:t((e=>[a,Vue.withDirectives(Vue.createVNode("img",l,null,512),[[h,e.row.bannerurl]]),n])),_:1}),Vue.createVNode(u,{prop:"title",align:"center",label:"标题"}),Vue.createVNode(u,{prop:"des",align:"center",label:"描述"}),Vue.createVNode(u,{prop:"bgcolor",align:"center",label:"背景颜色"}),Vue.createVNode(u,{prop:"link",align:"center",label:"链接地址"}),Vue.createVNode(u,{fixed:"right",align:"center",label:"操作",width:"240"},{default:t((e=>[Vue.createVNode(V,{onClick:Vue.withModifiers((t=>s.deleteRow(e.$index,c.BannerList)),["prevent"]),type:"danger",size:"small"},{default:t((()=>[r])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data"])}));e.render=o,e.__scopeId="data-v-7701404c";export{e as default};
