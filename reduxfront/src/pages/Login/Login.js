import React , {useState}from 'react';
import { Link } from 'react-router-dom';

import {useSelector,useDispatch } from 'react-redux';
import {login} from "../../actions/index";

import './login.css';


const Login = () => {
  const dispatch=useDispatch();
  const admin=useSelector(state=>state.login.admin);
  const error=useSelector(state=>state.login.error);

      if(admin !== ''){
          window.location.href = "/";
      }
  
    
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');

const LoginFun=(e)=>{
  e.preventDefault();
  dispatch(login(email,password))
}
  return (
    <div className="wrapper">
        <section className="sign-in-page">
        <div className="containerr-login ">
        <div className="row image-login">
            <img src="..\images\book.jpg" className="img-fluid mb-4" alt="logo" />
            </div>
        <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5 row" >
              <div className="sign-in-from-login  ">
              <h1 className="mb-0 title-login">Sign in</h1>
              <p className="para-login">Welcome Our favorite reader.<br></br>Nice to see you again</p>

              <form className="mt-4">
                    <div className="form-group">
                    <input type="text" required="required" className="form-control mb-0" placeholder=" Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                    <input type="text" required="required" className="form-control mb-0" placeholder=" Password" onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div id='Error-div'>
                   <span>{error}</span>
                    </div>
                    <button type="submit" className="btnn-login btn-primary " onClick={(e)=> LoginFun(e)}>Sign in</button>
                   
                    <div className="sign-info">
                    <span className="dark-color d-inline-block line-height-2 para2-login">Don't Have Account ?<Link to={'/register'}> register now</Link></span>
                    
                  </div>
                </form>
                </div>
            </div>
            
        </div>

       
      </section>
    </div>

  )
}

export default Login