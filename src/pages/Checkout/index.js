import React, { useState }from 'react'
import { Paper, Stepper, Step, StepLabel, Typography } from '@material-ui/core'
import useStyles from './CheckoutElements'
import Layout from '../../components/Layout'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'
import styled from 'styled-components'

const StyledStepper = styled(Paper)`
    //margin: 1rem !important;
    background-color: rgba(250, 250, 255, 0.8);
    max-width: 600px;
    margin:0 auto;
    width:auto;
    padding: 0.5rem;
    border-radius: 0.5rem;

`

const steps = ['Shipping address', 'Payment details']


const Checkout = () => {
    const classes = useStyles()

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
            <div className={classes.toolbar} />
            <div style={{padding: "0 1rem"}}>
            <StyledStepper className={classes.paper} >
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper} style={{background:"transparent", margin:"0 auto"}}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </StyledStepper>
            </div>
        </Layout>
        </>
    )
}

export default Checkout
