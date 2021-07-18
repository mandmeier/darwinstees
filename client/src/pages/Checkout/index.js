import React, { useState, useLayoutEffect }from 'react'
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import Layout from '../../components/Layout'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'
import styled from 'styled-components'

const StyledStepper = styled(Paper)`
    /* background-color: rgba(250, 250, 255, 0.8);
    max-width: 600px;
    margin:0 auto;
    width:auto;
    padding: 0.5rem;
    border-radius: 0.5rem;

    @media (max-width: 599px) {
            background-color: red;
    } */


    max-width: 800px;
    margin: 0 auto;
    color: #111;
    margin-top: 2rem !important;
    background: rgba(250, 250, 255, 0.8);
    padding: 1rem;
    border-radius: 0.3rem;
    line-height: 2rem;

    @media (max-width: 850px) {
        margin: 0 1rem;
    }

    & .stepper {

        padding: 1rem 0 0 0;

    }



`

const steps = ['Shipping address', 'Payment details']


const Checkout = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})

    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Form = () => activeStep === 0
        ? <AddressForm next={next}/>
        : <PaymentForm shippingData={shippingData} backStep={backStep} nextStep={nextStep}/>


    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)

    

    return (
        <>
        <Layout>
            <StyledStepper >
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={"stepper"} style={{background:"transparent", margin:"0 auto"}}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </StyledStepper>
        </Layout>
        </>
    )
}

export default Checkout
