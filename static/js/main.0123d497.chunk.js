(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){},13:function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},2:function(e,t,n){e.exports={form:"ContactForm_form__1fuOn",label_name:"ContactForm_label_name__2Olwv",add_contact_btn:"ContactForm_add_contact_btn__3uqxT"}},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),i=n.n(c),s=n(14),o=n(4),l=n(5),u=n(7),b=n(6),d=n(0),m=function(e){var t=e.title;return Object(d.jsx)("h2",{children:t})},j=n(9),h=n.n(j),f=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:h.a.title_filter,children:"Find contacts by name"}),Object(d.jsx)("input",{className:h.a.input_filter,type:"text",value:t,onChange:n})]})},p=n(10),O=n(2),x=n.n(O),_=n(20),v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:"",name:"",number:""},e.handleChange=function(t){var n,a=t.currentTarget,r=a.name,c=a.value,i=a.id;console.log("Form ~ ID: ",i),e.setState((n={},Object(p.a)(n,r,c),Object(p.a)(n,"id",i),n))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.reset()},e.reset=function(){e.setState({id:"",name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=_.generate(),t=_.generate();return Object(d.jsxs)("form",{className:x.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{className:x.a.form_label,htmlFor:e,children:[Object(d.jsx)("span",{className:x.a.label_name,children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(d.jsxs)("label",{className:x.a.form_label,htmlFor:t,children:[Object(d.jsx)("span",{className:x.a.label_name,children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,id:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(d.jsx)("button",{className:x.a.add_contact_btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),g=(n(11),function(e){var t=e.id,n=e.name,a=e.number;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:n}),Object(d.jsx)("td",{children:a})]},t)}),C=function(e){var t=e.contacts;return console.log("ContactsList ~ contacts: ",t),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Contacts"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Name"}),Object(d.jsx)("td",{children:"Phone"})]})}),Object(d.jsx)("tbody",{children:t.map((function(e){var t=e.id,n=e.name,a=e.number;return Object(d.jsx)(g,{name:n,number:a},t)}))})]})]})},S=n(13),y=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:S,filter:""},e.addContact=function(t,n,a){var r={id:t,name:n,number:a};e.setState((function(e){var t=e.contacts;return{contacts:[r].concat(Object(s.a)(t))}}))},e.onSubmit=function(t){console.log("App ~ data: ",t);var n=t.id,a=t.name,r=t.number;console.log("App ~ ID: ",n),console.log("App ~ name: ",a),e.addContact(n,a,r)},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,n=t.filter,a=t.contacts,r=n.toLowerCase();return a.filter((function(e){return e.name.toLowerCase().includes(r)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getVisibleContacts();return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(m,{title:"Phonebook"}),Object(d.jsx)(v,{onSubmit:this.onSubmit}),Object(d.jsx)(f,{value:e,onChange:this.changeFilter}),Object(d.jsx)(C,{contacts:t})]})}}]),n}(a.Component);n(29),n(30);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={title_filter:"Filter_title_filter__HU21B",input_filter:"Filter_input_filter__cpY52"}}},[[31,1,2]]]);
//# sourceMappingURL=main.0123d497.chunk.js.map