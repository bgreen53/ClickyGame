(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=adventure-calm-clouds-dawn-414171.jpg&fm=jpg"},{"id":2,"image":"https://images.pexels.com/photos/1482189/pexels-photo-1482189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":3,"image":"https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":4,"image":"https://images.pexels.com/photos/917494/pexels-photo-917494.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":5,"image":"https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":6,"image":"https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":7,"image":"https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":8,"image":"https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},{"id":9,"image":"https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":10,"image":"https://images.pexels.com/photos/258109/pexels-photo-258109.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":11,"image":"https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{"id":12,"image":"https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}]')},,,function(e,t,s){e.exports=s(18)},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var o=s(0),a=s.n(o),c=s(2),i=s.n(c),r=(s(13),s(3)),n=s(4),p=s(7),m=s(6);s(14),s(15);var l=function(e){return a.a.createElement("div",{className:"card",onClick:function(){e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{class:"img-card-top",id:"imgCard",alt:"test",src:e.image})))};s(16);var g=function(e){return a.a.createElement("div",{className:"wrapper"},e.children)};s(17);var h=function(e){return a.a.createElement("h1",null,e.children)},d=s(5),u=function(e){Object(p.a)(s,e);var t=Object(m.a)(s);function s(e){var o;return Object(r.a)(this,s),(o=t.call(this,e)).handleClick=function(e){var t=o.state.images.map((function(t){return e===t.id&&(void 0===t.clicked?(o.setState({score:o.state.score+1}),t.clicked=!0,o.state.score>=o.state.topScore&&o.setState({topScore:o.state.topScore+1})):o.setState({score:0})),t}));t=t.sort((function(){return Math.random()-.5})),0===o.state.score&&(t=t.map((function(e){return e.clicked=void 0,e}))),o.setState({images:t})},o.state={images:d,score:0,topScore:0},o}return Object(n.a)(s,[{key:"render",value:function(){var e=this;return a.a.createElement(g,null,a.a.createElement(h,null,"Clicky Game | Score: ",this.state.score," | TopScore: ",this.state.topScore," "),a.a.createElement("div",{className:"row"},this.state.images.map((function(t){return a.a.createElement("div",{className:"col-sm-3"},a.a.createElement(l,{handleClick:e.handleClick,image:t.image,id:t.id}))}))))}}]),s}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6d6a0723.chunk.js.map