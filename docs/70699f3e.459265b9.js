(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(197)),i=n(198),b={id:"cors",title:"16. CORS \u8de8\u57df",sidebar_label:"16. CORS \u8de8\u57df"},o={unversionedId:"cors",id:"cors",isDocsHomePage:!1,title:"16. CORS \u8de8\u57df",description:"16.1 \u4ec0\u4e48\u662f\u8de8\u57df",source:"@site/docs\\cors.mdx",slug:"/cors",permalink:"/docs/cors",editUrl:"https://gitee.com/monksoul/Furion/tree/master/handbook/docs/cors.mdx",version:"current",lastUpdatedBy:"\u767e\u5c0f\u50e7",lastUpdatedAt:1612020493,sidebar_label:"16. CORS \u8de8\u57df",sidebar:"docs",previous:{title:"15. \u5b89\u5168\u9274\u6743",permalink:"/docs/auth-control"},next:{title:"17. \u89c6\u56fe\u5f15\u64ce",permalink:"/docs/view-engine"}},l=[{value:"16.1 \u4ec0\u4e48\u662f\u8de8\u57df",id:"161-\u4ec0\u4e48\u662f\u8de8\u57df",children:[]},{value:"16.2 \u6709\u8de8\u57df\u884c\u4e3a\u793a\u4f8b",id:"162-\u6709\u8de8\u57df\u884c\u4e3a\u793a\u4f8b",children:[]},{value:"16.3 \u4ec0\u4e48\u662f CORS",id:"163-\u4ec0\u4e48\u662f-cors",children:[]},{value:"16.4 \u5982\u4f55\u4f7f\u7528",id:"164-\u5982\u4f55\u4f7f\u7528",children:[{value:"16.4.1 \u6dfb\u52a0 <code>CORS</code> \u670d\u52a1",id:"1641-\u6dfb\u52a0-cors-\u670d\u52a1",children:[]},{value:"16.4.2 \u914d\u7f6e\u5141\u8bb8\u8de8\u57df\u57df\u540d",id:"1642-\u914d\u7f6e\u5141\u8bb8\u8de8\u57df\u57df\u540d",children:[]}]},{value:"16.5 <code>CorsAccessorSettings</code> \u914d\u7f6e",id:"165-corsaccessorsettings-\u914d\u7f6e",children:[]},{value:"16.6 \u4f7f\u7528 <code>axios</code> \u524d\u7aef\u6ce8\u610f\u4e8b\u9879",id:"166-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"16.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"167-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.a,{mdxType:"JoinGroup"}),Object(c.b)("h2",{id:"161-\u4ec0\u4e48\u662f\u8de8\u57df"},"16.1 \u4ec0\u4e48\u662f\u8de8\u57df"),Object(c.b)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42 ",Object(c.b)("inlineCode",{parentName:"p"},"url")," \u7684\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u4e09\u8005\u4e4b\u95f4\u4efb\u610f\u4e00\u4e2a\u4e0e\u5f53\u524d\u9875\u9762 ",Object(c.b)("inlineCode",{parentName:"p"},"url")," \u4e0d\u540c\u5373\u4e3a\u8de8\u57df\u3002\u90a3\u4e3a\u4ec0\u4e48\u4f1a\u51fa\u73b0\u8de8\u57df\u95ee\u9898\u5462\uff1f"),Object(c.b)("p",null,"\u51fa\u4e8e\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u7b56\u7565\u9650\u5236\u3002\u540c\u6e90\u7b56\u7565\uff08Sameoriginpolicy\uff09\u662f\u4e00\u79cd\u7ea6\u5b9a\uff0c\u5b83\u662f\u6d4f\u89c8\u5668\u6700\u6838\u5fc3\u4e5f\u6700\u57fa\u672c\u7684\u5b89\u5168\u529f\u80fd\uff0c\u5982\u679c\u7f3a\u5c11\u4e86\u540c\u6e90\u7b56\u7565\uff0c\u5219\u6d4f\u89c8\u5668\u7684\u6b63\u5e38\u529f\u80fd\u53ef\u80fd\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u53ef\u4ee5\u8bf4 ",Object(c.b)("inlineCode",{parentName:"p"},"Web")," \u662f\u6784\u5efa\u5728\u540c\u6e90\u7b56\u7565\u57fa\u7840\u4e4b\u4e0a\u7684\uff0c\u6d4f\u89c8\u5668\u53ea\u662f\u9488\u5bf9\u540c\u6e90\u7b56\u7565\u7684\u4e00\u79cd\u5b9e\u73b0\u3002\u540c\u6e90\u7b56\u7565\u4f1a\u963b\u6b62\u4e00\u4e2a\u57df\u7684 javascript \u811a\u672c\u548c\u53e6\u5916\u4e00\u4e2a\u57df\u7684\u5185\u5bb9\u8fdb\u884c\u4ea4\u4e92\u3002\u6240\u8c13\u540c\u6e90\uff08\u5373\u6307\u5728\u540c\u4e00\u4e2a\u57df\uff09\u5c31\u662f\u4e24\u4e2a\u9875\u9762\u5177\u6709\u76f8\u540c\u7684\u534f\u8bae\uff08protocol\uff09\uff0c\u4e3b\u673a\uff08host\uff09\u548c\u7aef\u53e3\u53f7\uff08port\uff09"),Object(c.b)("h2",{id:"162-\u6709\u8de8\u57df\u884c\u4e3a\u793a\u4f8b"},"16.2 \u6709\u8de8\u57df\u884c\u4e3a\u793a\u4f8b"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u5f53\u524d\u9875\u9762 url"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u88ab\u8bf7\u6c42\u9875\u9762 url"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u662f\u5426\u8de8\u57df"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\u539f\u56e0"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro/"}),"http://www.furion.pro/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro/index.html"}),"http://www.furion.pro/index.html")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u540c\u6e90\uff08\u534f\u8bae\u3001\u57df\u540d\u3001\u7aef\u53e3\u53f7\u76f8\u540c\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro/"}),"http://www.furion.pro/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.furion.pro/index.html"}),"https://www.furion.pro/index.html")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8de8\u57df"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u534f\u8bae\u4e0d\u540c\uff08http/https\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro/"}),"http://www.furion.pro/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.baidu.com/"}),"http://www.baidu.com/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8de8\u57df"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u4e3b\u57df\u540d\u4e0d\u540c\uff08chinadot/baidu\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro/"}),"http://www.furion.pro/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://blog.furion.pro/"}),"http://blog.furion.pro/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8de8\u57df"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u5b50\u57df\u540d\u4e0d\u540c\uff08www/blog\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro:8080/"}),"http://www.furion.pro:8080/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"http://www.furion.pro:7001/"}),"http://www.furion.pro:7001/")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u8de8\u57df"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\u7aef\u53e3\u53f7\u4e0d\u540c\uff088080/7001\uff09")))),Object(c.b)("h2",{id:"163-\u4ec0\u4e48\u662f-cors"},"16.3 \u4ec0\u4e48\u662f CORS"),Object(c.b)("p",null,"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab (",Object(c.b)("inlineCode",{parentName:"p"},"CORS"),") \uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u662f\u4e00\u79cd ",Object(c.b)("inlineCode",{parentName:"li"},"W3C")," \u6807\u51c6\uff0c\u53ef\u8ba9\u670d\u52a1\u5668\u653e\u5bbd\u76f8\u540c\u7684\u6e90\u7b56\u7565\u3002"),Object(c.b)("li",{parentName:"ul"},"\u4e0d\u662f\u4e00\u9879\u5b89\u5168\u529f\u80fd\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"CORS")," \u653e\u5bbd ",Object(c.b)("inlineCode",{parentName:"li"},"security"),"\u3002 ",Object(c.b)("inlineCode",{parentName:"li"},"API")," \u4e0d\u80fd\u901a\u8fc7\u5141\u8bb8 ",Object(c.b)("inlineCode",{parentName:"li"},"CORS")," \u6765\u66f4\u5b89\u5168\u3002 \u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.microsoft.com/zh-cn/aspnet/core/security/cors?view=aspnetcore-5.0#how-cors"}),"CORS \u5de5\u4f5c\u539f\u7406"),"\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5141\u8bb8\u670d\u52a1\u5668\u660e\u786e\u5141\u8bb8\u4e00\u4e9b\u8de8\u6e90\u8bf7\u6c42\uff0c\u540c\u65f6\u62d2\u7edd\u5176\u4ed6\u8bf7\u6c42\u3002"),Object(c.b)("li",{parentName:"ul"},"\u6bd4\u65e9\u671f\u7684\u6280\u672f\uff08\u5982 JSONP\uff09\u66f4\u5b89\u5168\u4e14\u66f4\u7075\u6d3b\u3002")),Object(c.b)("h2",{id:"164-\u5982\u4f55\u4f7f\u7528"},"16.4 \u5982\u4f55\u4f7f\u7528"),Object(c.b)("h3",{id:"1641-\u6dfb\u52a0-cors-\u670d\u52a1"},"16.4.1 \u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"h3"},"CORS")," \u670d\u52a1"),Object(c.b)("p",null,"\u542f\u7528\u8de8\u57df ",Object(c.b)("inlineCode",{parentName:"p"},"Cors")," \u652f\u6301\u9996\u5148\u6dfb\u52a0 ",Object(c.b)("inlineCode",{parentName:"p"},"CorsAccessor")," \u670d\u52a1\uff0c\u5982\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs",metastring:"{13,22}","{13,22}":!0}),"using Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\nnamespace Furion.Web.Core\n{\n    [AppStartup(700)]\n    public sealed class FurWebCoreStartup : AppStartup\n    {\n        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddCorsAccessor();\n\n            // ...\n        }\n\n        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n        {\n            //...\n\n            app.UseCorsAccessor();\n\n            // ...\n        }\n    }\n}\n")),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"\u7279\u522b\u6ce8\u610f")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"services.AddCorsAccessor();")," \u9700\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"services.AddControllers()")," \u4e4b\u524d\u6ce8\u518c\u3002"),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"app.UseCorsAccessor();")," \u9700\u5728 ",Object(c.b)("inlineCode",{parentName:"p"},"app.UseRouting();")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"app.UseAuthentication();")," \u4e4b\u95f4\u6ce8\u518c\u3002"))),Object(c.b)("h3",{id:"1642-\u914d\u7f6e\u5141\u8bb8\u8de8\u57df\u57df\u540d"},"16.4.2 \u914d\u7f6e\u5141\u8bb8\u8de8\u57df\u57df\u540d"),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"\u5c0f\u63d0\u9192")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"Furion")," \u5141\u8bb8\u6240\u6709\u57df\u540d\u6765\u6e90\u8bbf\u95ee\uff0c\u4e5f\u5c31\u662f\u65e0\u9700\u914d\u7f6e\u4efb\u4f55\u6765\u6e90\u57df\u540d\uff0c\u53e6\u5916\u524d\u7aef\u4e5f\u9700\u8981\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"withCredentials:false")))),Object(c.b)("p",null,"\u5982\u679c\u9700\u8981\u6307\u5b9a\u7279\u5b9a\u57df\u540d\uff0c\u5219\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u5373\u53ef\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:"{4}","{4}":!0}),'{\n  "CorsAccessorSettings": {\n    "PolicyName": "\u81ea\u5b9a\u4e49\u8de8\u57df\u7b56\u7565\u540d",\n    "WithOrigins": ["http://localhost:4200", "https://furion.pro"]\n  }\n}\n')),Object(c.b)("h2",{id:"165-corsaccessorsettings-\u914d\u7f6e"},"16.5 ",Object(c.b)("inlineCode",{parentName:"h2"},"CorsAccessorSettings")," \u914d\u7f6e"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"CorsAccessorSettings"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"PolicyName"),"\uff1a\u8de8\u57df\u7b56\u7565\u540d\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5fc5\u586b\uff0c\u9ed8\u8ba4 ",Object(c.b)("inlineCode",{parentName:"li"},"FurCorsAccessor")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"WithOrigins"),"\uff1a\u5141\u8bb8\u8de8\u57df\u7684\u57df\u540d\u5217\u8868\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b\uff0c\u9ed8\u8ba4 ",Object(c.b)("inlineCode",{parentName:"li"},'[ "http://localhost:4200" ]')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"WithHeaders"),"\uff1a\u8bf7\u6c42\u8868\u5934\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\u8868\u5934\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"WithExposedHeaders"),"\uff1a\u54cd\u5e94\u6807\u5934\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"WithMethods"),"\uff1a\u8bbe\u7f6e\u8de8\u57df\u5141\u8bb8\u8bf7\u6c42\u8c13\u8bcd\uff0c\u6ca1\u6709\u914d\u7f6e\u5219\u5141\u8bb8\u6240\u6709\uff0c\u5b57\u7b26\u4e32\u6570\u7ec4\u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"AllowCredentials"),"\uff1a\u8de8\u57df\u8bf7\u6c42\u4e2d\u7684\u51ed\u636e\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"bool")," \u7c7b\u578b"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"SetPreflightMaxAge"),"\uff1a\u8bbe\u7f6e\u9884\u68c0\u8fc7\u671f\u65f6\u95f4\uff0c",Object(c.b)("inlineCode",{parentName:"li"},"int")," \u7c7b\u578b")))),Object(c.b)("h2",{id:"166-\u4f7f\u7528-axios-\u524d\u7aef\u6ce8\u610f\u4e8b\u9879"},"16.6 \u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"h2"},"axios")," \u524d\u7aef\u6ce8\u610f\u4e8b\u9879"),Object(c.b)("p",null,"\u7531\u4e8e ",Object(c.b)("inlineCode",{parentName:"p"},"axios")," \u5bf9\u8de8\u57df\u6709\u7279\u5b9a\u7684\u9700\u8981\uff0c\u9700\u8981\u54cd\u5e94\u62a5\u6587\u4e2d\u6dfb\u52a0\u7279\u5b9a ",Object(c.b)("inlineCode",{parentName:"p"},"Header")," \u624d\u80fd\u653e\u884c\uff0c\u5982\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"Access-Control-Expose-Headers: xxxxx"),"\uff0c\u6240\u4ee5\uff0c\u5982\u679c\u524d\u7aef\u4f7f\u7528\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"axios")," \u8bf7\u6c42\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cs"}),'{\n  "CorsAccessorSettings": {\n    "WithExposedHeaders": ["X-Pagination","access-token","x-access-token"]\n  }\n}\n')),Object(c.b)("h2",{id:"167-\u53cd\u9988\u4e0e\u5efa\u8bae"},"16.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Furion/issues/new?issue"}),"Issue"),"\u3002"))),Object(c.b)("hr",null),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"\u4e86\u89e3\u66f4\u591a")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",Object(c.b)("inlineCode",{parentName:"p"},"\u8de8\u57df\u8bf7\u6c42")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/zh-cn/aspnet/core/security/cors?view=aspnetcore-5.0"}),"ASP.NET Core - \u542f\u7528\u8de8\u57df\u8bf7\u6c42")," \u7ae0\u8282\u3002"))))}s.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(21),r=n(196);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,a)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},196:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),O=a,j=s["".concat(i,".").concat(O)]||s[O]||d[O]||c;return n?r.a.createElement(j,b(b({ref:t},l),{},{components:n})):r.a.createElement(j,b({ref:t},l))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),c=n(195);n(55);function i(){const[e,t]=Object(a.useState)(!1);return r.a.createElement("div",{className:"furion-join-group"},e&&r.a.createElement("img",{src:Object(c.a)("img/dotnetchina2.jpg")}),r.a.createElement("button",{onClick:()=>t(!e)},"\u52a0\u5165QQ\u4ea4\u6d41\u7fa4"))}}}]);