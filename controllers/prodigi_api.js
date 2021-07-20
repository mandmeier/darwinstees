import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();


export const placeOrder = async (orderData) => {

    const prodigi_url = "https://api.sandbox.prodigi.com/v4.0/Orders"

    const shippingItems = []

    orderData.items.forEach( item => {
        shippingItems.push({
            "sku": item.product.sku,
            "copies": item.qty,
            "sizing": "fillPrintArea",
            "attributes": item.product.attributes,
            "assets": [
                {
                    "printArea": "default",
                    "url": `https://darwinstees.s3.amazonaws.com/designs/${item.design_name}.png`
                }
            ]
        })
    })



    const itemOrder = {
        merchantReference: orderData._id,
        shippingMethod: "Standard",
        recipient: {
            "address": {
                "line1": orderData.shipping.street,
                "postalOrZipCode": orderData.shipping.postal_zip_code,
                "countryCode": orderData.shipping.country,
                "townOrCity": orderData.shipping.city,
                "stateOrCounty": orderData.shipping.region_state
            },
            "name": `${orderData.shipping.firstName} ${orderData.shipping.lastName}`,
            "email": orderData.shipping.email
        },
        "items": shippingItems
    }


    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    axios.defaults.headers.common = {
        "X-API-Key": process.env.REACT_APP_PWINTY_API_KEY,
    };

    try {
        console.log(`order ${orderData._id} sent for printing`)
        await axios.post(prodigi_url, itemOrder, config)
    } catch (error) {
        console.log(error)
    }

}



export const getProductInfo = async (sku) => {

    console.log(`Get product info for ${sku}`)

    const prodigi_url = `https://api.sandbox.prodigi.com/v4.0/products/${sku}`

    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    axios.defaults.headers.common = {
        "X-API-Key": process.env.REACT_APP_PWINTY_API_KEY,
    };

    try {
        const { data } = await axios.get(prodigi_url, config)
        console.log(data)
        //console.log(JSON.stringify(data.product.attributes, null, 2))
        console.log(JSON.stringify(data.product.variants[0].shipsTo.sort()))
        
    } catch (error) {
        console.log(error)
    }

}
