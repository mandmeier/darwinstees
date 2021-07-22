import React from 'react'

import {FacebookShareButton, TwitterShareButton, WhatsappShareButton, RedditShareButton, EmailShareButton,} from "react-share"
import {FacebookIcon, TwitterIcon, WhatsappIcon, RedditIcon, EmailIcon} from "react-share"

import {SocialSection, SocialButtons} from './SocialElements'


const Social = ({page}) => {
    return (
        <SocialSection>
            <SocialButtons>
                <FacebookShareButton url={page} quote="This T-shirt needs your help to evolve! Cast your vote and select the next generation over at Darwin's Tees." hashtag="#DarwinsTees">
                    <FacebookIcon size={48} round={true}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={page} title="This T-shirt needs your help to evolve! Cast your vote and select the next generation over at Darwin's Tees." hashtags={["DarwinsTees", "Evolution", "ScienceWorks"]}>
                    <TwitterIcon size={48} round={true}></TwitterIcon>
                </TwitterShareButton>
                <WhatsappShareButton url={page} title="This T-shirt needs your help to evolve! Cast your vote and select the next generation over at Darwin's Tees.">
                    <WhatsappIcon size={48} round={true}></WhatsappIcon>
                </WhatsappShareButton>
                <RedditShareButton url={page} title="Help me evolve this T-shirt! Cast your vote and select the next generation over at Darwin's Tees.">
                    <RedditIcon size={48} round={true}></RedditIcon>
                </RedditShareButton>
                <EmailShareButton url={page} subject="Help me evolve this T-shirt!" body="Cast your vote and select the next generation over at Darwin's Tees.">
                    <EmailIcon size={48} round={true}></EmailIcon>
                </EmailShareButton>
            </SocialButtons>
        </SocialSection>
    )
}

export default Social
