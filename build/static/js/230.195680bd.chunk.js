(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[230],{2112:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(830),l=t(51),s=t(13),r=t(14),o=t(16),c=t(15),m=t(0),i=t.n(m),d=t(1093),u=t(1094),g=t(1091),p=t(1092),b=t(1095),h=t(173),f=t(1098),E=t(799),v=t(798),y=t(795),N=t(783),C=t(117),S=t(807),k=t.n(S),H=t(56),j=t(825),F=t(824),O=t(806),x=t.n(O),w=(t(800),t(812),t(803),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onEditorStateChange=function(e){r.setState({editorState:e,desc:x()(Object(j.convertToRaw)(e.getCurrentContent()))})},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files}),r.setState({selectedName:e.target.files.name}),console.log(e.target.files)},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("desc",r.state.desc),a.append("status",r.state.status);var t,l=Object(n.a)(r.state.selectedFile);try{for(l.s();!(t=l.n()).done;){var s=t.value;null!==r.state.selectedFile&&a.append("img",s,s.name)}}catch(g){l.e(g)}finally{l.f()}var o,c=Object(n.a)(a.values());try{for(c.s();!(o=c.n()).done;){var m=o.value;console.log(m)}}catch(g){c.e(g)}finally{c.f()}var i,d=Object(n.a)(a.keys());try{for(d.s();!(i=d.n()).done;){var u=i.value;console.log(u)}}catch(g){d.e(g)}finally{d.f()}C.a.post("admin/add_blog_category",a).then((function(e){console.log(e.data),k()("Success!","Submitted SuccessFull!","success"),r.props.history.push("/app/blogmngment/blogcategory/blogCateList")})).catch((function(e){console.log(e)}))},r.state={name:"",desc:"",editorState:j.EditorState.createEmpty(),status:"",img:"",selectedFile:void 0,selectedName:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{sm:"12"},i.a.createElement("div",null,i.a.createElement(g.a,{listTag:"div"},i.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),i.a.createElement(p.a,{href:"/app/blogmngment/blogcategory/blogCateList",tag:"a"},"Blog Category List"),i.a.createElement(p.a,{active:!0},"Add Blog Category"))))),i.a.createElement(b.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(u.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Blog Category")),i.a.createElement(u.a,null,i.a.createElement(H.b,{render:function(e){var a=e.history;return i.a.createElement(h.a,{className:" btn btn-success float-right",onClick:function(){return a.push("/app/blogmngment/blogcategory/blogCateList")}},"Back")}}))),i.a.createElement(f.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,null,"Name"),i.a.createElement(y.a,{required:!0,type:"text",name:"name",placeholder:"",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(u.a,{lg:"4",md:"4",sm:"4",className:"mb-2"},i.a.createElement(v.a,null,"Blog Image"),i.a.createElement(v.a,null,"Image"),i.a.createElement(N.a,{type:"file",onChange:this.onChangeHandler})),i.a.createElement(u.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},i.a.createElement(v.a,null,"Description"),i.a.createElement(F.Editor,{toolbarClassName:"demo-toolbar-absolute",wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",editorState:this.state.editorState,onEditorStateChange:this.onEditorStateChange,toolbar:{options:["inline","blockType","fontSize","fontFamily"],inline:{options:["bold","italic","underline","strikethrough","monospace"],bold:{className:"bordered-option-classname"},italic:{className:"bordered-option-classname"},underline:{className:"bordered-option-classname"},strikethrough:{className:"bordered-option-classname"},code:{className:"bordered-option-classname"}},blockType:{className:"bordered-option-classname"},fontSize:{className:"bordered-option-classname"},fontFamily:{className:"bordered-option-classname"}}}),i.a.createElement("br",null)),i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(v.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(d.a,null,i.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add")))))))}}]),t}(m.Component))},803:function(e,a,t){}}]);
//# sourceMappingURL=230.195680bd.chunk.js.map