import React, { Component } from 'react'
// import ContactForm from './ContactForm/ContactForm';
// import { state } from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
// import Input from './Input/Input';
import { v4 as uuidv4 } from 'uuid';
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
         name: '',
        number: '',
    }

    // formSubmit = (data) => this.setState(prevState => ({ contacts: [prevState.contacts, ...data]}))
    // (function () {
    // state.contact.map(item => (
    //         this.state.contacts.push(item)
    //     ))
    // }());
    
    // addedContact = (contact) => {
        
    // }

    removeContact = e => {
        const id = e.target.id;
        console.log(id);
        const deleteArrEl = this.state.contacts.find(item => (
            item.id === id
        ))
        console.log(deleteArrEl);
        const index = this.state.contacts.indexOf(deleteArrEl);
        console.log(index);
        this.state.contacts.splice((index-1), index);
        // this.state.contacts.map(item => (
        //     item.id === id ? item.remove() : console.log('ok')
        // ))
        this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
    }

    handleChangephnone = e => {
        const value = e.target.value;
        this.setState({ number: value });
            
    }
    handleChange = (e) => {
            const value = e.target.value;
        this.setState({ name: value });
        
        
        }
    handleClick = e => {
        
        const target = e.target
        const obj = {
            name: this.state.name,
            number: this.state.number,
            id: uuidv4(),
        }

        {
            const arr = this.state.contacts.filter(item => (
                 item.name === this.state.name
            ))
            arr < 0 ? console.log('no') : this.state.contacts.push(obj)
            // this.state.contacts.map(item => (
            //     //  console.log(item.name) 
            //     item.name === this.state.name ? console.log('no') : this.state.contacts.push(obj)
            // ))
        }
        {
            //     this.state.contacts.map(item => (
            //         item.name === this.state.name    
            //     )) && alert('Eror, this is already at contacts')
            // }
            this.setState({ name: '' });
            this.setState({ number: '' });
            document.getElementById('name').value = '';
            document.getElementById('number').value = '';
        };
    }
        filter = e => {
            const value = e.target.value;
            this.setState({ filter: value });
        };

        render() {
        return (
            <div className={s.section}>
                <h1>PhoneBook</h1>
                <div className={s.interface}>
                     
                    <div>
                        <h2>Name</h2>
                        <input
                            type="text"
                            name="name"
                                onChange={this.handleChange}
                                id="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                            required
                        />
                        <h2>Phone</h2>    
                    <input
                        className={s.inputTel}
                            type="tel"
                                name="number"
                                onChange={this.handleChangephnone}
                                id="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                            required
                        />

                    <button type="button" onClick={this.handleClick} className={s.buttonAdd}>Add contact</button>
                    </div>
                </div>
               
                {/* <ContactForm  /> */}
                <h2>Contacts</h2>
                <input type="text" onChange={this.filter}/>
                {/* <Contacts contacts={this.state.contacts} filter={this.state.filter}/> */}
                <div>
                    <ul>
                        {this.state.contacts.map(item => (
                            item.name.includes(this.state.filter) ? <li key={item.id}> {item.name}: {item.number} <button type="button" id={item.id} onClick={this.removeContact}>Delete</button> </li> : false
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;