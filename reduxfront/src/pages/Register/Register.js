import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();


  const [fullname, fullnamechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {

    e.preventDefault();

    const inputs = { fullname, email, password }


    if (fullname.length === 0 || email.length === 0 || password.length === 0 || !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/.test(email))) {

      setError(true)
    }

    else {

      //console.log(inputs);
      axios.post('http://localhost/reduxApp/phpback/register&login.php', inputs).then(function (response) {
        console.log(response.data);
        //console.log(response); 
      })

      toast.success('Account Created Successfully ');
       navigate('/');
    }
  }




  return (

    <div className="wrapper">
      <section className="sign-in-page">

        <div className="containerr-reg ">
          
         






            <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5 row" >
              <div className="sign-in-from-reg  ">


                <h1 className="mb-0 title-reg">Sign Up</h1>
                <p className="para-reg">Sign Up to join the world’s largest <br></br>community of readers.</p>
                 

                <form className="mt-4">

                  <div className="form-group">
                    <input type="text" className="form-control mb-0" placeholder=" Full Name"
                      name="fullname" value={fullname} onChange={e => fullnamechange(e.target.value)}
                    />
                    {error && fullname.length === 0 ?
                      <label style={{ color: 'red' }}>Fullname is required</label> : ""}
                  </div>

                  <div className="form-group">
                    <input type="email" className="form-control mb-0" placeholder="Email"
                      name="email" value={email} onChange={e => emailchange(e.target.value)}
                    />
                    {error && email.length === 0 &&
                      <label style={{ color: 'red' }}>Email is required</label>}
                    {email.length > 0 && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,4}$/.test(email)) && (
                      <label style={{ color: 'red' }}>This is not a valid email</label>
                    )}
                  </div>

                  <div className="form-group">
                    <input type="password" className="form-control mb-0" placeholder="Password"
                      name="password" value={password} onChange={e => passwordchange(e.target.value)}
                    />
                    {error && password.length === 0 &&
                      <label style={{ color: 'red' }}>Password is required</label>}
                    {password.length > 0 && !(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(password)) && (
                      <label style={{ color: 'red' }}>This is not a valid password</label>

                    )}
                  </div>

                  <div className="d-inline-block w-100">
                    <div className="form-check d-inline-block mt-2 pt-1">
                    </div>


                    <button type="submit" onClick={handleSubmit} className="btnn-reg btn-primary ">Sign Up</button>

                  </div>

                  <div className="sign-info">
                    <span className="dark-color d-inline-block line-height-2 para2-reg">Already Have Account ? <Link to={'/login'}> Log in</Link></span>
                   
                  </div>
                </form>

              </div>
            </div>
             <div className="row image-reg">
            <img src="..\images\book.jpg" className="img-fluid mb-4" alt="logo" />
            </div>
        </div>

       
      </section>
    </div>
  );
}

export default Register
