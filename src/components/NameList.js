import React, {useState} from 'react';
import '../css/nameList.css';


const NameList = () => {
    const [nameList, setNameList] = useState([
        {
            id: 1,
            name: "Albert"
        },
        {
            id: 2,
            name: "Robert"
        },
        {
            id: 3,
            name: "Christina"
        }
    ]);
    
    const [name, setName] = useState("");
    
    const addName = (e) => {
        e.preventDefault();
        if(name.length > 0){
            setNameList([...nameList, {id: Date.now(), name: name}]);
        }
        setName("");
    }

    const handleRemoveItem = (e) => {
        const name = e.target.getAttribute("name");
        setNameList(nameList.filter(item => item.name !== name))
    }

    return (
        <>
            <form onSubmit={addName}>
                <input 
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            <br />
            <ul>
                {
                    nameList.map(el => {
                        return <li key={el.id}>{el.name} <span name={el.name} onClick={handleRemoveItem}>x</span></li>
                    })
                }
            </ul>
        </>
    );
}

export default NameList;