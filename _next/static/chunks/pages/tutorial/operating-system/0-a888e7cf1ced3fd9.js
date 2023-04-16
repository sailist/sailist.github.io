(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9178:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/operating-system/0",function(){return n(1113)}])},1113:function(e,s,n){"use strict";n.r(s);var l=n(1527),i=n(6828),r=n(4579);function t(e){let s=Object.assign({h1:"h1",p:"p",img:"img",ul:"ul",li:"li",h2:"h2",blockquote:"blockquote",h3:"h3",pre:"pre",code:"code",span:"span",a:"a"},(0,r.ah)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{children:"计算机组成原理"}),"\n",(0,l.jsxs)(s.p,{children:["现代以存储器为中心的计算机结构：\n",(0,l.jsx)(s.img,{src:"/images2022-09-25-17-44-20.png",alt:""})]}),"\n",(0,l.jsx)(s.p,{children:"原始数据和处理程序通过输入设备输入计算机并存放于存储器中，控制器执行程序指挥运算器从内存中取出数据，进行处理后将结果放入存储器中，然后通过输出设备把存储器中的结果输出。"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"以运算器为中心，所有的数据都要通过运算器中转，因此运算器的中转效率就成为了程序运行的一大瓶颈。"}),"\n",(0,l.jsx)(s.li,{children:"以存储器为中心，多个存储器各司其职，从而缓解了运算器的压力，使 IO 密集型和 CPU 密集型的操作可以同时进行，更大程度的利用了计算机系统。"}),"\n"]}),"\n",(0,l.jsx)(s.h1,{children:"数的表示"}),"\n",(0,l.jsx)(s.p,{children:"定点和浮点表示二进制中小数点的位置是否固定"}),"\n",(0,l.jsx)(s.h2,{id:"定点数整数",children:"定点数（整数）"}),"\n",(0,l.jsx)(s.p,{children:"定点数可以表示小数，但表示时需要有一个定点小数的规范。假设机器字长 8 bits，规定从左至右，第一位为符号位，接着后 5 位表示定点小数的整数部分，后两位表示定点小数的小数部分。"}),"\n",(0,l.jsx)(s.p,{children:"由于对定点小数并无统一的规范，且数值表示的范围和精度有限，所以普通计算机对于小数的表示采用浮点数形式，C/C++ 中也没有定点小数类型，一般使用单精度浮点数 float 和双精度浮点数 double 来表示小数。"}),"\n",(0,l.jsx)(s.h2,{id:"浮点数",children:"浮点数"}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{src:"/images2022-11-06-21-06-22.png",alt:""})}),"\n",(0,l.jsxs)(s.p,{children:["特殊值\n",(0,l.jsx)(s.img,{src:"/images2022-11-06-21-07-43.png",alt:""})]}),"\n",(0,l.jsxs)(s.blockquote,{children:["\n",(0,l.jsx)(s.p,{children:"IEEE754 标准"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"浮点数比较大小的方法",children:"浮点数比较大小的方法"}),"\n",(0,l.jsx)(s.pre,{"data-language":"cpp","data-theme":"default",children:(0,l.jsxs)(s.code,{"data-language":"cpp","data-theme":"default",children:[(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"double"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" EPS "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0.0000001"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"abs"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(a "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b) "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" EPS"})]}),"\n",(0,l.jsx)(s.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(s.span,{className:"line",children:[(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(a "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"||"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" a "}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,l.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" b))"})]})]})}),"\n",(0,l.jsx)(s.h1,{children:"硬件支持"}),"\n",(0,l.jsx)(s.h2,{id:"寄存器",children:"寄存器"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["段寄存器：存放段选择符（Segment Selector）","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"cs：代码段寄存器，指向包含程序指令的段"}),"\n",(0,l.jsx)(s.li,{children:"ss：栈段寄存器，指向包含当前程序栈的段"}),"\n",(0,l.jsx)(s.li,{children:"ds：数据段寄存器，指向包含静态数据或全局数据的段"}),"\n",(0,l.jsx)(s.li,{children:"es、fs、gs：通用段寄存器，可以指向任意的数据段"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.h1,{children:"Reference"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["定点数","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://blog.csdn.net/K346K346/article/details/80704141",children:"https://blog.csdn.net/K346K346/article/details/80704141"})}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["浮点数","\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"https://polarisxu.studygolang.com/posts/basic/diagram-float-point/",children:"https://polarisxu.studygolang.com/posts/basic/diagram-float-point/"})}),"\n",(0,l.jsx)(s.li,{children:(0,l.jsx)(s.a,{href:"http://kaito-kidd.com/2018/08/08/computer-system-float-point/",children:"http://kaito-kidd.com/2018/08/08/computer-system-float-point/"})}),"\n"]}),"\n"]}),"\n"]})]})}n(3366),s.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(t,{...e})}):t(e)},pageOpts:{filePath:"pages/tutorial/operating-system/0.md",route:"/tutorial/operating-system/0",frontMatter:{authors:"sailist",date:"2022-11-16",description:"",draft:!1,title:"0.计算机组成原理"},headings:[{depth:1,value:"计算机组成原理",id:"计算机组成原理"},{depth:1,value:"数的表示",id:"数的表示"},{depth:2,value:"定点数（整数）",id:"定点数整数"},{depth:2,value:"浮点数",id:"浮点数"},{depth:3,value:"浮点数比较大小的方法",id:"浮点数比较大小的方法"},{depth:1,value:"硬件支持",id:"硬件支持"},{depth:2,value:"寄存器",id:"寄存器"},{depth:1,value:"Reference",id:"reference"}],title:"0.计算机组成原理"},pageNextRoute:"/tutorial/operating-system/0"})}},function(e){e.O(0,[6828,9774,2888,179],function(){return e(e.s=9178)}),_N_E=e.O()}]);