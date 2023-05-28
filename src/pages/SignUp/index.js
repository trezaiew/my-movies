import React from "react";
import { useState } from "react";
import enHancedFetch from "../../services/http";
import ModalRegister from "../../components/ModalRegister";
 


  const REGISTER_API = "https://moviesapi.ir/api/v1/users/register";

const SignUp = () => {

    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
       
       
        const Request = async () => {
            try {
                const data = {
                    name,
                    password,
                    email
                }
                const res = await enHancedFetch('POST',REGISTER_API, data)
                console.log('response', res.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (!password || password.length < 8) {
            setError(true);
            console.log('password is not valid');
            return;
        }

        Request();

       
    }
 
    return (
        <>
            <ModalRegister
                name={name}
                password={password}
                email={email}
                setName={setName}
                setPassword={setPassword}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
                error={error}
                setError={setError}
            />
        </>
    );




}


export default SignUp;