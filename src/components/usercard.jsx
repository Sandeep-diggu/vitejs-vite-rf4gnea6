import React from 'react';
import './usercard.css'; 

const Usercard = () => {
    const profilePhoto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'; 
    const name = 'kushal';
    const email = 'k@example.com';
    const phone = '9876543210';
    const address = 'rajahmundry,andhrapradesh,india';

    return (
        <div className="usercard">
            <img src={profilePhoto} alt="Profile" className="usercard-photo" />
            <h2 className="usercard-name">{name}</h2>
            <p className="usercard-email">Email: {email}</p>
            <p className="usercard-phone">Phone: {phone}</p>
            <p className="usercard-address">Address: {address}</p>
        </div>
    );
};

export default Usercard;