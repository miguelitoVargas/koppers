import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout, Cascader, Form, Button, Input, InputNumber, Upload, Icon, message, Row, Menu, Table } from 'antd'
import { Link, Redirect, Route, Switch } from 'react-router-dom'
import SearchBar from '../containers/SearchBar'
import { uploadFormData } from '../actions/index'

import '../styles/entriesForm.css'
const FormItem = Form.Item
const MenuItem = Menu.Item
const { Header, Footer, Sider, Content } = Layout

const vuforiaDataBaseNames = [{
  value: 'item1',
  label: 'item1',
},
{
  value: 'item2',
  label: 'item2',

}]

const assetBundleUrls = [{
  value: 'item1',
  label: 'item1',
},
{
  value: 'item2',
  label: 'item2',

}]

class EntriesForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {
        firstname: {
          value: 'miguel'
        },
        lastname: {
          value: 'vargas'
        },
        age: {
          value: ''
        },
        position: {
          value: ''
        },
        team: {
          value: ''
        },
        club: {
          value: ''
        },
        area: {
          value: ''
        },
      },
      loading: false,
      imageMarkerUrl: '',
      imagePhotoUrl: '',
      collapsed: false,
    }

    this.onCollapse = this.onCollapse.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderFormData = this.renderFormData.bind(this);
  }

  componentDidMount() {
    console.log('mounted form', this.props, this.state)
  }
  //---- HANDLERS/CALLBACKS
  handleFormChange = (changedFields) => {
    /*    this.setState(({ fields }) => ({
      fields: { ...fields, ...changedFields },
      }));*/
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        //      console.log('You can safely upload this values: ', values);
        this.props.dispatch(uploadFormData(values))
      }
    });
  }

  photoUploadChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imagePhotoUrl: imageUrl,
        loading: false,
      }));
    }
  }

  markerUploadChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageMarkerUrl: imageUrl,
        loading: false,
      }));
    }
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  menuItemOnClick = (obj) => {
    console.log('menuitem', obj);

    return <Redirect to="/form" />
    

  }
  //------- render helpers
  renderForm() {
    const { getFieldDecorator } = this.props.form
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageMarkerUrl, imagePhotoUrl } = this.state 
    return (

      <Form 
        className="formContainer"
        onChange={this.handleFormChange}
        onSubmit={this.handleFormSubmit}
      >
        <Row>
          <FormItem label="FirstName">
            { 
            getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Lastname">
            {
            getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Last Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Age">
            { 
            getFieldDecorator('age', {
            rules: [{ required: true, message: 'age is required!' }],
            })(<InputNumber />)}
          </FormItem>
          <FormItem label="Position">
            {
            getFieldDecorator('position', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Team">
            { 
            getFieldDecorator('team', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Club">
            { 
            getFieldDecorator('club', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Area">
            { 
            getFieldDecorator('area', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Marker">
            {
            getFieldDecorator('marker', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(
            <Upload
              name="marker"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="//jsonplaceholder.typicode.com/posts/"
              beforeUpload={beforeUpload}
              onChange={this.markerUploadChange}
            >
              {imageMarkerUrl ? <img src={imageMarkerUrl} alt="marker" /> : uploadButton}
            </Upload>
            )}
          </FormItem>
          <FormItem label="Photo">
            {
            getFieldDecorator('photo', {
            rules: [{ required: false, message: 'photo  is required!' }],
            })(
            <Upload
              name="photo"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="//jsonplaceholder.typicode.com/posts/"
              beforeUpload={beforeUpload}
              onChange={this.photoUploadChange}
            >
              {imagePhotoUrl ? <img src={imagePhotoUrl} alt="photo" /> : uploadButton}
            </Upload>
            )}
          </FormItem>
          <FormItem label="3DModel URL">
            { 
            getFieldDecorator('modelurl', {
            rules: [{ required: false, message: 'First Name is required!' }],
            })(<Input />)}
          </FormItem>
          <FormItem label="Vuforia Database">
            {
            getFieldDecorator('vuforianame', {
            rules: [{ required: true, message: 'a vuforia database is needed'}],
            })(<Cascader options={vuforiaDataBaseNames} />)}
          </FormItem>
          <FormItem label="AssetBundle url">
            {
            getFieldDecorator('assetbundle', {
            rules: [{ required: false, message: 'a vuforia database is needed'}],
            })(<Cascader options={assetBundleUrls} />)}
          </FormItem>
          <FormItem>
            <Button type="default" htmlType="submit">
              Send
            </Button>
          </FormItem>
        </Row>
      </Form>
    )
  }

  renderFormData() {

    const columns = [
      { title: 'Name', dataIndex: 'firstname', key: 'firstname' }, 
      { title: 'Lastname', dataIndex: 'lastname', key: 'lastname' },
      { title: 'Age', dataIndex: 'age', key: 'age' },
      { title: 'Position', dataIndex: 'position', key: 'position' },
      { title: 'Team', dataIndex: 'team', key: 'team' },
      { title: 'Club', dataIndex: 'club', key: 'club' },
      { title: 'Area', dataIndex: 'area', key: 'area' },
      { title: 'Marker', dataIndex: 'marker', key: 'marker', render: url => <img src={url} alt={url} />, width: 150 },
      { title: 'Photo', dataIndex: 'photo', key: 'photo', render: url => <img src={url} alt={url} />, width: 150 },
      { title: '3D Model', dataIndex: 'modelurl', key: 'modelurl', render: url => <img src={url} alt={url} />, width: 150 },
      { title: 'Vuforia Database', dataIndex: 'vuforianame', key: 'vuforianame' },
      { title: 'AssetBundle', dataIndex: 'assetbundle', key: 'assetbundle',render: text => <a href={text}>bundle</a> },
       
    ]
      console.log('props in form data', this.props) 
    return (
      <div>
        <SearchBar  />
        <div className="tableContainer">
          <Table 
            columns={columns} 
            dataSource={this.props.data}
            size="middle" 
          >
          </Table>
        </div>
      </div>
    )
  }

  render() {
    return (
      <Layout>
        <Sider 
          theme="light"
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <MenuItem 
              key="1"
              onClick={this.menuItemOnClick}
            >
              <Link to="/form">
                <Icon type="arrow-right" />
                <span>opcion 1</span>
              </Link>
            </MenuItem>
            <MenuItem 
              key="2"
              onClick={this.menuItemOnClick}
            >
              <Link to="/formdata">
                <Icon type="arrow-right" />
                <span>opcion 2</span>
              </Link>
            </MenuItem>
          </Menu>
        </Sider>
        <Content className="Container">
          <Switch>
            <Route path="/form" component={this.renderForm} />
            <Route path="/formdata" component={this.renderFormData} />
          </Switch>
        </Content>
      </Layout>
    )
  }

}
//---- file loader helpers
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = file.type === 'image/jpeg';
  /*if (!isJPG) {
    message.error('You can only upload JPG file!');
  }*/
  const isPNG = file.type === 'image/png';
  if (!isPNG && !isJPG) {
    message.error('You need to upload either jpg or png');
  }

  /* const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
    }*/
  return isJPG || isPNG;
}

function mapStateToProps(state) {

  return { ...state }
}

export default connect(mapStateToProps)(Form.create()(EntriesForm))
