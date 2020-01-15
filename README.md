
文档结构
>output  
>src  
>>assets(静态资源)
>>components(公共组件)  
>>docs(埋点js文件=>后面会优化好)
>>plugins(第三方插件)  
>>request(接口封装)  
>>store(vuex状态存储)  
>>theme(element主题样式更换)  
#### 一、安装fis3（确保已经安装了node)
执行cmd命令
```npm install -g fis3```
</br>
安装完成后，测试是否安装成功，输入命令：
```fis3 -v```
<br>
注意：打包完后生成的文件是绝对路径(需要用到服务器打开),
	    如果需要改为相对路径请输入命令：```npm install -g fis3-hook-relative```
</br>
</br>
#### 二、打包步骤
##### 浏览器自动刷新(两种方法选一种即可，推荐第二种)
方法一：运行命令  `fis3 release -wL`
</br>
方法二：双击dev.bat文件，每次修改后保存文件，该程序自动记录修改时间，并启动网页即时刷新。请勿关闭该窗口 !!!
</br>
</br>
#### 三、项目发布
##### 发布后会在src同级目录下产生output文件夹(两种方法选一种即可，推荐第二种)
方法一：运行命令  `fis3 release -d ../output`   (../output是将要发布到的文件路径)
</br>
方法二：双击release.bat文件即可
</br>
</br>
#### 四、启动fis3自带的服务器进行测试

运行命令：`fis3 server start` (会产生一个本地服务地址)
</br>
</br>
#### 五、查看打包后的到本地服务里的文件

运行命令：`fis3 server open`
</br>
</br>
#### 注意
* > 下载下来的是可以进行 js、css、less、es6 打包的
* > fis-conf.js 文件里的配置是可以根据自己的需求调整的
</br>
</br>

#### 后期完善
1.`less编译后的css进行压缩`

  
