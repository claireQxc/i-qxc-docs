import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as a,c as o,a as e,b as l,d as i,e as s}from"./app.193f2b19.js";const t={},c=e("h1",{id:"nginx-\u5B66\u4E60",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-\u5B66\u4E60","aria-hidden":"true"},"#"),i(" Nginx \u5B66\u4E60")],-1),v=e("h2",{id:"\u4E00\u3001nginx\u662F\u4EC0\u4E48",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E00\u3001nginx\u662F\u4EC0\u4E48","aria-hidden":"true"},"#"),i(" \u4E00\u3001Nginx\u662F\u4EC0\u4E48")],-1),u=i("NGINX is one of the most widely used web servers availabel today, in part because of its capabilities as a load balancer and reverse proxy server for HTTP and other network protocols.( "),m={href:"https://www.nginx.com/resources/library/complete-nginx-cookbook/",target:"_blank",rel:"noopener noreferrer"},b=i("Nginx Cookbook"),h=i(")"),_=s('<h2 id="\u4E8C\u3001web\u670D\u52A1\u5668-\u5E94\u7528\u670D\u52A1\u5668-\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001web\u670D\u52A1\u5668-\u5E94\u7528\u670D\u52A1\u5668-\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u4E8C\u3001Web\u670D\u52A1\u5668\uFF08\u5E94\u7528\u670D\u52A1\u5668\uFF09\u6709\u54EA\u4E9B</h2><blockquote><p>\u4E25\u683C\u610F\u4E49\u4E0A\u6765\u8BB2Web\u670D\u52A1\u5668\u53EA\u8D1F\u8D23\u5904\u7406Http\u534F\u8BAE\uFF0C\u53EA\u80FD\u53D1\u9001\u9759\u6001\u9875\u9762\u7684\u5185\u5BB9\u3002\u800CJSP\u3001ASP\u3001PHP\u7B49\u52A8\u6001\u5185\u5BB9</p></blockquote><ul><li>Apache\uFF1Ahttp\u670D\u52A1\u5668\uFF1B\u9ED8\u8BA4\u652F\u6301\u9759\u6001\u8D44\u6E90\u8BBF\u95EE\uFF0C\u52A8\u6001\u53EF\u4EE5\u901A\u8FC7shell\u3001Py\u811A\u672C\u52A8\u6001\u751F\u6210\u5185\u5BB9\uFF1B\u7ECF\u5E38\u4E0Etomcat\u914D\u5BF9\u4F7F\u7528</li><li>IIS\uFF1AWeb\u670D\u52A1\u5668\uFF0C\u5177\u6709\u6267\u884C\u670D\u52A1\u5668\u7AEF\u4EE3\u7801\u7684\u80FD\u529B</li><li>Nginx\uFF1Ahttp\u670D\u52A1\u5668\uFF1B\u9ED8\u8BA4\u652F\u6301\u9759\u6001\u8D44\u6E90\u8BBF\u95EE\uFF0C\u52A8\u6001\u53EF\u4EE5\u901A\u8FC7shell\u3001Py\u811A\u672C\u52A8\u6001\u751F\u6210\u5185\u5BB9</li><li>Tomcat\uFF1A\u662FServlet\u5BB9\u5668\uFF0C\u8FD8\u4E0D\u80FD\u5B8C\u5168\u7B97\u662F\u5E94\u7528\u670D\u52A1\u5668\uFF1B\u52A8\u6001\u751F\u6210\u8D44\u6E90\uFF1B\u72EC\u7ACB\u7684servlet\u548Cjsp\u5BB9\u5668</li><li>Lighttpd</li><li>Zeus</li></ul>',3),p={id:"\u4E09\u3001nginx\u80FD\u529B",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#\u4E09\u3001nginx\u80FD\u529B","aria-hidden":"true"},"#",-1),g=i(" \u4E09\u3001"),f={href:"https://bbs.huaweicloud.com/blogs/298643",target:"_blank",rel:"noopener noreferrer"},w=i("Nginx\u80FD\u529B"),k=s('<ul><li>\u52A8\u9759\u5206\u79BB</li><li>\u53CD\u5411\u4EE3\u7406</li><li>\u8D1F\u8F7D\u5747\u8861</li></ul><h3 id="_3-1\u3001\u52A8\u9759\u5206\u79BB" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001\u52A8\u9759\u5206\u79BB" aria-hidden="true">#</a> 3.1\u3001\u52A8\u9759\u5206\u79BB</h3><ul><li>\u9759\u6001\u8D44\u6E90\uFF1A\u5F53\u7528\u6237\u591A\u6B21\u8BBF\u95EE\u8FD9\u4E2A\u8D44\u6E90\uFF0C\u8D44\u6E90\u7684\u6E90\u4EE3\u7801\u6C38\u8FDC\u4E0D\u4F1A\u6539\u53D8\u7684\u8D44\u6E90\uFF08\u5982\uFF1AHTML\u3001JavaScript\uFF0CCSS\uFF0Cimg\u7B49\u6587\u4EF6\uFF09</li><li>\u52A8\u6001\u8D44\u6E90\uFF1A\u5F53\u7528\u6237\u8BBF\u95EE\u591A\u6B21\u8FD9\u4E2A\u8D44\u6E90\uFF0C\u8D44\u6E90\u7684\u6E90\u4EE3\u7801\u53EF\u80FD\u4F1A\u53D1\u751F\u6539\u53D8\uFF08\u5982\uFF1AJSP\u3001serverlet\u7B49\uFF09</li><li>\u52A8\u9759\u5206\u79BB\u4E4B\u540E\uFF0C\u53EF\u4EE5\u6839\u636E\u9759\u6001\u8D44\u6E90\u7684\u7279\u70B9\uFF0C\u5C06\u5176\u505A\u7F13\u5B58\u64CD\u4F5C\uFF0C\u8FD9\u5C31\u662F\u7F51\u7AD9\u9759\u6001\u5316\u5904\u7406\u7684\u6838\u5FC3\u601D\u8DEF</li><li>\u4E3A\u4E86\u52A0\u5FEB\u7F51\u7AD9\u7684\u89E3\u6790\u901F\u5EA6\uFF0C\u53EF\u4EE5\u628A\u52A8\u6001\u8D44\u6E90\u548C\u9759\u6001\u8D44\u6E90\u7528\u4E0D\u540C\u7684\u670D\u52A1\u5668\u6765\u89E3\u6790\uFF0C\u52A0\u5FEB\u89E3\u6790\u901F\u5EA6</li></ul><h3 id="_3-2\u3001\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> 3.2\u3001\u53CD\u5411\u4EE3\u7406</h3><ul><li>\u6B63\u5411\u4EE3\u7406\uFF1A\u4EE3\u7406\u5BA2\u6237\u7AEF\uFF0C\u4F8B\u5982vpn\uFF0C\u670D\u52A1\u7AEF\u4E0D\u77E5\u9053\u5B9E\u9645\u53D1\u8D77\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF</li><li>\u53CD\u5411\u4EE3\u7406\uFF1A\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u77E5\u9053\u5B9E\u9645\u63D0\u4F9B\u670D\u52A1\u7684\u670D\u52A1\u7AEF</li></ul><h3 id="_3-3\u3001\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-3\u3001\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.3\u3001\u8D1F\u8F7D\u5747\u8861</h3><ul><li>DNS\u8D1F\u8F7D\u5747\u8861</li><li>\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861</li><li>\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861</li></ul>',7),N={id:"_3-3-1\u3001dns\u8D1F\u8F7D\u5747\u8861",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#_3-3-1\u3001dns\u8D1F\u8F7D\u5747\u8861","aria-hidden":"true"},"#",-1),q=i(" 3.3.1\u3001"),y={href:"https://juejin.cn/post/6921730015801376776",target:"_blank",rel:"noopener noreferrer"},L=i("DNS\u8D1F\u8F7D\u5747\u8861"),P=s('<ul><li>\u4E00\u4E2A\u57DF\u540D\u901A\u8FC7DNS\u89E3\u6790\u5230\u591A\u4E2AIP\uFF0C\u6BCF\u4E2AIP\u5BF9\u5E94\u4E0D\u540C\u7684\u670D\u52A1\u5668\u5B9E\u4F8B\uFF0C\u8FD9\u6837\u5C31\u5B8C\u6210\u4E86\u6D41\u91CF\u7684\u8C03\u5EA6</li><li>\u5E94\u7528\u573A\u666F\uFF1A\u5B9E\u73B0\u5730\u7406\u7EA7\u522B\u7684\u5168\u5C40\u8D1F\u8F7D\u5747\u8861\uFF0C\u5B9E\u73B0\u5C31\u8FD1\u8BBF\u95EE\uFF0C\u63D0\u9AD8\u8BBF\u95EE\u901F\u5EA6</li></ul><ol><li>\u4F18\u70B9\uFF1A\u5B9E\u73B0\u7B80\u5355\uFF0C\u6210\u672C\u4F4E\uFF0C\u65E0\u9700\u81EA\u5DF1\u5F00\u53D1\u6216\u8005\u7EF4\u62A4\u8D1F\u8F7D\u5747\u8861\u8BBE\u5907</li><li>\u7F3A\u70B9\uFF1A <ul><li>\u670D\u52A1\u5668\u6545\u969C\u5207\u6362\u5EF6\u8FDF\u5927\uFF0C\u670D\u52A1\u5668\u5347\u7EA7\u4E0D\u65B9\u4FBF\uFF1B\u5B58\u5728\u591A\u7EA7\u7F13\u5B58(TTL-Time To Live)\uFF1B</li><li>\u6D41\u91CF\u8C03\u5EA6\u4E0D\u5747\u8861\uFF0C\u7C92\u5EA6\u592A\u7C97</li><li>DNS\u652F\u6301\u7684IP\u5217\u8868\u6709\u9650\u5236</li></ul></li></ol><h4 id="_3-3-2\u3001\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-3-2\u3001\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.3.2\u3001\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861</h4><ul><li>\u76EE\u524D\u4E1A\u754C\u5178\u578B\u7684\u786C\u4EF6\u8D1F\u8F7D\u5747\u8861\u6709\u4E24\u6B3E\uFF1AF5\u548CA10</li></ul><ol><li>\u4F18\u70B9\uFF1A \u529F\u80FD\u5F3A\u5927\uFF1B\u6027\u80FD\u5F3A\u5927\uFF1B\u7A33\u5B9A\u6027\u9AD8\uFF1B\u5B89\u5168\u9632\u62A4</li><li>\u7F3A\u70B9\uFF1A\u4EF7\u683C\u8D35\uFF1B\u6269\u5C55\u6027\u5DEE\uFF1B\u8C03\u5F0F\u548C\u7EF4\u62A4\u9700\u8981\u4E13\u4E1A\u4EBA\u5458</li></ol><h4 id="_3-3-3\u3001\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#_3-3-3\u3001\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> 3.3.3\u3001\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861</h4><ul><li>\u901A\u8FC7\u53CD\u5411\u4EE3\u7406\u6765\u5B9E\u73B0</li><li>\u4E03\u5C42\u534F\u8BAE\u8D1F\u8F7D\u5747\u8861\uFF08HTTP\u8D1F\u8F7D\u5747\u8861\uFF09\uFF1ANginx</li><li>\u56DB\u5C42\u534F\u8BAE\u8D1F\u8F7D\u5747\u8861\uFF08TCP\u8D1F\u8F7D\u5747\u8861\uFF09\uFF1ALVS\uFF0C\u5546\u4E1A\u7248\u7684NginxPlus\uFF1BLVS\u662F\u8F6F\u4EF6\u8D1F\u8F7D\u5747\u8861\u4E2D\u6027\u80FD\u6700\u9AD8\u7684\uFF0C\u4E25\u683C\u6765\u8BF4\u5DE5\u4F5C\u5728\u4E09\u5C42\uFF0C\u6240\u4EE5\u66F4\u901A\u7528\u4E00\u4E9B\uFF0C\u4F7F\u7528\u5404\u79CD\u5E94\u7528\u670D\u52A1</li></ul><ol><li>\u4F18\u70B9\uFF1A\u6613\u64CD\u4F5C\uFF1B\u4FBF\u5B9C\uFF1B\u7075\u6D3B</li></ol>',8),T={href:"https://www.coonote.com/lvs/lvs-load-scheduling-algorithm.html",target:"_blank",rel:"noopener noreferrer"},C=i("\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5"),H=e("blockquote",null,[e("ol",null,[e("li",null,"\u5E38\u7528\u9759\u6001\u7B97\u6CD5\uFF1ARR\u3001WRR\u3001DH\u3001SH"),e("li",null,"\u5E38\u7528\u52A8\u6001\u7B97\u6CD5\uFF1ALC\u3001WLC\u3001SED\u3001NQ\u3001LBLC\u3001LBLCR")])],-1),I=s(`<h2 id="\u56DB\u3001nginx\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001nginx\u914D\u7F6E" aria-hidden="true">#</a> \u56DB\u3001Nginx\u914D\u7F6E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6982\u8FF0\uFF1A\u4E00\u5171\u4E09\u5927\u90E8\u5206\u914D\u7F6E\u3002
# \u5176\u4E2D#\u6CE8\u91CA\u6389\u7684\u53EF\u4EE5\u5728\u9700\u8981\u7684\u65F6\u5019\u5F00\u542F\u5E76\u4FEE\u6539\uFF0C\u6CA1\u6709\u6CE8\u91CA\u6389\u7684\uFF08\u9664\u4E86\u4E0B\u9762location\u793A\u4F8B\uFF09\u4E0D\u8981\u5220\u6389\uFF0C\u57FA\u672C\u90FD\u662F\u5FC5\u987B\u7684\u914D\u7F6E\u9879\u3002

###############################\u7B2C\u4E00\u90E8\u5206 \u5168\u5C40\u914D\u7F6E############################
#user  nobody;                        \u6307\u5B9A\u542F\u52A8\u8FDB\u7A0B\u7684\u7528\u6237\uFF0C\u9ED8\u8BA4\u4E0D\u7528\u6307\u5B9A\u5373\u53EF\u3002
#error_log  logs/error.log;           \u914D\u7F6E\u65E5\u5FD7\u8F93\u51FA\uFF0C\u867D\u7136\u53EBerror_log\u4F46\u662F\u53EF\u4EE5\u5B9A\u4E49\u8F93\u51FA\u7684\u7EA7\u522B\uFF0C\u9ED8\u8BA4\u4E0D\u5199\u662FERROR\u7EA7\u522B
#error_log  logs/error.log  notice;   
#error_log  logs/error.log  info;
#pid        logs/nginx.pid;           \u8BB0\u5F55pid\u7684\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u5C31\u662F\u653E\u5230\u8FD9\u4E2A\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u4FEE\u6539\u3002

# \u53EA\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B\uFF0Cnginx\u662F\u591A\u8FDB\u7A0B\u5355\u7EBF\u7A0B\u6A21\u578B\uFF0C\u4F46\u662F\u4F7F\u7528\u4E86epoll sendfile \u975E\u963B\u585Eio
worker_processes  1;

###############################\u7B2C\u4E8C\u90E8\u5206 event\u914D\u7F6E############################
#\u4E3B\u8981\u662F\u7F51\u7EDC\u8FDE\u63A5\u76F8\u5173\u7684\u914D\u7F6E
events {
  # \u6BCF\u4E2Aworker\u80FD\u8FDE\u63A51024\u4E2A\u94FE\u63A5
  worker_connections  1024;
  #use epoll; \u4E8B\u4EF6\u9A71\u52A8\u6A21\u578Bselect|poll|kqueue|epoll|resig
}


###############################\u7B2C\u4E09\u90E8\u5206 http\u914D\u7F6E############################
http {
  include       mime.types;  #\u6587\u4EF6\u6269\u5C55\u540D\u4E0E\u6587\u4EF6\u7C7B\u578B\u6620\u5C04\u8868
  default_type  text/html;   #\u9ED8\u8BA4\u7684\u8FD4\u56DE\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5728server.location\u91CC\u9762\u6539
  sendfile        on;        #\u5F00\u542Fsendfile\u7CFB\u7EDF\u8C03\u7528
  keepalive_timeout  65;     #\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F465s
  
  
  server {
    listen       80;
    # \u4E0B\u9762\u5C55\u793A\u591A\u4E2Ademo\uFF0Cdemo\u4E4B\u95F4\u4E92\u76F8\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u53EF\u4EE5\u5355\u72EC\u914D\u7F6E\u6765\u8FDB\u884C\u6D4B\u8BD5\u3002
    # \u5176\u4E2Ddemo1\u5230demo6 \u662Fnginx\u76F8\u5173\u7684\u3002
    
    ############### demo1 \u5C55\u793Alocation\u8DEF\u5F84\u7684\u4E0D\u540C\u5199\u6CD5\u4F18\u5148\u7EA7 ###############
    # =\u6700\u9AD8\u4F18\u5148\u7EA7 \u8868\u793A\u8DEF\u5F84\u5B8C\u5168\u7B49\u4E8E\uFF0C\u53EF\u4EE5\u5339\u914D/demo1/a/b\u7684\u8BF7\u6C42
    location =/demo1/a/b {
      echo &quot;=/demo1/a/b&quot;;
    } 
    # ^~\u7B2C\u4E8C\u9AD8  \u8868\u793AstartsWith\uFF0C\u53EF\u4EE5\u5339\u914D/demo1/a/b/c\u548C/demo1/abc\u8BF7\u6C42
    location ^~/demo1/a {
      echo &quot;^~/demo1/a&quot;;
    }
    # ~\u7B49\u56DB\u4E2A\u7B26\u53F7\u7B2C\u4E09\u9AD8  \u8868\u793A\u6B63\u5219\uFF0C\u5982\u679C\u8981\u7528{}\u662F\u7279\u6B8A\u7B26\u53F7\uFF0C\u9700\u8981\u6574\u4E2A\u52A0\u5F15\u53F7\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u52A0\u53CC\u5F15\u53F7\uFF0C\u9632\u6B62\u51FA\u9519\uFF0C\u53EF\u4EE5\u5339\u914D/demo1/bcd
    # \u5176\u4ED6\u4E09\u4E2A\uFF1A~*\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u6B63\u5219\uFF0C!~\u6B63\u5219\u4E0D\u5339\u914D\u7684\uFF0C!~*\u4E0D\u5206\u5927\u5C0F\u5199\u7684\u6B63\u5219\u4E0D\u5339\u914D
    location &quot;~/demo1/\\w{3}$&quot; {
      echo &quot;regex&quot;;
    }
    # \u6700\u4F4E \u6CA1\u6709\u524D\u7F6E\u7B26\u53F7 /demo1 /demo111 /demo1/b/c \u4E0D\u7B26\u5408\u4E0A\u9762\u4E09\u79CD\uFF0C\u5C31\u4F1A\u5339\u914D\u5230\u8FD9
    location /demo1{
      echo &quot;/demo1&quot;;
    }
    
    ############### demo2 \u5C55\u793Aserve\u9759\u6001\u6587\u4EF6\u5939 ###############
    location / {
       root   html;                 # root\u5C31\u662F\u6839\u76EE\u5F55\u662F\u5F53\u524Dhtml\u76EE\u5F55
       index  index.html index.htm; # index\u8868\u793A\u9ED8\u8BA4\u4E0D\u5199\u7684\u65F6\u5019\u8F6C\u5230\u7684\u6587\u4EF6
    }
    
    ############## demo3 \u6307\u5B9A\u9519\u8BEF\u6587\u4EF6 ###############
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
       root   html;
    }
    
    ############# demo4 rewrite\u91CD\u5199url rewrite\u4E5F\u53EF\u4EE5\u662Fserver\u7EA7\u522B ####################
    location /demo4 {
      # \u4E00\u822C\u653E\u5230\u6700\u540E\u4E00\u884C
      rewrite ^/(.*) /$1/api permanent; # permanent301, redirect302, break\u4E0D\u5728\u5339\u914D\u540E\u9762rewrite\u89C4\u5219\uFF0Clast\u7EE7\u7EED\u5411\u4E0B\u5339\u914D\u3002
    }
    location /demo4/api {
      echo &quot;/demo4/api&quot;;
    }
    
    ############# demo5 demo6 proxy_pass\u53CD\u5411\u4EE3\u7406 ####################
    # /demo5 =&gt; baidu.com/demo5
    # /demo5/a/b =&gt; baidu.com/demo5/a/b
    location /demo5 {
      proxy_pass  https://www.baidu.com;
    }
    # /demo6 =&gt; baidu.com
    # /demo6/a/b =&gt; baidu.com/a/b
    location /demo6 {
      # proxy_set_header Host $http_host; \u5982\u679C\u6709\u8BF7\u6C42\u5934\u6539\u52A8\u7684\u9700\u6C42\u53EF\u4EE5\u641C\u7D22proxy_set_header\u53BB\u4E86\u89E3
      proxy_pass  https://www.baidu.com/;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function R(D,V){const n=r("ExternalLinkIcon");return a(),o("div",null,[c,v,e("ul",null,[e("li",null,[u,e("strong",null,[e("a",m,[b,l(n)])]),h])]),_,e("h2",p,[x,g,e("a",f,[w,l(n)])]),k,e("h4",N,[S,q,e("a",y,[L,l(n)])]),P,e("ul",null,[e("li",null,[e("strong",null,[e("a",T,[C,l(n)])]),H])]),I])}var E=d(t,[["render",R],["__file","start.html.vue"]]);export{E as default};
