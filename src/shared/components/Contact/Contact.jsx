import React from 'react';
import defaultImg from "../../../assets/UserLarge.png";
import PhoneSection from "../PhoneSection/PhoneSection";

const Contact = ({ contact }) => {

  const contactImgUrl = contact.largeImageURL;
  const onErrorImgUrl = defaultImg;

  const onImgError = (ev) => {
    ev.target.src = onErrorImgUrl;
  }

  return(
      <div className="card">
        <img className="card-img-top"
          style={{maxWidth: '350px'}} src={contactImgUrl} />
        <div className="card-body">
          <p className="card-text">UserInfoHere</p>
          <PhoneSection phoneInfo={contact.phone} />
        </div>
      </div>
  );
}

export default Contact;