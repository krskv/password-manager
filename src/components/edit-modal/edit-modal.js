import React, { Component } from "react";
import "./edit-modal.css";

export default class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.entry,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { title, password } = this.state;
    if (title.length && password.length) {
      this.props.onEntryEdit(this.state);
    }
  };

  render() {
    const { title, password } = this.state;

    return (
      <div className="edit-modal">
        <div className="modal-paranja" onClick={this.props.onModalClose} />
        <div className="modal-dialog" role="document">
          <form
            className="login-form d-flex flex-column align-items-center justify-content-start"
            onSubmit={this.onSubmit}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Entry edit</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.onModalClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="login-form-title"
                    placeholder="Title"
                    value={title}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="password"
                    className="form-control"
                    id="login-form-password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmit}
                >
                  Save changes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.props.onModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* {indicator} */}
      </div>
    );
  }
}
