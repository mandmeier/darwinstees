import React, {useState} from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { Button } from '@material-ui/core'
import {addToCart} from '../../../state/actions/shopActions'
import { AddShoppingCart } from '@material-ui/icons'
import { setLayout } from '../../../state/actions/evoActions'
import GenerationButtons from '../../GenerationButtons'
import SVG from 'react-inlinesvg';
import L1b from '../../../assets/L1b.svg'
import L3b from '../../../assets/L3b.svg'
import L7b from '../../../assets/L7b.svg'
import L1w from '../../../assets/L1w.svg'
import L3w from '../../../assets/L3w.svg'
import L7w from '../../../assets/L7w.svg'
import { Grid } from '@material-ui/core'




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
        justify-content: left;

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

const Btn = styled.button`
  width: 2rem;
  height: 2rem;
  padding: 0px 0px;
  font-weight: bold;
  cursor: pointer;
  color: #333;
  background-color: rgb(239, 239, 239);

  &:disabled {
    color: #333 !important;
    border-color: rgb(133, 133, 133) !important;
    background-color: rgb(239, 239, 239) !important;
    cursor: not-allowed;
  }
`

const QtyDisplay = styled.div`
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  border-radius: 0.25rem;
`;


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

    const [qty, setValue] = useState(1);

    const shopState = useSelector((state) => state.shopState)
    const cart = shopState.cart

    const evoState = useSelector((state) => state.evoState)
    const layout = evoState.layout[lineage]
   
    
    const handleAddCart = () => {

        let productId
        if (selectedSize === "S") {
            productId = "60c2c98b802d4da223643aff"
        } else if (selectedSize === "M") {
            productId = "60c2c9bf802d4da223643b00"
        } else if (selectedSize === "L") {
            productId = "60c2c9de802d4da223643b01"
        }

        const evoIds = []
        displayedEvos.forEach(evo => {
            evoIds.push(evo._id)
        });

        var itemId = `${productId}-${lineage}-${generation}-${layout}`
        var updatedItem = cart.find(item => item.itemId === itemId)

        dispatch(addToCart(itemId, lineage, generation, layout, evoIds, qty))

        // if(updatedItem === undefined){
        //     dispatch(addToCart(itemId, lineage, generation, layout, evoIds, qty))
        // } else {
        //     // increase cart item quantity
        //     dispatch(increaseQty(itemId, qty))  
        // }        
    }

    const handleSetLayout = (newLayout) => {
        console.log(layout)
        dispatch(setLayout(lineage, newLayout))
        console.log(layout)
    }

    const L1 = layout === "1" ? <img src={L1w} height="24px"/> : <img src={L1b} height="24px"/>
    const L3 = layout === "3" ? <img src={L3w} height="24px"/> : <img src={L3b} height="24px"/>
    const L7 = layout === "7" ? <img src={L7w} height="24px"/> : <img src={L7b} height="24px"/>

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
            </div>
        </Actions>
    )
}

export default PanelActions
