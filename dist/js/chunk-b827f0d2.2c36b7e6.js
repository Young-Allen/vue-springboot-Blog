(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b827f0d2"],{"4f42":function(e,r,s){"use strict";s("ff76")},a55b:function(e,r,s){"use strict";s.r(r);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"wrapper"},[r("div",{staticStyle:{margin:"200px auto","background-color":"#fff",width:"350px",height:"300px","border-radius":"10px",padding:"20px"}},[e._m(0),r("el-form",{ref:"userForm",attrs:{model:e.user,rules:e.rules}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{staticStyle:{margin:"10px auto"},attrs:{size:"medium","prefix-icon":"el-icon-user",placeholder:"用户名"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{staticStyle:{margin:"10px auto"},attrs:{size:"medium","prefix-icon":"el-icon-lock","show-password":"",placeholder:"密码"},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}})],1),r("div",{staticStyle:{margin:"10px 0","text-align":"center"}},[r("el-button",{attrs:{type:"primary",size:"small",autocomplete:"off"},on:{click:e.login}},[e._v("登录")])],1)],1)],1)])},a=[function(){var e=this,r=e._self._c;return r("div",{staticStyle:{margin:"20px auto","text-align":"center","font-size":"24px"}},[r("b",[e._v("管理员登录")])])}],i=s("a18c"),o={name:"Login",data(){return{user:{role:"管理员"},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:7,message:"长度在 1 到 7 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}}},methods:{login(){this.$refs["userForm"].validate(e=>{if(!e)return this.$message.error("用户名或密码不符合格式要求！"),!1;this.request.post("/user/adminLogin",this.user).then(e=>{"200"===e.code?(localStorage.setItem("user",JSON.stringify(e.data)),localStorage.setItem("menus",JSON.stringify(e.data.menus)),Object(i["c"])(),this.$message.success("登陆成功！"),this.$router.push("/")):(console.log(e.code),this.$message.error(e.msg))})})}}},n=o,u=(s("4f42"),s("2877")),l=Object(u["a"])(n,t,a,!1,null,"62d70127",null);r["default"]=l.exports},ff76:function(e,r,s){}}]);
//# sourceMappingURL=chunk-b827f0d2.2c36b7e6.js.map