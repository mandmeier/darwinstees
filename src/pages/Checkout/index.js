import React, { useState }from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './CheckoutElements'
import Layout from '../../components/Layout'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import Confirmation from './Confirmation'

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
            <Paper style={{maxWidth:"600px", margin:"0 auto", width:"auto"}} className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : <Form/>}
            </Paper>
        </Layout>
        </>
    )
}

export default Checkout
