<template>
     <NavBar/>
     <BannerList></BannerList>
     <AboutList :about="aboutInfo"></AboutList>
     <ServerList :servers="ServerList"></ServerList>
     <TeamList :teams="TeamList"></TeamList>
     <CaseList ></CaseList>
     <ContactList :companyinfo="CompanyInfo"></ContactList>
     <FooterList :companyinfo="CompanyInfo"></FooterList>
</template>

<script>
import NavBar from '../../components/web/NavBar.vue'
import BannerList from '../../components/web/BannerList.vue'
import AboutList from '../../components/web/AboutList.vue'
import ServerList from '../../components/web/ServerList.vue'
import TeamList from '../../components/web/TeamList.vue'
import CaseList from '../../components/web/CaseList.vue'
import ContactList from '../../components/web/ContactList.vue'
import FooterList from '../../components/web/FooterList.vue'
export default {
  mounted(){
     this.$api.getAbout().then((res)=>{
         this.aboutInfo = res.data[0];
     })
     this.$api.getBusinessList().then((res)=>{
        this.ServerList = res.data;
        
     })
     this.$api.getTeamList().then((res)=>{
        this.TeamList = res.data;
     })
     this.$api.getCompanyInfo().then((res)=>{
        this.CompanyInfo = res.data[0];
     })
  },
  data() {
    return {
        aboutInfo:[],
        ServerList:[],
        TeamList:[],
        CompanyInfo:[]
    };
  },
  methods: {
    
  },
  components:{
    NavBar,
    BannerList,
    AboutList,
    ServerList,
    TeamList,
    CaseList,
    ContactList,
    FooterList
  }
};
</script>

<style>
</style>
