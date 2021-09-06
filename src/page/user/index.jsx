import { useStoreState } from "easy-peasy"

import Create from "./create"
import Filter from "./filter";
import List from "./list"
import Update from './update';
import { useState } from 'react';


export default () => {
    const [isOpen, setIsOpen] = useState(false)
    const [editItem, setEditITem] = useState({})

    const editHandler = (item = {}) => {
        if (Object.keys(item).length !== 0) {

            setIsOpen(true)
        } else {
            setIsOpen(!isOpen)

        }
        setEditITem(item)
    }

    return (
        <div>
            {Object.keys(editItem).length !== 0 ?
                <Update editItem={editItem} editHandler={editHandler} /> :
                isOpen && <Create editHandler={editHandler} />}

            <Filter />
            <List editHandler={editHandler} isOpen={isOpen || Object.keys(editItem).length !== 0} />
        </div>
    )
}