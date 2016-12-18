import React from 'react';

const ContactLineItem = (props) => {
  return (
    <li  onClick={() => props.selectContact(props.contact)} className="list-item">
      <figure className="avatar avatar-xl">
        <img src={`./images/${props.contact.avatar}`}
          alt={props.contact.name} />
      </figure>
      <div className="name-email-block">
        <div><h5>{props.contact.name}</h5></div>
        <small>{props.contact.email}</small>
      </div>
    </li>
  );
}

export default ContactLineItem;
