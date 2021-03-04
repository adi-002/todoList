import React, { useState } from 'react';
import "./list.css"
const List = (props) => {       //props is used coz val is not defined in List so we created its prop in App and then 
    //passed that here.
    const completed = () => {

        localStorage.setItem("list", props.text)
        props.onSelect(props.id)
        var completeItem = localStorage.getItem("list");
        console.log(completeItem)
        props.onComplete(completeItem)


    }



    return (
        <>
            <div className="listCard">
                <div className="row list">

                    <div className="col">
                        <li className="items" id="txt" onClick={completed}>{props.text}</li>
                    </div>
                    <div className="col">
                        <button className="btn btn-danger btn-sm" onClick={() => {
                            props.onSelect(props.id);
                        }}>X
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default List