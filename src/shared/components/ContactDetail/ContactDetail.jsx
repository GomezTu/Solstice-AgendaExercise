import React, { Component } from "react";
import Header from '../Table/Header';
import Contact from "../Contact/Contact";

class ContactDetail extends Component {
  render() {
    const { contact } = this.props;

    return(
      <div className='card row justify-content-center'>
        <div className='card-header'>
          <Header title={'Contacts'} isFavorite={contact.isFavorite} to={'/'} />
        </div>
        <div className='card-body'
          style={{marginLeft: 'auto',
          marginRight: 'auto'}}>
          <Contact contact={contact} />
        </div>
      </div>
    );
  }
}

export default ContactDetail;