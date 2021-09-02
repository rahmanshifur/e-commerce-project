import Create from "./create"
import Filter from "./filter";
import List from "./list"
import Update from './update';
import { useState } from 'react';


export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const [editItem, setEditItem] = useState({})


    const editHandler = (abc = {}) => {
        setIsOpen(!isOpen)
        setEditItem(abc)
    }



    return (
        <div>
            {Object.keys(editItem).length !== 0 ? <Update editItem={editItem} editHandler={editHandler} /> :
                isOpen && <Create editHandler={editHandler} />
            }



            <Filter />
            <List editHandler={editHandler} isOpen={isOpen || Object.keys(editItem).length !== 0} />
        </div>
    )
}