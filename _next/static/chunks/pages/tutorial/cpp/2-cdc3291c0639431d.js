(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4952],{7960:function(s,e,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/cpp/2",function(){return l(1845)}])},1845:function(s,e,l){"use strict";l.r(e);var n=l(1527),i=l(6828),r=l(4579);function a(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",blockquote:"blockquote"},(0,r.ah)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{children:"一元操作符"}),"\n",(0,n.jsx)(e.h1,{children:"二元操作符"}),"\n",(0,n.jsx)(e.h1,{children:"三元操作符"}),"\n",(0,n.jsx)(e.h1,{children:"类型转换"}),"\n",(0,n.jsx)(e.p,{children:"在 C++中，为实现不同类型间的转换，C++定义了四个类型转换操作符 static_cast, const_cast, dynamic_cast, 和 reinterpret_cast。"}),"\n",(0,n.jsx)(e.h2,{id:"static_cast",children:"static_cast"}),"\n",(0,n.jsx)(e.p,{children:"静态类型转换。编译器在编译期处理；用于基本数据类型之间的转换。"}),"\n",(0,n.jsx)(e.pre,{"data-language":"c++","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"c++","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int a, b;"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"double result = static_cast<double>(a)/b;"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"const_cast",children:"const_cast"}),"\n",(0,n.jsx)(e.p,{children:"常量类型转换。编译器在编译期处理。用来改变表达式中的常量性(constness)或易变性(volatileness)。如："}),"\n",(0,n.jsx)(e.pre,{"data-language":"c++","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"c++","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int num;"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"const int *cpNum = &num;"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int *pNum = cpNum;            //error:cannot convert from 'const int *' to 'int *'"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int *pNum = (int *)cpNum;                 //旧式C"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int *pNum = const_cast<int *>(cpNum);     //新式C++ const_cast移除常量性"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"dynamic_cast",children:"dynamic_cast"}),"\n",(0,n.jsx)(e.p,{children:"动态类型转换，运行期间确定类型。用于安全地沿着类的继承关系向下进行类型转换。这就是说，你能用 dynamic_cast 把指向基类的指针或引用转换成指向其派生类或其兄弟类的指针或引用，而且你能知道转换是否成功。失败的转换将返回空指针（当对指针进行类型转换时）或者抛出异常（当对引用进行类型转换时）"}),"\n",(0,n.jsx)(e.pre,{"data-language":"c++","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"c++","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"Widget *pw;"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"..."})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"update(dynamic_cast<SpecialWidget*>(pw));"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 正确，传递给 update 函数一个指针"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 是指向变量类型为 SpecialWidget 的 pw 的指针"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 如果 pw 确实指向一个对象,"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 否则传递过去的将使空指针。"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"void updateViaRef(SpecialWidget& rsw);"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"updateViaRef(dynamic_cast<SpecialWidget&>(*pw));"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											//正确。 传递给 updateViaRef 函数"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// SpecialWidget pw 指针，如果 pw"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 确实指向了某个对象"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"											// 否则将抛出异常"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,n.jsx)(e.h2,{id:"reinterpret_cast",children:"reinterpret_cast"}),"\n",(0,n.jsx)(e.p,{children:"重新解释类型转换。编译器在编译期处理，主要用于函数指针的转换。"}),"\n",(0,n.jsx)(e.pre,{"data-language":"c++","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"c++","data-theme":"default",children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"typedef void (*FuncPtr)();  // FuncPtr 是一个指向函数的指针，该函数没有参数"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"							// 返回值类型为 void"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"FuncPtr funcPtrArray[10];   // funcPtrArray 是一个能容纳"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"							// 10 个 FuncPtrs 指针的数组"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"int doSomething();"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"}})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"funcPtrArray[0] = &doSomething; // 错误！类型不匹配"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"// reinterpret_cast 可以让你迫使编译器以你的方法去看待它们："})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"funcPtrArray[0] = reinterpret_cast<FuncPtr>(&doSomething);"})})]})}),"\n",(0,n.jsx)(e.h1,{children:"变量描述符"}),"\n",(0,n.jsx)(e.h2,{id:"const",children:"const"}),"\n",(0,n.jsx)(e.p,{children:"常量"}),"\n",(0,n.jsx)(e.h2,{id:"static",children:"static"}),"\n",(0,n.jsx)(e.p,{children:"在 C 中："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["定义全局静态变量和静态函数（仅能在定义的文件内使用）","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"inline 函数默认为 static 类型"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.li,{children:"定义局部静态变量（局部变量全局化）"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"在 C++ 中："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"定义类的静态数据成员"}),"\n",(0,n.jsx)(e.li,{children:"定义类的静态函数成员"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"类的静态数据成员需要在类外初始化后才能被使用（否则会报错）："}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"A"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"static"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" A"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"m "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})]})}),"\n",(0,n.jsx)(e.p,{children:"类的静态函数成员可以同时被类和类实例调用："}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"A"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"static"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m;"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"static"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setM"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      cout "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" m"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"++"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"<<"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" endl;"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" A"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"m "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"void"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"main"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(){"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   A a;"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"a"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setM"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   A"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"::"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"setM"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"extern",children:"extern"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"用于变量的存在声明，防止重复定义错误，保证编译阶段不报错（并在链接阶段从目标代码中寻找声明的函数/变量绑定）。"}),"\n",(0,n.jsx)(e.li,{children:"在 C++ 中还用于引入 C 语言"}),"\n"]}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"extern"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"C"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"#include"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"CAdd.h"'})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsx)(e.h2,{id:"volatile",children:"volatile"}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"volatile 关键词在 ? 版本后已被弃用，编译不会报错，但已经失去了其原有的作用"}),"\n"]}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"cpp","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"while"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(i"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"){"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"   // do something;"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,n.jsxs)(e.p,{children:["上述代码在编译时，因为编译器无法感知到 i 在程序内的变化，因此可能会优化 ",(0,n.jsx)(e.code,{children:"i==2"})," 逻辑为 ",(0,n.jsx)(e.code,{children:"true"}),"，程序陷入死循环。但 i 可能在该进程的其他线程被改变。"]}),"\n",(0,n.jsxs)(e.p,{children:["此时可以使用 ",(0,n.jsx)(e.code,{children:"volatile"})," 关键字来声明 ",(0,n.jsx)(e.code,{children:"i"})," 变量在内存中是不稳定的，可能通过不在程序内明确指定的方式改变，从而避免编译器优化："]}),"\n",(0,n.jsx)(e.pre,{"data-language":"cpp","data-theme":"default",children:(0,n.jsx)(e.code,{"data-language":"cpp","data-theme":"default",children:(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"volatile"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"2"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,n.jsx)(e.p,{children:"volatile 常用于："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"并行设备硬件寄存器"}),"\n",(0,n.jsx)(e.li,{children:"中断程序自服务会访问到的非自动变量"}),"\n",(0,n.jsx)(e.li,{children:"多线程间的共享变量"}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"volatile 可以和 const 关键字连用，因为 const 只能保证变量在程序内只读，而不保证其在内存中的值不被其他程序改变。"})]})}l(3366),e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.ah)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(a,{...s})}):a(s)},pageOpts:{filePath:"pages/tutorial/cpp/2.md",route:"/tutorial/cpp/2",frontMatter:{authors:"sailist",date:"2022-11-10",description:"",draft:!1,title:"1.数据的操作"},headings:[{depth:1,value:"一元操作符",id:"一元操作符"},{depth:1,value:"二元操作符",id:"二元操作符"},{depth:1,value:"三元操作符",id:"三元操作符"},{depth:1,value:"类型转换",id:"类型转换"},{depth:2,value:"static_cast",id:"static_cast"},{depth:2,value:"const_cast",id:"const_cast"},{depth:2,value:"dynamic_cast",id:"dynamic_cast"},{depth:2,value:"reinterpret_cast",id:"reinterpret_cast"},{depth:1,value:"变量描述符",id:"变量描述符"},{depth:2,value:"const",id:"const"},{depth:2,value:"static",id:"static"},{depth:2,value:"extern",id:"extern"},{depth:2,value:"volatile",id:"volatile"}],title:"1.数据的操作"},pageNextRoute:"/tutorial/cpp/2"})}},function(s){s.O(0,[6828,9774,2888,179],function(){return s(s.s=7960)}),_N_E=s.O()}]);