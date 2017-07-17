# 安装与基本使用
## 安装
  下载nodejs(http://nodejs.cn/)安装后，cmd下如输入 node -v  与  npm -v 
  显示版本号，则说明安装成功

## 升级
  npm install npm -g

## 安装指定版本的npm
  npm install npm@2 -g

## npm全局设置
  npm的全局模块的存放路径以及cache的路径，默认情况下是放在用户文件夹下，隐藏文件夹AppData下，这样会带来坏处：下载的依赖包会全部存到C盘中，而且你找这个文件夹还得一层层找，烦死了，如果你是一盘党，按我也无话可说

  配置：
  1.在NodeJs主目录下建立"node_global"及"node_cache"两个文件夹
  2.启动cmd，输入
    npm config set prefix "D:\Program Files\nodejs\node_global"
    npm config set cache "D:\Program Files\nodejs\node_cache"
  3.关闭cmd，打开系统对话框，“我的电脑”右键“属性”-“高级系统设置”-“高级”-“环境变量”
    系统变量下新建
    NODE_PATH : D:\Program Files\nodejs\node_global\node_modules

    由于改变了module的默认地址，所以上面的用户变量都要跟着改变一下
    PATH : D:\Program Files\nodejs\node_global\
    要不使用module的时候会导致输入命令出现“xxx不是内部或外部命令，也不是可运行的程序或批处理文件”这个错误。

## npm查看安装情况的命令
  	npm install <name>安装nodejs的依赖包

	例如npm install express 就会默认安装express的最新版本，也可以通过在后面加版本号的方式安装指定版本，如npm install express@3.0.6

	npm install <name> -g  将包安装到全局环境中

	但是代码中，直接通过require()的方式是没有办法调用全局安装的包的。全局的安装是供命令行使用的，就好像全局安装了vmarket后，就可以在命令行中直接运行vm命令

	npm install <name> --save  安装的同时，将信息写入package.json中

	项目路径中如果有package.json文件时，直接使用npm install方法就可以根据dependencies配置安装所有的依赖包

	这样代码提交到github时，就不用提交node_modules这个文件夹了。

	npm uninstall <name> 卸载依赖包

	npm init  会引导你创建一个package.json文件，包括名称、版本、作者这些信息等

	npm remove <name>移除

	npm update <name>更新

	npm ls [参数] 列出当前安装的了所有包
    参数: 
         默认: 以树形结构输出
         --json: 以JSON格式输出
         --long: 输出额外信息
         --global: 输出全局依赖信息


	npm root 查看当前包的安装路径

	npm root -g  查看全局的包的安装路径

	npm help  帮助，如果要单独查看install命令的帮助，可以使用的npm help install

    
## npm工作
  1.进入工作目录下
  2.登陆npm npm adduser 
  3.新建npm模块,生成package.json  =》npm init
   


