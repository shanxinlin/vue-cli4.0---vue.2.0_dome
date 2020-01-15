
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
## 一、安装fis3（确保已经安装了node)
执行cmd命令
```npm install -g fis3```
</br>
安装完成后，测试是否安装成功，输入命令：
```fis3 -v```
<br>
注意：打包完后生成的文件是绝对路径(需要用到服务器打开),
	    如果需要改为相对路径请输入命令：```npm install -g fis3-hook-relative```

  
