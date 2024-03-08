import "./page.css";
//import { useState } from "react";

const Confirm = ({data , onCancel}) => {

    const handleClick = () =>{
        console.log("Cancel clicked");
        onCancel(false);
    }

    return(
        <>
        <div className="modal">
            <div className="modal-content">
                <h1 className="submit-h1">Submit Successfully !!</h1>
                <h3>Submited Detail Data</h3>
                <p>Applicant Name : {data.firstName} {data.lastName}</p>
                <p>E-mail : {data.email}</p>
                <p>Phone No. : {data.phone}</p>
                <p>Address : {data.address}</p>
                <button className="submit-cancel" onClick={handleClick}>Cancel</button>
            </div>
            
        </div>
        </>
    );

};

export default Confirm;
