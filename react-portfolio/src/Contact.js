import React, {useEffect, useState, useRef} from 'react';
import Navbar from './Navbar';
import {useForm , ValidationError} from'@formspree/react';
import './Contact.css';


export default function Contact(){
   
       const [state, handleSubmit]=useForm("mnnbrokb");
        const [showSuccess, setShowSuccess]=useState(false);
        const formRef=useRef(null);

        useEffect(() => {
            if (state.succeeded) {
                setShowSuccess(true);
                if (formRef.current){
                    formRef.current.reset();
                }
                const timer = setTimeout(() =>{
                    setShowSuccess(false);
                }, 3000);
                return () => clearTimeout(timer);
            }
        }, [state.succeeded, formRef]);

         return(
         
         
            <div>
                <Navbar/>
                <br/>
                
                <h1>Contact Me</h1>
                <form  ref={formRef}onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" className="name-input" required />
                    <br/>
                    <label>Email:</label>
                    <input type="email" name="email" className="email-input" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>
                    <br/>
                    <label>Message:</label>
                    <textarea name="message" className="message-input" required />
                    <ValidationError prefix="Message" field="message" errors={state.errors}/>
                    <br/>
                    <button type="submit" disabled={state.submitting} className="submit-button">Send</button>
                    {showSuccess && <p>Message sent successfully!</p>}
                </form>
                
                
            </div>
         )
}