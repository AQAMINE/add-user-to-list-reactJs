import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';


const AddUser = props => {
    const [entredUsername, setEntredUsername] = useState('');
    const [entredAge, setEntredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if ( entredUsername.trim().length === 0 || entredAge.trim().length === 0 ){
            return;
        }
        //using + to convert entredAge to a number 
        if(+entredAge < 1){
            return;
        }
        console.log(entredUsername, entredAge);
        setEntredUsername('');
        setEntredAge('');
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
                <input id="username" type="text" value={entredUsername} onChange={usernmaeChangeHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={entredAge} onChange={ageChangeHandler}/>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;