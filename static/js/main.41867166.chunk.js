(this.webpackJsonpreactjsapp=this.webpackJsonpreactjsapp||[]).push([[0],{18:function(t,e,n){},35:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(26),s=n.n(c),i=n(8),r=(n(35),n(24)),l=n(21),d=n(9),u=n(10),h=n(12),j=n(11),p=n(3),b=n(44),O=n(30),x=n(27),m=n(28),f=n(2),g=function(){var t=Object(a.useState)(!1),e=Object(O.a)(t,2),n=e[0],o=e[1];return Object(f.jsxs)("nav",{className:"navBar",children:[Object(f.jsx)("button",{onClick:function(){o((function(t){return!t}))},children:n?Object(f.jsx)(x.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(f.jsx)(m.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(f.jsx)("ul",{className:"menuNav ".concat(n?"showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/about",text:"About"}].map((function(t){return Object(f.jsx)("li",{children:Object(f.jsx)(i.c,{to:t.path,activeClassName:"active-link",onClick:function(){o(!1)},exact:!0,children:t.text})},t.id)}))})]})},v=function(){return Object(f.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5.em"},children:Object(f.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1rem",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"Todos"})})},y=n(18),S=n.n(y),C=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={editing:!1},t.handleEditing=function(){t.setState({editing:!0})},t.handleUpdatedDone=function(e){"Enter"===e.key&&t.setState({editing:!1})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e={},n={};this.state.editing?e.display="none":n.display="none";var a=this.props.todo,o=a.completed,c=a.id,s=a.title;return Object(f.jsxs)("li",{className:S.a.item,children:[Object(f.jsxs)("div",{onDoubleClick:this.handleEditing,style:e,children:[Object(f.jsx)("input",{type:"checkbox",className:S.a.checkbox,checked:o,onChange:function(){return t.props.handleChangeProps(c)}}),Object(f.jsx)("button",{onClick:function(){return t.props.deleteTodoProps(c)},children:"Delete"}),Object(f.jsx)("span",{style:o?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:s})]}),Object(f.jsx)("input",{type:"text",style:n,className:S.a.textInput,value:s,onChange:function(e){return t.props.setUpdate(e.target.value,c)},onKeyDown:this.handleUpdatedDone})]})}}]),n}(o.a.Component),k=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)("ul",{children:this.props.todos.map((function(e){return Object(f.jsx)(C,{todo:e,handleChangeProps:t.props.handleChangeProps,deleteTodoProps:t.props.deleteTodoProps,setUpdate:t.props.setUpdate},e.id)}))})}}]),n}(o.a.Component),w=n(17),T=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onChange=function(e){t.setState(Object(w.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.state.title.trim()?(t.props.addTodoProps(t.state.title),t.setState({title:""})):alert("Please write item")},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-container",children:[Object(f.jsx)("input",{type:"text",className:"input-text",placeholder:"Add Todo . . .",name:"title",value:this.state.title,onChange:this.onChange}),Object(f.jsx)("button",{className:"input-submit",children:"Submit"})]})}}]),n}(a.Component),N=function(){var t=Object(p.f)().slug,e=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(e){return e.slug===t})),n=e.title,a=e.description;return Object(f.jsxs)("div",{className:"main__content",children:[Object(f.jsx)("h1",{children:n}),Object(f.jsx)("h2",{children:a})]})},A=function(){var t=Object(p.g)(),e=t.url,n=t.path;return Object(f.jsxs)("div",{className:"about__content",children:[Object(f.jsxs)("ul",{className:"about__list",children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(e,"/about-app"),children:"About App"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"".concat(e,"/about-author"),children:"About Author"})})]}),Object(f.jsx)(p.a,{path:"".concat(n,"/:slug"),children:Object(f.jsx)(N,{})})]})},P=function(){return Object(f.jsx)("h1",{children:"This is an error page"})},D=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.handleChange=function(e){t.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}}))},t.addTodoItem=function(e){var n={id:Object(b.a)(),title:e,completed:!1};t.setState({todos:[].concat(Object(r.a)(t.state.todos),[n])})},t.setUpdate=function(e,n){t.setState({todos:t.state.todos.map((function(t){return t.id===n&&(t.title=e),t}))})},t.delTodo=function(e){t.setState({todos:Object(r.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("todos"),e=JSON.parse(t);e&&this.setState({todos:e})}},{key:"componentDidUpdate",value:function(t,e){if(e.todos!==this.state.todos){var n=JSON.stringify(this.state.todos);localStorage.setItem("todos",n)}}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"inner",children:[Object(f.jsx)(v,{}),Object(f.jsx)(T,{addTodoProps:this.addTodoItem}),Object(f.jsx)(k,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo,setUpdate:this.setUpdate})]})})}),Object(f.jsx)(p.a,{path:"/about",children:Object(f.jsx)(A,{})}),Object(f.jsx)(p.a,{path:"*",children:Object(f.jsx)(P,{})})]})]})}}]),n}(o.a.Component);s.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(i.a,{basename:"/reactjstutorial",children:Object(f.jsx)(D,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.41867166.chunk.js.map