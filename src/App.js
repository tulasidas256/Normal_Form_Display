import { useState, useEffect } from 'react';
import './App.css';
import Confirm from './component/page';

function App() {

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: ""
  });

  const [show, setShow] = useState(false);

  /* --- Data receive from form --- */
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  };
  /* --- Sumbit process --- */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data > ",data);
    setShow(true);
  };
  /* --- Cancel process --- */
  const cancel = () => {
    setShow(false);
  };

  useEffect(() => {
  }, []);

  return (
    <div className="App">
      {show ? <Confirm data = {data} onCancel = {cancel}/> : <></>}
      <div className='formDiv'>
        <form onSubmit={handleSubmit}>

          <h1>User Detail</h1>

          <label htmlFor='firstName'>First Name:</label>
          <br />
          <input type='text' name='firstName' id='firstName' onChange={handleChange} required />
          <br />

          <label htmlFor='lastName'>Last Name:</label>
          <br />
          <input type='text' name='lastName' id='lastName' onChange={handleChange} required />
          <br />

          <label htmlFor='phone'>Phone Number:</label>
          <br />
          <input type='text' name='phone' id='phone' onChange={handleChange} required />
          <br />

          <label htmlFor='email'>E-mail:</label>
          <br />
          <input type='email' name='email' id='email' onChange={handleChange} required />
          <br />

          <label htmlFor='address'>Address:</label>
          <br />
          <input className='addInput' type='text' name='address' id='address' onChange={handleChange} required />
          <br />

          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
