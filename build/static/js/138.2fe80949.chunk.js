(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[138],{2092:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(830),r=a(51),s=a(13),l=a(14),i=a(16),o=a(15),c=a(0),u=a.n(c),m=a(1093),d=a(1094),f=a(1091),p=a(1092),b=a(1095),h=a(173),g=a(1098),v=a(799),y=a(798),E=a(795),O=a(117),j=(a(27),a(807)),N=a.n(j),R=a(56),x=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(r.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state);var t=new FormData;t.append("banner_title",l.state.banner_title),t.append("status",l.state.status),t.append("banner_img",l.state.selectedFile,l.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var s=a.value;console.log(s)}}catch(m){r.e(m)}finally{r.f()}var i,o=Object(n.a)(t.keys());try{for(o.s();!(i=o.n()).done;){var c=i.value;console.log(c)}}catch(m){o.e(m)}finally{o.f()}var u=l.props.match.params.id;O.a.post("admin/editBanner/".concat(u),t).then((function(e){console.log(e.data),N()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/pagesetup/banner/bannerList")})).catch((function(e){console.log(e)}))},l.state={banner_title:"",status:"",banner_img:"",selectedName:"",selectedFile:null},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;O.a.get("admin/viewonebanner/".concat(t)).then((function(t){console.log(t),e.setState({banner_title:t.data.data.banner_title,status:t.data.data.status,banner_img:t.data.data.banner_img})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(d.a,{sm:"12"},u.a.createElement("div",null,u.a.createElement(f.a,{listTag:"div"},u.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),u.a.createElement(p.a,{href:"/app/pagesetup/banner/bannerList",tag:"a"},"Banner List"),u.a.createElement(p.a,{active:!0},"Edit Banner"))))),u.a.createElement(b.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(d.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Banner")),u.a.createElement(d.a,null,u.a.createElement(R.b,{render:function(e){var t=e.history;return u.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/pagesetup/banner/bannerList")}},"Back")}}))),u.a.createElement(g.a,null,u.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(m.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Title"),u.a.createElement(E.a,{required:!0,type:"text",name:"banner_title",placeholder:"",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,null,"Image"),u.a.createElement(E.a,{required:!0,type:"file",name:"banner_img",onChange:this.onChangeHandler})),u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(y.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),u.a.createElement(m.a,null,u.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update")))))))}}]),a}(c.Component)},795:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),m=a(4),d=a.n(m),f=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,l=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,p),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),E=u||("select"===s||"textarea"===s?s:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===s?O+="-file":"range"===s?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(f.mapToCssModules)(d()(t,c&&"is-invalid",i&&"is-valid",!!l&&"form-control-"+l,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},798:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(0),l=a.n(s),i=a(1),o=a.n(i),c=a(4),u=a.n(c),m=a(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],f=o.a.oneOfType([o.a.number,o.a.string]),p=o.a.oneOfType([o.a.bool,o.a.string,o.a.number,o.a.shape({size:f,order:f,offset:f})]),b={children:o.a.node,hidden:o.a.bool,check:o.a.bool,size:o.a.string,for:o.a.string,tag:m.tagPropType,className:o.a.string,cssModule:o.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:o.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,s=e.hidden,i=e.widths,o=e.tag,c=e.check,f=e.size,p=e.for,b=Object(r.a)(e,d),h=[];i.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var s,l=!n;if(Object(m.isObject)(r)){var i,o=l?"-":"-"+t+"-";s=g(l,t,r.size),h.push(Object(m.mapToCssModules)(u()(((i={})[s]=r.size||""===r.size,i["order"+o+r.order]=r.order||0===r.order,i["offset"+o+r.offset]=r.offset||0===r.offset,i))),a)}else s=g(l,t,r),h.push(s)}}));var v=Object(m.mapToCssModules)(u()(t,!!s&&"sr-only",!!c&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return l.a.createElement(o,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v},799:function(e,t,a){"use strict";var n=a(5),r=a(9),s=a(11),l=a(12),i=a(0),o=a.n(i),c=a(1),u=a.n(c),m=a(4),d=a.n(m),f=a(3),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,l=e.tag,i=e.innerRef,c=Object(r.a)(e,p),u=Object(f.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(l,Object(n.a)({},c,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},830:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(91);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,s=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=138.2fe80949.chunk.js.map