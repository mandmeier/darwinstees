import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Grid, TextField } from '@material-ui/core'

 

const FormFieldInput = () => {

    const { control, formState: { errors } } = useFormContext()

    return (
        <>
            <Grid item xs={12} sm={6}>
                <Controller name="firstName" control={control} defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="First Name" variant="outlined" error={!!errors.firstName} helperText={errors.firstName ? errors.firstName?.message : ''} fullWidth></TextField>
                )}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Controller name="firstName" control={control} defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="First Name" variant="outlined" error={!!errors.firstName} helperText={errors.firstName ? errors.firstName?.message : ''} fullWidth></TextField>
                )}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Controller name="email" control={control} defaultValue=""
                render={({ field }) => (
                    <TextField {...field} label="Email" type="email" variant="outlined" error={!!errors.email} helperText={errors.email ? errors.email?.message : ''} fullWidth></TextField>
                )}/>
            </Grid>
            
        </>
    )
}

export default FormFieldInput
