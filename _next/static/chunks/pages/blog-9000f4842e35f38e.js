(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{9108:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(9938)}])},9938:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return f},default:function(){return j},extractRelevantTags:function(){return p}});var r=t(1527),s=t(6828),l=t(4579);t(3366);var a=t(1240),i=t(5453),c=t.n(i),o=t(8290),u=t(6742);let d=e=>{let{articles:n,className:t}=e;return(0,r.jsx)("div",{className:(0,o.Z)("my-12 flex flex-wrap justify-center gap-x-7 gap-y-10",t),children:n.map(e=>(0,r.jsxs)("div",{className:"w-full post-item",children:[(0,r.jsx)("h2",{children:(0,r.jsx)(c(),{href:e.link,passHref:!0,legacyBehavior:!0,children:(0,r.jsx)("a",{className:"!nx-no-underline",children:e.title})})}),e.description&&(0,r.jsx)("p",{className:"nx-mb-2 nx-text-gray-400",children:e.description}),e.date&&(0,r.jsx)("div",{className:"mt-auto text-xs",children:(0,r.jsxs)("span",{className:"dark:text-gray-500",children:[(0,r.jsx)("span",{className:"select-none",children:" • "}),(0,u.Z)(new Date(e.date),"LLL do y")]})})]},e.link))})};var x=t(9089),f=!0;function p(e){let n=e.flatMap(e=>e.tags||[]),t=Object.create(null);for(let r of n)t[r]=null==t[r]?0:t[r],t[r]+=1;let s=Object.entries(t).sort((e,n)=>n[1]-e[1]).slice(0,10);return s.every(e=>{let[n]=e;return"codegen"!==n})&&s.unshift(["codegen",0]),s.every(e=>{let[n]=e;return"envelop"!==n})&&s.unshift(["envelop",0]),s.slice(0,10)}let h=function(){let e=Object.assign({div:"div"},(0,l.ah)()),n=(0,a.useRouter)(),{slug:t}=n.query,{articles:s,tagFilter:i}=(0,x.sC)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(e.div,{className:"container max-w-[1200px]",children:(0,r.jsx)(d,{articles:s})})})};function g(e){return(0,r.jsx)(r.Fragment,{})}var j=(0,s.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(g,{...e})})},pageOpts:{filePath:"pages/blog.mdx",route:"/blog",frontMatter:{title:"Blog",description:"Announcements about our Open-Source projects",skipSync:!0},headings:[],title:"Blog"},pageNextRoute:"/blog"})}},function(e){e.O(0,[6828,6742,9774,2888,179],function(){return e(e.s=9108)}),_N_E=e.O()}]);