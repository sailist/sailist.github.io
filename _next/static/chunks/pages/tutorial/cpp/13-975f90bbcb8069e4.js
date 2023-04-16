(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3626],{1279:function(s,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/cpp/13",function(){return e(6366)}])},6366:function(s,n,e){"use strict";e.r(n);var l=e(1527),a=e(6828),i=e(4579);function c(s){let n=Object.assign({h1:"h1",ul:"ul",li:"li",p:"p",pre:"pre",code:"code",span:"span"},(0,i.ah)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{children:"区分以下命名"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"函数指针，指针函数"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"函数指针首先是个指针，其次是函数类型；指针函数首先是个函数，返回值是指针类型"}),"\n",(0,l.jsx)(n.pre,{"data-language":"c++","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"c++","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int (*f()); // 函数指针"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int* f(); // 指针函数"})})]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"常量指针，指针常量"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"常量指针首先是个指针，这个指针指向了一个常量（指针地址可以改，内存值是常量不能改）；指针常量首先是个常量，其次这个常量类型是个指针（指针地址是常量，初始化不为空，指针指向的内存值可以改）"}),"\n",(0,l.jsx)(n.pre,{"data-language":"c++","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"c++","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 常量指针"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"const int *pa;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int const *pb;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 指针常量"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int * const p = pa;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 指向常量的常量指针"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"const int * const pc = pa;"})})]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"数组指针，指针数组"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"数组指针首先是个指针，这个指针指向的类型是数组；指针数组首先是个数组，数组的类型是指针类型"}),"\n",(0,l.jsx)(n.pre,{"data-language":"c++","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"c++","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int arr[5][5];"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 数组指针，注意运算优先级"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int (*pa)[5][5] = &arr;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 指针数组"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int * pb[5]; // == (int*) pb[5];"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"常量引用，引用常量"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"常量引用首先是个引用，引用的值是个常量（变量不能更改），可以在函数参数显示声明入参的不可更改属性；引用常量不存在；"}),"\n",(0,l.jsx)(n.pre,{"data-language":"c++","data-theme":"default",children:(0,l.jsxs)(n.code,{"data-language":"c++","data-theme":"default",children:[(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int i = 42;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// r 作为常量不能更改"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"const int &r = 42;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int const &r = i;"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"// 编译错误"})}),"\n",(0,l.jsx)(n.span,{className:"line",children:(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"int &const r;"})})]})})]})}e(3366),n.default=(0,a.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),s.components);return n?(0,l.jsx)(n,{...s,children:(0,l.jsx)(c,{...s})}):c(s)},pageOpts:{filePath:"pages/tutorial/cpp/13.md",route:"/tutorial/cpp/13",frontMatter:{authors:"sailist",date:"2022-11-10",description:"",draft:!1,title:"总结与辨析"},headings:[{depth:1,value:"区分以下命名",id:"区分以下命名"}],title:"总结与辨析"},pageNextRoute:"/tutorial/cpp/13"})}},function(s){s.O(0,[6828,9774,2888,179],function(){return s(s.s=1279)}),_N_E=s.O()}]);