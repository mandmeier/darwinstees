import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'
import { Link } from 'react-router-dom';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import FormFieldDropdown from './FormFieldDropdown'

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(20).required(),
    lastName: yup.string().min(2).max(20).required(),
    address1: yup.string().min(2).max(50).required(),
    email: yup.string().email().required(),
    city: yup.string().min(2).max(20).required(),
    zip: yup.string().min(2).max(20).required(),
})



const AddressForm = ({next}) => {
    
    const methods = useForm({ resolver: yupResolver(schema) })

    const updateCountry = (country) => {
        //console.log('country', country)
        methods.setValue('country', country);
    }

    const updateRegion = (region) => {
        //console.log('region', region)
        methods.setValue('region', region);
    }


    const onSubmit = (data, e) => {
        next(data)
        //console.log('form data is', data)
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }} >Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name'/>
                        <FormInput name='lastName' label='Last Name'/>
                        <FormInput name='address1' label='Address'/>
                        <FormInput name='email' label='Email'/>
                        <FormInput name='city' label='City'/>
                        <FormInput name='zip' label='ZIP / Postal code'/>
                        <FormFieldDropdown updateCountry={updateCountry} updateRegion={updateRegion}/>
                    </Grid>
                    <br/>
                    <div style={{display:'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default AddressForm
