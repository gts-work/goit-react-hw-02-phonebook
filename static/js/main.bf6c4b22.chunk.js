(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),i=n(10),s=n(2),u=n(3),b=n(5),j=n(4),l=n(0),d=function(t){var e=t.title;return Object(l.jsx)("h2",{children:e})},h=n(8),m=n(16),p=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={id:"",name:"",number:""},t.nameInputId=m.generate(),t.handleChange=function(e){var n,a=e.currentTarget,c=a.name,r=a.value,o=a.id;console.log("Form ~ ID: ",o),t.setState((n={},Object(h.a)(n,c,r),Object(h.a)(n,"id",o),n))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(l.jsxs)("label",{htmlFor:this.nameInputId,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(l.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{title:"Phoneboock"}),Object(l.jsx)(p,{onSubmit:this.props.onSubmit})]})}}]),n}(a.Component),f=function(t){var e=t.id,n=t.name;return Object(l.jsx)("li",{children:n},e)},v=function(t){var e=t.contacts;return console.log("ContactsList ~ contacts: ",e),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Contacts"}),e.map((function(t){var e=t.id,n=t.name;return Object(l.jsx)(f,{name:n},e)}))]})},x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[]},t.onSubmit=function(e){console.log("App ~ data: ",e);var n=e.id,a=e.name;console.log("App ~ ID: ",n),console.log("App ~ name: ",a),t.addContact(n,a)},t.addContact=function(e,n){var a={id:e,name:n};t.setState((function(t){var e=t.contacts;return{contacts:[a].concat(Object(i.a)(e))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{onSubmit:this.onSubmit}),Object(l.jsx)(v,{contacts:this.state.contacts})]})}}]),n}(a.Component);n(25);o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bf6c4b22.chunk.js.map