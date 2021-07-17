import React, {useLayoutEffect} from 'react'
import Layout from '../components/Layout'
import EvoGallery from '../components/EvoGallery'
import Introduction from '../components/Introduction'
import HowTo from '../components/HowTo'

const Home = ({match}) => {

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    var panels = [ 
        {
            lineage: 'lineax',
            color: "#bed7d6",
            img: `/img/desert.webp`,
            quote: 'This preservation of favourable individual differences and variations, and the destruction of those which are injurious, I have called Natural Selection, or the Survival of the Fittest.',
            quote_by: 'Charles Darwin',
            mutationTime: '12:00:00',
        },
        {
            lineage: 'ellipticus',
            color: "#f2efdb",
            img: `/img/reef.webp`,
            quote: "But Natural Selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art.",
            quote_by: 'Charles Darwin',
            mutationTime: '15:00:00',
        },
        {
            lineage: 'mandalay',
            color: "#d2debf",
            img: `/img/rainforest.webp`,
            quote: 'It is not the strongest of the species that survives, not the most intelligent that survives. It is the one that is the most adaptable to change.',
            quote_by: 'Charles Darwin',
            mutationTime: '18:00:00',
        }
    ]


    return (
        <div>
            <Layout>
                <Introduction/>
                <EvoGallery match={match} panels={panels}/>
                <HowTo/>
            </Layout>
        </div>
    )
}

export default Home
