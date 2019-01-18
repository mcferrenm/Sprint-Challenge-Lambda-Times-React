import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
    this.props.handleAuth();
    this.toggleModal();
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggleModal}>
          {this.props.buttonLabel}
          Login
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>
            Login to Lambda Times
          </ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.handleLogIn}>
              Log In
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

export default LoginModal;
