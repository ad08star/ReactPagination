(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),o=a.n(l),s=(a(64),a(15)),i=a(16),c=a(20),u=a(17),m=a(21),p=(a(65),a(52)),g=a.n(p),h=a(23),d="LEFT",f="RIGHT",E=function(e,t){for(var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=e,r=[];n<=t;)r.push(n),n+=a;return r},b=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).gotoPage=function(e){var t=a.props.onPageChanged,n=void 0===t?function(e){return e}:t,r=Math.max(0,Math.min(e,a.totalPages)),l={currentPage:r,totalPages:a.totalPages,pageLimit:a.pageLimit,totalRecords:a.totalRecords};a.setState({currentPage:r},function(){return n(l)})},a.handleClick=function(e,t){t.preventDefault(),a.gotoPage(e)},a.handleMoveLeft=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage-2*a.pageNeighbours-1)},a.handleMoveRight=function(e){e.preventDefault(),a.gotoPage(a.state.currentPage+2*a.pageNeighbours+1)},a.fetchPageNumbers=function(){var e=a.totalPages,t=a.state.currentPage,n=a.pageNeighbours,r=2*a.pageNeighbours+3;if(e>r+2){var l=[],o=t-n,s=t+n,i=e-1,c=o>2?o:2,u=s<i?s:i,m=r-(l=E(c,u)).length-1,p=c>2,g=u<i,b=d,y=f;if(p&&!g){var v=E(c-m,c-1);l=[b].concat(Object(h.a)(v),Object(h.a)(l))}else if(!p&&g){var N=E(u+1,u+m);l=[].concat(Object(h.a)(l),Object(h.a)(N),[y])}else p&&g&&(l=[b].concat(Object(h.a)(l),[y]));return[1].concat(Object(h.a)(l),[e])}return E(1,e)};var n=e.totalRecords,r=void 0===n?null:n,l=e.pageLimit,o=void 0===l?30:l,i=e.pageNeighbours,m=void 0===i?0:i;return a.pageLimit="number"===typeof o?o:30,a.totalRecords="number"===typeof r?r:0,a.pageNeighbours="number"===typeof m?Math.max(0,Math.min(m,2)):0,a.totalPages=Math.ceil(a.totalRecords/a.pageLimit),a.state={currentPage:1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.gotoPage(1)}},{key:"render",value:function(){var e=this;if(!this.totalRecords)return null;if(1===this.totalPages)return null;var t=this.state.currentPage,a=this.fetchPageNumbers();return r.a.createElement(n.Fragment,null,r.a.createElement("nav",{"aria-label":"Pagination"},r.a.createElement("ul",{className:"pagination"},a.map(function(a,n){return a===d?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#","aria-label":"Previous",onClick:e.handleMoveLeft},r.a.createElement("span",{"aria-hidden":"true"},"\xab"),r.a.createElement("span",{className:"sr-only"},"Previous"))):a===f?r.a.createElement("li",{key:n,className:"page-item"},r.a.createElement("a",{className:"page-link",href:"#","aria-label":"Next",onClick:e.handleMoveRight},r.a.createElement("span",{"aria-hidden":"true"},"\xbb"),r.a.createElement("span",{className:"sr-only"},"Next"))):r.a.createElement("li",{key:n,className:"page-item".concat(t===a?" active":"")},r.a.createElement("a",{className:"page-link",href:"#",onClick:function(t){return e.handleClick(a,t)}},a))}))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("inside user"),r.a.createElement(n.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:function(){return e.props.handleShow(e.props.users)},style:{cursor:"pointer"}},this.props.users.first_name),r.a.createElement("td",null,this.props.users.last_name),r.a.createElement("td",null,this.props.users.company_name),r.a.createElement("td",null,this.props.users.city),r.a.createElement("td",null,this.props.users.state),r.a.createElement("td",null,this.props.users.zip),r.a.createElement("td",null,this.props.users.email),r.a.createElement("td",null,this.props.users.web),r.a.createElement("td",null,this.props.users.age)))}}]),t}(n.Component),v=a(115),N=a(114),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{bg:"primary",variant:"dark"},r.a.createElement(v.a.Brand,{href:"#home"},"React-Pagination"),r.a.createElement(v.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(v.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(N.a,{className:"mr-auto",style:{color:"white"}},"Page: ",this.props.totalPages,"/",this.props.currentPage)))}}]),t}(n.Component),P=a(112),k=a(113),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={allusers:[],currentUsers:[],currentPage:null,totalPages:null,show:!1,isOldestFirst:!0},a.toggleSort=function(e){a.changePointer(e),a.setState({isOldestFirst:!a.state.isOldestFirst,allusers:a.sortByParam(e)}),a.refs.pagination.gotoPage(1)},a.changePointer=function(e){"first_name"===e?a.pointerFirstName=!a.pointerFirstName:"last_name"===e?a.pointerLastName=!a.pointerLastName:"company_name"===e?a.pointerCompanyName=!a.pointerCompanyName:"city"===e?a.pointerCity=!a.pointerCity:"state"===e?a.pointerState=!a.pointerState:"zip"===e?a.pointerZip=!a.pointerZip:"web"===e?a.pointerWeb=!a.pointerWeb:"email"===e?a.pointerEmail=!a.pointerEmail:"age"===e&&(a.pointerAge=!a.pointerAge)},a.handleClose=function(){a.setState({show:!1})},a.handleShow=function(e){a.setState({show:!0}),a.userFirstName=e.first_name,a.userLastName=e.last_name,a.userCompanyName=e.company_name,a.userCity=e.city,a.userState=e.state,a.userZip=e.zip,a.userEmail=e.email,a.userWeb=e.web,a.userAge=e.age},a.onPageChanged=function(e){var t=a.state.allusers,n=e.currentPage,r=e.totalPages,l=e.pageLimit,o=(n-1)*l,s=t.slice(o,o+l);a.setState({currentPage:n,currentUsers:s,totalPages:r})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("http://demo9197058.mockable.io/users").then(function(t){e.setState({allusers:t.data})}).catch(function(e){return console.log(e.response)}),this.pointerFirstName=!0,this.pointerLastName=!0,this.pointerCompanyName=!0,this.pointerCity=!0,this.pointerState=!0,this.pointerZip=!0,this.pointerEmail=!0,this.pointerWeb=!0,this.pointerAge=!0}},{key:"sortByParam",value:function(e){var t=this.state.allusers;return this.state.isOldestFirst?t.sort(function(t,a){return t[e]>a[e]?1:-1}):t.sort(function(t,a){return t[e]<a[e]?1:-1})}},{key:"render",value:function(){var e=this,t=this.state,a=t.allusers,n=t.currentUsers,l=t.currentPage,o=t.totalPages,s=a.length;return 0===s?null:r.a.createElement("div",{className:"App"},r.a.createElement(C,{totalPages:o,currentPage:l}),r.a.createElement("div",{style:{paddingTop:"3vw"}},r.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{onClick:function(t){return e.toggleSort("first_name")}},"First Name"," ",r.a.createElement("i",{className:this.pointerFirstName?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("last_name")}},"Last Name"," ",r.a.createElement("i",{className:this.pointerLastName?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("company_name")}},"Company"," ",r.a.createElement("i",{className:this.pointerCompanyName?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("city")}},"City"," ",r.a.createElement("i",{className:this.pointerCity?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("state")}},"State"," ",r.a.createElement("i",{className:this.pointerState?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("zip")}},"Zip"," ",r.a.createElement("i",{className:this.pointerZip?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("email")}},"Email"," ",r.a.createElement("i",{className:this.pointerEmail?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("web")}},"Web"," ",r.a.createElement("i",{className:this.pointerWeb?"fas fa-angle-double-down":"fas fa-angle-double-up"})),r.a.createElement("th",{onClick:function(t){return e.toggleSort("age")}},"Age"," ",r.a.createElement("i",{className:this.pointerAge?"fas fa-angle-double-down":"fas fa-angle-double-up"})))),r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement(y,{key:t.id,users:t,handleShow:e.handleShow})})))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(b,{totalRecords:s,pageLimit:5,pageNeighbours:1,onPageChanged:this.onPageChanged,ref:"pagination"})),r.a.createElement(k.a,{show:this.state.show,onHide:this.handleClose,style:{backgroundColor:"rgba(228, 223, 218, 0.6)"}},r.a.createElement(k.a.Header,{closeButton:!0,style:{backgroundColor:"#007bff",color:"white"}},r.a.createElement(k.a.Title,null,"User Details")),r.a.createElement(k.a.Body,{style:{backgroundColor:"#e4dfda",textAlign:"center",fontWeight:700,color:"#4e4a4a"}},r.a.createElement(P.a,{striped:!0,bordered:!0,hover:!0,responsive:"sm"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"First Name"),r.a.createElement("td",null,this.userFirstName)),r.a.createElement("tr",null,r.a.createElement("td",null,"Last Name"),r.a.createElement("td",null,this.userLastName)),r.a.createElement("tr",null,r.a.createElement("td",null,"Company"),r.a.createElement("td",null,this.userCompanyName)),r.a.createElement("tr",null,r.a.createElement("td",null,"City"),r.a.createElement("td",null,this.userCity)),r.a.createElement("tr",null,r.a.createElement("td",null,"State"),r.a.createElement("td",null,this.userState)),r.a.createElement("tr",null,r.a.createElement("td",null,"Zip"),r.a.createElement("td",null,this.userZip)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,this.userEmail)),r.a.createElement("tr",null,r.a.createElement("td",null,"Web"),r.a.createElement("td",null,this.userWeb)),r.a.createElement("tr",null,r.a.createElement("td",null,"Age"),r.a.createElement("td",null,this.userAge))))),r.a.createElement(k.a.Footer,{style:{backgroundColor:"#007bff",padding:"8px 15px"}},r.a.createElement("button",{type:"button",className:"btn btn-default",style:{backgroundColor:"#007bff",border:"3px solid white",borderRadius:"8px",color:"white",fontWeight:"500",outline:"none"},onClick:this.handleClose},"Close"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(110);o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,a){e.exports=a(111)},64:function(e,t,a){},65:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.d1e86936.chunk.js.map