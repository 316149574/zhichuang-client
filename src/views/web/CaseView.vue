<template>
  <NavBar />
  <BrandList :showbtn="false"/>
  <div class="dl-container detail">
    
    <!-- <img class="thumbnail" :src="Case.thumbnail" /> -->
    <h3 class="name"> {{ Case.name }}</h3>
    <p class="des">{{ Case.des}}</p>
    <p class="time">发布时间:{{Case.createtime}} </p>
    
    <div class="wrap">
      <img v-lazy="item" v-for="(item, index) in Case.caseimgurl" :key="index" />
    </div>
  </div>

  <FooterList :companyinfo="CompanyInfo"></FooterList>
</template>

<script>
import NavBar from "../../components/web/NavBar.vue";
import BrandList from "../../components/web/BrandList.vue";

import FooterList from "../../components/web/FooterList.vue";
export default {
  name: "CasesView",
  mounted() {
    this.$api.getCompanyInfo().then((res) => {
      this.CompanyInfo = res.data[0];
    });

    this.$api.getCaseList({ _id: this.$route.params.id }).then((res) => {
      this.Case = res.data[0];
    });
  },
  data() {
    return {
      Case: "",
      CompanyInfo: [],
    };
  },
  methods: {},
  components: {
    NavBar,
    BrandList ,
    FooterList,
  },
};
</script>

<style>
.detail{
  text-align: center;
  margin-top: 30px;
}
.detail .thumbnail{
  width: 200px;
}
.detail .wrap img{
  width: 100%;
}
.detail .name{
  font-size: 24px;
  line-height: 48px;
  color: #333;
  margin-top: 40px;
}
.detail .des{
  font-size: 14px;
  color: #444;
}
.detail .time{
  font-size: 12px;
  color: #444;
  margin-top: 10px;
}

</style>
