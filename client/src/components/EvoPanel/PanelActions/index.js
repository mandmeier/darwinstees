import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {addToCart} from '../../../state/actions/shopActions'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { setLayout } from '../../../state/actions/evoActions'
import GenerationButtons from '../../GenerationButtons'
import L1b from '../../../assets/L1b.svg'
import L3b from '../../../assets/L3b.svg'
import L7b from '../../../assets/L7b.svg'
import L1w from '../../../assets/L1w.svg'
import L3w from '../../../assets/L3w.svg'
import L7w from '../../../assets/L7w.svg'




const Actions = styled.div`

    & .generation-display{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        & p {
            margin: 0;
        }
        & .generation{
            font-size: 1.5rem;
            font-weight: bold;
            margin-right: 0.2rem;
        }
    }

    & p {
        font-size: 1rem;
        margin: 0.25rem 0;
    }

    & .buffer {
        margin: 0.5rem auto 0 auto;
        padding: 3px 9px;
        height: 20px;
    }

    & .selections {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        & .choose-layout {
            margin-right: 0.5rem
        }
        & .choose-qty {
            width: 100%;
            margin-top: 0.5rem;
            display: flex;
            justify-content: left;
            & button {
                width: 2rem;
                height: 2rem;
                padding: 0px 0px;
                font-weight: bold;
                cursor: pointer;
            }
        }

    }

    & .add-to-cart {
        margin: 0 0 0.5rem 0 !important;
        //margin-bottom: 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;

        & button {
            margin: 0 auto;
        }
    }
`

const SelectionButtons = styled.div`
    /* background-color: yellow; */

    margin: 0 auto;

    & button {
        width: 2rem;
        height: 2rem;
        padding: 0px 0px;
        font-weight: bold;
        cursor: pointer;
    }

    & .selected-btn {
        background-color: #333;
        color: #f9f9f9;
    }
`






const PanelActions = ({displayedEvos, lineage, generation}) => {

    const dispatch = useDispatch();

    const [selected, setSelected] = useState({S: true, M: false, L:false});
    const [selectedSize, setSelectedSize] = useState("S");


    const setSize = (size) => {
        let sizes
        if (size === "S") {
            sizes = {S: true, M: false, L:false}
        } else if (size === "M") {
            sizes =  {S: false, M: true, L:false}
        } else if (size === "L") {
            sizes =  {S: false, M: false, L:true}
        }
        setSelected(sizes)
        setSelectedSize(size)
    }


    const evoState = useSelector((state) => state.evoState)
    const layout = evoState.layout[lineage]

    const [currentItem, setCurrentItem] = useState('')
    const shopState = useSelector((state) => state.shopState)
    const { cart } = shopState
    const [currentIteminCart, setCurrentItemInCart] = useState(undefined)





    useEffect(() => {
        // get item id for current item
        let productId
        if (selectedSize === "S") {
            productId = "60c2c98b802d4da223643aff"
        } else if (selectedSize === "M") {
            productId = "60c2c9bf802d4da223643b00"
        } else if (selectedSize === "L") {
            productId = "60c2c9de802d4da223643b01"
        }
        setCurrentItem(`${productId}-${lineage}-${generation}-${layout}`)

        // check if current item in cart
        //const itemInCart = cart.find(item => item.itemId === currentItem)
        setCurrentItemInCart(cart.find(item => item.itemId === currentItem))
        console.log(currentIteminCart)

        // console.log("itemInCart")
        // console.log(itemInCart)
        // if(itemInCart === undefined){
        //     setInCart(0)
        // } else {
        //     setInCart(itemInCart.qty)
        // }

    }, [lineage, generation, layout, selectedSize, cart, currentItem, currentIteminCart])



    
    const handleAddCart = () => {
        const evoIds = []
        displayedEvos.forEach(evo => {
            evoIds.push(evo._id)
        });

        dispatch(addToCart(currentItem, lineage, generation, layout, evoIds, 1))  
    }

    const handleSetLayout = (newLayout) => {
        dispatch(setLayout(lineage, newLayout))
    }

    const L1 = layout === "1" ? <img src={L1w} height="24px" alt="layout 1"/> : <img src={L1b} height="24px" alt="layout 1"/>
    const L3 = layout === "3" ? <img src={L3w} height="24px" alt="layout 3"/> : <img src={L3b} height="24px" alt="layout 3"/>
    const L7 = layout === "7" ? <img src={L7w} height="24px" alt="layout 7"/> : <img src={L7b} height="24px" alt="layout 7"/>

    return (
        <Actions>
           
            <div className="choose-generation">
                <p className="generation">Generation</p>
                <div className="generation-display">
                    <GenerationButtons lineage={lineage}/> <p className="generation">{generation}</p>
                </div>
            </div>
            <div className="selections">
                <div className="choose-layout">
                    <p>Layout</p>
                    <SelectionButtons>
                        <button className={layout === "1" ? "selected-btn" : ""} onClick={() => handleSetLayout("1")}>{L1}</button>
                        <button className={layout === "3" ? "selected-btn" : ""} onClick={() => handleSetLayout("3")}>{L3}</button>
                        <button className={layout === "7" ? "selected-btn" : ""} onClick={() => handleSetLayout("7")}>{L7}</button>     
                    </SelectionButtons>
                </div>
                <div className="choose-size">
                    <p>Size</p>
                    <SelectionButtons>
                        <button className={selected.S ? "selected-btn" : ""} onClick={() => setSize("S")}>S</button>
                        <button className={selected.M ? "selected-btn" : ""} onClick={() => setSize("M")}>M</button>
                        <button className={selected.L ? "selected-btn" : ""} onClick={() => setSize("L")}>L</button>     
                    </SelectionButtons>
                </div>
            </div>
            <br/>
            <div className={"add-to-cart"}>
                <Button variant="contained" color="primary" onClick={() => handleAddCart()}>add to cart &nbsp;<AddShoppingCart/></Button>
             {currentIteminCart !== undefined
                ? 
                 <Button style={{margin:"0.5rem auto 0 auto"}} component={Link} variant="outlined" size="small" to="/cart">
                 <small style={{display:"flex", alignItems:"center"}}>{`${currentIteminCart.qty} added`}&nbsp;<ArrowForwardIcon style={{color:"#c00001", fontSize:"0.825rem"}}/><span style={{color:"#c00001"}}>&nbsp;go to cart</span></small>
                </Button>
                
                : <p className="buffer">&nbsp;</p>}
            </div>
           
           
        </Actions>
    )
}

export default PanelActions
