import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()


export const placeOrder = async (orderData) => {

    const printful_url = "https://api.printful.com/orders"

    const shippingItems = []

    orderData.items.forEach( item => {
        shippingItems.push({
            variant_id: item.product.sku,
            quantity: item.qty,
            files: [
                {
                    type: "front",
                    url: `https://darwinstees.s3.amazonaws.com/designs/${item.design_name}.png`
                }
            ]
        })
    })

    const itemOrder = {
        external_id: orderData._id,
        recipient: {
            name: `${orderData.shipping.firstName} ${orderData.shipping.lastName}`,
            address1: orderData.shipping.street,
            city: orderData.shipping.city,
            state_code: orderData.shipping.region_state,
            //state_code: "Nebraska",
            country_code: orderData.shipping.country,
            zip: orderData.shipping.postal_zip_code,
        },
        items: shippingItems,
    }

    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    axios.defaults.headers.common = {
        "Authorization": "Basic MHNjY2N4enItMW5pby1qdWd0OmxteDQtZXJwcW5rMDkwMWhy",
    };

    try {
        const data = await axios.post(printful_url, itemOrder, config)
        console.log(`order ${orderData._id} sent for printing`)
        
        
    } catch (error) {
        response = { error }
    }

    return response

}

