(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[243],{2118:function(a,e,t){"use strict";t.r(e);var n=t(13),l=t(14),s=t(16),c=t(15),r=t(0),m=t.n(r),i=t(1093),h=t(1094),o=t(1091),d=t(1092),u=t(1095),E=t(173),p=t(1098),b=(t(822),t(56)),f=t(117),v=function(a){Object(s.a)(t,a);var e=Object(c.a)(t);function t(a){var l;return Object(n.a)(this,t),(l=e.call(this,a)).state={data:{}},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var a=this,e=this.props.match.params.id;f.a.get("/admin/getoneRashi/".concat(e)).then((function(e){console.log(e.data.data),a.setState({data:e.data.data})})).catch((function(a){console.log(a)}))}},{key:"render",value:function(){var a;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(h.a,{sm:"12"},m.a.createElement("div",null,m.a.createElement(o.a,{listTag:"div"},m.a.createElement(d.a,{href:"/analyticsDashboard",tag:"a"},"Home"),m.a.createElement(d.a,{href:"/app/rashimanagement/rashi/rashiList",tag:"a"},"Rashi List"),m.a.createElement(d.a,{active:!0},"View Rashi"))))),m.a.createElement(u.a,{className:"overflow-hidden app-ecommerce-details"},m.a.createElement(i.a,{className:"m-2"},m.a.createElement(h.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Rashi")),m.a.createElement(h.a,null,m.a.createElement(b.b,{render:function(a){var e=a.history;return m.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return e.push("/app/rashimanagement/rashi/rashiList")}},"Back")}}))),m.a.createElement(p.a,{className:"pb-0"},m.a.createElement(i.a,{className:"mb-5 mt-2"},m.a.createElement(h.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Title"),m.a.createElement("h6",{className:""}," ",this.state.data.rashi_title)),m.a.createElement(h.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Category"),m.a.createElement("h6",{className:""}," ",null===(a=this.state.data.category)||void 0===a?void 0:a.title)),m.a.createElement(h.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Date"),m.a.createElement("h6",{className:""}," ",this.state.data.date)),m.a.createElement(h.a,{md:"6",sm:"12",className:"mb-4"},m.a.createElement("h4",null,"Description"),m.a.createElement("h6",{className:""}," ",this.state.data.desc)))))))}}]),t}(m.a.Component);e.default=v},822:function(a,e,t){}}]);
//# sourceMappingURL=243.8b34f310.chunk.js.map