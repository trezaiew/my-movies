import React from "react";


const ModalRegister = ({name, email, password, handleSubmit, setName, setEmail, setPassword}) => {
   
    return (
        <>
          <li className="nav-item" data-bs-toggle="modal" data-bs-target="#modal-content">
                Sign up</li>
            <div className="modal fade z-2" id="modal-content" style={{color:'black'}}>
                <div className="modal-dialog">
                    <div className="modal-content z-3 bg-light ">
                        <div className="modal-header">
                            <h2>Sign up</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                        </div>
                        <div className="modal-body ">
                            <form action=""  
                            onSubmit={handleSubmit}
                            >
                                <div className="my-2 ">
                                    <label htmlFor="name-input" className="mb-3 ">name</label>
                                    <input type="text" className="form-control" id="name-input" placeholder="Name"value={name} onChange={(e) => setName(e.target.value)}></input>
                                </div>
                                <div className="my-2 ">
                                    <label htmlFor="email-input" className="mb-3 ">email</label>
                                    <input type="text" className="form-control" id="email-input" placeholder="Email"value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                </div>
                                <div className="">
                                    <label htmlFor="password-input" className="my-3 ">password</label>
                                    <input type="password" className="form-control" id="password-input" placeholder="Password"value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                            <button className="btn btn-danger w-50"
                                onClick={handleSubmit}
                            >submit</button>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    );
}


export default ModalRegister;