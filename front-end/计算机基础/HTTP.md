# HTTP

## http 的由来

1. http 协议始于 30 年前蒂姆.博纳斯-李的一片论文
2. http/0.9 是个简单的文本协议，只能获取文本资源
3. http/1.0 确立了大部分现在使用的技术，但它不是正式标准
4. http/1.1 是目前互联网上使用最广泛的协议，功能也非常完善
5. http/2 基于 Google 的 SPDY 协议，注重性能改善，但还未普及
6. http/3 基于 Google 的 QUIC 协议，是将来的发展方向

## HTTP2 和 HTTP1 比 增加的功能

1. 二进制协议，不再是纯文本
2. 可发起多个请求，废弃 1.1 里的管道
3. 使用专用算法压缩头部，减少数据传输量
4. 允许服务器主动想客户端推送数据
5. 增强安全性，“事实上”要求加密通信

## HTTP 是什么

协议

```
http是一个用在计算机世界里的协议。它使用计算机能够理解的语言确立了一种计算机之间交流通信的规范，以及相关的各种控制和错误处理方式
```

1. http 协议是一个**双向协议**
2. 数据虽然是在 A 和 B 之间传输，但并没有限制只有 A 和 B 这两个角色，允许中间有“中转”或者“接力”

## 传输协议

http 是一个在计算机世界里专门用来在亮点之间传输数据的约定和规范

## 超文本

所谓“**文本**”，就表示 HTTP 传输的不是 TCP/UDP 这些底层协议里被切分的二进制包(datagram)，而是完整的、有意义的数据，可以被浏览器、服务器这样的上层应用程序处理

所谓“**超文本**”，就是“超越了普通文本的文本”，它是文字、图片、音频和视频等的混合体，最关键的是含有“超链接”，能够从一个“超文本”跳跃到另一个“超文本”，形成复杂非线性、网状的结构关系

## 超文本传输协议定义

http 是一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范

## 小结

1. http 是一个用在计算机世界里的协议，确立了一种计算机直接交流通信的规范，以及相关的各种控制和错误处理方式
2. http 专门用来在两点之间传输数据，不能用于广播、寻址或路由
3. http 传输的是文字、图片、音频、视频等超文本数据
4. http 是构建互联网的重要基础技术，它没有实体，依赖许多其他的技术来实现

## HTTP 世界全览：与 HTTP 相关的各种概念

1. 互联网上绝大部分资源都使用 HTTP 协议传输；
2. 浏览器是 HTTP 协议里的请求方，即 User Agent；
3. 服务器是 HTTP 协议里的应答方，常用的有 Apache 和 Nginx；
4. CDN 位于浏览器和服务器之间，主要起到缓存加速的作用；
5. 爬虫是另一类 User Agent，是自动访问网络资源的程序。
6. TCP/IP 是网络世界最常用的协议，HTTP 通常运行在 TCP/IP 提供的可靠传输基础上；
7. DNS 域名是 IP 地址的等价替代，需要用域名解析实现到 IP 地址的映射；
8. URI 是用来标记互联网上资源的一个名字，由“协议名 + 主机名 + 路径”构成，俗称 URL；
9. HTTPS 相当于“HTTP+SSL/TLS+TCP/IP”，为 HTTP 套了一个安全的外壳；
10. 代理是 HTTP 传输过程中的“中转站”，可以实现缓存加速、负载均衡等功能；

## 常说的“四层”和“七层”到底是什么？“五层”“六层”哪去了？

1. TCP/IP 分为四层，核心是二层的 IP 和三层的 TCP，HTTP 在第四层；
2. OSI 分为七层，基本对应 TCP/IP，TCP 在第四层，HTTP 在第七层；
3. OSI 可以映射到 TCP/IP，但这期间一、五、六层消失了；
4. 日常交流的时候我们通常使用 OSI 模型，用四层、七层等术语；
5. HTTP 利用 TCP/IP 协议栈逐层打包再拆包，实现了数据传输，但下面的细节并不可见。
6. 有一个辨别四层和七层比较好的（但不是绝对的）小窍门，“两个凡是”：凡是由操作系统负责处理的就是四层或四层以下，否则，凡是需要由应用程序（也就是你自己写代码）负责处理的就是七层。

## 06 | 域名里有哪些门道？

1. 域名使用字符串来代替 IP 地址，方便用户记忆，本质上一个名字空间系统；
2. DNS 就像是我们现实世界里的电话本、查号台，统管着互联网世界里的所有网站，是一个“超级大管家”；
3. DNS 是一个树状的分布式查询系统，但为了提高查询效率，外围有多级的缓存；
4. 使用 DNS 可以实现基于域名的负载均衡，既可以在内网，也可以在外网。

## 面试题

### HTTP 中 GET 和 POST 有什么区别?

相同点：都是 HTTP 请求，TCP 连接

不同点：

1. GET 请求的安全性不如 POST 请求
2. GET 的参数有长度限制，POST 没有
3. GET 的参数只允许 ASCII 字符，POST 没有限制

关于回退：
点击回退或刷新时，POST 请求会再次提交表单，而 GET 请求不会，POST 回退有害，GET 回退无害

关于缓存：

1. GET 能被缓存，可以收藏为书签，参数保留在浏览器历史中
2. POST 不能被缓存，不可收藏为书签，参数不会保留在浏览器历史中

关于请求包：

1. GET 请求只发送一个 TCP 数据包，即 http header 和 data 共同发送给 web 服务器，服务器响应 200OK。
2. POST 请求发送两个 TCP 数据包，第一次发送 http header，如果 web 服务器予以响应 100 continue，则发送第二个数据包 data，服务器响应 200 OK

对比总结：

|           |                    GET |             POST              |
| --------- | ---------------------: | :---------------------------: |
| 参数位置  |                 url 中 |         request body          |
| 参数长度  |                 有限制 |            无限制             |
| 参数编码  |             ASCII 编码 |            无限制             |
| 后退/刷新 |   不重复提交，回退无害 |      重复提交，回退有害       |
| 安全性    |       参数暴露，不安全 |           相对安全            |
| 缓存      |               可以缓存 |          不可以缓存           |
| 书签      |         可以收藏为书签 |       不可以收藏为书签        |
| 历史      |   参数保留在浏览器历史 |      不保留在浏览器历史       |
| 请求包数  | 1 个(http header+data) | 2 个，先 http header，后 data |

### 页面 10 张 img，http1 是怎样的加载表现，怎么解决。那多域名又为什么可以解决呢

http1 下，浏览器对一个域名下最大 tcp 连接数为 6，所以 10 张图片表现为 6+4。所以可以用多域名部署解决。5 个 a 域名，5 个 b 域名就可以实现一瞬间全部出来了(或者 6 个 a，4 个 b，融会贯通)。如果是 1 个 a 域名，9 个多域名，会表现为(6 + 1) + 3

### http 缓存是怎样的。eTag 和 last modify 分别什么优点缺点，适合什么场景【描述】

缓存、304 基本问题。eTag 适合重要量小的资源，last modify 适合不重要的量大的资源。注意 last modify 需要保证服务器时间准确

[一年半经验前端社招 7 家大厂&独角兽全过经历 | 掘金技术征文](https://juejin.im/post/6844904137495150599)

### 接上题，10 张 img，http2 是怎样表现

一瞬间全部

### http2 为什么快，多了什么特性，头部压缩算法是怎样

多路复用
头部压缩是 HPACK 算法

### 怎么知道一个 tcp 请求数据已经完了呢

没有长度了

### 怎么知道客户端是局域网下哪一个 ip

客户端连接服务端的时候会携带自己的 ip，服务器接收

### 为什么是 tcp 而不是 udp。tcp 丢包怎么办，怎么知道丢包，怎么知道已经重传成功了

TCP 三次握手保证可靠性，而 UDP 就没有了，信息发出后,不验证是否到达，不可靠。丢包就重传。有 seq，是连续的，如果收到的是不连续，说明中间缺了包；或者是超时了还没收到。因为有 seq 吧，所以多一个少一个也是知道的

### 了解 http3 的 quic 吗

udp 快而不可靠，所以衍生 quic。对比 http2+tcp+tls，quic 减少了 tcp、tls 握手，改进了拥塞控制，前向冗余纠错

### quic 怎么解决了 tcp 的问题

### quic 用 udp 怎么保证了可靠性

用 rudp 来优化资源的占用率和响应时间，提高系统的并发能力。seq、超时重传、fec 前向纠错

### quic 的 udp 如果不握手，人家随便发请求怎么办

滑动窗口、bbr 拥塞算法
