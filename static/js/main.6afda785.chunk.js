(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,s){e.exports={statsList:"Statistics_statsList__26W4x",statsItem:"Statistics_statsItem__N5Jpk"}},,,,,,,,function(e,t,s){},,function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(5),i=s.n(n),r=(s(10),s(3)),j=s(0);function l(e){var t=e.title,s=e.children;return Object(j.jsxs)("section",{className:"section",children:[Object(j.jsx)("h1",{children:t}),s]})}var o=function(e){var t=e.onLeaveFeedback,s=e.options;return Object(j.jsx)("div",{className:"feedbackOptions",children:s.map((function(e,s){return Object(j.jsx)("input",{className:"button",type:"button",name:e,value:e,onClick:t},s)}))})};function b(e){var t=e.message;return Object(j.jsxs)("p",{className:"s.notifyMessage",style:{color:"red",fontSize:24},children:[" ",t]})}var d=s(2),u=s.n(d);function O(e){var t=e.good,s=e.neutral,a=e.bad,c=e.countTotal,n=e.positivePercentage,i=c(),r=n();return 0!==i?Object(j.jsxs)("ul",{className:u.a.statsList,children:[Object(j.jsxs)("li",{className:u.a.statsItem,children:[Object(j.jsx)("span",{children:"Good:"})," ",Object(j.jsx)("span",{children:t})]}),Object(j.jsxs)("li",{className:u.a.statsItem,children:[Object(j.jsx)("span",{children:"Neutral:"})," ",Object(j.jsx)("span",{children:s})]}),Object(j.jsxs)("li",{className:u.a.statsItem,children:[Object(j.jsx)("span",{children:"Bad:"})," ",Object(j.jsx)("span",{children:a})]}),Object(j.jsxs)("li",{className:u.a.statsItem,children:[Object(j.jsx)("span",{children:"Total:"})," ",Object(j.jsx)("span",{children:i})]}),Object(j.jsxs)("li",{className:u.a.statsItem,children:[Object(j.jsx)("span",{children:"Positive Feedback:"})," ",Object(j.jsxs)("span",{children:[r,"%"]})]})]}):Object(j.jsx)(b,{message:"No feedback given"})}s(12);var h=function(){var e=Object(a.useState)(0),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(0),i=Object(r.a)(n,2),b=i[0],d=i[1],u=Object(a.useState)(0),h=Object(r.a)(u,2),x=h[0],p=h[1],m=function(){return s+b+x};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{title:"Please leave feedback",children:Object(j.jsx)(o,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":c(s+1);break;case"neutral":d(b+1);break;case"bad":p(x+1);break;default:return}}})}),Object(j.jsx)(l,{title:"Statistics",children:Object(j.jsx)(O,{className:"statistics",good:s,neutral:b,bad:x,countTotal:m,positivePercentage:function(){return Math.round(s/m()*100)}})})]})};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6afda785.chunk.js.map