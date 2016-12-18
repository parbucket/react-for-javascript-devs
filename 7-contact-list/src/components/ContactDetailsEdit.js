import React, { Component } from 'react';

class ContactDetailsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contact.name,
      email: props.contact.email,
      title: props.contact.title,
      avatar: props.contact.avatar,
      notes: props.contact.notes
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleAvatarChange = this.handleAvatarChange.bind(this);
    this.handleNotesChange = this.handleNotesChange.bind(this);
    this.handleContactEdit = this.handleContactEdit.bind(this);
  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  handleEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  handleAvatarChange(e) {
    this.setState({
      avatar: e.target.value
    });
  }
  handleNotesChange(e) {
    this.setState({
      notes: e.target.value
    });
  }
  handleContactEdit() {
    const { name, email, title, avatar, notes } = this.state;
    const newContact = {
      id: this.props.contact.id,
      name: name,
      email: email,
      title: title,
      avatar: avatar,
      notes: notes
    };
    this.props.onSaveEdits(newContact);
  }
  render() {
    return (
      <div className="card card-edit">
          <div className="card-body">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                onChange={this.handleNameChange}
                value={this.state.name}
                className="form-input"
                type="text"
                placeholder="Name" />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                onChange={this.handleEmailChange}
                value={this.state.email}
                className="form-input"
                type="text"
                placeholder="Email" />
            </div>
            <div className="form-group">
              <label className="form-label">Title</label>
              <input
                onChange={this.handleTitleChange}
                value={this.state.title}
                className="form-input"
                type="text"
                placeholder="Title" />
            </div>
            <div className="form-group">
              <label className="form-label">Avatar url</label>
              <input
                onChange={this.handleAvatarChange}
                value={this.state.avatar}
                className="form-input"
                type="text"
                placeholder="Avatar url" />
            </div>
            <div className="form-group">
              <label className="form-label">Notes</label>
              <textarea
                onChange={this.handleNotesChange}
                value={this.state.notes}
                className="form-input"
                type="text"
                placeholder="Type notes here" />
            </div>
          </div>
          <div className="card-footer">
              <div className="btn-group btn-group-block float-right">
                <button
                  onClick={this.props.cancelEdit}
                  className="btn">Cancel</button>
                <button
                  onClick={this.handleContactEdit}
                  className="btn btn-primary">Save</button>
              </div>
          </div>
        </div>
    );
  }
}

ContactDetailsEdit.contextTypes = {
  router: React.PropTypes.object
};

export default ContactDetailsEdit;
