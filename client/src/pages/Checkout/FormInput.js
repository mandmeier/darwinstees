import React from 'react'
import { TextField, Grid } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({name, label}) => {
    //const { control, register } = useFormContext()
    const { control, formState: { errors } } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
	            render={({ field }) => <TextField {...field} fullWidth label={label} error={!!errors[name]} helperText={errors[name] ? errors[name]?.message : ''} />}
            />
        </Grid>
    )
}

export default FormInput

