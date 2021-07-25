import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'

const Page = styled.div`
    & .info {
        margin: 0 auto;
        max-width: 800px;
        //margin-top: 4rem;
        padding: 4rem 1rem;
    }

    & .panel-transparent {
        background: rgba(250, 250, 255, 0.8);
        padding: 1rem;
        border-radius: 0.3rem;
    }   

`

const PrivacyPolicy = () => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <Page>
            <Layout>
                <div className="info">
                    <div className="panel-transparent">
                    <h1>Privacy Policy</h1>
                    <h3>What do we do with your information?</h3>
                    <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address and email address. When you browse our store, we also automatically receive your computer’s internet protocol (IP) address in order to provide us with information that helps us learn about your browser and operating system. E-mail marketing (if applicable): With your permission, we may send you emails about our store, new products and other updates.</p>
                    <h3>Consent</h3>
                    <p>How do you get my consent?</p>
                    <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order or arrange for a delivery, we imply that you consent to our collecting it and using it for that specific reason only. If we ask for your personal information for a secondary reason, like marketing, we will either ask you directly for your expressed consent, or provide you with an opportunity to say no.</p>
                    <p>How do I withdraw my consent?</p>
                    <p>If after you opt-in, you change your mind, you may withdraw your consent for us to contact you, for the continued collection, use or disclosure of your information, at anytime, by contacting us at <b>support@darwinstees.com</b></p>
                    <h3>Disclosure</h3>
                    <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
                    <h3>Third-Party Services</h3>
                    <p>The print orders you place here are fulfilled by Printful (6B Ojara Vaciesa, Riga, Latvia LV-1004), and payments are processed by Stripe (185 Berry Street, Suite 550, San Francisco, California, USA).</p>
                    <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us. However, certain third-party service providers, such as payment gateways and other payment transaction processors, have their own privacy policies in respect to the information we are required to provide to them for your purchase-related transactions. For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers. In particular, remember that certain providers may be located in or have facilities that are located a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located. As an example, if you are located in Canada and your transaction is processed by a payment gateway located in the United States, then your personal information used in completing that transaction may be subject to disclosure under United States legislation. Once you leave our store’s website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
                    <h3>Security</h3>
                    <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed. If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with a AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.</p>
                    <h3>Age of Consent</h3>
                    <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.</p>
                    <h3>Changes to this privacy policy</h3>
                    <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.</p>
                    <div style={{marginTop:'2rem', width:'100%', display:'flex', justifyContent:'center'}}>
                    <Button component={Link} to="/" variant="contained" color="primary">
                        Back to Store
                    </Button>
                    </div>
                </div>
                </div>
            </Layout>
        </Page>
    )
}

export default PrivacyPolicy
