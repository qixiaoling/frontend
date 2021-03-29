import React, {Component} from 'react'
import './Login.css'

function Login(){

    function closeLogin(){
        document.querySelector('.login-popup').style.display = 'none';
    }
    const quitLogin= document.querySelector('.close');
    if(quitLogin){
        quitLogin.addEventListener('click', closeLogin);
    }


        return (
            <div className="login-popup">
                <div className="box">
                    <div className="img-area">
                        <div className="img">
                        </div>
                        <h1 className="img-title">eGineRight</h1>
                    </div>
                    <div className="form">
                        <div className="close">&times;</div>
                        <h1 className="login-popup-title">Sign In</h1>
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="username" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="password" placeholder="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox"/>
                                <label>   Remember Me
                                </label>
                            </div>
                            <button type="button" className="btn">Sign In</button>
                        </form>
                    </div>

                </div>
            </div>
        );

}
export default Login
