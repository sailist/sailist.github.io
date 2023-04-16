(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9196],{3906:function(s,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/algorithm/category/python-grammer/1",function(){return r(7038)}])},7038:function(s,e,r){"use strict";r.r(e);var n=r(1527),o=r(6828),t=r(4579);function l(s){let e=Object.assign({h2:"h2",a:"a",pre:"pre",code:"code",span:"span"},(0,t.ah)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"1710-卡车上的最大单元数",children:(0,n.jsx)(e.a,{href:"https://leetcode.cn/problems/maximum-units-on-a-truck/",children:"1710. 卡车上的最大单元数"})}),"\n",(0,n.jsx)(e.pre,{"data-language":"python","data-theme":"default",children:(0,n.jsxs)(e.code,{"data-language":"python","data-theme":"default",children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"Solution"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"maximumUnits"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"boxTypes"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" List"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"List"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]],"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"truckSize"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        boxTypes "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"sorted"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(boxTypes,key"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=lambda"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"x"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":x["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"],reverse"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"True"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        ans "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"c "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" boxTypes"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            cnt "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"min"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(truckSize,cnt)"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            ans "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" cnt "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" c"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            truckSize "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"-="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" truckSize "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"break"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ans"})]})]})})]})}r(3366),e.default=(0,o.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,t.ah)(),s.components);return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(l,{...s})}):l(s)},pageOpts:{filePath:"pages/tutorial/algorithm/category/python-grammer/1.md",route:"/tutorial/algorithm/category/python-grammer/1",frontMatter:{authors:"sailist",date:"2022-11-15",description:"",draft:!1,title:"sorted"},headings:[{depth:2,value:"1710. 卡车上的最大单元数",id:"1710-卡车上的最大单元数"}],title:"sorted"},pageNextRoute:"/tutorial/algorithm/category/python-grammer/1"})}},function(s){s.O(0,[6828,9774,2888,179],function(){return s(s.s=3906)}),_N_E=s.O()}]);