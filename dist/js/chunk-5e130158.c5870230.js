(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e130158"],{"8cc6":function(t,e,i){"use strict";i("c136")},"9b32":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[e("div",{staticClass:"MainBodyOfArticle"},[e("div",{ref:"leftSide",staticClass:"leftSide"},t._l(t.tableData,(function(i){return e("el-card",{key:i.id,staticClass:"box-card",staticStyle:{padding:"10px 0",height:"180px"},attrs:{shadow:"hover"}},[e("div",{staticStyle:{cursor:"pointer",margin:"0px 5px","font-weight":"bold","font-size":"18px","line-height":"22px",height:"22px","text-overflow":"ellipsis",overflow:"hidden",color:"#000"},attrs:{clas:"article-head"},on:{click:function(e){return t.$router.push("/front/articleDetail?id="+i.id)}}},[t._v(t._s(i.name))]),e("div",{staticStyle:{height:"60px",overflow:"hidden","text-overflow":"ellipsis",margin:"5px 5px",color:"#999aaa","word-break":"break-all","font-size":"14px"}},[t._v(" "+t._s(i.summary)+" ")]),e("div",{staticStyle:{flex:"10",float:"left"}},[e("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"5px"}}),t._v(t._s(i.readnumber)+" ")]),e("div",{staticStyle:{float:"right","margin-right":"20px",color:"#999aaa","font-size":"14px",width:"250px"}},[e("div",{staticStyle:{float:"left"}},[e("i",{staticClass:"el-icon-user"}),t._v(" "+t._s(i.user))]),e("div",{staticStyle:{float:"right","margin-right":"1px"}},[e("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(i.time))])])])})),1),e("div",{staticClass:"rightSide"},[e("div",{staticStyle:{flex:"1",display:"flex","flex-direction":"column",background:"#ffffff"}},[e("div",{staticStyle:{flex:"1",display:"flex","align-items":"center",padding:"0px 30px","font-size":"16px","border-bottom":"1px solid #F2F2F2"}},[t._v(" 推荐作者 ")]),e("div",{staticStyle:{flex:"6","flex-direction":"column"}},t._l(t.recommandUser,(function(i,a){return e("div",{key:a,staticStyle:{flex:"1",display:"flex",padding:"2px 10px"}},[e("div",{staticStyle:{flex:"2"}},[e("el-image",{staticStyle:{width:"45px",height:"45px","border-radius":"50%",flex:"1",cursor:"pointer"},attrs:{src:i.avatarUrl},on:{click:function(e){return t.$router.push("/front/personalCenter/newArticleOfPersonal?id="+i.id)}}})],1),e("div",{staticStyle:{flex:"6",display:"flex","flex-direction":"column","justify-items":"center"}},[e("div",{staticStyle:{flex:"1",color:"#222226","font-size":"14px"}},[t._v(" "+t._s(i.nickname)+" ")]),e("div",{staticStyle:{flex:"2",color:"#999aaa","font-size":"12px","padding-top":"5px","padding-left":"5px","padding-right":"5px",overflow:"hidden"}},[t._v(" "+t._s(i.brief)+" ")])])])})),0)]),e("div",{staticStyle:{flex:"1.4",display:"flex","flex-direction":"column",background:"#ffffff",height:"500px"}},[e("div",{staticStyle:{display:"flex","align-items":"center",flex:"4",padding:"0px 30px","font-size":"16px","border-bottom":"1px solid #F2F2F2",height:"50px"}},[t._v(" 推荐文章 ")]),t._l(t.recommandArticle,(function(i,a){return e("div",{key:a,staticClass:"recommand",staticStyle:{flex:"6",display:"flex","flex-direction":"column",cursor:"pointer"},on:{click:function(e){return t.$router.push("/front/articleDetail?id="+i.id)}}},[e("div",{staticStyle:{flex:"1",display:"flex","flex-direction":"column","justify-items":"center"}},[e("div",{staticStyle:{flex:"2","font-size":"16px",color:"#222226","font-weight":"500",overflow:"hidden","text-overflow":"ellipsis",padding:"0px 5px"}},[e("span",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(t._s(i.name))])]),e("div",{staticStyle:{"font-size":"13px",color:"#999aaa",flex:"2",padding:"0 5px",overflow:"hidden"}},[e("span",{staticStyle:{overflow:"hidden","white-space":"nowrap","text-overflow":"ellipsis"}},[t._v(" "+t._s(i.summary))])]),e("div",{staticStyle:{flex:"1",display:"flex","align-items":"center","font-size":"12px",color:"#999aaa"}},[e("div",{staticStyle:{"padding-left":"5px",flex:"6"}},[e("i",{staticClass:"el-icon-view",staticStyle:{"margin-right":"5px"}}),t._v(t._s(i.readnumber)+" ")]),e("div",{staticStyle:{"padding-right":"5px"}},[e("span",[t._v(" "+t._s(i.user)+" ")]),e("span",{staticStyle:{"margin-left":"5px"}},[t._v(" "+t._s(i.time)+" ")])])])])])}))],2)])]),e("div",{staticStyle:{padding:"2px 0px",width:"1300px"}},[e("el-pagination",{staticStyle:{"background-color":"#ffffff"},attrs:{"current-page":t.pageNum,"page-sizes":[1,5,10,20],"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},l=[],s=i("2f62"),o={name:"Article",computed:{...Object(s["d"])(["isIndex","currentPathName","blogData","searchContent"])},data(){return{tableData:[],total:0,pageNum:1,pageSize:5,sideWidth:200,name:this.searchContent,type:"",multipleSelection:[],form:{},dialogFormVisible:!1,viewDialogVis:!1,recommandUser:[],recommandArticle:[]}},created(){this.tableData=this.blogData.records,this.total=this.blogData.total,this.loadRecommodUser(),this.loadRecommandArticleInfor()},methods:{...Object(s["c"])(["updateIsIndex"]),...Object(s["b"])(["getBlogData"]),view(t){this.content=t,this.viewDialogVis=!0},loadRecommandArticleInfor(){this.request.get("/article/recommandArticle").then(t=>{this.recommandArticle=t.data})},async load(){let t={pageNum:this.pageNum,pageSize:this.pageSize,name:this.searchContent};const e=await this.getBlogData(t);console.log(e),this.tableData=this.blogData.records,this.total=this.blogData.total},handleSizeChange(t){this.pageSize=t,this.load()},handleCurrentChange(t){console.log(t),this.pageNum=t,this.load()},handleSelectionChange(t){this.multipleSelection=t},loadRecommodUser(){this.request.get("/user/recommandUser").then(t=>{this.recommandUser=t.data})}}},n=o,r=(i("8cc6"),i("2877")),c=Object(r["a"])(n,a,l,!1,null,"7828328d",null);e["default"]=c.exports},c136:function(t,e,i){}}]);
//# sourceMappingURL=chunk-5e130158.c5870230.js.map