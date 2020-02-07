import React from 'react'
import '../App.css'

function ContactCard(props) {
    return(
        <div className="contact-card card">
            <img className="card-img" src={props.contact.imgUrl} alt=""/>
            <h3>{props.contact.name}</h3>
            <p>Marital status: {props.contact.maritalStatus}</p>
            <p>Living Status: {props.contact.status}</p>
        </div>
    )
}

export default ContactCard