import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {addUserData} from '../../state/actions/sessionActions'
import { useDispatch, useSelector } from "react-redux"


const EmailForm = styled.form`

    background-color: #e9fce9;

    border: 2px solid #666;
    max-width: 80%;
    margin: 0 auto;
    padding: 0.5rem;
    border-radius: 0.5rem;

    & .form-text{
        margin: 0 auto 1rem auto;
    }

    & .email-input {
        width: 95%;
        margin: 0 auto 1rem auto;
    }

    & .subscribe-btn {
        width: 100%;
        background-color: #7bd07b;
        color: #000;
        border: 1px solid #000;
    }

`

const Warning = styled.p`
    color: #c00001; 
`

const SignUp = ({onSubmit}) => {

    const dispatch = useDispatch();

    const {visitorId} = useSelector((state) => state.sessionState)

    const {register, handleSubmit, formState: { errors }} = useForm();

    const onFormSubmit = data => {
        dispatch(addUserData(data.email, visitorId))
        onSubmit()
    }

    return (
        <>
        <EmailForm noValidate onSubmit={handleSubmit(onFormSubmit)}>
            <p className="form-text">Sign up for occasional email updates</p>
            <input
            className="email-input"
            {...register('email', { 
                required: {value: true, message:"No email was entered. Try again."},
                pattern: {value: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i, 
                message: "Please enter a valid email address"},
            })}
            />
            {/* <input type="submit" value="submit"/> */}
            <Button className="subscribe-btn" type="submit" name="submit" size="small" variant="outlined">Subscribe</Button>
        </EmailForm>
        {errors.email && <Warning className="warning"><small>{errors.email.message}</small></Warning>}
        </>
    )
}

export default SignUp
