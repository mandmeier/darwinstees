import styled from 'styled-components'


export const Info = styled.div`
    position:absolute;
    left:0;
    bottom:0;
    right:0;
    & p.footer-text {
        font-size: 0.9rem;
        text-align: center;
        color: #666;
    }

    & > hr {
        margin: 1rem auto;
        width: 75%;
        max-width: 600px;
    }
`

export const Contact = styled.div`
    display: flex;
    justify-content: center;
    
    & a.contact-social {
        margin: 20px 20px;
        color: #666;
    }

    & a.contact-social:hover {
        color: #333;
    }

`