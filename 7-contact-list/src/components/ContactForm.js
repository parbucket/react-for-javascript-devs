import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div>
        Contact form type: {this.props.params.type}
      </div>
    );
  }
}

export default ContactForm;
