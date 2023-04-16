(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4258],{1705:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/operating-system/14",function(){return i(6081)}])},6081:function(n,e,i){"use strict";i.r(e);var l=i(1527),s=i(6828),r=i(4579);function h(n){let e=Object.assign({h1:"h1",p:"p",img:"img",blockquote:"blockquote",ul:"ul",li:"li",h2:"h2",strong:"strong",a:"a"},(0,r.ah)(),n.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"文件"}),"\n",(0,l.jsx)(e.p,{children:"一个完整的文件数据包含元数据和数据体，其中元数据保存在目录结构中（目录结构保存在外存上）。其中，文件的元数据保存了文件的位置和大小，用来获取数据的起始位置和文件占据的空间长度（从而获得该文件在内存中的边界）。此外，元数据还描述了类型、标识符、名称、保护（权限控制）、时间等信息。"}),"\n",(0,l.jsx)(e.p,{children:"文件的元数据在操作系统中也被叫做文件控制块(FCB, file control block)，它一般包括以下信息："}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"/images2022-09-27-10-12-25.png",alt:""})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"和 PCB 只驻留在内存中不同，FCB 和文件数据一同存储在外存中。但在对文件进行操作时，操作系统会把相应的目录信息读入内存（并更新），最后写回磁盘（如有更新）。"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"/images2022-09-27-10-15-44.png",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"文件指针"}),"\n",(0,l.jsx)(e.li,{children:"文件打开计数器"}),"\n",(0,l.jsx)(e.li,{children:"文件磁盘位置"}),"\n",(0,l.jsx)(e.li,{children:"访问权限"}),"\n",(0,l.jsx)(e.li,{children:"..."}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"文件需要支持的接口",children:"文件需要支持的接口"}),"\n",(0,l.jsx)(e.p,{children:"文件属于抽象数据类型。"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"创建(touch)"}),"\n",(0,l.jsx)(e.li,{children:"IO(read/write)"}),"\n",(0,l.jsx)(e.li,{children:"重定位(seek)"}),"\n",(0,l.jsx)(e.li,{children:"删除(rm)"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{children:"目录"}),"\n",(0,l.jsx)(e.h2,{id:"目录结构需要支持的接口",children:"目录结构需要支持的接口"}),"\n",(0,l.jsx)(e.p,{children:"需要支持对目录和文件的："}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"搜索"}),"\n",(0,l.jsx)(e.li,{children:"创建"}),"\n",(0,l.jsx)(e.li,{children:"删除"}),"\n",(0,l.jsx)(e.li,{children:"遍历"}),"\n",(0,l.jsx)(e.li,{children:"重命名"}),"\n",(0,l.jsx)(e.li,{children:"状态跟踪（当文件产生变化时）"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"硬链接不能链接目录的原因",children:"硬链接不能链接目录的原因"}),"\n",(0,l.jsxs)(e.p,{children:["硬链接为目录时，",(0,l.jsx)(e.strong,{children:"有可能"}),"出现环型结构，目录树中会产生带环的图结构。"]}),"\n",(0,l.jsx)(e.p,{children:"带环的图结构无论是在搜索时，还是在删除时，都需要额外的处理，否则就容易导致无限循环或者无法删除。因此简单的做法是直接不允许建立目录上的硬链接。"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"硬链接到文件只会构建出一个无环图"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{children:"文件系统"}),"\n",(0,l.jsx)(e.h2,{id:"虚拟文件系统vfs",children:"虚拟文件系统（VFS）"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"/images2022-09-27-10-26-09.png",alt:""})}),"\n",(0,l.jsx)(e.h1,{children:"文件描述符"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"/images2022-11-06-21-28-11.png",alt:""})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[ ]"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{children:"容灾"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[ ]"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{children:"RAID"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"[ ]"}),"\n"]}),"\n",(0,l.jsx)(e.h1,{children:"Reference"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"http://c.biancheng.net/view/3066.html",children:"http://c.biancheng.net/view/3066.html"})}),"\n"]})]})}i(3366),e.default=(0,s.j)({MDXContent:function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),n.components);return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)},pageOpts:{filePath:"pages/tutorial/operating-system/14.md",route:"/tutorial/operating-system/14",frontMatter:{authors:"sailist",date:"2022-11-06",description:"",draft:!1,title:"6.存储管理"},headings:[{depth:1,value:"文件",id:"文件"},{depth:2,value:"文件需要支持的接口",id:"文件需要支持的接口"},{depth:1,value:"目录",id:"目录"},{depth:2,value:"目录结构需要支持的接口",id:"目录结构需要支持的接口"},{depth:2,value:"硬链接不能链接目录的原因",id:"硬链接不能链接目录的原因"},{depth:1,value:"文件系统",id:"文件系统"},{depth:2,value:"虚拟文件系统（VFS）",id:"虚拟文件系统vfs"},{depth:1,value:"文件描述符",id:"文件描述符"},{depth:1,value:"容灾",id:"容灾"},{depth:1,value:"RAID",id:"raid"},{depth:1,value:"Reference",id:"reference"}],title:"6.存储管理"},pageNextRoute:"/tutorial/operating-system/14"})}},function(n){n.O(0,[6828,9774,2888,179],function(){return n(n.s=1705)}),_N_E=n.O()}]);