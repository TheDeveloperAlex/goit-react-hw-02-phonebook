(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"app_section__7DNQR"}},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(9),c=n.n(r),i=(n(16),n(11)),o=n(3),s=n(4),l=n(6),u=n(5),m=n(20),d=n(2),b=n.n(d),h=n(0),f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChangephnone=function(e){var n=e.target.value;t.setState({number:n})},t.handleChange=function(e){var n=e.target.value;t.setState({name:n})},t.handleSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number,id:Object(m.a)()};t.props.validate(n)&&t.props.formSubmit(n),t.setState({name:""}),t.setState({number:""}),document.getElementById("name").value="",document.getElementById("number").value=""},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:b.a.interface,children:Object(h.jsxs)("form",{onSubmit:this.handleSubmit,className:b.a.form,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,id:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsxs)("label",{children:["Phone",Object(h.jsx)("input",{className:b.a.inputTel,type:"tel",name:"number",onChange:this.handleChangephnone,id:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(h.jsx)("button",{type:"submit",className:b.a.buttonAdd,children:"Add contact"})]})})}}]),n}(a.Component),j=n(8),p=n.n(j),v=function(t){var e=t.contacts,n=t.filter,a=t.fnFilter,r=t.removeContact;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)("input",{type:"text",onChange:a}),Object(h.jsx)("ul",{children:e.map((function(t){return!!t.name.includes(n)&&Object(h.jsxs)("li",{className:p.a.li,children:[" ",t.name,": ",t.number," ",Object(h.jsx)("button",{type:"button",id:t.id,onClick:r,className:p.a.button,children:"Delete"})," "]},t.id)}))})]})},O=n(10),x=n.n(O),C=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmit=function(e){return t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[e])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},t.validate=function(e){console.log(e);var n=t.state.contacts.filter((function(t){return t.name===e.name})),a=!0;return n.length>0&&alert("Eror, this name is already in contacts"),n.length>0&&(a=!1),console.log(a),a},t.filter=function(e){var n=e.target.value;t.setState({filter:n})},t}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:x.a.section,children:[Object(h.jsx)("h1",{children:"PhoneBook"}),Object(h.jsx)(f,{formSubmit:this.formSubmit,validate:this.validate}),Object(h.jsx)(v,{contacts:this.state.contacts,filter:this.state.filter,fnFilter:this.filter,removeContact:this.removeContact})]})}}]),n}(a.Component);c.a.render(Object(h.jsx)(C,{}),document.getElementById("root"))},2:function(t,e,n){t.exports={interface:"ContactForm_interface__1GLiI",form:"ContactForm_form__kG06F",inputTel:"ContactForm_inputTel__3H9V7",buttonAdd:"ContactForm_buttonAdd__27z1I"}},8:function(t,e,n){t.exports={li:"Contacts_li__7Vclf",button:"Contacts_button__1ySWJ"}}},[[18,1,2]]]);
//# sourceMappingURL=main.2bf50b97.chunk.js.map