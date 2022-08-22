import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import ErrorModal from "../UI/ErrorModal";


const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [entredUsername, setEntredUsername] = useState('');
    // const [entredAge, setEntredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value,ageInputRef.current.value);
        if ( nameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0 ){
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
                });
            return;
        }
        //using + to convert entredAge to a number 
        if(+ageInputRef.current.value < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (>0).'
                });
            return;
        }
        props.onAddUser(nameInputRef.current.value, ageInputRef.current.value);

        //Rest input
        // setEntredUsername('');
        // setEntredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    // const usernmaeChangeHandler = event => {
    //     setEntredUsername(event.target.value);
    // };

    // const ageChangeHandler = event => {
    //     setEntredAge(event.target.value);
    // };
    const errorHandler =() => {
        setError(null);
    };
    return (
        <React.Fragment>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            {/* className injected in Card Component is just a normal props you can named as you like like (cssClasses....) */}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    {/* <input id="username" type="text" value={entredUsername} onChange={usernmaeChangeHandler}/> */}
                    {/* <input id="age" type="number" value={entredAge} onChange={ageChangeHandler}/> */}
                    <input id="username" type="text"  ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    );
}

export default AddUser;