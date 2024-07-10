import React,{useState} from "react";
// import axios from 'axios';
export default function RegisterPage(){

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');


    // async function handleSubmit(e){
    //     console.log('handling submit here')
    //     e.preventDefault();
    //     await fetch('http://localhost:4000/api/register',{
    //         method:'POST',
    //         body:JSON.stringify({userName,password}),
    //         headers:{'Content-type':'application/json'},

    //     });
        

    // }
    async function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted'); // Log when the form is submitted
        console.log('Sending data:', { userName, password }); // Log the data being sent

        try {
            const response = await fetch('http://localhost:4000/api/register', {
                method: 'POST',
                body: JSON.stringify({ userName, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            console.log('Registration successful');
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return(
        <form className="register" >
            <h1>Register</h1>
           <input type="text" placeholder="Enter your Name"
           value={userName}
           onChange={e=>setUserName(e.target.value)}/>
           <input type="password" placeholder="Enter your password"
           value={password}
           onChange={e=>setPassword(e.target.value)}/>
           <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
    )
}