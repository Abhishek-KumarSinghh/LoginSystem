
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Login = ({ handleChange }) => {

    const paperStyle={padding :20, height: '70vh', width:300, margin:"0 auto"}
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid Username').required("Username Required"),
        password: Yup.string().required("Password Required")
    })
    const onSubmit = (values, props) => {
        console.log(values)
        props.resetForm()
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000) //2000 = 2sec

    }
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username" 
                                placeholder='Enter Username' fullWidth margin="dense"
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth margin="dense"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                            
                            {/* <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={btnstyle} fullWidth>Sign in</Button> */}

                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login