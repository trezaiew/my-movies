import React from "react";


const ModalRegister = () => {
    return (
        <>
            <li className="nav-item" data-bs-toggle="modal" data-bs-target="#modal-content">
                Login</li>
            <div className="modal fade" id="modal-content">
                <div className="modal-dialog">
                    <div className="modal-content "></div>
                    <div className="modal-header">
                        <h2>Login</h2>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                    </div>
                    <div className="modal-body ">
                        <form action="">
                            <div className="my-2 ">
                                <label htmlFor="username-input" className="mb-3 ">username :</label>
                                <input type="text" className="form-control" id="username-input" placeholder="Username"></input>
                            </div>
                            <div className="">
                                <label htmlFor="password-input" className="my-3 ">password :</label>
                                <input type="text" className="form-control" id="password-input" placeholder="Password"></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button className="btn btn-danger w-50">submit</button>
                    </div>
                </div>
            </div>
        </>
    );
}


export default ModalRegister;