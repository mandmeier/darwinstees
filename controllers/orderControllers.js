import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config();

export const createPrintOrder = async (req, res) => {
    const { orderData } = req.body;

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
        recipient: {
            name: `${orderData.shipping.firstName} ${orderData.shipping.lastName}`,
            address1: orderData.shipping.street,
            city: orderData.shipping.city,
            state_name: orderData.shipping.region,
            state_code: orderData.shipping.regionCode,
            country_name: orderData.shipping.country,
            country_code: orderData.shipping.countryCode,
            zip: orderData.shipping.postal_zip_code,
            email: orderData.shipping.email
        },
        items: shippingItems,
    }

    const config = {
        headers: {
        "Content-Type": "application/json",
        },
    };
    axios.defaults.headers.common = {
        "Authorization": `Basic ${process.env.REACT_APP_PRINTFUL_API_KEY_BASE_64}`,
    };

    try {
        const printful_url = "https://api.printful.com/orders"
        const { data } = await axios.post(printful_url, itemOrder, config)
        const orderId = data.result.id

        console.log(`order PF${orderId} sent for printing`)

        res.status(200).json(orderId)
    } catch (error) {
      res.status(error.response.data.code).json({ message: error.response.data.result })
    }

}


export const cancelPrintOrder = async (orderId) => {

    axios.defaults.headers.common = {
        "Authorization": "Basic MHNjY2N4enItMW5pby1qdWd0OmxteDQtZXJwcW5rMDkwMWhy",
    }

    try {
        const printful_url = `https://api.printful.com/orders/${orderId}`
        await axios.delete(printful_url)
        console.log(`order PF${orderId} cancelled`)
    } catch (error) {
        console.log(`order PF${orderId} could not be automatically cancelled!`)
        console.log(error)
        // send urgent email to me?
    }

}


