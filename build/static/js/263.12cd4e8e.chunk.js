(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[263],{2134:function(e,t,a){"use strict";a.r(t);var i=a(13),n=a(14),r=a(16),l=a(15),s=a(0),o=a.n(s),c=a(1095),d=a(1098),u=a(789),p=a(792),f=a(790),g=a(788),m=a(795),h=a(173),b=a(802),v=a(171),S=a(316),z=a(313),w=a(442),y=a(272),E=a(41),N=a.n(E),P=(a(801),a(794)),x=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"Mobile No.",field:"Mobile",width:175,filter:!1,checkboxSelection:!1,headerCheckboxSelectionFilteredOnly:!1,headerCheckboxSelection:!1},{headerName:"Name",field:"firstname",filter:!1,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Email",field:"email",filter:!1,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Customer Enquiry",field:"Customer",filter:!1,width:250},{headerName:"Actions",field:"sortorder",width:150,cellRendererFramework:function(t){return o.a.createElement("div",{className:"actions cursor-pointer"},o.a.createElement(S.a,{className:"mr-50",size:"25px",color:"green"}),o.a.createElement(z.a,{className:"mr-50",size:"25px",color:"blue"}),o.a.createElement(w.a,{className:"mr-50",size:"25px",color:"red",onClick:function(){var a=e.gridApi.getSelectedRows();e.runthisfunction(t.data._id),e.gridApi.updateRowData({remove:a})}}))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;N.a.get("/api/aggrid/data").then((function(t){var a=t.data.data;JSON.stringify(a),e.setState({rowData:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,{breadCrumbTitle:"Help Desk"}),o.a.createElement(c.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(u.a,{className:"p-1 ag-dropdown"},o.a.createElement(p.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(y.a,{className:"ml-50",size:15})),o.a.createElement(f.a,{right:!0},o.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(g.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(m.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(v.a.Consumer,null,(function(t){return o.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(o.a.Component);t.default=x},795:function(e,t,a){"use strict";var i=a(5),n=a(9),r=a(11),l=a(12),s=a(0),o=a.n(s),c=a(1),d=a.n(c),u=a(4),p=a.n(u),f=a(3),g=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,h=e.innerRef,b=Object(n.a)(e,g),v=["radio","checkbox"].indexOf(r)>-1,S=new RegExp("\\D","g"),z=d||("select"===r||"textarea"===r?r:"input"),w="form-control";m?(w+="-plaintext",z=d||"input"):"file"===r?w+="-file":"range"===r?w+="-range":v&&(w=u?null:"form-check-input"),b.size&&S.test(b.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var y=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,w),a);return("input"===z||d&&"function"===typeof d)&&(b.type=r),b.children&&!m&&"select"!==r&&"string"===typeof z&&"select"!==z&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(z,Object(i.a)({},b,{ref:h,className:y,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=263.12cd4e8e.chunk.js.map