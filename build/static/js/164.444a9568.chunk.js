(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[164],{2005:function(e,a,t){"use strict";t.r(a);var n=t(51),r=t(13),l=t(14),s=t(16),o=t(15),c=t(0),i=t.n(c),m=t(1095),u=t(1093),d=t(1094),p=t(173),f=t(1098),b=t(799),g=t(798),h=t(795),E=t(117),v=t(56),y=t(794),O=function(e){Object(s.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).changeHandler1=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),E.a.post("/admin/addabout",l.state).then((function(e){console.log(e),l.props.history.push("/app/about/AllaboutUs")})).catch((function(e){console.log(e)}))},l.state={name:"",mobile:"",experience:"",expert:"",language:"",age:"",dealerN:[]},l}return Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(y.a,{breadCrumbTitle:"Astrologer",breadCrumbParent:"Home",breadCrumbActive:"Add Astrologer "}),i.a.createElement(m.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Astrologer")),i.a.createElement(d.a,null,i.a.createElement(v.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/astrology/AstrologerList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Name"),i.a.createElement(h.a,{type:"text",onChange:this.changeHandler,placeholder:"Enter Astrologer Name"})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Mobile"),i.a.createElement(h.a,{type:"text",name:"mobile",value:this.state.mobile,onChange:this.changeHandler,placeholder:"Enter Mobile No."})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Experience"),i.a.createElement(h.a,{type:"text",name:"experience",value:this.state.experience,onChange:this.changeHandler,placeholder:"Experience"})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Age"),i.a.createElement(h.a,{type:"text",name:"age",value:this.state.age,onChange:this.changeHandler,placeholder:"Enter Age"})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Language"),i.a.createElement(h.a,{type:"text",name:"language",value:this.state.language,onChange:this.changeHandler,placeholder:"Enter Astrologer Name"})),i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(g.a,null,"Expart"),i.a.createElement(h.a,{type:"text",placeholder:"Enter Age"}))),i.a.createElement(u.a,null,i.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),t}(i.a.Component);a.default=O},795:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(11),s=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,i=e.invalid,m=e.tag,u=e.addon,b=e.plaintext,g=e.innerRef,h=Object(r.a)(e,f),E=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),y=m||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",y=m||"input"):"file"===l?O+="-file":"range"===l?O+="-range":E&&(O=u?null:"form-check-input"),h.size&&v.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=h.size,delete h.size);var j=Object(p.mapToCssModules)(d()(a,i&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===y||m&&"function"===typeof m)&&(h.type=l),h.children&&!b&&"select"!==l&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(y,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":i}))},a}(c.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},798:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(0),s=t.n(l),o=t(1),c=t.n(o),i=t(4),m=t.n(i),u=t(3),d=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(r.a)(e,d),g=[];o.forEach((function(a,n){var r=e[a];if(delete b[a],r||""===r){var l,s=!n;if(Object(u.isObject)(r)){var o,c=s?"-":"-"+a+"-";l=h(s,a,r.size),g.push(Object(u.mapToCssModules)(m()(((o={})[l]=r.size||""===r.size,o["order"+c+r.order]=r.order||0===r.order,o["offset"+c+r.offset]=r.offset||0===r.offset,o))),t)}else l=h(s,a,r),g.push(l)}}));var E=Object(u.mapToCssModules)(m()(a,!!l&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return s.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:E}))};E.propTypes=b,E.defaultProps=g,a.a=E},799:function(e,a,t){"use strict";var n=t(5),r=t(9),l=t(11),s=t(12),o=t(0),c=t.n(o),i=t(1),m=t.n(i),u=t(4),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,s=e.tag,o=e.innerRef,i=Object(r.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!l&&"form-inline"),t);return c.a.createElement(s,Object(n.a)({},i,{ref:o,className:m}))},a}(o.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g}}]);
//# sourceMappingURL=164.444a9568.chunk.js.map