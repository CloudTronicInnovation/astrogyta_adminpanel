(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[246],{2017:function(e,a,t){"use strict";t.r(a),t.d(a,"AddYouTubeVideo",(function(){return N}));var n=t(51),u=t(13),l=t(14),r=t(16),c=t(15),o=t(0),s=t.n(o),m=t(1095),i=t(1093),d=t(1094),b=t(173),h=t(1098),p=t(799),E=t(798),f=t(795),y=t(117),v=(t(800),t(56)),g=t(794),T=(t(812),t(803),t(807)),k=t.n(T),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(u.a)(this,t),(l=a.call(this,e)).changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),y.a.post("/admin/video",l.state).then((function(e){console.log(e.data.data),k()("Success!","Submitted SuccessFull!","success"),l.props.history.push("/app/youtube/youTubeVideoList")})).catch((function(e){console.log(e)}))},l.state={youtube_link:""},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(g.a,{breadCrumbTitle:" YouTube Video",breadCrumbParent:" home",breadCrumbActive:"Add  YouTube Video"}),s.a.createElement(m.a,null,s.a.createElement(i.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add YouTube Video")),s.a.createElement(d.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(b.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/youtube/youTubeVideoList")}},"Back")}}))),s.a.createElement(h.a,null,s.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},s.a.createElement(i.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"12",className:"mb-2"},s.a.createElement(E.a,null,"YouTube ID"),s.a.createElement(f.a,{required:!0,type:"text",name:"youtube_link",placeholder:"Enter YouTube ID",value:this.state.youtube_link,onChange:this.changeHandler}))),s.a.createElement(i.a,null,s.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},s.a.createElement(b.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(o.Component);a.default=N},803:function(e,a,t){}}]);
//# sourceMappingURL=246.32b16711.chunk.js.map