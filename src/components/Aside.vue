<template>
  <el-menu :default-openeds="['1', '3']"
           style="height: 100%;width: 100%"
           background-color="#5c5e64"
           text-color="#fff"
           active-text-color="rgb(248,178,149)"
           :collapse-transition="false"
           :collapse="isCollapse"
           router
           @select="handleSelect">
    <div style="height: 60px;line-height: 60px;text-align: center">
      <!-- <img src="../assets/star.png"
           style="position: relative;top: 10px;margin-right: 5px"> -->
      <b style="color:#ffffff;"
         v-show="logalTextShow">博客后台管理系统</b>
    </div>

    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i><span>系统管理</span></template>
      <el-menu-item index="/user"><i class="el-icon-user-solid"></i>用户管理</el-menu-item>
      <el-menu-item index="/file"><i class="el-icon-folder"></i>文件管理</el-menu-item>
      <el-menu-item index="/article"><i class="el-icon-tickets"></i>文章管理</el-menu-item>
      <el-menu-item index="/carousel"><i class="el-icon-picture-outline"></i>轮播图管理</el-menu-item>
      <el-menu-item index="/category"><i class="el-icon-files"></i>文章类别管理</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  props: {
    isCollapse: Boolean,
    logalTextShow: Boolean,
    sideWidth: 200,
  },
  created () {
  },
  methods: {
    handleSelect (index) {
      console.log(this.$route)
    }
  }
}
</script>

<style scoped>
</style>