
import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ Contact }) => {
    return (
        <div>
            <h2>
                Nombre: { Contact.nombre }
            </h2>

            <h3>
                Apellido: { Contact.apellido }
            </h3>

            <h4>
                Email: { Contact.email }
            </h4>

            <h5>
                El contacto esta: { Contact.conectado ? 'Conectado':'No conectado'}
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    task: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
