### 姓名：王晓东

### 学号：0204414

### 专业：软件工程

### 班级：软件工程VR201

### 实验项目名称：基于VUE实现的多人博客系统

### 指导教师：辜勇

***

## 实验目的：

结合本学期所学知识，使用vue搭建一个多人博客系统，包括以下子系统：网站首页、用户系统、博客系统、管理员系统。网站名称是CBlog，主题是大致模仿掘金平台开发来，以记录博客栏目的分类和实现一个程序员的记录和交流平台为目的而搭建。

***

## 网站设计：

1. 首页模块：主要展示最新文章和推荐文章，使用轮播图丰富数据展示。
   ![image-20230204231211616](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204231211616.png)

2. 博客模块：展示所有人发布的博客列表，同时页面的右侧展示推荐作者和推荐文章。

   ![image-20230204231248349](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204231248349.png)

3. 专题模块：将发布的博客分为几个栏目。
   ![image-20230204232117895](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204232117895.png)

4. 私信模块：支持作者间发送私信进行交流。
   ![image-20230204232308308](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204232308308.png)

5. 个人中心：模仿CSDN的个人中心搭建的样式。
   ![image-20230204233326315](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204233326315.png)

6. 信息中心：支持个人信息和文章信息的修改。
   ![image-20230204233406553](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204233406553.png)

***

## 网站主要技术栈工具：

|     名称     |
| :----------: |
| Spring Boot  |
| Mybatis-plus |
|     VUE      |
|  VueRouter   |
|     Vuex     |

***

## 实验过程：

### 1. 用户登录、注册

使用element的框架搭建的样式，使用Element的表单校验对登录和注册的数据进行校验。

![image-20230204235626942](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204235626942.png)![image-20230204235638035](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230204235638035.png)![image-20230205002009010](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205002009010.png)

### 2. 首页结构

使用路由来搭建基本结构，点击首页、博客、专题和私信的链接跳转相应的路由页面。获取文章数据列表，并存入到Vuex中，当点击搜索和博客时就会根据搜索框内的内容获取Vuex中存取的blogData数据，并更新在相应的页面上。
![image-20230205003402861](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205003402861.png)

![image-20230205003255395](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205003255395.png)

![image-20230205004657131](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205004657131.png)

![image-20230205005533089](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205005533089.png)

![image-20230205005550856](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205005550856.png)

### 3. 文章页面

点击相应文章链接，跳转到文章详细的内容页面，在vue页面中存取下面有关的数据，并显示在页面上。

![image-20230205010649934](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205010649934.png)

设置收藏文章，记录当前登录的用户的收藏的文章，通过用户id、文章id和作者id来记录收藏的文章信息。

![image-20230205011413706](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205011413706.png)

如果用户未登录，点击评论，则提示请登录后操作，当评论成功后，将评论表存储到数据库中，随文章加载时一同加载评论。

![image-20230205011636114](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205011636114.png)

![image-20230205012532857](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205012532857.png)![image-20230205012602792](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205012602792.png)

### 4. 专题栏目

使用Element的card组件来封装成一个component，记录相应的文章到对应的栏目中。因为，在新建文章时会必选一项文章类型，就是从以下栏目中选取。

![image-20230205012912771](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205012912771.png)

![image-20230205012742370](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205012742370.png)

### 5. 私信功能

使用webSocket来传输聊天的内容。

![image-20230205013115010](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205013115010.png)

![image-20230205015831458](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205015831458.png)

### 6. 个人信息

模仿CSDN的页面，进行用户的文章信息展示。

![image-20230205015924683](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205015924683.png)

点击编辑个人信息，修改账号密码信息等

![image-20230205020310177](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205020310177.png)

![image-20230205020224080](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205020224080.png)

文章管理页面

![image-20230205020346706](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205020346706.png)

修改文章页面，使用md转换来修改文章信息。

![image-20230205020614062](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205020614062.png)

### 7. 发布文章

![image-20230205020800502](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205020800502.png)

点击发布文章后，有丰富文章内容的信息填写。

![image-20230205021855083](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205021855083.png)

### 8. 管理系统

管理路由直接/home到管理员页面，使用element-template-admin快速搭建的后台管理页面。

![image-20230205022506513](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205022506513.png)

![image-20230205022513710](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205022513710.png)

![image-20230205022520534](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205022520534.png)

![image-20230205022527868](https://gitee.com/XXXTENTWXD/pic/raw/master/images/image-20230205022527868.png)

***

## 实验难点：

1. Vuex：难点在于这些文章信息的各个页面组件的互通不是特别熟悉，一开始是使用组件间的通信发现实现起来难度有点大，跨组件的信息难以方便及时的传递。之后学习使用Vuex来进行组件间的信息共享，使得组件的信息通讯更加方便。
2. 文件分享：本部分是被删除的，一开始是想模仿CSDN的文件分享的功能，但是CSDN的文件分享都要收费，我觉得很坑，就决定自己实现以下。但是因为我的项目的数据库和后台访问是使用java和mybatis来访问的，并且部署在自己的云服务上，而且文件的上传后台还不太熟悉就把这个功能给阉割了。如果到时后台java学习熟悉后，我会尝试更新上文件分享的功能。
3. 没做到响应式的页面设计，因为感觉页面的html样式搭建还是挺复杂的。本项目的内容还是比较多，就没考虑实现响应式的页面设计。
4. 用户上传的图片功能没有全部实现，因为后台是部署在自己的云服务器，照片的上传有一些未解决的问题。所以说，用户的头像都是空白的，并没有展示出来。

***

## 实验亮点：

1. 使用websocket实现了在线用户聊天的功能。
2. 页面布局比较干净整洁。
3. 实现了全局搜索博客功能，和组合查询搜索博客。
4. 对博客文章进行栏目的专题分类，让读者能更快查询到自己想了解的分区内容。
5. 使用element-template模板实现了，后台管理系统页面的开发，能够对网站的用户信息、博客信息等进行一个集中的管理。

***

## 分析讨论：

①  能够结合课堂所学的知识的完成简单系统的开发。在宏观层面，对系统的架构进行合理的构建，合理的建立包管理和模块页面的文件管理，更加深刻地了解vue课程的核心知识。

②  在微观层面，对于Vue框架的使用更加熟悉，对Vuex功能有了全新的理解。结合VueRouter，完成动态页面数据的渲染。

③  在完成所有要求的功能需求基础上，结合自己对项目的理解，个性化出一些如私信、专题、后台管理系统等适用性功能。

④  在项目上，更加适应了Vue前后端分离开发模式。丰富了开发的经验。