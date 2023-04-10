import{_ as u,o as a,c as l,b as e,t as c,q as m,F as p,a as g,e as h,f as _,p as k,j as A}from"./index-9fdc7868.js";const M={name:"ArticleDetail",props:["Articleid"],data(){return{objArticleDetail:{},createMessage:"",count:0,objArticleDelete:{},objMembers:{},userSticker:"",userNickname:"",userMemberId:""}},created(){this.callArticleDetailApi(),this.callMembersProfileApi(),this.getMemberProfile()},methods:{async getMemberProfile(){await axios.get("https://localhost:7259/api/Members/Read",{headers:{Authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.userMemberId=t.data}).catch(t=>{console.log(t),console.log("沒登入")}),await axios.get(`https://localhost:7259/api/Members/Profile?id=${this.userMemberId}`,{headers:{Authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.userSticker=t.data.photoSticker,this.userNickname=t.data.nickName}).catch(t=>{console.log(t),console.log("沒登入")})},async callMembersProfileApi(){},async clickMessage(){console.log(this.createMessage),await axios.post("https://localhost:7259/api/Message/CreateComment",{content:this.createMessage,memberId:this.userMemberId,articleId:this.objArticleDetail.articleId}).then(t=>{console.log("新增留言成功");const s={id:t.data,time:new Date().toLocaleString(),memberId:this.userMemberId,nickName:this.userNickname,content:this.createMessage};this.objArticleDetail.messageComment.push(s),this.createMessage=""})},async removeArticle(t,s){await axios.delete(`https://localhost:7259/api/Article/DeleteArticle?articleid=${s}`).then(d=>{console.log("刪除文章成功"),t.target.parentNode.remove(),this.$router.push("/Forum")})},async removeMessage(t,s){console.log(s),await axios.delete(`https://localhost:7259/api/Message/DeleteComment?messageid=${s}`).then(d=>{console.log("刪除留言成功"),t.target.parentNode.parentNode.remove()})},async callArticleDetailApi(){await axios.get(`https://localhost:7259/api/Article/ArticleDetails?ArticleId=${this.Articleid}`,{headers:{Authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.objArticleDetail=t.data}).catch(t=>{console.log(t)})}},computed:{token(){return $.cookie("token")}}},r=t=>(k("data-v-b0ca32b0"),t=t(),A(),t),f={class:"container article_bannerss"},v={class:"row justify-content-center"},y={class:"article_insert"},D={class:"card-header d-flex justify-content-between article_title"},I={class:"d-flex align-items-center mb-2"},j={class:"m-0"},x={class:"ms-2"},N={class:"ms-2 foremName"},w=r(()=>e("div",null,[e("a",{href:"#contentid",class:"mylink"},"撰寫留言")],-1)),C={class:"post"},S={class:"align-items-center mb-2"},B={class:"d-flex justify-content-between"},P=r(()=>e("i",{class:"fa-regular fa-trash-can fs-3 text-danger"},null,-1)),V=[P],z={class:"mt-3"},F={class:"m-0"},T={class:"imgate"},L=["src"],U=r(()=>e("p",{class:"comment_title"},"留言區",-1)),q={class:"comment"},E={class:"ms-3"},R={class:"me-1"},G={class:"m-0 commentContent"},H={class:"d-flex align-items-center"},J=["onClick"],K={class:"ms-3"},O={class:"comment_contents",id:"contentid"},Q=["src"],W={class:"btnbox"},X={key:0,"data-bs-toggle":"modal","data-bs-target":"#loginModal",type:"button",class:"btn btn_submit"};function Y(t,s,d,Z,i,n){return a(),l("div",f,[e("div",v,[e("div",y,[e("div",D,[e("div",I,[e("p",j,c(i.objArticleDetail.nickName),1),e("p",x,c(i.objArticleDetail.time.replace("T"," ").slice(0,16)),1),e("p",N,c(i.objArticleDetail.forumName),1)]),w]),e("div",C,[e("div",S,[e("div",B,[e("h2",null,c(i.objArticleDetail.title),1),this.userMemberId===this.objArticleDetail.memberId?(a(),l("button",{key:0,type:"button",class:"btn",onClick:s[0]||(s[0]=o=>n.removeArticle(o,t.$route.params.Articleid))},V)):m("",!0)]),e("div",z,[e("p",F,c(i.objArticleDetail.content),1)]),e("div",T,[e("img",{src:`https://localhost:7259/Images/${i.objArticleDetail.articlePhoto}`,alt:""},null,8,L)])])]),U,(a(!0),l(p,null,g(i.objArticleDetail.messageComment,o=>(a(),l("div",{class:"contents_area",ref_for:!0,ref:"commentall",key:o.id},[e("div",q,[e("div",E,[e("p",R,c(o.nickName)+" :",1),e("p",G,c(o.content),1)]),e("div",H,[this.userMemberId===o.memberId||this.userMemberId===this.objArticleDetail.memberId?(a(),l("button",{key:0,type:"button",class:"btn btn-primary",onClick:b=>n.removeMessage(b,o.id)}," 刪除 ",8,J)):m("",!0),e("p",K,c(o.time.replace("T"," ").slice(0,16)),1)])])]))),128)),e("div",O,[e("div",null,[e("img",{class:"content_img",src:`https://localhost:7259/Images/${i.userSticker}`,alt:""},null,8,Q)]),n.token?h((a(),l("input",{key:1,class:"comment_contents_input form-control",type:"text",placeholder:"留言...","onUpdate:modelValue":s[2]||(s[2]=o=>i.createMessage=o)},null,512)),[[_,i.createMessage]]):h((a(),l("input",{key:0,"data-bs-toggle":"modal","data-bs-target":"#loginModal",class:"comment_contents_input form-control",type:"text",placeholder:"留言...","onUpdate:modelValue":s[1]||(s[1]=o=>i.createMessage=o)},null,512)),[[_,i.createMessage]]),e("div",W,[n.token?(a(),l("button",{key:1,type:"button",class:"btn btn_submit",onClick:s[3]||(s[3]=(...o)=>n.clickMessage&&n.clickMessage(...o))}," 送出 ")):(a(),l("button",X," 送出 "))])])])])])}const te=u(M,[["render",Y],["__scopeId","data-v-b0ca32b0"]]);export{te as default};
