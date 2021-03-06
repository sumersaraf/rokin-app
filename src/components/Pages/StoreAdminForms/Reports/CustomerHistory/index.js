import React from 'react';
// import json from './data.json';
// import Forms from './../Forms';
// import { getCustomerHistory, addBeacon } from './../../../../../api';
import ModalPopover from './../../../../ModalPopover';
import { IoMdCloseCircleOutline, IoMdCreate } from 'react-icons/io'

const getCustomerHistory = {
  "error": false,
  "data": [
    {
      "customer_id": "",
      "customer_name": "",
      "customer_email": "",
      "customer_type": "new/returning",
      "customer_source": "",
      "arrived_on": "timestamp",
      "left_on": "timestamp",
      "engagement_type": "can be treasurehunt/quiz/offer",
      "engagement_id": "game or offer id",
      "engagement_status": "win/loose in case if game, in case of offer it can be redeemed/ not redeemed"
    }
  ]
}
class CustomerHistory extends React.Component {
  constructor(props) {
    super(props);

    this.selecteId = null;
    this.state = {
      data: [],
      editData: {
        // name: '',
        // address: '',
        // beacon_room: '',
        // location: '',
        // major: '',
        // minor: '',
        // offer_beacon: false
        name: '',
        date: '',
        action: '',
        actionType: '',
        message: '',
        offerMeassage: ''
      }
    }
  };

  componentDidMount() {
    //   // this.editModal.handleShow();
    //   console.log('did', sessionStorage);
    //   getCustomerHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => this.setState({ data: res.data }))
    // getCustomerHistory.data => this.setState({ data: data });

  }

  //   // login().then((res) => console.log('res', res));
  // }
  // onModalClose = () => {
  //   this.selecteId = null;
  //   this.setState({
  //     editData: {
  //       name: '',
  //       address: '',
  //       beacon_room: '',
  //       location: '',
  //       major: '',
  //       minor: '',
  //       offer_beacon: false
  //     }
  //   })
  // }
  // onSumit = () => {
  //   const beacon_name = this.name.value;
  //   const beacon_uuid = this.uuid.value;
  //   const mac_address = this.address.value;
  //   const beacon_room = this.room.value;
  //   const offer_beacon = this.select.options[this.select.selectedIndex].value;
  //   const major = this.major.value;
  //   const minor = this.minor.value;
  //   let a = { type: 'add' }
  //   console.log('selected id', this.selecteId)
  //   if (this.selecteId !== null) {
  //     a = {
  //       id: this.state.data[this.selecteId].id,
  //       type: 'update'
  //     }
  //   }

  //   const data = {
  //     ...a,
  //     beacon_name,
  //     beacon_uuid,
  //     mac_address,
  //     offer_beacon: offer_beacon === 'true' ? true : false,
  //     major,
  //     minor,
  //     beacon_room,
  //     outlet_id: "dcba56d9-3801-40c8-9c13-8a77c39de24f",
  //   }

  //   addBeacon(data).then((res) => getCustomerHistory({ outlet_id: 'dcba56d9-3801-40c8-9c13-8a77c39de24f' }).then((res) => { this.setState({ data: res.data }); this.editModal.handleHide() }));

  // }
  // openEditModal = (i) => {
  //   if (i !== undefined) {
  //     this.selecteId = i;
  //     console.log('open edit', i, this.state.data[i])
  //     const editData = this.state.data[i];
  //     this.setState({ editData })
  //     console.log('edit', editData, this.state)
  //   }
  //   console.log('bahar', this.state.editData.category)
  //   this.editModal.handleShow();
  // }
  // onDelete = (i) => {
  //   console.log('dekhte hai')
  // }
  render() {
    const headers = [
      'NAME',
      'EMAIL',
      'TYPE',
      'SOURCE',
      'ARRIVED ON',
      'LEFT ON',
      'ENGAGEMENT TYPE',
      'ENGAGEMENT STATUS'
    ];
    return (
      <React.Fragment >
        <div>
          <div className="container">
            <div className="table-wrapper">
              <div className="table-title">
                <div className="row">
                  <div className="col-sm-6">
                    <h2>Customer History</h2>
                  </div>
                  {/* <div className="col-sm-6">
                    <a onClick={() => this.openEditModal()} className="btn btn-success"><span>Add New Beacon</span></a>
                    {/* <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Delete</span></a> */}
                  {/* </div> */}
                </div>
                <div className="panel-heading" style={{ padding: '10px 10px', height: 'auto' }}>
                  <label htmlFor="user">Customer Name:</label>
                  <input ng-model="UHC.user" type="text" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-empty" />
                  &nbsp;
                  <label htmlFor="startDate">Start Date:</label>
                  <input ng-model="UHC.startDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <label htmlFor="endDate">End Date:</label>
                  <input ng-model="UHC.endDate" type="date" close-on-select="false" className="ng-pristine ng-untouched ng-valid ng-not-empty" />
                  &nbsp;
                  <button style={{ padding: '1px' }} className="btn-primary col-md-1 butnadd submit_form submit_dis floatRight add_button_custom" ng-click="UHC.getUserHistory()">Submit</button>

                  {/* <h3 class="panel-title">Payment Form</h3> */}
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    {
                      headers && headers.length ?
                        headers.map((header) => <th style={{ width: '145px' }}>{header}</th>) : null
                    }
                  </tr>
                </thead>
                <tbody>
                  {/* {this.state.data && this.state.data.length ?
                    this.state.data.map((d, i) => */}
                  {getCustomerHistory.data.map((d, i) =>
                    <tr key="">
                      <td>{d.customer_name}</td>
                      <td>{d.customer_email}</td>
                      <td>{d.customer_type}</td>
                      <td>{d.customer_source}</td>
                      <td>{d.arrived_on}</td>
                      <td>{d.left_on}</td>
                      <td>{d.engagement_type}</td>
                      <td>{d.engagement_status}</td>
                      {/* <td>
                          <a style={{ fontSize: '30px', marginRight: '20px' }} title="Edit" onClick={() => this.openEditModal(i)} className="edit"><IoMdCreate /></a>
                          <a style={{ fontSize: '30px' }} title="Delete" className="delete"><IoMdCloseCircleOutline /></a>
                        </td> */}
                    </tr>
                  )}
                  {/* ) : null
                  } */}
                </tbody>
              </table>
            </div>
          </div>
          {/* <ModalPopover ref={test => this.editModal = test} onClose={this.onModalClose} modalId="editOrgModal" header="Beacon" isModal="true">
            <>
              <div className="form-group">
                <label>Beacon Name</label>
                <input ref={name => this.name = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, name: e.target.value } })} value={this.state.editData.name || ''} required placeholder="Please enter Beacon Name" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input ref={name => this.address = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, address: e.target.value } })} value={this.state.editData.address || ''} required placeholder="Please enter Address" />
              </div>
              <div className="form-group">
                <label>Room</label>
                <input ref={name => this.room = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_room: e.target.value } })} value={this.state.editData.beacon_room || ''} required placeholder="Please enter Beacon Room" />
              </div>
              <div className="form-group">
                <label>Beacon UUID</label>
                <input ref={name => this.uuid = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, beacon_uuid: e.target.value } })} value={this.state.editData.beacon_uuid || ''} required placeholder="Please enter UUID" />
              </div>
              <div className="form-group">
                <label>Major</label>
                <input ref={name => this.major = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, major: e.target.value } })} value={this.state.editData.major || ''} required placeholder="Please enter Major" />
              </div>
              <div className="form-group">
                <label>Minor</label>
                <input ref={name => this.minor = name} type="text" className="form-control" onChange={(e) => this.setState({ editData: { ...this.state.editData, minor: e.target.value } })} value={this.state.editData.minor || ''} required placeholder="Please enter Minor" />
              </div>
              <select ref={sel => this.select = sel} style={{ height: '38px', width: '100%', marginBottom: '20px', marginTop: '10px', border: '1px solid lightgrey' }} >
                <option value="0" >Is offered Beacon</option>
                <option value="true" selected={this.state.editData.offer_beacon == true}>Yes</ option>
                <option value="false" selected={this.state.editData.offer_beacon == false}>No</option>
              </select>
              <div style={{ padding: '20px 55px' }} className="modal-footer">
                <div className="row">
                  <div className="col-md-6">
                    <input type="button" className="btn btn-secondary" data-dismiss="modal" defaultValue="Cancel" />
                  </div>
                  <div className="col-md-6">
                    <input onClick={this.onSumit} type="submit" className="btn btn-primary" defaultValue="Add" />

                  </div>
                </div>
              </div>
            </>
          </ModalPopover> */}
          {/* <div id="deleteEmployeeModal" className="modal fade">
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Employee</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </React.Fragment >
    )
  }
}

export default CustomerHistory;
