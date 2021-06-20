import React, {useState} from 'react'
import {yupResolver} from '@hookform/resolvers/yup'
import { TextField, InputLabel, Select, MenuItem, Button, Grid, Typography, StepLabel } from '@material-ui/core'
//import FormInput from './FormInput'
//import countries from "./countries";
import countries from 'country-region-data'
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import * as yup from 'yup'
import FormFieldInput from './FormFieldInput';
import FormFieldDropdown from './FormFieldDropdown'

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;

// }

// const schema = yup.object().shape({
//     firstName: yup.string().min(2).max(20).required(),
//     lastName: yup.string().min(2).max(20).required(),
//     email: yup.string().email().required()
// })




// const AddressForm2 = () => {

//     const methods = useForm<FormValues>({ resolver: yupResolver(schema) })
    
//     //const countries = CountryRegionData

//     //const {register, control, handleSubmit, formState: { errors }} = useForm<FormValues>({ resolver: yupResolver(schema) })

//     //console.log('errors', errors.firstName?.message)

//     const formSubmitHandler: SubmitHandler<FormValues> = (data, FormValues) => {
//         console.log('form data is', data)
//     }
    
   
//     return (
//         <div>
//             <FormProvider {...methods}>
//                 <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
//                     <FormFieldInput/>
//                     <FormFieldDropdown/>
//                     <div style={{display:'flex', justifyContent: 'space-between'}}>
//                             <Button component={Link} to="/cart" variant="outlined">Back to Cart</Button>
//                             <Button type="submit" variant="contained" color="primary">Next</Button>
//                     </div>
//                 </form>
//            </FormProvider>
//         </div>
//     )
// }

// export default AddressForm2
