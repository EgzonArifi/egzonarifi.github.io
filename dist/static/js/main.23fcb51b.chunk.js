(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t,a){e.exports=a(496)},496:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(252),l=a.n(c),i=a(19),o=a(20),s=a(22),u=a(21),m=a(23),d=a(499),h=a(500),p=a(257),E=a(167),f=a(497),b=a(8),g=Object(b.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/",className:"btn btn-floating ping lighten-1"},e.profile.initials)))}),N=a(255),j=function(e){e.children,e.style,Object(N.a)(e,["children","style"]);return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/signin"},"Sign In")))},v=Object(b.b)(function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(g,{profile:a}):r.a.createElement(j,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-2"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo"},a.firstName," ",a.lastName),n))}),O=a(108),y=a.n(O),C=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth.0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-2"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},y()(t.createdAt.toDate()).calendar())))},S=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map(function(e){return r.a.createElement(E.a,{to:"/project/"+e.id,key:e.id},r.a.createElement(C,{project:e}))}))},w=a(29),R=a(16),F=a(498),x=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement(S,{projects:t})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),I=Object(R.d)(Object(b.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(x),P=Object(R.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(w.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-1"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title," "),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",{className:"grey-text"},y()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(F.a,{to:"/signin"})}),U=a(34),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),A=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",error:t})})}));var a}}})(k),_=a(47),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"text"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Project Content"),r.a.createElement("textarea",{id:"content",cols:"30",rows:"10",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn"},r.a.createElement("span",null,"Upload Image"),r.a.createElement("input",{type:"file",multiple:!0})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{className:"file-path validate",type:"text",placeholder:"Upload one or more files"}))),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Save")))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),z=Object(b.b)(function(e){return console.log(e),{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(_.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",error:e})})}}(t))}}})(L),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(U.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),G=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",error:e})})}}(t))}}})(T),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:I}),r.a.createElement(p.a,{path:"/project/:id",component:P}),r.a.createElement(p.a,{path:"/signin",component:A}),r.a.createElement(p.a,{path:"/create",component:z}),r.a.createElement(p.a,{path:"/signup",component:G}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J={authError:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(_.a)({},e,{authError:null});case"LOGIN_ERROR":return Object(_.a)({},e,{authError:"Login failed"});case"SIGNOUT_SUCCESS":return console.log("logout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(_.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(_.a)({},e,{authError:t.error.message});default:return e}},B={projects:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},Y=a(76),K=Object(R.c)({auth:W,project:H,firestore:Y.firestoreReducer,firebase:w.firebaseReducer}),Q=a(256),Z=a(109),$=a.n(Z);a(489),a(494);$.a.initializeApp({apiKey:"AIzaSyA71jLohZOsQOz3aRHAHmCYW_lFvWCDJ2Y",authDomain:"egzonarifi-f132f.firebaseapp.com",databaseURL:"https://egzonarifi-f132f.firebaseio.com",projectId:"egzonarifi-f132f",storageBucket:"",messagingSenderId:"346580178205"}),$.a.firestore();var q=$.a,M=Object(R.e)(K,Object(R.d)(Object(R.a)(Q.a.withExtraArgument({getFirebase:w.getFirebase,getFirestore:Y.getFirestore})),Object(Y.reduxFirestore)(q),Object(w.reactReduxFirebase)(q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));M.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(b.a,{store:M},r.a.createElement(D,null)),document.getElementById("root"))}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[258,1,2]]]);
//# sourceMappingURL=main.23fcb51b.chunk.js.map