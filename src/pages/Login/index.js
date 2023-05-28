import React from "react";
import { useState } from "react";
import enHancedFetch from "../../services/http";


const Login = () => {

    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await enHancedFetch('https://moviesapi.ir/api/v1/users/Login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                email
            })
        });
        const data = await res.json();
        console.log(data);
    }
 


}


export default Login;