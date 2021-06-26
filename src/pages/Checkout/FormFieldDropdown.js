import React, { useState }from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { Grid, InputLabel, Select, MenuItem } from '@material-ui/core'
import countries from 'country-region-data'



const FormFieldInput = ({updateCountry, updateRegion}) => {

     
    const allowedCountries = ["AD","AE","AF","AG","AI","AL","AM","AN","AO","AQ","AR","AS","AT","AU","AW","AX","AZ","BA","BB","BD","BE","BF","BG","BH","BI","BJ","BL","BM","BN","BO","BR","BS","BT","BV","BW","BY","BZ","CA","CC","CD","CF","CG","CH","CI","CK","CL","CM","CN","CO","CR","CU","CV","CX","CY","CZ","DE","DJ","DK","DM","DO","DZ","EC","EE","EG","EH","ER","ES","ET","FI","FJ","FK","FM","FO","FR","GA","GB","GD","GE","GF","GG","GH","GI","GL","GM","GN","GP","GQ","GR","GS","GT","GU","GW","GY","HK","HM","HN","HR","HT","HU","ID","IE","IL","IM","IN","IO","IQ","IR","IS","IT","JE","JM","JO","JP","KE","KG","KH","KI","KM","KN","KP","KR","KW","KY","KZ","LA","LB","LC","LI","LK","LR","LS","LT","LU","LV","LY","MA","MC","MD","ME","MF","MG","MH","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NC","NE","NF","NG","NI","NL","NO","NP","NR","NU","NZ","OM","PA","PE","PF","PG","PH","PK","PL","PM","PN","PR","PS","PT","PW","PY","QA","RE","RO","RS","RU","RW","SA","SB","SC","SD","SE","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SR","ST","SV","SX","SY","SZ","TC","TD","TF","TG","TH","TJ","TK","TL","TM","TN","TO","TR","TT","TV","TW","TZ","UA","UG","UM","US","UY","UZ","VA","VC","VE","VG","VI","VN","VU","WF","WS","XK","XX","YE","YT","ZA","ZM","ZW"]


    let countryList = countries.filter(country => (
        allowedCountries.includes(country.countryShortCode)
      ))




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
                {countryList.map((country) => (
                    <MenuItem
                    value={country.countryShortCode}
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
                    ? countryList
                        .find(({ countryShortCode }) => countryShortCode === country)
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
