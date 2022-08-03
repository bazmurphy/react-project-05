import React from "react";

import phoneIcon from "../assets/phone-icon.png";
import mailIcon from "../assets/mail-icon.png";

function Contact(props) {

    // props stands for properties, it is an Object

    // console.log(props);

    // {
    //     image: "./images/mr-whiskerson.png",
    //     name: "Mr. Whiskerson", 
    //     phone: "(212) 555-1234", 
    //     email: "mr.whiskaz@catnap.meow"
    // }

    // BEFORE DESTRUCTURING:

    return (
            <div className="contact-card">
                <img src={props.image} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src={phoneIcon} />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src={mailIcon} />
                    <p>{props.email}</p>
                </div>
            </div>
        );

    // DESTRUCTURING:

    // const {image, name, phone, email} = props

    // DESTRUCTURING INSIDE FUNCTION PARAMETER with { }:

    // function Contact({ image, name, phone, email }) {
    //     return (
    //         <div className="contact-card">
    //             <img src={image} />
    //             <h3>{name}</h3>
    //             <div className="info-group">
    //                 <img src={phoneIcon} />
    //                 <p>{phone}</p>
    //             </div>
    //             <div className="info-group">
    //                 <img src={mailIcon} />
    //                 <p>{email}</p>
    //             </div>
    //         </div>
    //     );
    // }
}

export default Contact;