---

layout: post

date: 2016-05-14 01:01:01

title: GitHub搭建Hexo博客

description: 使用GitHub搭建Hexo博客，包含自定义域名、流量统计、网站收录，多说插件，评论等

keywords: Hexo, 博客, 静态博客, renyuzhuo, GitHub搭建Hexo博客, github, 邮件订阅

categories:
- Hexo

---

# 前言

今天不想写我的毕业设计了，有点累了，写篇博客，就是这样。

使用GitHub搭建静态博客，除了酷，更多的应该是对学习过程的一个记录，帮助到更多的人，也是对自己技术的一个提高，使用GitHub是因为他是免费的好用的稳定的，还有个原因是好多人都用，我呢是因为别人这么干所以我也这么干了。当然，如果使用第三方的博客网站，也是个不错的选择，但是我这里只是想提醒一下自己，无论怎样最核心的问题时博客内文章质量的好坏。好了，开始进入正文，其中例子以本网站为例。

# 搭建博客

## 搭建环境

首先需要基础环境，直接包含下载传送门，包括[Git下载传送门](https://git-scm.com/downloads)，[Node.js下载传送门](https://nodejs.org/en/download/)，接下来可以[安装Hexo](https://hexo.io/zh-cn/docs/index.html)了，命令分别如下：

    git:
        windows: 直接安装包双击安装
        ubuntu: apt-get install git
        其他linux: https://git-scm.com/download/linux
        
    nodejs:
        windows: 安装包直接双击安装
        ubuntu: apt-get install nodejs
        其他linux: http://www.runoob.com/nodejs/nodejs-install-setup.html
        
    hexo:
        $ npm install -g hexo-cli # 这个可能有点慢，需要下载一些东西
        
到现在为止，基础环境已经搭建好了，下面开始建站：

    $ hexo init MyBlog # 创建博客目录
    $ cd MyBlog
    $ npm install # 下载nodejs依赖
    $ ls # 查看目录，windows下为dir
        .
        ├── _config.yml     # 主要网站配置信息
        ├── package.json    # nodejs依赖版本等，如果需要请学习nodejs相关
        ├── scaffolds       # 模板文件
        ├── source          # 用户资源文件
        |   ├── _drafts
        |   └── _posts      # 网站博客内容
        └── themes          # 主题，可以使用很多主题，https://hexo.io/themes/
                            # 这些主题如何具体使用，请参考各主题，不能一言以蔽之

在`_config.yml`可以更改网站大部分配置，点击[这里](https://hexo.io/zh-cn/docs/configuration.html)参考配置说明，但是我建议先不改，将网站跑起来看看效果，然后再回来改。

命令，提示直接输入hexo可以看到支持哪些命令：
    
    $ hexo generate # 生成静态文件，直接输入`hexo g`也可以
    $ hexo server   # 启动服务器，可以在浏览器中查看，默认使用4000端口，直接输入hexo s也可以，
                    # 可以使用`hexo s -p 3000`也可以更改端口为3000
    
部署，需要在github上创建`renyuzhuo.github.io`的项目，当然，如果不愿意这么叫而改为其他的名称需要一些配置，本文暂时不考虑：

    $ hexo deploy # 或hexo d
    $ hexo d -g -m "部署注释" # 其中-g代表先生成静态文件后部署
    
部署网站，值得是将网站部署到GitHub上，需要在_config.yml中进行配置，如下，这里支持同时部署到多个代码托管平台上，例如这里包含github和coding，当然，你也可以直接进入public目录中直接使用Git上传到GitHub或Coding上，效果是一样的，需要`SSH`：
                
    deploy:
    type: git
    repo:
        github: git@github.com:renyuzhuo/renyuzhuo.github.io.git,master
        coding: git@git.coding.net:ryz/ryz.git,master

到这里，已经将网站部署到代码托管平台上了，可以通过浏览器进行访问了[`http://renyuzhuo.github.io`](http://renyuzhuo.github.io)。

完成了吗？还没有，还可以继续学习一些东西。

## 使用自己域名

可以到[万网](https://wanwang.aliyun.com/)或其他网站购买自己的域名，通过自己域名访问该博客。进入到自己域名的域名解析管理中，添加记录，这里以我自己的域名(renyuzhuo.cn)为例：

|记录类型|主机记录|解析线路|记录值|
|:---:|:---:|:---:|:---:|
|A|blog|海外|192.30.252.153|
|CNAME|blog|默认|pages.coding.me|
|CNAME|@|默认|ryz.coding.me|

解释一下：

> 我在国内coding(下文有介绍)和国外github上分别进行了部署，在国内用户访问blog.renyuzhuo.cn时直接转发到coding服务器，国外访问blog.renyuzhuo.cn转发到github服务器，在直接使用renyuzhuo.cn时转发到coding上，这么配置应该可以达到这样的目的，但是测试国内访问大多数依旧转发给了github，原因不明。

> 再说一下A记录，github并不是将所有博客地址都分配了一个IP地址，那太浪费了，而是通过访问同一个IP后由github根据访问的域名不同转发给到不同博客。CNAME是将一个域名指向另外一个域名达到访问效果相同的目的。
    
这样配置还不够，需要在自己项目中添加CNAME文件，表示通过什么域名可以访问该博客。例如：

    /themes/source/CNAME文件中：blog.renyuzhuo.cn
    
这样配置后，可以通过[`http://blog.renyuzhuo.cn`](http://blog.renyuzhuo.cn)访问我的博客了。

依旧没有结束。

## 搜索引擎收录

需要让搜索引擎收录网站内容，当然可以什么都不干，Google的蜘蛛还是蛮厉害的。github网站被Google收录速度虽然不能用秒收形容吧，但是确实真的是太快了。同时也可以主动向搜索引擎提交，这样搜索引擎收录的更快。这里需要说一下的是，github屏蔽了Baidu，没错，就是github主动屏蔽了百度，百度的蜘蛛在爬到github时不能将结果正确返回，也从某一种意义上来说，百度很难主动收录github上博客。解决办法就是使用其他可以被Baidu收录的网站替代GitHub，国内Coding较好，本博客只维护Google搜索引擎，包括删除死链等。

对于Google，进入网址[https://www.google.com/webmasters/tools/home?hl=zh-CN](https://www.google.com/webmasters/tools/home?hl=zh-CN)，可以看到，这就是站长管理平台了。在这里，可以提交你的网站，提交网站时需要验证你是网站所有者，提供了五种方法，建议HTML文件方法和HTML标记法比较好，一种是把文件上传，一种是把标记上传，根据具体提示即可成功，并且可以说明一点的是，其实几乎所有搜索引擎网站所有者权限都可以这么验证的，国内搜索引擎使用域名提供商添加CNAME等方式也很好。当验证了权限后，更多好玩的就可以继续了，这里只说一个`抓取->站点地图`，在这里可以提交站点地图，帮助搜索引擎找到资源，对于个人博客来说，其实Google做的够好，如果网站不是什么奇葩网站，可以自己就分析出来，但是这个对国内搜索引擎来说就极其有用了，还是说一下。

### 站点地图

Stop Trying to Reinvent the Wheel(不要重复造轮子). 安装插件：

    $ npm install --save hexo-generator-seo-friendly-sitemap # hexo站点地图生成插件
    
在`_config.yml`中添加：

    sitemap:
      path: sitemap.xml
      
这样，在执行`hexo g`时会发现在public目录下生成了sitemap.xml和其他几个类似的文件，好了，打开看看就发现地图有了，`hexo d`部署。然后就可以了，将连接`http://blog.renyuzhuo.cn/sitemap.xml`提交给Google，或者是国内各种搜索引擎网站，这样收录速度就快多了，国内网站依旧很慢的话我也没办法。

## 流量统计

添加JS代码，我真的不好意思继续这么说了，推荐三个网站。

    Google(推荐)：https://analytics.google.com
    CNZZ：http://wss.cnzz.com/main.php?c=user&a=login
    腾讯分析：http://v2.ta.qq.com/
    

## 百度不收录的问题

分这么几步：
    
    1. 注册百度站长平台
    2. 验证网站所有权
    3. 提交网站地图
    4. 在Coding平台搭建同样网站
    5. 可以使用Baidu中建议的，添加js代码主动向baidu推送内容
    5. 耐心等待，要有耐心，去干点其他事情吧
    
## 你可能关心的问题

### 多说评论插件

博客可能需要有评论功能，如果国内，[多说](http://duoshuo.com/)挺好用的。

    1. 注册：http://duoshuo.com/
    2. 将评论js插入到适当位置(文章下面)，我相信你能找到的
    3. 没了，就是这么简单，可以评论了
    
### 网站界面丢失404界面

    1. 如果你觉得可以，那么就添加[腾讯公益](http://www.qq.com/404/)
    2. 如果你不喜欢这种略伤感的感觉，那以一种更快乐的方式吧，也不错
    
### 网站浏览器标签图标favicon

    1. 网站根目录下的favicon.png
    
### README.md

    对于像我这样的强迫症，不加README.md就是不舒服，如果不希望网站被渲染成html，
    可以在_config.yml中找到，跳过渲染README.md：
    
        skip_render: README.md

### 邮件订阅

    可以使用:http://sendcloud.sohu.com/，不过需要域名备案

### 实时聊天

    可以使用:https://www.olark.com/，请确定自己是否真的需要这项功能

# 总结

网站是用来放优质内容的地方，多一些优秀的文章，就不怕别人看不到。不要重复造轮子的下句是，在已经会造轮子的情况下。