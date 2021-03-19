import { useState } from 'react';
import uniqid from "uniqid"
import "./Card.css"




function Card(props){

    const alphabet = "ABCDEFGHIJ"
    const arraystart = alphabet.split("");

    const [currentArray, changeArray] = useState(arraystart);

    
    function update(e){

        props.getValue(e)
        const clone = [...currentArray]
        changeArray(shuffle(clone))
    }

    return (
        <div className="carddisplay">
            {currentArray.map((x,i)=>{
                if(i!==5){
                    return <div key={uniqid()} className="card" onClick={update}>{x}</div>
                }
                else{
                    return <div key={uniqid()} className="card cardnext" onClick={update}>{x}</div>
                }
                
            })}
        </div>
    )
}

function shuffle(array) {
        
    let i = array.length;
    let j = 0;
    let temp = 0;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array
}

export { Card }