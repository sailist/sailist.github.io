(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8965],{5686:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/computer-network/2",function(){return i(7459)}])},7459:function(e,n,i){"use strict";i.r(n);var s=i(1527),l=i(6828),r=i(4579);function d(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",img:"img",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"IP 协议"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc791",children:"RFC-791"})," 中描述了 IP 协议"]}),"\n",(0,s.jsx)(n.h2,{id:"地址表示",children:"地址表示"}),"\n",(0,s.jsxs)(n.p,{children:["IP 协议用 4 个字节（32 个 bit 位）表示，所以 IP 协议可以表示是地址空间总共有 $2^32$ 个。在表示地址时每个字节转换为 10 进制数字，并用 ",(0,s.jsx)(n.code,{children:"."})," 分开："]}),"\n",(0,s.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,s.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"0.0.0.0"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"192.168.1.1"})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"..."})}),"\n",(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"255.255.255.255"})})]})}),"\n",(0,s.jsx)(n.h3,{id:"特殊的-ip-地址",children:"特殊的 IP 地址"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"127.0.0.1"}),"： 是本地回环地址，所以网络号是 127 的地址不是网络地址。"]}),"\n",(0,s.jsx)(n.li,{children:"主机号全 0：表示该主机所在的网络地址"}),"\n",(0,s.jsx)(n.li,{children:"主机号全 1：表示该网络上的所有主机（用于广播）"}),"\n",(0,s.jsx)(n.li,{children:"10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/24：用于局域网内通信"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"255.255.255.255"}),"：在本网络下进行广播（路由器不转发）"]}),"\n",(0,s.jsx)(n.li,{children:"网络号全 0，主机号全 1：本网络下的主机"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images2022-10-05-15-08-14.png",alt:""})}),"\n",(0,s.jsxs)(n.p,{children:["其他被占用的 IP 地址可以参考",(0,s.jsx)(n.a,{href:"https://zh.wikipedia.org/zh-hk/%E4%BF%9D%E7%95%99IP%E5%9C%B0%E5%9D%80",children:"wiki-保留 IP 地址"})]}),"\n",(0,s.jsx)(n.h3,{id:"ip-地址指派范围",children:"IP 地址指派范围"}),"\n",(0,s.jsx)(n.p,{children:"在排除了特殊 IP 地址后，IP 地址的指派范围如下："}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images2022-10-05-15-07-15.png",alt:""})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"主机号数量都为相应的主机位 -2，因为要排除全 0 和全 1 的主机地址"}),"\n",(0,s.jsxs)(n.li,{children:["网络号要排除全零、全 1、",(0,s.jsx)(n.code,{children:"127.0.0.0"}),",",(0,s.jsx)(n.code,{children:"128.0.0.0"}),",",(0,s.jsx)(n.code,{children:"192.0.0.0"}),"，所以 A 类地址的网络号少 2 个（全 0 和 ",(0,s.jsx)(n.code,{children:"127.0.0.0"}),"），B（缺 ",(0,s.jsx)(n.code,{children:"128.0.0.0"}),"） 和 C（缺 ",(0,s.jsx)(n.code,{children:"192.0.0.0"}),"） 的网络号少 1 个"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"子网掩码",children:"子网掩码"}),"\n",(0,s.jsx)(n.p,{children:"子网掩码一般保存在有路由功能的设备的路由表中。子网掩码的功能包括："}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"判断两个 ip 是否处于同一网段"}),"\n",(0,s.jsx)(n.li,{children:"在一个主干网络内部划分多个子网络（每个网络可以看成是单独的局域网）"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"因为每个子网都避免了使用主机号全 0 和全 1 作为主机 ip，所以划分子网后能连接在网络上的主机总数要小于划分前的主机总数。"}),"\n",(0,s.jsx)(n.h2,{id:"ip-编址",children:"IP 编址"}),"\n",(0,s.jsx)(n.p,{children:"IP 编址的目的是为了更方便的将 IP 地址批量分配给机构、企业"}),"\n",(0,s.jsx)(n.h3,{id:"分类的-ip-地址",children:"分类的 IP 地址"}),"\n",(0,s.jsxs)(n.p,{children:["分类的 IP 地址是最基本的编址方法，将 IP 地址表示为 ",(0,s.jsx)(n.code,{children:"<网络号>,<主机号>"}),"。在这种表示下，每一个网络号是唯一的，每个网络号下的主机号可以是不唯一的。因此在机构或者个人申请 IP 地址时，会分配一个互联网范围内唯一的网络号，再由机构/个人给下属的不同设备分配网络号内唯一的主机号。"]}),"\n",(0,s.jsx)(n.p,{children:"根据机构/个人对主机号需求的不同，将 IP 地址分为 ABC 三类地址，再加上用于多播和其他需求的地址，一共有 5 类地址。"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images2022-10-05-11-46-55.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"在上图中，网络号前 n 位被用于表示 IP 地址类型。其中 A-C 分别占 1/2/3 个比特位，D/E 占 4 个比特位。"}),"\n",(0,s.jsx)(n.h3,{id:"无分类编址-cidr",children:"无分类编址 CIDR"}),"\n",(0,s.jsxs)(n.p,{children:["无分类编址方法可以看成是分类编址方法的超集，该方法优化了子网掩码的表示方式，通过",(0,s.jsx)(n.code,{children:"<全地址>/<网络前缀位数>"}),"来表示网络前缀的位数。"]}),"\n",(0,s.jsx)(n.p,{children:"如"}),"\n",(0,s.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"text","data-theme":"default",children:(0,s.jsx)(n.span,{className:"line",children:(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"192.199.170.82/27"})})})}),"\n",(0,s.jsxs)(n.p,{children:["通过 CIDR，可以将多个传统分类地址聚合成一个前缀位数更少的",(0,s.jsx)(n.strong,{children:"超网"}),"，从而大幅度减少路由表项的数量。"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images2022-10-06-18-02-56.png",alt:""})}),"\n",(0,s.jsx)(n.p,{children:"CIDR 也可以通过在子路由器增加前缀位数来划分子网"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"/images2022-10-06-18-04-05.png",alt:""})})]})}i(3366),n.default=(0,l.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)},pageOpts:{filePath:"pages/tutorial/computer-network/2.md",route:"/tutorial/computer-network/2",frontMatter:{authors:"sailist",date:"2022-11-06",description:"",draft:!1,title:"2.1.IP协议"},headings:[{depth:1,value:"IP 协议",id:"ip-协议"},{depth:2,value:"地址表示",id:"地址表示"},{depth:3,value:"特殊的 IP 地址",id:"特殊的-ip-地址"},{depth:3,value:"IP 地址指派范围",id:"ip-地址指派范围"},{depth:2,value:"子网掩码",id:"子网掩码"},{depth:2,value:"IP 编址",id:"ip-编址"},{depth:3,value:"分类的 IP 地址",id:"分类的-ip-地址"},{depth:3,value:"无分类编址 CIDR",id:"无分类编址-cidr"}],title:"2.1.IP协议"},pageNextRoute:"/tutorial/computer-network/2"})}},function(e){e.O(0,[6828,9774,2888,179],function(){return e(e.s=5686)}),_N_E=e.O()}]);