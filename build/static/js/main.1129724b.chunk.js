(this.webpackJsonpyubbefrontend=this.webpackJsonpyubbefrontend||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),c=a(39),i=a.n(c),o=(a(45),a(2)),l=a.n(o),u=a(3),d=a(4),h=a(5),p=a(7),j=a(6),b=(a(47),a(80)),m=a(8),O=a.n(m);function f(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"https://yubbe-server.herokuapp.com/api/session",method:"get",headers:{"Access-Control-Allow-Origin":"*",authToken:t.authToken}}).then((function(e){return e})).catch((function(e){return{message:e.toString()}}));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x={card:{display:"flex",width:"100%"},button:{width:"5rem",height:"2.4rem"}},g=a(27),k=a.n(g),y=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).componentDidMount=function(){s.state.data.moderator||s.setState({data:{moderator:[""]}})},s.componentDidUpdate=function(){s.state.data._id!==s.props.call._id&&s.setState({data:s.props.call})},s.refresh=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.props.update({id:s.state.data._id});case 2:t=e.sent,console.log(t),s.setState({data:t});case 5:case"end":return e.stop()}}),e)}))),s.updateCall=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Update"),t=s.props.cookies,(a=Object.assign({},s.state.data)).date=k()(a.date).utcOffset(-3,!0).format(),a.clients=a.clients.map((function(e,t){return e.email})),a.clients[0]||delete a.clients,a.moderator[0]?a.moderator=a.moderator[0].email:a.moderator="",console.log(a),e.next=10,O()({url:"https://yubbe-server.herokuapp.com/api/adm/call",method:"put",params:{id:s.state.data._id},data:a,headers:{"Access-Control-Allow-Origin":"*",authToken:t.cookies.authToken}}).then((function(e){alert("Sucesso")})).catch((function(e){alert("Mudan\xe7a inv\xe1lida")}));case 10:return e.next=12,s.refresh();case 12:case"end":return e.stop()}}),e)}))),s.removeUser=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s.props.cookies,n=t.target.value,e.next=5,O()({url:"https://yubbe-server.herokuapp.com/api/adm/call/client",method:"delete",params:{id:s.state.data._id,email:n},headers:{"Access-Control-Allow-Origin":"*",authToken:a.cookies.authToken}}).then((function(e){alert("Sucesso")})).catch((function(e){alert("Mudan\xe7a inv\xe1lida")}));case 5:return e.next=7,s.refresh();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.deleteCall=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=s.props.cookies,e.next=4,O()({url:"https://yubbe-server.herokuapp.com/api/adm/call",method:"delete",params:{id:s.state.data._id},headers:{"Access-Control-Allow-Origin":"*",authToken:a.cookies.authToken}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 4:return e.next=6,s.refresh();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.submitChanges=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(s.state.data),e.next=4,s.updateCall();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.renderUser=function(e,t){var a=[];return Array.isArray(e)&&e.forEach((function(e,n){a.push(s.UserData({name:e.name,key:n,email:e.email,type:t}))})),0===a.length&&a.push(s.UserData({name:"",key:0,email:"",type:t})),a},s.state={data:s.props.call},s}return Object(h.a)(a,[{key:"UserData",value:function(e){var t=this;if(this.state.data[e.type]){var a=this.state.data;return"moderator"===e.type?(0===a.moderator.length&&(a.moderator=[{email:""}]),Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:e.name}),Object(s.jsx)("input",{value:e.email,className:"edit-user",onChange:function(e){a.moderator[0].email=e.target.value,t.setState({data:a})}})]},e.key)):a.clients[e.key]?Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:e.name}),Object(s.jsx)("input",{value:e.email,className:"edit-user",onChange:function(s){a.clients[e.key].email=s.target.value,t.setState({data:a})}}),Object(s.jsx)("button",{onClick:this.removeUser,value:e.email,children:"Remover"})]},e.key):Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:e.name}),Object(s.jsx)("input",{value:e.email,className:"edit-user",onChange:function(e){a.clients=[{email:e.target.value}],t.setState({data:a})}})]},e.key)}}},{key:"render",value:function(){var e=this;if(this.state.data){var t=k()(this.state.data.date).format("YYYY-MM-DDThh:mm:ss");return Object(s.jsx)("div",{className:"edit-call-card",style:x.card,children:Object(s.jsx)("div",{className:"edit-call-card-content",style:x.card,children:Object(s.jsxs)("form",{style:x.card,children:[Object(s.jsxs)("div",{className:"inputs",children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Tema"}),Object(s.jsx)("input",{type:"text",className:"call-theme",value:this.state.data.theme,onChange:function(t){var a=e.state.data;a.theme=t.target.value,e.setState({data:a})}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Data"}),Object(s.jsx)("input",{type:"datetime-local",className:"call-date",value:t,onChange:function(t){var a=e.state.data;a.date=t.target.value,e.setState({data:a})}})]}),Object(s.jsx)("p",{children:"Clientes"}),this.renderUser(this.state.data.clients,"clients"),Object(s.jsx)("button",{className:"add-client",onClick:function(t){t.preventDefault();var a=e.state.data;a.clients.push({email:""}),e.setState({data:a})},children:"Adicionar cliente"}),Object(s.jsx)("p",{children:"Moderador"}),this.renderUser(this.state.data.moderator,"moderator")]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{type:"submit",className:"submit-changes",style:x.button,onClick:this.submitChanges,children:"Enviar mudan\xe7a"}),Object(s.jsx)("button",{className:"delete-user",style:x.button,onClick:this.deleteCall,children:" Excluir Call"})]})]})})})}return Object(s.jsx)("div",{})}}]),a}(r.a.Component),w=Object(b.a)(y),C=a.p+"static/media/pencil.c8da9798.svg",N=a(18),D=a.n(N),S=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).admOrModeratorDisplay=function(){return"adm"===e.props.auth||"moderator"===e.props.auth?{display:"flex"}:{display:"none"}},e.admDisplay=function(){return"adm"===e.props.auth?{display:"flex"}:{display:"none"}},e.moderatorDisplay=function(){return"moderator"===e.props.auth?{display:"flex"}:{display:"none"}},e.editCall=function(){e.props.choose({id:e.props.call._id})},e}return Object(h.a)(a,[{key:"render",value:function(){var e=[];this.props.call.moderator[0]&&(e=Object(s.jsxs)("p",{className:"call-occupation",children:[Object(s.jsx)("b",{children:"Moderador:"})," ",this.props.call.moderator[0].name]}));var t=D()(this.props.call.date);return Object(s.jsx)("div",{className:"call-card",children:Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("div",{className:"card-header",children:Object(s.jsx)("button",{className:"edit-button",onClick:this.editCall,children:Object(s.jsx)("img",{src:C,style:this.admDisplay(),alt:"edit"})})}),Object(s.jsxs)("div",{className:"card-description",children:[Object(s.jsx)("p",{className:"call-theme",children:this.props.call.theme}),e,Object(s.jsxs)("p",{className:"call-occupation",children:[Object(s.jsx)("b",{children:"Ocupa\xe7\xe3o:"})," ",this.props.call.clients.length]}),Object(s.jsxs)("p",{className:"call-date",children:["Data: ",t.format("DD/MM/YYYY")," \xe0s ",t.hours(),"h"]})]}),Object(s.jsxs)("div",{className:"card-buttons",children:[Object(s.jsx)("button",{className:"moderate",id:this.props.call._id,onClick:this.props.moderate,style:this.admOrModeratorDisplay(),children:"Moderate"}),Object(s.jsx)("button",{className:"join-call",id:this.props.call._id,onClick:this.props.join,children:"Join call"})]})]})},this.props.key)}}]),a}(r.a.Component),A=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getCallInfo=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.cookies,console.log(t),e.next=4,O()({url:"https://yubbe-server.herokuapp.com/api/adm/call",method:"get",params:{id:t},headers:{"Access-Control-Allow-Origin":"*",authToken:a.cookies.authToken}}).then((function(e){n.setState({callData:e.data[0]})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.joinCall=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"https://yubbe-server.herokuapp.com/api/call/join",method:"post",headers:{"Access-Control-Allow-Origin":"*",authToken:n.props.cookies.cookies.authToken},data:{callId:t.target.id}}).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return 429===e.response.status?alert("Voc\xea atingiu o seu limite semanal."):429===e.response.status&&alert("Desculpa, mas a Call j\xe1 est\xe1 lotada."),{msg:e}}));case 2:return e.next=4,n.props.update();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.moderateCall=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"https://yubbe-server.herokuapp.com/api/call/moderate",method:"post",headers:{"Access-Control-Allow-Origin":"*",authToken:n.props.cookies.cookies.authToken},data:{callId:t.target.id}}).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return{msg:e}}));case 2:return e.next=4,n.props.update();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.refresh=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getCallInfo(t.id);case 2:return n.props.update(),console.log(n.state.callData),e.abrupt("return",n.state.callData);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.availableCallsRender=function(e){var t=[];return e&&e.forEach((function(e,a){t.push(Object(s.jsx)(S,{call:e,auth:n.props.auth,choose:n.refresh,moderate:n.moderateCall,join:n.joinCall},a))})),t},n.displayEditCall=function(){return n.state.callData&&"adm"===n.props.auth&&n.state.callData._id?Object(s.jsxs)("div",{className:"edit-call",children:[Object(s.jsx)("h2",{children:"Editar chamada"}),Object(s.jsx)(w,{call:n.state.callData,update:n.refresh})]}):Object(s.jsx)("div",{})},n.state={callData:{}},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"available-calls",children:[this.displayEditCall(),Object(s.jsx)("h2",{children:"Calls dispon\xedveis"}),Object(s.jsx)("div",{className:"calls-list",children:this.availableCallsRender(this.props.calls)})]})}}]),a}(r.a.Component),T=Object(b.a)(A),M=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],U=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).myCallsRender=function(e){var t=[];return e.client&&e.client.forEach((function(e,a){var n=new Date(e.date);t.push(Object(s.jsx)("div",{className:"call-card",children:Object(s.jsx)("div",{className:"card-content",children:Object(s.jsxs)("div",{className:"card-description",children:[Object(s.jsx)("p",{className:"call-theme",children:e.theme}),[],Object(s.jsxs)("p",{className:"call-occupation",children:[Object(s.jsx)("b",{children:"Ocupa\xe7\xe3o:"})," ",e.clients.length]}),Object(s.jsxs)("p",{className:"call-date",children:["Data: ",n.getDate()," ",M[n.getMonth()]," ",n.getFullYear()," \xe0s ",n.getHours(),"h"]})]})})},a))})),e.moderator&&e.moderator.forEach((function(e,a){console.log(e);var n=new Date(e.date);t.push(Object(s.jsx)("div",{className:"call-card",style:{borderColor:"red"},children:Object(s.jsx)("div",{className:"card-content",children:Object(s.jsxs)("div",{className:"card-description",children:[Object(s.jsx)("div",{className:"moderator-signal-ball"}),Object(s.jsxs)("p",{className:"call-theme",children:["Moderator",e.theme]}),Object(s.jsxs)("p",{className:"call-occupation",children:[Object(s.jsx)("b",{children:"Ocupa\xe7\xe3o:"})," ",e.clients.length]}),Object(s.jsxs)("p",{className:"call-date",children:["Data: ",n.getDate()," ",M[n.getMonth()]," ",n.getFullYear()," \xe0s ",n.getHours(),"h"]})]})})},"M"+a))})),t},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"my-calls",children:[Object(s.jsx)("h2",{children:"Minhas Calls"}),Object(s.jsx)("div",{className:"calls-list",children:this.myCallsRender(this.props.calls)})]})}}]),a}(r.a.Component),E=Object(b.a)(U),Y=a(81),_=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).switchView=function(){return"adm"===e.props.auth?Object(s.jsx)(Y.a,{children:Object(s.jsx)(T,{auth:e.props.auth,update:e.props.update,calls:e.props.calls})}):Object(s.jsxs)(Y.a,{children:[Object(s.jsx)(E,{auth:e.props.auth,update:e.props.update,calls:e.props.mycalls}),Object(s.jsx)(T,{auth:e.props.auth,update:e.props.update,calls:e.props.calls})]})},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"calls",children:this.switchView()})}}]),a}(r.a.Component),z=a(21);var F=function(e){var t=Object(n.useState)(),a=Object(z.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(),o=Object(z.a)(i,2),d=o[0],h=o[1],p=Object(n.useState)(),j=Object(z.a)(p,2),b=j[0],m=j[1],f=Object(n.useState)(),v=Object(z.a)(f,2),x=v[0],g=v[1],k=function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/signup",method:"post",data:{name:d,email:r,password:b}}).then((function(e){g("Conta criada com sucesso"),c(""),h(""),m("")})).catch((function(e){409===e.response.status&&g("Email j\xe1 cadastrado")}));case 3:e.update&&e.update();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y={display:"flex"};return console.log(x),""!==x&&x||(y={display:"none"}),Object(s.jsxs)("form",{className:"signup-form",children:[Object(s.jsx)("p",{style:y,children:x}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Nome:"}),Object(s.jsx)("input",{type:"text",name:"name",value:d,onChange:function(e){h(e.target.value)}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Email:"}),Object(s.jsx)("input",{type:"email",name:"email",value:r,onChange:function(e){c(e.target.value),g("")}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Senha:"}),Object(s.jsx)("input",{type:"password",name:"password",value:b,onChange:function(e){m(e.target.value)}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:k,children:"Enviar"})})]})},R=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(d.a)(this,a),(s=t.call(this,e)).updateUser=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.cookies,e.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/adm/user",method:"put",data:{userData:{name:s.state.name,id:s.state.id,email:s.state.email,authorization:s.state.auth}},headers:{"Access-Control-Allow-Origin":"*",authToken:t.cookies.authToken}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),s.deleteUser=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.cookies,e.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/adm/user",method:"delete",data:{userId:s.state.id},headers:{"Access-Control-Allow-Origin":"*",authToken:t.cookies.authToken}}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}));case 3:return e.next=5,s.props.update();case 5:case"end":return e.stop()}}),e)}))),s.changePassword=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.props.cookies,e.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/adm/user/password",method:"put",data:{userData:{id:s.state.id,password:s.state.password}},headers:{"Access-Control-Allow-Origin":"*",authToken:t.cookies.authToken}}).then((function(e){alert("Senha alterada com sucesso")})).catch((function(e){console.log("Houve algum erro no processo de altera\xe7\xe3o da senha")}));case 3:s.setState({password:""});case 4:case"end":return e.stop()}}),e)}))),s.submitChanges=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.updateUser();case 2:return e.next=4,s.props.update();case 4:case"end":return e.stop()}}),e)}))),s.state={name:e.name,id:e.id,email:e.email,authorization:e.auth,password:""},s}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"user-card",children:Object(s.jsxs)("div",{className:"user-card-content",children:[Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"inputs",children:[Object(s.jsx)("input",{type:"text",className:"user-name",value:this.state.name,onChange:function(t){e.setState({name:t.target.value})}}),Object(s.jsx)("input",{type:"text",className:"user-email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}}),Object(s.jsxs)("select",{value:this.state.authorization,onChange:function(t){e.setState({authorization:t.target.value})},children:[Object(s.jsx)("option",{value:"client",children:"Cliente"}),Object(s.jsx)("option",{value:"moderator",children:"Moderador"}),Object(s.jsx)("option",{value:"adm",children:"Adm"})]})]}),Object(s.jsxs)("div",{className:"buttons",children:[Object(s.jsx)("button",{type:"submit",className:"submit-changes",onClick:this.submitChanges,children:"Enviar mudan\xe7a"}),Object(s.jsx)("button",{className:"delete-user",onClick:function(){var t=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.deleteUser();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:" Excluir usu\xe1rio"})]})]}),Object(s.jsxs)("form",{className:"change-password",children:[Object(s.jsx)("div",{className:"inputs",children:Object(s.jsx)("input",{type:"password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})}),Object(s.jsx)("div",{className:"buttons",children:Object(s.jsx)("button",{type:"submit",onClick:this.changePassword,children:"Alterar senha"})})]})]})})}}]),a}(r.a.Component),I=Object(b.a)(R),J=(a(70),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).listUsers=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.cookies,e.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/adm/users",method:"get",headers:{"Access-Control-Allow-Origin":"*",authToken:t.cookies.authToken}}).then((function(e){n.setState({users:e.data})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),n.componentDidMount=function(){n.listUsers()},n.usersRender=function(e){var t=[];return e&&e.forEach((function(e,a){t.push(Object(s.jsx)(Y.a,{children:Object(s.jsx)(I,{name:e.name,id:e._id,email:e.email,auth:e.authorization,update:n.listUsers})}))})),t},n.state={users:[]},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"users",children:[Object(s.jsxs)("div",{className:"users-section",children:[Object(s.jsx)("h2",{children:"Cadastrar usu\xe1rio"}),Object(s.jsx)(F,{update:this.listUsers})]}),Object(s.jsxs)("div",{className:"users-section",children:[Object(s.jsx)("h2",{children:"Usu\xe1rios"}),Object(s.jsx)("div",{className:"users-list",children:this.usersRender(this.state.users)})]})]})}}]),a}(r.a.Component)),P=Object(b.a)(J),V=(a(71),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).switchArea=function(){return"calls"===n.state.area?Object(s.jsx)(_,{auth:"adm",update:n.props.updateCalls,mycalls:n.props.mycalls,calls:n.props.calls}):"users"===n.state.area?Object(s.jsx)(P,{}):void 0},n.selected=function(e){return n.state.area===e?"selected":"menu-button"},n.state={areas:["calls","users"],area:"calls",click:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"dashboard-menu",children:[Object(s.jsx)("div",{className:"menu-item",children:Object(s.jsx)("button",{className:this.selected("calls"),onClick:function(){e.setState({area:"calls"})},name:"call",children:"Calls"})}),Object(s.jsx)("div",{className:"menu-item",children:Object(s.jsx)("button",{className:this.selected("users"),onClick:function(){e.setState({area:"users"})},name:"users",children:"Usu\xe1rios"})})]}),Object(s.jsx)("div",{children:this.switchArea()})]})}}]),a}(r.a.Component)),H=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).listUserCalls=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"https://yubbe-server.herokuapp.com/api/calls/mycalls",method:"get",headers:{"Access-Control-Allow-Origin":"*",authToken:t.authToken}}).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return{msg:e,status:401}}));case 2:(a=e.sent).data&&n.setState({myCalls:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.listCalls=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O()({url:"https://yubbe-server.herokuapp.com/api/calls",method:"get",headers:{"Access-Control-Allow-Origin":"*",authToken:t.authToken}}).then((function(e){return{data:e.data,status:e.status}})).catch((function(e){return{msg:e,status:401}}));case 2:(a=e.sent).data&&n.setState({calls:a.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.updateData=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.listUserCalls(n.props.cookies.cookies);case 2:return e.next=4,n.listCalls(n.props.cookies.cookies);case 4:case"end":return e.stop()}}),e)}))),n.componentDidMount=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.updateData();case 1:case"end":return e.stop()}}),e)}))),n.switchView=function(){return"adm"===n.props.auth?Object(s.jsx)(V,{updateCalls:n.updateData,mycalls:n.state.myCalls,calls:n.state.calls}):Object(s.jsx)(_,{auth:n.props.auth,update:n.updateData,mycalls:n.state.myCalls,calls:n.state.calls})},n.state={update:0,myCalls:[],calls:[]},n}return Object(h.a)(a,[{key:"render",value:function(){return this.switchView()}}]),a}(r.a.Component),L=Object(b.a)(H),B=a.p+"static/media/logo.c2be5341.svg",W=a(16),q=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("p",{children:"Powered by:"}),Object(s.jsx)(W.b,{to:"/",children:Object(s.jsx)("img",{src:B,alt:"Yubbe Logo",className:"logo"})})]})}}]),a}(r.a.Component),G=a(9),K=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).logoutFunc=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.cookies.set("authToken","",{path:"/"}),n.setState({session:!1});case 3:case"end":return e.stop()}}),e)}))),n.componentDidMount=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.cookies,e.next=3,f(t.cookies);case 3:a=e.sent,console.log(a),a.data&&a.data.approved?(n.state.session||n.setState({session:!0}),a.data.name&&n.setState({name:a.data.name}),a.data.authorization&&(console.log("Updating"),n.setState({auth:a.data.authorization}))):n.state.session&&n.setState({session:!1});case 6:case"end":return e.stop()}}),e)}))),n.redirect=function(){return n.state.session?[]:Object(s.jsx)(G.a,{to:"/login"})};var r=e.cookies,c=!1;return r.get("authToken")&&""!==r.get("authToken")&&(c=!0),n.state={session:c,name:r.get("name")||"",auth:"client"},n}return Object(h.a)(a,[{key:"render",value:function(){return console.log(this.state),Object(s.jsxs)("div",{className:"container",children:[this.redirect(),Object(s.jsxs)("main",{className:"main",children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsxs)("h1",{children:["Welcome, ",this.state.name,"!"]}),"  ",Object(s.jsx)("button",{onClick:this.logoutFunc,className:"logoutbutton",children:"Logout"})]}),Object(s.jsx)(L,{auth:this.state.auth,username:this.state.name})]}),Object(s.jsx)(q,{})]})}}]),a}(r.a.Component),Q=Object(b.a)(K),X=(a(76),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("main",{className:"main-signup",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(F,{styleclass:"loginform"})})}),Object(s.jsx)(q,{})]})}}]),a}(r.a.Component)),Z=(a(77),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.cookies.cookies,e.next=3,f(t);case 3:a=e.sent,console.log(a.data),a.data&&a.data.approved?n.setState({session:!0}):n.state.session&&n.setState({session:!1});case 6:case"end":return e.stop()}}),e)}))),n.submitForm=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,O()({url:"https://yubbe-server.herokuapp.com/api/login",method:"post",data:{email:n.state.email,password:n.state.password},headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){n.props.cookies.set("authToken",String(e.data.authToken),{path:"/"}),e.data.approved?n.setState({session:!0,invalidData:!1}):n.setState({session:!1,invalidData:!0})})).catch((function(e){n.setState({invalidData:!0})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.redirect=function(){return n.state.session?Object(s.jsx)(G.a,{to:"/"}):[]},n.invalidMessage=function(){if(n.state.invalidData)return Object(s.jsx)("p",{children:"Email ou senha n\xe3o encontrados"})},n.state={session:!1,email:"",password:"",invalidData:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{className:"login-form",children:[this.redirect(),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Email:"}),Object(s.jsx)("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value,invalidData:!1})}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Senha:"}),Object(s.jsx)("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value,invalidData:!1})}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:this.submitForm,children:"Enviar"})}),this.invalidMessage()]})}}]),a}(r.a.Component)),$=Object(b.a)(Z),ee=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("main",{className:"main-login",children:Object(s.jsx)($,{styleclass:"loginform"})}),Object(s.jsx)(q,{})]})}}]),a}(r.a.Component),te=(a(78),function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).submitForm=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.props.cookies,e.next=4,O()({url:"https://yubbe-server.herokuapp.com/api/adm/calls",method:"post",data:{date:D()(n.state.date).utcOffset(-3,!0).format(),theme:n.state.theme},headers:{"Access-Control-Allow-Origin":"*",authToken:a.cookies.authToken}}).then((function(e){console.log(e),201===e.status?n.setState({created:!0,invalidData:!1}):n.setState({created:!1,invalidData:!0})})).catch((function(e){alert("Acesso n\xe3o autorizado, apenas administradores podem criar chamadas. Por favor, fa\xe7a o seu login novamente"),n.setState({created:!1,invalidData:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.invalidMessage=function(){if(n.state.invalidData)return Object(s.jsx)("p",{children:"date ou senha n\xe3o encontrados"})},n.createdMessage=function(){if(n.state.created)return Object(s.jsx)("p",{children:"A sua Call foi criada"})},n.state={created:!1,date:"",theme:"",invalidData:!1},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("form",{className:"login-form",children:[Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Data:"}),Object(s.jsx)("input",{type:"datetime-local",name:"date",value:this.state.date,onChange:function(t){e.setState({date:t.target.value,invalidData:!1,created:!1})}})]}),Object(s.jsxs)("label",{children:[Object(s.jsx)("span",{children:"Tema:"}),Object(s.jsx)("input",{type:"text",name:"theme",value:this.state.theme,onChange:function(t){e.setState({theme:t.target.value,invalidData:!1,created:!1})}})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"submit",onClick:this.submitForm,children:"Enviar"})}),this.invalidMessage(),this.createdMessage()]})}}]),a}(r.a.Component)),ae=Object(b.a)(te),se=function(e){Object(p.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("main",{className:"main-create-call",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(ae,{styleclass:"loginform"})})}),Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("p",{children:"Powered by:"}),Object(s.jsx)(W.b,{to:"/",children:Object(s.jsx)("img",{src:B,alt:"Yubbe Logo",className:"logo"})})]})]})}}]),a}(r.a.Component);i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(W.a,{children:Object(s.jsxs)(G.d,{children:[Object(s.jsx)(G.b,{path:"/signup",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(X,{})})}),Object(s.jsx)(G.b,{path:"/login",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(ee,{})})}),Object(s.jsx)(G.b,{path:"/createcall",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(se,{})})}),Object(s.jsx)(G.b,{path:"/",children:Object(s.jsx)(Y.a,{children:Object(s.jsx)(Q,{})})})]})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.1129724b.chunk.js.map