(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6298],{2767:function(s,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/algorithm/category/others/7",function(){return n(7515)}])},7515:function(s,o,n){"use strict";n.r(o);var r=n(1527),e=n(6828),l=n(4579);function i(s){let o=Object.assign({h2:"h2",a:"a",p:"p",pre:"pre",code:"code",span:"span"},(0,l.ah)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.h2,{id:"6248-统计中位数为-k-的子数组",children:(0,r.jsx)(o.a,{href:"https://leetcode.cn/problems/count-subarrays-with-median-k/",children:"6248. 统计中位数为 K 的子数组"})}),"\n",(0,r.jsx)(o.p,{children:"K 是中位数，要求比 K 大的数和比 K 小的数相等或插值为 1"}),"\n",(0,r.jsx)(o.p,{children:"容易理解的思路：先考虑单边有效的情况，再考虑双边有效的情况"}),"\n",(0,r.jsx)(o.pre,{"data-language":"python","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"python","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Solution"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"countSubarrays"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" List"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"],"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"k"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        index "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"index"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(k)"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        n "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"len"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(nums)"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 自身"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        lmem "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 右侧的不匹配的差值"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        rmem "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Counter"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"()"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 左侧不匹配的差值"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"range"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(index "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:", n):"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"i"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            lmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"c"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"reversed"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"range"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(index)):"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"i"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            rmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"c"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" rmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" rmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 单边有效"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" rmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"items"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"():"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 双边有效"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"k"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" lmem"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"*"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ans"})]})]})}),"\n",(0,r.jsx)(o.p,{children:"简化版本"}),"\n",(0,r.jsx)(o.pre,{"data-language":"python","data-theme":"default",children:(0,r.jsxs)(o.code,{"data-language":"python","data-theme":"default",children:[(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"class"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"Solution"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"def"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"countSubarrays"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"self"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" List"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"],"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-parameter)"},children:"k"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"->"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:":"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        pos "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"."}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"index"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(k)"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        cnt "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"defaultdict"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"("}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"int"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:")"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 自身"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 右侧有效"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"range"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(pos "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"len"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(nums)):"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"i"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:">"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            cnt"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"c"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# i=pos 的时候 c 是 0，直接加到答案中，这样下面不是大于就是小于"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"0"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"for"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" i "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"in"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-function)"},children:"range"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"(pos "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:", "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"):"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# == reversed(range(index))"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" nums"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"i"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"<"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" k "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"else"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"-"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-comment)"},children:"# 注意这里和上面的条件是相反的"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"            ans "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+="}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"c"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" cnt"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"["}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"c "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"+"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-constant)"},children:"1"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-punctuation)"},children:"]"})]}),"\n",(0,r.jsxs)(o.span,{className:"line",children:[(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(o.span,{style:{color:"var(--shiki-color-text)"},children:" ans"})]}),"\n",(0,r.jsx)(o.span,{className:"line",children:" "})]})})]})}n(3366),o.default=(0,e.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:o}=Object.assign({},(0,l.ah)(),s.components);return o?(0,r.jsx)(o,{...s,children:(0,r.jsx)(i,{...s})}):i(s)},pageOpts:{filePath:"pages/tutorial/algorithm/category/others/7.md",route:"/tutorial/algorithm/category/others/7",frontMatter:{authors:"sailist",date:"2022-11-27",description:"",draft:!1,title:"子数组"},headings:[{depth:2,value:"6248. 统计中位数为 K 的子数组",id:"6248-统计中位数为-k-的子数组"}],title:"子数组"},pageNextRoute:"/tutorial/algorithm/category/others/7"})}},function(s){s.O(0,[6828,9774,2888,179],function(){return s(s.s=2767)}),_N_E=s.O()}]);