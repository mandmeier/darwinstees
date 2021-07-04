import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import EvoGallery from '../components/EvoGallery'
import {useSelector} from 'react-redux'

const Home = ({match}) => {





    var panels = [ 
        {
            lineage: 'lineax',
            color: "#bed7d6",
            img: `/img/reef.webp`,
            quote: 'It is not the strongest of the species that survives, not the most intelligent that survives. It is the one that is the most adaptable to change.'
        },
        {
            lineage: 'ellipticus',
            color: "#f2efdb",
            img: `/img/desert.webp`,
            quote: 'This preservation of favourable individual differences and variations, and the destruction of those which are injurious, I have called Natural Selection, or the Survival of the Fittest.'
            
            //img: "/img/desert.webp"
        },
        {
            lineage: 'mandalay',
            color: "#d2debf",
            img: `/img/rainforest.webp`,
            quote: "But Natural Selection, as we shall hereafter see, is a power incessantly ready for action, and is immeasurably superior to man's feeble efforts, as the works of Nature are to those of Art."

            //img: "/img/rainforest.webp"
        }
    ]


    const urlLineage= match.params.urlLineage
    const index = urlLineage !== undefined ? panels.findIndex(panel => panel.lineage === urlLineage) : 0
    panels = [...panels.slice(index), ...panels.slice(0, index)]

    
    // var {thumbs} = evoState

    // useEffect(() => {
    //     const evosLoaded =  Object.values(evosLoading).every(v => v === false)
    //     console.log("evosLoaded")
    //     console.log(evosLoading)
    //     console.log(Object.values(evosLoading))
    //     if (evosLoaded) { 
    //         panels = panels.map(panel => ({...panel, thumb: thumbs[panel.lineage]}))
    //         console.log("ORDERED")
    //         setThumbsLoaded(true)
    //     }
    // }, [evosLoading, thumbs])

    // console.log("thumbsLoaded")
    // console.log(thumbsLoaded)

    

    return (
        <div>
            <Layout>
                <EvoGallery panels={panels}/>
            </Layout>
        </div>
    )
}

export default Home
