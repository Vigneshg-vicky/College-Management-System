import React, { useState } from "react";
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Button,
    TextField,
    Grid,
    Box,
    Divider,
    Typography,
} from "@mui/material";

const schema = yup.object().shape({
    email: yup.string().email().required(),
})

const OTPComponent = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [otp, setOTP] = useState("");
    const [isOTPSent, setIsOTPSent] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleEmailChange = (event: any) => {
        setEmail(event.target.value);
    };

    const handleOTPChange = (event: any) => {
        setOTP(event.target.value);
    };

    const handleGenerateOTPClick = () => {
        // Here you would call your backend to send the OTP to the email address
        setIsOTPSent(true);
    };

    const handleResendOTPClick = () => {
        // Here you would call your backend to resend the OTP to the email address
        setIsOTPSent(true);
    };

    const handleSubmit1 = (event: any) => {
        event.preventDefault();
        // Here you would call your backend to verify the OTP and email address
    };

    return (
        <>
            <div style={{ width: '98vw', height: '100vh' }} className="flex align-items-center justify-content-center">
                <Box
                    sx={{
                        border: "1px solid black",
                        width: "50%",
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h6" gutterBottom>
                        Enter OTP
                    </Typography>
                    <Divider />
                    <Box sx={{ my: 2 }}>
                        <form onSubmit={handleSubmit1}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="email"
                                        label="Email"
                                        fullWidth
                                        value={email}
                                        error={Boolean(error)}
                                        helperText={error ?? ''}
                                        // onChange={handleEmailChange}
                                        {...register('email')}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        disabled={!email || isOTPSent}
                                        onClick={handleGenerateOTPClick}
                                    >
                                        Generate OTP
                                    </Button>
                                    <Button
                                        variant="contained"
                                        disabled={!email || isOTPSent}
                                        onClick={handleResendOTPClick}
                                        sx={{ marginLeft: "1rem" }}
                                    >
                                        Resend OTP
                                    </Button>
                                    <label style={{ paddingLeft: '5rem' }} htmlFor="">Timer</label>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="otp"
                                        name="otp"
                                        label="OTP"
                                        fullWidth
                                        value={otp}
                                        onChange={handleOTPChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={!email || !otp}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </form><br />
                        <Button variant="contained">Go Back</Button>
                    </Box>
                </Box>
            </div>
        </>
    );
}

export default OTPComponent;
