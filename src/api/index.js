//  此文件用于管理请求函数
import request from "./../utils/request"
export default {
    login(user) {
        return request({
            url: '/api/login',
            method: 'post',
            data: user
        });
    },
    getUser() {
        return request({
            url: '/api/getuser',
            method: 'get'
        });
    },
    delUser(data) {
        return request({
            url: '/api/deluser',
            method: 'get',
            data: data
        });
    },
    registerUser(data) {
        return request({
            url: '/api/register',
            method: 'post',
            data: data
        });
    },
    verifyLogin() {
        return request({
            url: '/api/verifylogin',
            method: 'post'
        });
    },
    deleteFile(url){
        return request({
            url:'/api/deletefile',
            method:'post',
            data:{
                url
            }
        })
    },
    addCase(data){
        return request({
            url:'/api/addcase',
            method:'post',
            data:data
        });
    },
    getCaseList(data){
        return request({
            url: '/api/caselist',
            data:data,
            method: 'get'
        });
    },
    deleteCase(data){
        return request({
            url: '/api/deleteCase',
            data:data,
            method: 'post'
        });
    },
    addNews(data){
        return request({
            url: '/api/addnews',
            data:data,
            method: 'post'
        }); 
    },
    getNewsList(data){
        return request({
            url: '/api/getnews',
            data:data,
            method: 'get'
        });
    },
    deleteNew(data){
        return request({
            url: '/api/deletenew',
            data:data,
            method: 'get'
        });
    },
    addTeam(data){
        return request({
            url: '/api/addteam',
            data:data,
            method: 'post'
        });
    },
    getTeamList(){
        return request({
            url: '/api/getteams',
            method: 'get'
        }); 
    },
    deleteTeam(data){
        return request({
            url: '/api/deleteteam',
            data:data,
            method: 'post'
        });
    },
    addBusiness(data){
        return request({
            url: '/api/addbusiness',
            data:data,
            method: 'post'
        });
    },
    getBusinessList(){
        return request({
            url: '/api/getbusiness',
            method: 'get'
        }); 
    },
    deleteBusiness(data){
        return request({
            url: '/api/deletebusiness',
            data:data,
            method: 'post'
        }); 
    },
    addCompanyInfo(data){
        return request({
            url: '/api/addcompanyinfo',
            data:data,
            method: 'post'
        });  
    },
    getCompanyInfo(){
        return request({
            url: '/api/getcompanyinfo',
            method: 'get'
        }); 
    },
    addAbout(data){
        return request({
            url: '/api/addabout',
            method: 'post',
            data:data
        });   
    },
    getAbout(){
        return request({
            url: '/api/getabout',
            method: 'get'
        }); 
    },
    addBanner(data){
        return request({
            url: '/api/addbanner',
            method: 'post',
            data:data
        });  
    },
    getBannerList(){
        return request({
            url: '/api/getbannerlist',
            method: 'get'
        });  
    },
    deleteBanner(data){
        return request({
            url: '/api/deletebanner',
            method: 'post',
            data:data
        }); 
    },
    addMessage(data){
        return request({
            url: '/api/addmessage',
            method: 'post',
            data:data
        });
    },
    getMessage(){
        return request({
            url: '/api/getmessage',
            method: 'get'
        });  
    },
    deleteMessage(data){
        return request({
            url: '/api/deletemessage',
            method: 'post',
            data:data
        }); 
    },
    readMessage(data){
        return request({
            url: '/api/readmessage',
            method: 'post',
            data:data
        }); 
    },
  /**
   * clinet API
   * 
  */
 addMessage(data){
    return request({
        url:'/api/addmessage',
        method:'post',
        data:data
    })
 }
  
    
}