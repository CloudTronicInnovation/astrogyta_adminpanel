// import React from "react";
// import {
//   Card,
//   CardBody,
//   Input,
//   Row,
//   Col,
//   UncontrolledDropdown,
//   DropdownMenu,
//   DropdownItem,
//   DropdownToggle,
//   Button,
// } from "reactstrap";
// import axiosConfig from "../../../axiosConfig";
// import { ContextLayout } from "../../../utility/context/Layout";
// import { AgGridReact } from "ag-grid-react";
// import { Edit, Trash2, ChevronDown } from "react-feather";
// import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
// import "../../../assets/scss/pages/users.scss";
// import { Route } from "react-router-dom";

// class ChatList extends React.Component {
//   state = {
//     rowData: [],
//     paginationPageSize: 20,
//     currenPageSize: "",
//     getPageSize: "",
//     defaultColDef: {
//       sortable: true,
//       editable: true,
//       resizable: true,
//       suppressMenu: true,
//     },
//     columnDefs: [
//       {
//         headerName: "S.No",
//         valueGetter: "node.rowIndex + 1",
//         field: "node.rowIndex + 1",
//         width: 100,
//         filter: true,
//         // checkboxSelection: true,
//         // headerCheckboxSelectionFilteredOnly: true,
//         // headerCheckboxSelection: true,
//       },
//       // {
//       //   headerName: "Code",
//       //   field: "product_img",
//       //   filter: false,
//       //   width: 120,
//       //   cellRendererFramework: (params) => {
//       //     return (
//       //       <div className="d-flex align-items-center cursor-pointer">
//       //         <img
//       //           className="rounded-circle  mr-4"
//       //           src={params.data?.product_img}
//       //           alt=" brand"
//       //           height="40"
//       //           width="40"
//       //         />
//       //       </div>
//       //     );
//       //   },
//       // },
//       {
//         headerName: "Chat Code",
//         field: "offer_code",
//         filter: true,
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="">
//               <span>{params.data.offer_code}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Chat Title",
//         field: "CouponTitle",
//         filter: true,
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="">
//               <span>{params.data.CouponTitle}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Product Name",
//         field: "product_name",
//         filter: true,
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="">
//               <span>{params.data.product?.product_name}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Start Date",
//         field: "startDate",
//         filter: true,
//         width: 180,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="">
//               <span>{params.data.startDate}</span>
//             </div>
//           );
//         },
//       },

//       {
//         headerName: "Expire On",
//         field: "expireOn",
//         filter: true,
//         width: 180,
//         cellRendererFramework: (params) => {
//           return (
//             <div className=" mr-4">
//               <span>{params.data.expireOn}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Usage Limit",
//         field: "usage_limit",
//         filter: true,
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className=" mr-4">
//               <span>{params.data.usage_limit}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Amont",
//         field: "amount",
//         filter: true,
//         width: 120,
//         cellRendererFramework: (params) => {
//           return (
//             <div className=" mr-4">
//               <span>{params.data.amount}</span>
//             </div>
//           );
//         },
//       },
//       {
//         headerName: "Description",
//         field: "description",
//         filter: true,
//         width: 200,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="d-flex align-items-center cursor-pointer">
//               <span>{params.data.description}</span>
//             </div>
//           );
//         },
//       },

//       {
//         headerName: "Status",
//         field: "status",
//         filter: true,
//         width: 150,
//         cellRendererFramework: (params) => {
//           return params.value === "Active" ? (
//             <div className="badge badge-pill badge-success ">
//               {params.data.status}
//             </div>
//           ) : params.value === "Inactive" ? (
//             <div className="badge badge-pill badge-danger">
//               {params.data.status}
//             </div>
//           ) : null;
//         },
//       },
//       {
//         headerName: "Actions",
//         field: "transactions",
//         width: 150,
//         cellRendererFramework: (params) => {
//           return (
//             <div className="actions cursor-pointer">
//               <Route
//                 render={({ history }) => (
//                   <Edit
//                     className="mr-50"
//                     size={15}
//                     color="blue"
//                     onClick={() =>
//                       history.push(`/app/coupons/editCoupon/${params.data._id}`)
//                     }
//                   />
//                 )}
//               />
//               <Trash2
//                 size={15}
//                 color="red"
//                 onClick={() => {
//                   let selectedData = this.gridApi.getSelectedRows();
//                   this.runthisfunction(params.data._id);
//                   this.gridApi.updateRowData({ remove: selectedData });
//                 }}
//               />
//             </div>
//           );
//         },
//       },
//     ],
//   };

//   async componentDidMount() {
//     await axiosConfig.get("/getcoupon").then((response) => {
//       let rowData = response.data.data;
//       console.log(rowData);
//       this.setState({ rowData });
//     });
//   }

//   async runthisfunction(id) {
//     console.log(id);
//     await axiosConfig.get(`/delcoupon/${id}`).then((response) => {
//       console.log(response);
//     });
//   }

//   onGridReady = (params) => {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;
//     this.setState({
//       currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
//       getPageSize: this.gridApi.paginationGetPageSize(),
//       totalPages: this.gridApi.paginationGetTotalPages(),
//     });
//   };

//   updateSearchQuery = (val) => {
//     this.gridApi.setQuickFilter(val);
//   };

//   filterSize = (val) => {
//     if (this.gridApi) {
//       this.gridApi.paginationSetPageSize(Number(val));
//       this.setState({
//         currenPageSize: val,
//         getPageSize: val,
//       });
//     }
//   };

//   render() {
//     const { rowData, columnDefs, defaultColDef } = this.state;
//     return (
//       <div>
//         <Breadcrumbs
//           breadCrumbTitle="Chat List"
//           breadCrumbParent="Home"
//           breadCrumbActive="Chat List"
//         />

//         <Row className="app-user-list">
//           <Col sm="12"></Col>
//           <Col sm="12">
//             <Card>
//               <Row className="m-2">
//                 <Col>
//                   <h1 col-sm-6 className="float-left">
//                     Chat List
//                   </h1>
//                 </Col>
//                 <Col>
//                   <Route
//                     render={({ history }) => (
//                       <Button
//                         className=" btn btn-success float-right"
//                         onClick={() => history.push("/app/coupons/addcoupons")}
//                       >
//                         Add New Chat
//                       </Button>
//                     )}
//                   />
//                 </Col>
//               </Row>
//               <CardBody>
//                 {this.state.rowData === null ? null : (
//                   <div className="ag-theme-material w-100 my-2 ag-grid-table">
//                     <div className="d-flex flex-wrap justify-content-between align-items-center">
//                       <div className="mb-1">
//                         <UncontrolledDropdown className="p-1 ag-dropdown">
//                           <DropdownToggle tag="div">
//                             {this.gridApi
//                               ? this.state.currenPageSize
//                               : "" * this.state.getPageSize -
//                                 (this.state.getPageSize - 1)}{" "}
//                             -{" "}
//                             {this.state.rowData.length -
//                               this.state.currenPageSize *
//                                 this.state.getPageSize >
//                             0
//                               ? this.state.currenPageSize *
//                                 this.state.getPageSize
//                               : this.state.rowData.length}{" "}
//                             of {this.state.rowData.length}
//                             <ChevronDown className="ml-50" size={15} />
//                           </DropdownToggle>
//                           <DropdownMenu right>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(20)}
//                             >
//                               20
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(50)}
//                             >
//                               50
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(100)}
//                             >
//                               100
//                             </DropdownItem>
//                             <DropdownItem
//                               tag="div"
//                               onClick={() => this.filterSize(134)}
//                             >
//                               134
//                             </DropdownItem>
//                           </DropdownMenu>
//                         </UncontrolledDropdown>
//                       </div>
//                       <div className="d-flex flex-wrap justify-content-between mb-1">
//                         <div className="table-input mr-1">
//                           <Input
//                             placeholder="search..."
//                             onChange={(e) =>
//                               this.updateSearchQuery(e.target.value)
//                             }
//                             value={this.state.value}
//                           />
//                         </div>
//                         <div className="export-btn">
//                           <Button.Ripple
//                             color="primary"
//                             onClick={() => this.gridApi.exportDataAsCsv()}
//                           >
//                             Export as CSV
//                           </Button.Ripple>
//                         </div>
//                       </div>
//                     </div>
//                     <ContextLayout.Consumer>
//                       {(context) => (
//                         <AgGridReact
//                           gridOptions={{}}
//                           rowSelection="multiple"
//                           defaultColDef={defaultColDef}
//                           columnDefs={columnDefs}
//                           rowData={rowData}
//                           onGridReady={this.onGridReady}
//                           colResizeDefault={"shift"}
//                           animateRows={true}
//                           floatingFilter={false}
//                           pagination={true}
//                           paginationPageSize={this.state.paginationPageSize}
//                           pivotPanelShow="always"
//                           enableRtl={context.state.direction === "rtl"}
//                         />
//                       )}
//                     </ContextLayout.Consumer>
//                   </div>
//                 )}
//               </CardBody>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     );
//   }
// }

// export default ChatList;
import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import { ContextLayout } from "../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown } from "react-feather";
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import "../../../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Chatpage from "./Chatpage";
import swal from "sweetalert";

class ChatList extends React.Component {
  state = {
    rowData: [],
    AstroId: "",
    UserId: "",
    astrolist: [],
    ChatAstro: [],
    mode: false,
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    userlist: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
  };

  async componentDidMount() {
    axiosConfig.get(`/admin/alluser`).then((response) => {
      let userlist = response.data.data;
      console.log(userlist);
      this.setState({ userlist: userlist });
    });
  }

  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      <div>
        <Breadcrumbs
          breadCrumbTitle="Chat List"
          breadCrumbParent="Home"
          breadCrumbActive="Chat List"
        />

        <Row className="app-user-list">
          <Col sm="12">
            <Card>
              <Row className="m-2">
                <Col lg="3" md="3" sm="12">
                  <label for="cars">Choose User</label>
                  <select
                    onChange={(e) => {
                      localStorage.setItem("Chat_user_id", e.target.value);
                      this.setState({ UserId: e.target.value });
                      axiosConfig
                        .get(`/user/getroomid/${e.target.value}`)
                        .then((res) => {
                          this.setState({ ChatAstro: res.data.data });
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                      console.log(e.target.value);
                    }}
                    className="form-control"
                    name="cars"
                    id="cars"
                  >
                    <option value="volvo">Select User</option>
                    {this.state.userlist.length > 0 ? (
                      <>
                        {this.state.userlist?.map((value) => (
                          <>
                            <option key={value?._id} value={value?._id}>
                              {value?.fullname}
                            </option>
                          </>
                        ))}
                      </>
                    ) : null}
                  </select>
                </Col>
                <Col lg="3" md="3" sm="12">
                  <label for="cars">Choose astrologer</label>
                  <select
                    onChange={(e) => {
                      console.log(e.target.value);
                      this.setState({ AstroId: e.target.value });
                      localStorage.setItem("Chat_astro_id", e.target.value);
                    }}
                    className="form-control"
                    name="cars"
                    id="cars"
                  >
                    <option>User Chat with</option>
                    {this.state.ChatAstro?.length > 0 ? (
                      <>
                        {this.state.ChatAstro?.map((value) => (
                          <>
                            <option
                              key={value?._id}
                              value={value?.astroid?._id}
                            >
                              {value?.astroid?.fullname}
                            </option>
                          </>
                        ))}
                      </>
                    ) : null}
                  </select>
                </Col>
              </Row>

              <>
                <Row>
                  <div className="container">
                    <Chatpage
                      userlist={this.state.UserId}
                      ChatAstro={this.state.AstroId}
                    />
                  </div>
                </Row>
              </>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChatList;
