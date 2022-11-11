
import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact.component';


const ContactListComponent = () => {
    const defaultContact = new Contact('Lucas', 'Laino', 'galileo.laino@gmail.com', true)

    const changeState = () => {
        if (this.conectado) {
            this.conectado = false
        }
        else {
            this.conectado = true
        }
    }
    

    return (
        <div>
            <div>
                <h1>Tus contactos</h1>
            </div>

            <ContactComponent Contact={ defaultContact }></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
