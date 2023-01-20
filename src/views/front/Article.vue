<template>
  <div style="display: flex;flex-direction: column;align-items: center;">

    <!--   文章-->
    <div class="MainBodyOfArticle">
      <!--    左侧主题文章展示部分-->
      <div ref="leftSide"
           class="leftSide">
        <el-card shadow="hover"
                 class="box-card"
                 style="padding: 10px 0;height:180px;"
                 v-for="item in tableData"
                 :key="item.id">
          <div clas="article-head"
               style=" cursor: pointer;margin:0px 5px ;font-weight: bold;font-size: 18px;line-height: 22px;height: 22px;text-overflow: ellipsis;overflow: hidden;color: #000;font-size: 18px"
               @click="$router.push('/front/articleDetail?id='+item.id)">{{item.name}}</div>
          <div style="height: 60px;overflow: hidden ;text-overflow:ellipsis;margin: 5px 5px;color: #999aaa;word-break: break-all;font-size: 14px">
            {{item.summary}}
          </div>
          <div style="flex: 10;float: left">
            <i class="el-icon-view"
               style="margin-right: 5px"></i>{{item.readnumber}}
          </div>
          <div style="float: right;margin-right: 20px;color: #999aaa;font-size: 14px;color: #999aaa;width: 250px">
            <div style="float: left"><i class="el-icon-user"></i> {{item.user}}</div>
            <div style="float: right;margin-right: 1px"><i class="el-icon-time"></i> {{item.time}}</div>
          </div>
        </el-card>
      </div>

      <!--    右侧推荐部分-->
      <div class="rightSide">
        <!--推荐作者-->
        <div style="flex: 1;display: flex;flex-direction: column;background: #ffffff">
          <!--            推荐作者标题-->
          <div style="flex: 1;display: flex;align-items: center ;padding: 0px 30px;font-size: 16px;border-bottom: 1px solid #F2F2F2">
            推荐作者
          </div>
          <!--           作者列表-->
          <div style="flex: 6;flex-direction: column;">
            <div v-for="(item,index) in recommandUser"
                 :key="index"
                 style="flex: 1;display: flex;padding: 2px 10px">
              <!--                头像-->
              <div style="flex: 2">
                <el-image :src="item.avatarUrl"
                          style="width: 45px; height: 45px; border-radius: 50%;flex: 1;cursor: pointer "
                          @click="$router.push('/front/personalCenter/newArticleOfPersonal?id='+item.id)"></el-image>
              </div>
              <!--                网名和信息-->
              <div style="flex: 6;display: flex;flex-direction: column;justify-items: center">
                <!--                    nickname-->
                <div style="flex: 1;color: #222226;font-size: 14px">
                  {{item.nickname}}
                </div>
                <!--                    简介-->
                <div style="flex: 2;color: #999aaa;font-size: 12px;padding-top: 5px; padding-left: 5px;padding-right: 5px ;overflow: hidden">
                  {{item.brief}}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--推荐文章-->
        <div style="flex: 1.4;display: flex;flex-direction: column; background: #ffffff;height: 500px">
          <!--                板块标题-->
          <div style="display: flex;align-items: center; flex: 4;padding: 0px 30px;font-size: 16px;border-bottom: 1px solid #F2F2F2;height: 50px">
            推荐文章
          </div>
          <!--            推荐文章信息-->
          <div class="recommand"
               v-for="(item,index) in recommandArticle"
               :key="index"
               style="flex: 6;display: flex;flex-direction: column;cursor: pointer"
               @click="$router.push('/front/articleDetail?id='+item.id)">
            <div style="flex: 1;display: flex;flex-direction: column;justify-items: center">
              <!--文章标题-->

              <div style="flex: 2;font-size: 16px;color: #222226;font-weight: 500;overflow: hidden;text-overflow: ellipsis;padding:0px 5px;">
                <span style="overflow: hidden; white-space: nowrap;text-overflow: ellipsis;">{{item.name}}</span>
              </div>
              <!--        文章简介-->
              <div style="font-size: 13px;color: #999aaa;flex: 2;padding: 0 5px;overflow: hidden;">
                <span style="overflow: hidden; white-space: nowrap;text-overflow: ellipsis;"> {{item.summary}}</span>
              </div>
              <!--        文章信息-->
              <div style="flex: 1;display: flex;align-items: center;font-size: 12px;color: #999aaa">
                <!--            浏览次数-->
                <div style="padding-left: 5px;flex: 6;">
                  <i class="el-icon-view"
                     style="margin-right: 5px"></i>{{item.readnumber}}
                </div>
                <!--            作者-->
                <div style="padding-right: 5px">
                  <span>
                    {{item.user}}
                  </span>
                  <span style="margin-left: 5px">
                    {{item.time}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="padding: 2px 0px; width: 1300px">
      <el-pagination style="background-color: #ffffff"
                     @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="pageNum"
                     :page-sizes="[1, 5, 10, 20]"
                     :page-size="pageSize"
                     layout="total, prev, pager, next, jumper"
                     :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: "Article",
  computed: {
    ...mapState(['isIndex', 'currentPathName', 'blogData', 'searchContent']),
  },
  data () {
    return {
      tableData: [],
      total: 0,
      pageNum: 1,
      pageSize: 5,
      sideWidth: 200,
      name: this.searchContent,
      type: "",
      multipleSelection: [],
      form: {},
      dialogFormVisible: false,
      viewDialogVis: false,
      recommandUser: [],
      recommandArticle: [],
    }
  },
  created () {
    // this.load()
    this.tableData = this.blogData.records
    this.total = this.blogData.total
    this.loadRecommodUser()
    this.loadRecommandArticleInfor()
  },
  methods: {
    ...mapMutations(['updateIsIndex']),
    ...mapActions(['getBlogData']),

    view (content) {
      this.content = content
      this.viewDialogVis = true
    },
    loadRecommandArticleInfor () {
      this.request.get("/article/recommandArticle").then(res => {
        this.recommandArticle = res.data
      })
    },
    async load () {
      let parm = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        name: this.searchContent
      }
      const res = await this.getBlogData(parm)
      console.log(res);
      this.tableData = this.blogData.records
      this.total = this.blogData.total
    },

    handleSizeChange (pageSize) {
      this.pageSize = pageSize
      //之后请求数据
      this.load()
    },
    handleCurrentChange (pageNum) {
      console.log(pageNum)
      this.pageNum = pageNum
      this.load()
    },

    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    loadRecommodUser () {
      this.request.get("/user/recommandUser").then(res => {
        this.recommandUser = res.data;
      })
    }


  }
}
</script>

<style scoped>
.top {
  position: sticky;
  z-index: 99;
  top: 50px;
  height: 60px;
  width: 100%;
  background-color: #fff;
  text-align: center;
  border-top: 1px solid #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
}
.MainBodyOfArticle {
  width: 1300px;
  display: flex;
  gap: 20px;
  justify-content: center;
}
.leftSide {
  flex: 12;
  display: flex;
  flex-direction: column;
}
.rightSide {
  flex: 3;
  gap: 20px;
  display: flex;
  flex-direction: column;
  height: 800px;
}
.recommand:hover {
  background-color: rgb(240, 240, 240);
}
</style>