(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/hmm.929e2e31.png"},24:function(e,t,n){e.exports=n(37)},29:function(e,t,n){},30:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),s=(n(29),n(8)),l=n(9),o=n(11),u=n(10),m=n(12),h=n(5),p=(n(30),function(e){var t=e.series;return r.a.createElement("li",null,t.show.name)}),f=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"series-list"},e.list.map(function(e){return r.a.createElement(p,{series:e,key:e.show.id})})))},E=n(21),v=n.n(E),d=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:v.a,alt:"hmm"}))},g=function(e){return r.a.createElement("p",{className:"App-intro"},e.message)},w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={series:[],seriesName:"",isFetching:!1},n.onSeriesInputChange=function(e){n.setState({seriesName:e.target.value,isFetching:!0}),fetch("http://api.tvmaze.com/search/shows?q=".concat(e.target.value)).then(function(e){return e.json()}).then(function(e){return n.setState({series:e,isFetching:!1})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.series,n=e.seriesName,a=e.isFetching;return r.a.createElement("div",null,r.a.createElement(g,{message:"Here the most series you love"}),r.a.createElement("div",null,r.a.createElement("input",{value:n,type:"text",onChange:this.onSeriesInputChange})),!a&&0===t.length&&""===n.trim()&&r.a.createElement("p",null,"Please enter series name into the input"),!a&&0===t.length&&""!==n.trim()&&r.a.createElement("p",null,"No TV series have been found"),a&&r.a.createElement(d,null),!a&&r.a.createElement(f,{list:this.state.series}))}}]),t}(a.Component),b=function(e){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:w}))},j=(n(35),n(36),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"TV Series App")),r.a.createElement(b,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=n(14);c.a.render(r.a.createElement(y.a,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.93f73c43.chunk.js.map