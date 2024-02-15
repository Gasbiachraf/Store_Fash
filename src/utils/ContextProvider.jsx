
import React, { createContext, useState } from "react"
import item1 from '../assets/img/item-01.jpg'
import item2 from '../assets/img/item-02.jpg'
import item3 from '../assets/img/item-03.jpg'
import item4 from '../assets/img/item-04.jpg'
import item5 from '../assets/img/item-05.jpg'
import item6 from '../assets/img/item-06.jpg'
import item7 from '../assets/img/item-07.jpg'
import item8 from '../assets/img/item-08.jpg'
import item9 from '../assets/img/item-09.jpg'
import item10 from '../assets/img/item-10.jpg'
import item11 from '../assets/img/item-11.jpg'
import item12 from '../assets/img/item-12.jpg'
import item13 from '../assets/img/item-13.jpg'
import item14 from '../assets/img/item-14.jpg'
import item15 from '../assets/img/item-15.jpg'
import item16 from '../assets/img/item-16.jpg'



export const MyContext = createContext()

export const MyProvider = ({ children }) => {

    let [product , useProduct] = useState([
        {
            id : 0,
            img : item1,
            text : 'boxy1 t-shirt with roll sleeve ',
            price : 21 , 
            category : 'Old'
        },
        {
            id : 1,
            img : item2,
            text : 'boxy2 t-shirt with roll sleeve ',
            price : 20 , 
            category : 'Old'
        },
        {
            id : 2,
            img : item3,
            text : 'boxy3 t-shirt with roll sleeve ',
            price : 22 , 
            category : 'Old'
        },
        {
            id : 3,
            img : item4,
            text : 'boxy4 t-shirt with roll sleeve ',
            price : 18 , 
            category : 'New'
        },
        {
            id : 4,
            img : item5,
            text : 'boxy5 t-shirt with roll sleeve ',
            price : 20 , 
            category : 'New'
        },
        {
            id : 5,
            img : item6,
            text : 'boxy6 t-shirt with roll sleeve ',
            price : 27 , 
            category : 'New'
        },
        {
            id : 6,
            img : item7,
            text : 'boxy7 t-shirt with roll sleeve ',
            price : 35 , 
            category : 'New'
        },
        {
            id : 7,
            img : item8,
            text : 'boxy8 t-shirt with roll sleeve ',
            price : 16 , 
            category : 'New'
        },
        {
            id : 9,
            img : item10,
            text : 'boxy10 t-shirt with roll sleeve ',
            price : 18 , 
            category : 'Old'
        },
        {
            id : 10,
            img : item11,
            text : 'boxy11 t-shirt with roll sleeve ',
            price : 24 , 
            category : 'Sale'
        },
        {
            id : 11,
            img : item12,
            text : 'boxy12 t-shirt with roll sleeve ',
            price : 40 , 
            category : 'Sale'
        },
        {
            id : 12,
            img : item13,
            text : 'boxy13 t-shirt with roll sleeve ',
            price : 33 , 
            category : 'Sale'
        },
        {
            id : 13,
            img : item14,
            text : 'boxy14 t-shirt with roll sleeve ',
            price : 20 , 
            category : 'Sale'
        },
        {
            id : 14,
            img : item15,
            text : 'boxy15 t-shirt with roll sleeve ',
            price : 19 , 
            category : 'Sale'
        },
        {
            id : 15,
            img : item16,
            text : 'boxy16 t-shirt with roll sleeve ',
            price : 16 , 
            category : 'Sale'
        },
    ])

    return (
        <>

            <MyContext.Provider value={ [product , useProduct] } >
                {children}
            </MyContext.Provider>

        </>
    )

}
