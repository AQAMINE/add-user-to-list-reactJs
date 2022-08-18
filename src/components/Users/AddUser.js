import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';


const AddUser = props => {
    const [entredUsername, setEntredUsername] = useState('');
    const [entredAge, setEntredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const usernmaeChangeHandler = event => {
        setEntredUsername(event.target.value);
    };

    const ageChangeHandler = event => {
        setEntredAge(event.target.value);
    };

    return (
        //className injected in Card Component is just a normal props you can named as you like like (cssClasses....)
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernmaeChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;