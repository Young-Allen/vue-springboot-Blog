<template>
  <div class="help_bg">
    <div style="background-color:#F2F2F2">
      <div style="line-height:50px;position: sticky;top: 0px; display: flex;height: 50px;background-color: rgb(253,253,253);z-index:99">
        <div class="logo"
             style="text-align: center">
          <!-- <img src="@/assets/FrontLogo.png"
               style="margin-top: 10px"> -->
        </div>

        <div class="nav">
          <ul style="list-style: none">
            <li @click="upSearch('/front/home', 1)"><a :class="{active: showTab === 1}">首页</a> </li>
            <li @click="upSearch('/front/article', 2)"><a :class="{active: showTab === 2}">博客</a> </li>
            <li @click="upSearch('/front/category', 3)"><a :class="{active: showTab === 3}">专题</a> </li>
            <li @click="upSearch('/front/im', 4)"><a :class="{active: showTab === 4}">私信</a> </li>
            <li @click="upSearch('/report', 5)"><a :class="{active: showTab === 5}">实验报告</a> </li>
          </ul>
        </div>

        <div class="search">
          <el-input style="height: 30px; border-bottom-right-radius: 0px"
                    placeholder="请输入关键词"
                    v-model="input"
                    @keyup.enter.native="search(0)"
                    size="medium"
                    clearable>
          </el-input>
          <el-button style="display: flex;height:36px;margin-top: 7px;text-align: center;"
                     @click="search(0)"
                     type="primary"
                     size="medium"
                     center="true"
                     icon="el-icon-search">搜索</el-button>
        </div>

        <div class="user">
          <div v-if="!user.username">
            <el-button type="primary"
                       style="margin-right: 10px; margin-top:10px;height: 30px"
                       @click="$router.push('/front/login')">登录</el-button>
            <el-button type="primary"
                       style="height: 30px;margin-top:10px;"
                       @click="$router.push('/front/register')">注册</el-button>
          </div>
          <div v-if="user.username">
            <div style="float: left">
              <el-dropdown style=" width: 150px; cursor: pointer; text-align: center">
                <div style="display: inline-block">
                  <img :src="user.avatarUrl"
                       style="width: 30px; height: 30px;border-radius: 50%; position: relative; top: 10px; right: 20px">
                  <span>{{user.nickname}}</span><i class="el-icon-arrow-down"
                     style="margin-left: 5px;margin-right: 10px"></i>
                </div>
                <el-dropdown-menu slot="dropdown"
                                  style="width: 100px;margin-left: 10px; text-align: center">
                  <router-link :to="{name:'NewArticleOfPersonal', query:{ id: user.id }}"
                               style="text-decoration: none">
                    <el-dropdown-item class="dorp-down-item">
                      <span style="text-decoration: none"
                            @click="setShowTab(0)">个人中心</span>
                    </el-dropdown-item>
                  </router-link>
                  <router-link to="/front/editMaterial/userInforEdit"
                               style="text-decoration: none;">
                    <el-dropdown-item class="dorp-down-item">
                      <span style="text-decoration: none"
                            @click="setShowTab(0)">个人信息</span>
                    </el-dropdown-item>
                  </router-link>
                  <el-dropdown-item class="dorp-down-item">
                    <span style="text-decoration: none"
                          @click="logoutFront">退出</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

            <div style="display: flex;margin-right: 60px">
              <el-dropdown>
                <el-button type="primary"
                           style="height: 30px"
                           @click="articleRelease"
                           round>
                  <i class="el-icon-edit"
                     style="padding-right:10px "
                     placement="bottom-start">发布文章</i>
                </el-button>
              </el-dropdown>
            </div>

          </div>
        </div>

      </div>

      <div>
        <router-view @grandFatherRefreshInfo="grandFatherRefreshInfo" />
      </div>

    </div>
  </div>

</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "Front",
  computed: {
    ...mapState(['isIndex', 'currentPathName', 'searchContent', 'showTab']),
    input: {
      get () {
        return this.$store.state.searchContent
      },
      set (val) {
        this.setSearch(val)
      }
    }
  },
  data () {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : { username: "" },
      // input: this.searchContent,
      pageNum: 1,
      pageSize: 5,
    }
  },
  methods: {
    ...mapMutations(['setSearch', 'setShowTab']),
    ...mapActions(['getBlogData', 'updateSearch']),

    async upSearch (path, id) {
      if (id === 5) {
        this.$router.push('/front/articleDetail?id=130')
      }

      this.setShowTab(id)
      console.log(path);
      this.setSearch("")
      if (path === "/front/article") {
        let parm = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          name: ""
        }
        const res = await this.getBlogData(parm)
      }
      this.$router.push({ path: path })
    },
    async search (flag) {
      if (flag) this.input = ""
      let parm = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        name: this.searchContent
      }
      console.log(this.input);
      await this.updateSearch(this.input)
      const res = await this.getBlogData(parm)

      console.log(res);
      if (this.currentPathName === "FrontArticle") {
        this.$router.go(0)
      } else {
        this.$router.push({ path: "/front/article" })
      }
    },
    logoutFront () {
      this.$store.commit("logoutFront")
      this.$message.success("退出成功")
    },
    articleRelease () {
      this.$router.push("/release")
    },
    grandFatherRefreshInfo () {
      let username = JSON.parse(localStorage.getItem("user")).username
      this.request.get("/user/username/" + username).then(res => {
        this.user = res.data
        localStorage.removeItem("user")
        localStorage.setItem("user", JSON.stringify(res.data))
      })
    }
  }
}
</script>

<style scoped>
.help_bg {
  background: rgb(245, 246, 247);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.logo {
  width: 100px;
  margin-left: 50px;
  text-align: center;
  line-height: 50px;
}
.nav {
  flex: 1;
  margin-left: 20px;
}
.nav li {
  text-align: center;
  display: inline-block;
  height: 50px;
  width: 100px;
  margin-left: 10px;
}
.nav ul li a:hover {
  /* border-bottom: 2px solid #00a4ff; */
  color: #00a4ff;
}
.nav ul li .active {
  border-bottom: 2px solid #00a4ff;
  color: #00a4ff;
}
.nav ul li a {
  display: inline-block;
  float: left;
  color: #000;
  height: 100%;
  width: 100%;
  text-decoration: none;
}
.search {
  display: flex;
  width: 700px;
  text-align: center;
}
.user {
  display: flex;
  flex: 0.5;
  margin-left: 200px;
}

.dorp-down-item {
  font-size: 14px;
  padding: 5px 0;
}
</style>