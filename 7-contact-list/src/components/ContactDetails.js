import React from 'react';

const ContactDetails = (props) => {
  return (
    <div>
    {props.contact
      ? <div className="card">
          <div className="card-header">
            <div className="left">
              <h4 className="card-title">{props.contact.name}</h4>
              <h6 className="card-meta">({props.contact.title})</h6>
              <p>{props.contact.email}</p>
            </div>
            <div className="right">
              <img className="img-responsive rounded" src={`./images/${props.contact.avatar}`} alt={props.contact.name} />
            </div>
          </div>
          <div className="card-body">
              <h5>Notes:</h5>
              <p>{props.contact.notes}</p>
          </div>
          <div className="card-footer">
              <button
                onClick={props.edit}
                className="btn float-right">Edit</button>
          </div>
        </div>
      : <h3>Select a contact to display</h3> }
    </div>

  );
}

export default ContactDetails;
