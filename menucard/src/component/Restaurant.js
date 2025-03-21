import React, { useState } from "react";
import Menu from './Menuapi';
import Menucard from './Menucard';
import './Style.css'
import Navbar from "./Navbar";



const Restaurant = () => {

    const uniquelist = [...new Set(Menu.map((value) => {
        return value.category
    }))]


    const [menudata, setMenudata] = useState(Menu)
    const [menulist, setMenulist] = useState(uniquelist)

    const filterItem = (category) => {
        if (category === "All") {
            setMenudata(Menu)
            return;
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category
        })
        setMenudata(updatedList);
    }




    return (
        <div>
            <Navbar filterItem={filterItem} menulist={menulist} />
            <Menucard menudata={menudata} />

        </div>
    )
}
export default Restaurant