import React, {FC, useState} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography, StepLabel } from '@material-ui/core'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import FormInput from './FormInput'
//import countries from "./countries";
import countries from 'country-region-data'
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
    //country: yup.string().min(2).max(20).required(),
    //state: yup.string().min(2).max(50).required(),
})



const AddressForm = ({next}) => {
    
    const methods = useForm({ resolver: yupResolver(schema) })


    // const [country, setCountry] = useState("");
    // const [region, setRegion] = useState("");


    // const handleChangeCountry = (e) => {
    //     console.log("e.target.value")
    //     console.log(e.target.value)
    //     methods.setValue("country", e.target.value);
    //     setCountry(e.target.value)
    // };

    // const handleChangeRegion = (event) => {
    //     //methods.setValue("region", event.value);
    // };

    // const onSubmit = data => console.log(data);
    // //next({ ...data, country, region })

    

    // const formSubmitHandler: SubmitHandler<FormValues> = (data, FormValues) => {
    //     console.log('form data is', data)
    // }

    const updateCountry = (country) => {
        console.log('country', country)
        methods.setValue('country', country);
    }

    const updateRegion = (region) => {
        console.log('region', region)
        methods.setValue('region', region);
    }


    const onSubmit = (data, e) => {
        next(data)
        //console.log('form data is', data)
    };

    return (
        <div>
            <Typography variant="h6" gutterBottom >Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                {/* <form onSubmit={methods.handleSubmit(formSubmitHandler)}> */}
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First Name'/>
                        <FormInput name='lastName' label='Last Name'/>
                        <FormInput name='address1' label='Address'/>
                        <FormInput name='email' label='Email'/>
                        <FormInput name='city' label='City'/>
                        <FormInput name='zip' label='ZIP / Postal code'/>
                        <FormFieldDropdown updateCountry={updateCountry} updateRegion={updateRegion}/>
                        {/* <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            name='country'
                            onChange={(e) => handleChangeCountry(e)}
                            fullWidth
                            //{...methods.register('country')}
                            >
                            {countries.map((country) => (
                                <MenuItem
                                value={country.countryName}
                                key={country.countryShortCode}
                                >
                                {country.countryName}
                                </MenuItem>
                            ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel id="demo-simple-select-label">Region</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={region}
                            name='region'
                            onChange={handleChangeRegion(region)}
                            // onChange={(e) => {
                            //     handleChangeRegion(e) 
                            //   }}
                            disabled={!country}
                            fullWidth
                            {...methods.register('country')}
                            >
                            {country
                                ? countries
                                    .find(({ countryName }) => countryName === country)
                                    .regions.map((region) => (
                                    <MenuItem value={region.name} key={region.shortCode}>
                                        {region.name}
                                    </MenuItem>
                                    ))
                                : []}
                            </Select>
                        </Grid> */}
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
