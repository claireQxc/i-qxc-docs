# Nginx 学习
## 一、Nginx是什么
- NGINX is one of the most widely used web servers availabel today, in part because of its capabilities as a load balancer and reverse proxy server for HTTP and other network protocols.( **[Nginx Cookbook](https://www.nginx.com/resources/library/complete-nginx-cookbook/)**)
## 二、Web服务器（应用服务器）有哪些
>严格意义上来讲Web服务器只负责处理Http协议，只能发送静态页面的内容。而JSP、ASP、PHP等动态内容
- Apache：http服务器；默认支持静态资源访问，动态可以通过shell、Py脚本动态生成内容；经常与tomcat配对使用
- IIS：Web服务器，具有执行服务器端代码的能力
- Nginx：http服务器；默认支持静态资源访问，动态可以通过shell、Py脚本动态生成内容
- Tomcat：是Servlet容器，还不能完全算是应用服务器；动态生成资源；独立的servlet和jsp容器
- Lighttpd
- Zeus
## 三、[Nginx能力](https://bbs.huaweicloud.com/blogs/298643)
- 动静分离
- 反向代理
- 负载均衡
### 3.1、动静分离
- 静态资源：当用户多次访问这个资源，资源的源代码永远不会改变的资源（如：HTML、JavaScript，CSS，img等文件）
- 动态资源：当用户访问多次这个资源，资源的源代码可能会发生改变（如：JSP、serverlet等）
- 动静分离之后，可以根据静态资源的特点，将其做缓存操作，这就是网站静态化处理的核心思路
- 为了加快网站的解析速度，可以把动态资源和静态资源用不同的服务器来解析，加快解析速度
### 3.2、反向代理
- 正向代理：代理客户端，例如vpn，服务端不知道实际发起请求的客户端
- 反向代理：代理服务器，客户端不知道实际提供服务的服务端
### 3.3、负载均衡
- DNS负载均衡
- 硬件负载均衡
- 软件负载均衡
#### 3.3.1、[DNS负载均衡](https://juejin.cn/post/6921730015801376776)
- 一个域名通过DNS解析到多个IP，每个IP对应不同的服务器实例，这样就完成了流量的调度
- 应用场景：实现地理级别的全局负载均衡，实现就近访问，提高访问速度
1. 优点：实现简单，成本低，无需自己开发或者维护负载均衡设备
2. 缺点：
   - 服务器故障切换延迟大，服务器升级不方便；存在多级缓存(TTL-Time To Live)；
   - 流量调度不均衡，粒度太粗
   - DNS支持的IP列表有限制
#### 3.3.2、硬件负载均衡
- 目前业界典型的硬件负载均衡有两款：F5和A10
1. 优点： 功能强大；性能强大；稳定性高；安全防护
2. 缺点：价格贵；扩展性差；调式和维护需要专业人员
#### 3.3.3、软件负载均衡
- 通过反向代理来实现
- 七层协议负载均衡（HTTP负载均衡）：Nginx
- 四层协议负载均衡（TCP负载均衡）：LVS，商业版的NginxPlus；LVS是软件负载均衡中性能最高的，严格来说工作在三层，所以更通用一些，使用各种应用服务
1. 优点：易操作；便宜；灵活
- **[负载均衡算法](https://www.coonote.com/lvs/lvs-load-scheduling-algorithm.html)**
  >1. 常用静态算法：RR、WRR、DH、SH
  >2. 常用动态算法：LC、WLC、SED、NQ、LBLC、LBLCR
## 四、Nginx配置
```
# 概述：一共三大部分配置。
# 其中#注释掉的可以在需要的时候开启并修改，没有注释掉的（除了下面location示例）不要删掉，基本都是必须的配置项。

###############################第一部分 全局配置############################
#user  nobody;                        指定启动进程的用户，默认不用指定即可。
#error_log  logs/error.log;           配置日志输出，虽然叫error_log但是可以定义输出的级别，默认不写是ERROR级别
#error_log  logs/error.log  notice;   
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;           记录pid的文件，默认就是放到这个位置，可以修改。

# 只启动一个进程，nginx是多进程单线程模型，但是使用了epoll sendfile 非阻塞io
worker_processes  1;

###############################第二部分 event配置############################
#主要是网络连接相关的配置
events {
  # 每个worker能连接1024个链接
  worker_connections  1024;
  #use epoll; 事件驱动模型select|poll|kqueue|epoll|resig
}


###############################第三部分 http配置############################
http {
  include       mime.types;  #文件扩展名与文件类型映射表
  default_type  text/html;   #默认的返回类型，可以在server.location里面改
  sendfile        on;        #开启sendfile系统调用
  keepalive_timeout  65;     #连接超时时间65s
  
  
  server {
    listen       80;
    # 下面展示多个demo，demo之间互相没有依赖关系，可以单独配置来进行测试。
    # 其中demo1到demo6 是nginx相关的。
    
    ############### demo1 展示location路径的不同写法优先级 ###############
    # =最高优先级 表示路径完全等于，可以匹配/demo1/a/b的请求
    location =/demo1/a/b {
      echo "=/demo1/a/b";
    } 
    # ^~第二高  表示startsWith，可以匹配/demo1/a/b/c和/demo1/abc请求
    location ^~/demo1/a {
      echo "^~/demo1/a";
    }
    # ~等四个符号第三高  表示正则，如果要用{}是特殊符号，需要整个加引号，建议直接加双引号，防止出错，可以匹配/demo1/bcd
    # 其他三个：~*不区分大小写正则，!~正则不匹配的，!~*不分大小写的正则不匹配
    location "~/demo1/\w{3}$" {
      echo "regex";
    }
    # 最低 没有前置符号 /demo1 /demo111 /demo1/b/c 不符合上面三种，就会匹配到这
    location /demo1{
      echo "/demo1";
    }
    
    ############### demo2 展示serve静态文件夹 ###############
    location / {
       root   html;                 # root就是根目录是当前html目录
       index  index.html index.htm; # index表示默认不写的时候转到的文件
    }
    
    ############## demo3 指定错误文件 ###############
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
       root   html;
    }
    
    ############# demo4 rewrite重写url rewrite也可以是server级别 ####################
    location /demo4 {
      # 一般放到最后一行
      rewrite ^/(.*) /$1/api permanent; # permanent301, redirect302, break不在匹配后面rewrite规则，last继续向下匹配。
    }
    location /demo4/api {
      echo "/demo4/api";
    }
    
    ############# demo5 demo6 proxy_pass反向代理 ####################
    # /demo5 => baidu.com/demo5
    # /demo5/a/b => baidu.com/demo5/a/b
    location /demo5 {
      proxy_pass  https://www.baidu.com;
    }
    # /demo6 => baidu.com
    # /demo6/a/b => baidu.com/a/b
    location /demo6 {
      # proxy_set_header Host $http_host; 如果有请求头改动的需求可以搜索proxy_set_header去了解
      proxy_pass  https://www.baidu.com/;
    }
  }
}
```



