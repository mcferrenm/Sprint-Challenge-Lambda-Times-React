import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup
} from "reactstrap";

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleLogIn = () => {
    localStorage.setItem("username", "user");
    this.props.handleAuth();
    this.toggleModal();
  };

  render() {
    return (
      <div>
        {this.props.isUserLoggedIn ? (
          <Button color="danger" onClick={this.props.handleAuth}>
            Logout
          </Button>
        ) : (
          <Button color="danger" onClick={this.toggleModal}>
            Login
          </Button>
        )}

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>
            Login to Lambda Times
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleLogIn}>
              Enter
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
  isUserLoggedIn: PropTypes.bool,
  handleAuth: PropTypes.func
};

export default LoginModal;
