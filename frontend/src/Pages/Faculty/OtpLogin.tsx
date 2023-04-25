import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const FacultyOTPLogin = () => {
    const [otp, setOTP] = useState('');
    const [generatedOTP, setGeneratedOTP] = useState('');
    const [isOTPSent, setIsOTPSent] = useState(false);

    const FacultygenerateOTP = () => {
        // Logic to generate OTP
        const otp: any = Math.floor(Math.random() * 1000000);
        setGeneratedOTP(otp);
        setIsOTPSent(true);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Logic to verify OTP
        console.log('OTP submitted:', otp);
    };

    const handleResend = () => {
        setIsOTPSent(false);
        setOTP('');
        FacultygenerateOTP();
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="otp"
                label="OTP"
                variant="outlined"
                fullWidth
                value={otp}
                onChange={(e) => setOTP(e.target.value)}
                disabled={!isOTPSent}
            />
            <Button
                variant="contained"
                onClick={FacultygenerateOTP}
                disabled={isOTPSent}
            >
                Generate OTP
            </Button>
            <Button
                variant="contained"
                onClick={handleResend}
                disabled={!isOTPSent}
            >
                Resend OTP
            </Button>
            <Button
                variant="contained"
                type="submit"
                disabled={!otp}
            >
                Submit OTP
            </Button>
        </form>
    );
};

export default FacultyOTPLogin;
