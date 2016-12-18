import React from 'react';

import ContactLineItem from './ContactLineItem';

const ContactsList = (props) => {
  if(props.contacts) {
    return (
      <ul>
        {props.contacts.map(c => {
          return <ContactLineItem
                    key={c.id}
                    selectContact={props.selectContact}
                    contact={c} />
        })}
      </ul>
    );
  } else {
    return <h2>Loading</h2>
  }
}

export default ContactsList;
