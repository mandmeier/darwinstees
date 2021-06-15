import React, {useState} from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux"
import { Button } from '@material-ui/core'
import {addToCart, increaseQty} from '../../../state/actions/shopActions'
import { AddShoppingCart } from '@material-ui/icons'
import { setLayout } from '../../../state/actions/evoActions'




const Actions = styled.div`
    margin: 1rem 0;
    
    & .choose-layout, .choose-size {
        display: flex;
        justify-content: center;
        margin-bottom: 0.5rem;
    }

    & .choose-qty {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
    }

    & .add-to-cart {
        margin-top: 1rem;
        display: flex;
        justify-content: center;
    }
`

const SelectionButtons = styled.div`
    /* background-color: yellow; */

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
`;

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

    const increase = () => {
        let newValue = qty + 1;
        setValue(newValue);
    };

    const decrease = () => {
        let newValue = qty - 1;
        setValue(newValue);
    };


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

        var itemId = `${lineage}-${generation}-${layout}-${selectedSize}`
        var updatedItem = cart.find(item => item.itemId === itemId)
        if(updatedItem === undefined){
            dispatch(addToCart(itemId, productId, lineage, generation, layout, evoIds, qty))
        } else {
            // increase cart item quantity
            dispatch(increaseQty(itemId, qty))  
        }        
    }

    const handleSetLayout = (newLayout) => {
        console.log(layout)
        dispatch(setLayout(lineage, newLayout))
        console.log(layout)
    }


    return (
        <Actions>
            <div className="choose-layout">
                <SelectionButtons>
                    <button className={layout === "1" ? "selected-btn" : ""} onClick={() => handleSetLayout("1")}>L1</button>
                    <button className={layout === "3" ? "selected-btn" : ""} onClick={() => handleSetLayout("3")}>L3</button>
                    <button className={layout === "7" ? "selected-btn" : ""} onClick={() => handleSetLayout("7")}>L7</button>     
                </SelectionButtons>
            </div>
            <div className="choose-size">
                <SelectionButtons>
                    <button className={selected.S ? "selected-btn" : ""} onClick={() => setSize("S")}>S</button>
                    <button className={selected.M ? "selected-btn" : ""} onClick={() => setSize("M")}>M</button>
                    <button className={selected.L ? "selected-btn" : ""} onClick={() => setSize("L")}>L</button>     
                </SelectionButtons>
            </div>
            <div className="choose-qty">
                    <Btn
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => decrease()}
                        disabled={qty <= 0 && true}
                    >
                        –
                    </Btn>
                    <QtyDisplay>{qty}</QtyDisplay>
                    <Btn
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => increase()}
                        disabled={qty >= 100 && true}
                    >
                        +
                    </Btn>
            </div>
            <div className={"add-to-cart"}>
                <Button variant="contained" color="primary" onClick={() => handleAddCart()}>add to cart &nbsp;<AddShoppingCart/></Button>
            </div>
        </Actions>
    )
}

export default PanelActions
