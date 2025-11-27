import { useState } from 'react';
import { Button } from "../atoms/Button"; 

export const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email: string): boolean => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const submit = () => {
        if (!email.trim()) {
            return setError('Email is required');
        }

        if (!validateEmail(email)) {
            return setError('Please enter a valid email address');
        }
        
        setError('');
        alert(`Newsletter subscription successful for: ${email}`);
        setEmail(''); 
    };
    
  
    const inputClassName = error ? 'input-error' : '';

    return (
    
        <section id='contact' className="newsletter">
                <p className="small-text">35,000+ already joined</p>
                <h2>
                    Stay up-to-date with what we're doing
                </h2>           
                <div className="newsletter-form">
                <div className="email-input-group">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className={inputClassName}
                            aria-invalid={!!error}
                            aria-describedby="email-error"
                        />
                        {error && (<p className="error-message">{error}</p>)}
                    </div>
                    <Button variant='red' onClick={submit}>
                        Contact Us
                    </Button>
                </div>
        </section>
    );
};

export default Newsletter;