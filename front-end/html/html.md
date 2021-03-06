## html

### 为什么需要语义化

语义化的优点：

- 易修改、易维护
- 无障碍阅读支持
- 搜索引擎友好，利于 SEO
- 面向未来的 HTML，浏览器在未来可能提供更丰富的支持

### 结构语义化

语义元素仅仅是页面结构的规范化，并不会对内容有本质的影响。

#### 头部 header

<header>元素有两种用法，第一是标注内容的标题，第二是标注网页的页眉。除非必要（内容标题附带其它信息的情况下：发布时间、作者等），一般不在内容中使用<header>

#### 导航栏 nav

nav 可以用作导航栏，也可以用于一组文章的链接，通常仅仅在页面的主要导航部分使用它

```html
<!-- 案例 -->
<nav>
  <!-- 此处是链接 -->
  <aside></aside>
  <aside></aside>
</nav>

<!-- 案例二，如果侧栏中包含其它不同于链接的其它区块 -->
<aside>
  <nav>
    <!-- 此处是链接 -->
  </nav>
  <section></section>
  <div></div>
</aside>
```

#### 附注

<aside>元素并不仅仅是侧栏，它表示与它周围文本没有密切关系的内容。文章中同样可以使用<aside>元素，来说明文章的附加内容、解释说明某个观点、相关内容链接等等。

<section>标签适合标记的内容区块：
- 与页面主体并列显示的小内容块
- 独立性内容，清单、表单等
- 分组内容，如CMS系统中的文章分类区块
- 比较长的文档。

#### 页脚

<footer>标签仅仅可以包含版权、来源信息、法律限制等等之类的文本或链接信息。

```html
<div>
  <aside>
    <!-- 其它内容 -->
  </aside>

  <footer>
    <!-- 法律、版权、来源、联系信息等 -->
  </footer>
</div>
```

#### 主要内容

<main>标签可以帮助屏幕阅读工具识别页面的主体部分，从而让访问者迅速得到有用的信息

#### 文章

<article>表示一个完整的、自成一体的内容块。如文章或新闻报道。

## iframe 的优缺点

**优点**

1. 解决加载缓慢的第三方内容的加载问题
2. iframe 无刷新文件上传
3. iframe 跨域通信

**缺点**

1. iframe 会阻塞主页面的 onload 事件
2. 无法被一些搜索引擎索引到
3. 页面会增加服务器的 http 请求
4. 会产生很多页面，不容易管理
