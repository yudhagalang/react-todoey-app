(this["webpackJsonptodoey-app"]=this["webpackJsonptodoey-app"]||[]).push([[0],{18:function(e,t,o){e.exports=o(41)},40:function(e,t,o){},41:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(17),c=o.n(r),d=o(7),l=o(2),i=o(3),s=o(4),p=o(5),u=function(e){Object(p.a)(o,e);var t=Object(s.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"componentWillUnmount",value:function(){alert("An Item about to be deleted!")}},{key:"render",value:function(){var e=this,t=this.props.todo,o=t.completed,n=t.id,r=t.title;return a.a.createElement("li",{className:"todo-item"},a.a.createElement("input",{type:"checkbox",checked:o,onChange:function(){return e.props.handleChangeProps(n)}}),a.a.createElement("button",{onClick:function(){return e.props.deleteTodoProps(n)}},"Delete"),a.a.createElement("span",{style:o?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r))}}]),o}(a.a.Component),h=function(e){Object(p.a)(o,e);var t=Object(s.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.todos.map((function(t){return a.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps})})))}}]),o}(a.a.Component),m=function(e){Object(p.a)(o,e);var t=Object(s.a)(o);function o(){return Object(l.a)(this,o),t.apply(this,arguments)}return Object(i.a)(o,[{key:"componentDidUpdate",value:function(e,t){var o="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")";e.headerSpan!==this.props.headerSpan&&(document.getElementById("inH1").innerHTML="clicked",document.getElementById("inH1").style.color=o)}},{key:"render",value:function(){return a.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},a.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todoey App ",a.a.createElement("span",{id:"inH1"})),a.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-doeys item(s) through the input field"))}}]),o}(a.a.Component),f=function(){return console.log(Object(n.useState)("hello")),a.a.createElement("div",null)},y=o(6),b=o.n(y),j=function(e){Object(p.a)(o,e);var t=Object(s.a)(o);function o(){var e;Object(l.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={todos:[],show:!1},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e})),show:!e.state.show})},e.delTodo=function(t){b.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then((function(o){return e.setState({todos:Object(d.a)(e.state.todos.filter((function(e){return e.id!==t})))})}))},e.addTodoItem=function(t){b.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then((function(t){return e.setState({todos:[].concat(Object(d.a)(e.state.todos),[t.data])})}))},e}return Object(i.a)(o,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(t){return e.setState({todos:t.data})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement(m,{headerSpan:this.state.show}),a.a.createElement(f,{addTodoProps:this.addTodoItem}),a.a.createElement(h,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),o}(a.a.Component);o(40);c.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.13256b04.chunk.js.map