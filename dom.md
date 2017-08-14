# JS-DOM  
### DOM:(Document Object Model)文档对象模型  
		Dom是W3C组织推荐的处理可扩展标志语言的标准编程接口。在网页上，组织页面（或文档）的对象被组织在一个树形结构中，用来表示文档中对象的标准模型就称为DOM。Document Object Model的历史可以追溯至1990年代后期微软与Netscape的“浏览器大战”，双方为了在JavaScript与JScript一决生死，于是大规模的赋予浏览器强大的功能。微软在网页技术上加入了不少专属事物，既有VBScript、ActiveX、以及微软自家的DHTML格式等，使不少网页使用非微软平台及浏览器无法正常显示。DOM即是当时蕴酿出来的杰作。  

**DOM 定义了访问和操作`HTML`文档的标准方法，将`HTML`文档表达为树结构。**  

**如图所示**:  
	![](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502530878981&di=2e7bbe4d2193c685254c13e5c1652f54&imgtype=0&src=http%3A%2F%2F120.img.pp.sohu.com%2Fimages%2F2008%2F1%2F9%2F13%2F8%2F117f9d9afe1.jpg)  

***  
#### 在HTML DOM中，所有事物都是节点。DOM是被视为节点树的HTML。  
***  

**Dom按照层级方式划分可以分为：父节点，兄弟节点，子节点.**  

节点树中的节点彼此拥有层级关系。我们通过父、子、兄弟等术语用来描述这些关系。父节点拥有子节点。同级的子节点被称为同胞（兄弟或姐妹）。  

* 在节点树中，顶端节点被称为根（root）
* 每个节点都有父节点、除了根（它没有父节点）
* 一个节点可拥有任意数量的子
* 兄弟是拥有相同父节点的节点  

**例如**  
	
		<html>
			<head>
				<title>Document<title>
			</head>
			<body>
				<div>hello world<div>
				<p>world hello<p>
			</body>
		</html>

在上面的代码实例中：  

* html节点没有父节点，它是根节点
* head 和 body 的父节点是 html 节点
* 文本节点 "Hello world!" 的父节点是 div 节点  

并且：  

* html 节点拥有两个子节点：head和body
* head 节点拥有一个子节点：title 节点
* title 节点也拥有一个子节点：文本节点 "Document"
* div和p节点是同胞节点，同时也是body的子节点

并且：  

* head 元素是 html 元素的首个子节点
* body 元素是 html元素的最后一个子节点
* div 元素是 body 元素的首个子节点
* p 元素是 body 元素的最后一个子节点  

**Dom按照节点类型划分**:  

* 元素节点
* 属性节点
* 文本节点
* 注释节点
* document节点

**我们通过nodeType关键字可以返回节点的类型**:

* 元素节点-->1
* 属性节点-->2
* 文本节点-->3
* 注释节点-->8
* document节点-->9

**通过nodeName可以返回对应的节点名称，通过nodeValue可以返回节点的值**  
**nodeName 属性规定节点的名称。**

* nodeName 是只读的
* 元素节点的 nodeName 与标签名相同
* 属性节点的 nodeName 与属性名相同
* 文本节点的 nodeName 始终是 #text
* 文档节点的 nodeName 始终是 #document

**nodeValue 属性规定节点的值。**  

* 元素节点的 nodeValue 是 undefined 或 null
* 文本节点的 nodeValue 是文本本身
* 属性节点的 nodeValue 是属性值


***  
### Dom中的方法和属性  
一些常用的方法:  

* getElementById(id) - 获取带有指定 id 的节点（元素）
* getElementsByTagName() - 获取包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
* getElementsByClassName() - 获取包含带有指定类名的所有元素的节点列表。 
* appendChild() - 把新的子节点添加到指定节点。
* removeChild() -  	删除子节点。
* replaceChild() - 替换子节点。
* insertBefore() - 在指定的子节点前面插入新的子节点。
* createAttribute() - 创建属性节点。
* createElement() - 创建元素节点。
* createTextNode() -  	创建文本节点;
* getAttribute() -  返回指定的属性值。 
* setAttribute() - 把指定属性设置或修改为指定的值。

一些常用的属性:  

* innerHTML - 节点（元素）的文本值
* parentNode - 节点（元素）的父节点
* childNodes - 节点（元素）的子节点
* attributes - 节点（元素）的属性节点

***
#### 获取节点   
##### children或者childNodes:获取指定元素所有的第一层子元素  
**区别**:  

* children  不会造成空白文本解析，获取到的是真实的子节点 不支持IE6，7，8;
* childNodes 会解析空白文本节点 

##### firstChild或者firstElementchild:获取指定元素的第一个子节点  
**区别**:

* firstChild在标准和ie9下会获取到空白文本节点

##### lastChild或者lastElementChild:获取指定元素的最后一个子节点  
**区别**:  

* lastChild在标准和ie9下会获取到空白文本节点  

##### previousSibling或者previousElementSibling:获取指定元素的上一个兄弟节点  
##### nextSibling/或者nextElementSibling:获取指定元素的下一个兄弟节点  
**区别**:  

* previousSibling和nextSibling在标准和ie9下会获取到空白文本节点  

***
##### parentNode:获取指定元素的父节点  
##### offsetparent:获取离指定元素最近的具有定位属性的祖先节点  

**例如**:  
	
	<ul>
		<li id="first">1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
		<li>5</li>
	</ul>
	<div id="one">
		<div id="two">
			<div id="three"></div>
		</div>
	</div>
	console.log(first.ParentNode)//<ul></ul>
	console.log(first.offsetParent)//<ul></ul>
	console.log(three.offsetParent)//<body></body>

**以上两个属性都是把获取到的元素结构整体返回，不仅仅只是返回一个标签**  

***
#### 除了获取DOM节点，我们还能通过js获取设置元素属性，创建并设置节点;  

1. 通过元素.属性名  获取不到非标准属性 ----- `注意`：如果获取的是元素的class的话，在写的时候必须是className
2. getAttribute("属性名")  获取元素属性-----可以获取到元素的自定义属性
3. setAttribute("属性名","属性值")------设置元素属性
4. removeAttribute("属性名")------移除元素属性
5. 创建节点------document.createElement('标签名')
6. appendChild()-------给指定元素追加子节点
7. 在指定元素之前插入元素--------insertBefore(插入的元素,参照元素)
8. removeChild()--------移除子节点
9. replaceChild(替换元素，被替换元素)---------替换子节点
10. cloneNode()---------克隆节点 接受一个布尔值作为参数 当参数为true时，会克隆元素的innerHTML，false不会，默认是false。

***


	

	
