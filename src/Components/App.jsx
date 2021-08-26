import React, { Component } from 'react'
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import s from '../Components/app.module.css';


class App extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
         
    }

    formSubmit = (data) => this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));

    removeContact = e => {
        this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e.target.id)
    }));
    }

    validate = (dataUser) => {
        console.log(dataUser);
        const res = this.state.contacts.filter(item => (
            item.name === dataUser.name
        ))
        let isValid = true;
        const notValid = () => {
            isValid = false;
        };
        res.length > 0 && alert('Eror, this name is already in contacts') 
        res.length > 0 && notValid()
        console.log(isValid);
        return (isValid);
    }

        filter = e => {
            const value = e.target.value;
            this.setState({ filter: value });
        };

        render() {
        return (
            <div className={s.section}>
                <h1>PhoneBook</h1>
                
                <ContactForm formSubmit={this.formSubmit} validate={this.validate} />
                <Contacts contacts={this.state.contacts} filter={this.state.filter} fnFilter={this.filter} removeContact={this.removeContact} />
                {/* <div>
                    <ul>
                        {this.state.contacts.map(item => (
                            <li key={item.id}> {item.name}: {item.number} <button type="button" id={item.id} onClick={this.removeContact}>Delete</button> </li>
                            // this.state.filter &&
                            // item.name.includes(this.state.filter) ? <li key={item.id}> {item.name}: {item.number} <button type="button" id={item.id} onClick={this.removeContact}>Delete</button> </li> : false
                        ))}
                    </ul>
                </div> */}
            </div>
        );
    }
}

export default App;