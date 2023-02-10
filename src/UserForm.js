import React from "react";

export default function UserForm({setUserInput}, {userInput}){
    const handleChange = (e) =>{
        setUserInput(e.target.value);
    }
    return (
        <div>
            Name: <input type= "text" placeholder="Please type name" onChange={handleChange} />
        </div>
    );
};