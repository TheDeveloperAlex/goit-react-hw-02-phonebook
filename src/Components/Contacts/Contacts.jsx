

const Contacts = ({ contacts, filter }) => {
// console.log(contacts);
    // const renderContent = () => {
    const res = () => {
        console.log(res);
    }
    // }
    return (
        <div>
            <ul>
                {contacts.map(item => (
                    item.name.includes(filter) ? <li key={item.id}> {item.name}: {item.number} <button type="button"  onClick={res}></button> </li> : false
                ))}
                    {/* <button type="button" onClick={}>Delete</button> */}
            </ul>
        </div>
    );
}

export default Contacts;
