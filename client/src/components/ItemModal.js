import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../action/itemActions';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '' 
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <React.Fragment>
        <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={this.toggle}
        >
          Add Item
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader
            toggle={this.toggle}
          >

          </ModalHeader>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect()(ItemModal);
