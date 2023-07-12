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
    const [submit,setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordError, setpasswordError] = useState('');

    const getHandler = (setter)=> {
       return function handler(e) {
           setter(e.target.value);
        }
    }
   
    const handleSubmit = async (e) => {
        e.preventDefault();
       
       
        const Request = async () => {
            try {
                const payload = {
                    name,
                    password,
                    email,
                }
                const res = await fetch(REGISTER_API,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                  })

              
                setLoading(true);
                setSubmit(true);

               console.log('response', res.data);
            } catch (error) {
                setSubmit(false)
                console.log("error", error);
            }
        }

        if (!password || password.length < 8) {
            setError(true);
            setpasswordError('password is not valid');
            
            console.log('password is not valid');
            return;
        }

        Request();

       
    }
 
    return (
        <>
            <ModalRegister
                handleSubmit={handleSubmit}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                error={error}
                setError={setError}
                submit={submit}
                setSubmit={setSubmit}
                loading={loading}
                setLoading={setLoading}
                passwordError={passwordError}
                setpasswordError={setpasswordError}

            />
        </>
    );




}


export default SignUp;