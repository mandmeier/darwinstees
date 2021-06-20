import React, { useState }from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Grid, InputLabel, Select, MenuItem } from '@material-ui/core'
import countries from 'country-region-data'



const FormFieldInput = ({updateCountry, updateRegion}) => {

     //const countries = CountryRegionData

    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    const { control, formState: { errors } } = useFormContext()


    const handleChangeCountry = (e) => {
        setCountry(e.target.value)
        updateCountry(e.target.value)
    };

    const handleChangeRegion = (e) => {
        setRegion(e.target.value)
        updateRegion(e.target.value)
    };


    return (
        <>
            <Grid item xs={12} sm={6}>
                <InputLabel id="country">Country</InputLabel>
                <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{ required: true }}
	            render={({ field }) => <Select
                {...field}
                labelId="country"
                id="select-country"
                value={country}
                onChange={(e) => handleChangeCountry(e)}
                fullWidth
                error={!!errors.country} helperText={errors.country ? errors.country?.message : ''}
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
                </Select>}
                />
                
            </Grid>
            <Grid item xs={12} sm={6}>
                <InputLabel id="region">State/Region</InputLabel>
                <Controller
                name="region"
                control={control}
                defaultValue=""
                rules={{ required: true }}
	            render={({ field }) => <Select
                {...field}
                labelId="region"
                id="select-region"
                value={region}
                onChange={(e) => handleChangeRegion(e)}
                disabled={!country}
                fullWidth
                error={!!errors.region} helperText={errors.region ? errors.region?.message : ''}

                //{...methods.register('country')}
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
                </Select>}
                />
                
            </Grid>
            
        </>
    )
}

export default FormFieldInput
