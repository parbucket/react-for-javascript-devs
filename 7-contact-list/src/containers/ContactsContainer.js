import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import ContactsList from '../components/ContactsList';
import ContactDetails from '../components/ContactDetails';
import ContactDetailsEdit from '../components/ContactDetailsEdit';

class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: true,
      edit: false,
      contacts: [],
      selectedContact: null
    }
    this.selectContact = this.selectContact.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleSaveEdits = this.handleSaveEdits.bind(this);
  }
  componentWillMount() {
    // get username of person who is logged in
    const name = localStorage.getItem('username');
    if(name) {
      this.setState({ username: name })
    } else {
      this.context.router.transitionTo('/login');
    }
  }
  componentDidMount() {
    axios.get('./contacts.json')
      .then(contacts => {
        this.setState({
          contacts: contacts.data
        });
      });
  }
  selectContact(c) {
    this.setState({
      selectedContact: c
    });
  }
  handleLogOut() {
    localStorage.removeItem('username');
    this.setState({
      username: null
    });
    this.context.router.transitionTo('/login');
  }
  toggleEdit() {
    this.setState({
      edit: !this.state.edit
    })
  }
  handleSaveEdits(newContact) {
    const newList = this.state.contacts.map(c => {
      if(c.id === newContact.id) {
        c = newContact;
      }
      return c;
    });
    this.setState({
      contacts: newList,
      selectedContact: newContact
    });
    this.toggleEdit();
  }
  render() {
    return (
      <div>
      {this.state.username
        ? <div className="container">
            <ul className="tab tab-block">
              <li className="tab-item">
                <a onClick={this.handleLogOut}>Log out</a>
              </li>
            </ul>
            <h3 className="text-center">Welcome, {this.state.username}</h3>
            <div className="columns">
              <div className="column col-6">
                <ContactsList
                  selectContact={this.selectContact}
                  contacts={this.state.contacts} />
              </div>
              <div className="column col-6">
                {this.state.edit
                  ? <ContactDetailsEdit
                      cancelEdit={this.toggleEdit}
                      onSaveEdits={this.handleSaveEdits}
                      contact={this.state.selectedContact} />
                  : <ContactDetails
                      edit={this.toggleEdit}
                      contact={this.state.selectedContact} />}
              </div>
            </div>

          </div>
        : <Redirect to="login" />}
      </div>
    );
  }
}


ContactsContainer.contextTypes = {
  router: React.PropTypes.object
};

export default ContactsContainer;
