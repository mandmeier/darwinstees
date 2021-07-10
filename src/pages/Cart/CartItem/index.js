import React, {useState} from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './CartItemElements'
import { useSelector, useDispatch } from "react-redux"
import {removeItem} from '../../../state/actions/shopActions'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../../assets/Tshirt.png'
import {updateQty} from '../../../state/actions/shopActions'
import CloseIcon from '@material-ui/icons/Close';
    

const Tshirtwrapper = styled.div`
    & .tshirt {
        background-image: url(${tee});
        background-repeat:no-repeat;
        background-position: center top;
        background-size: contain;
        position: relative;
    }

    & img {
        width: 100%;
        visibility: hidden;
    }
    & .tshirt-content {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    & .print-area-wrapper {
        margin: 12% auto 0 25%;
        width: 45%;
        padding-bottom: calc(45% / 0.75); /* 4:3 */
        position: relative;
        /* background: yellow; */
    }

    & .print-area {
        position: absolute;
        top: 0; bottom: 0; left: 0; right: 0;

        color: white;
        font-size: 24px;
        text-align: center;
    }

    & .svg-container {
        width: 100%;
        height: 100%;
        position: relative
    }

    & .evo-svg{
        position: absolute;
        width: 100%;
        height: 100%;
        /* background-color: blue; */
    }

    & .evo0 {
        top: 6.25%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
`

const ItemActions = styled.div`
    background: rgba(250, 250, 255, 0.8);
    padding: 0.5rem;
    border-radius: 0.3rem;

    & .choose-qty {
        margin-top: 0.5rem;
        display: flex;
        justify-content: center;
        & button {
            width: 2rem;
            height: 2rem;
            padding: 0px 0px;
            font-weight: bold;
            cursor: pointer;
        }
    }

    & .item-title{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: relative;

        & button {
            position: absolute;
            top: -1rem;
            right: -1rem;
            background-color: red;
            color: white;
            border-radius: 2rem;
            border: none;
            cursor: pointer;
            //width: 2rem;
            & svg {
                font-size: 1.2rem;
                font-weight: bold;
            }
        }
    }

    & .line-total{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        & p {
            margin: 0;
            font-size: 1rem;
        }
    }

`;


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

const CartItem = ({item}) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const lineTotal = (item.product.price  * item.qty).toFixed(2)


    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    
    var qty = item.qty

    function capitalize(word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    const increase = () => {
        let updatedQty = qty + 1;
       dispatch(updateQty(item.itemId, updatedQty))
    };

    const decrease = () => {
        let updatedQty = qty - 1;
        dispatch(updateQty(item.itemId, updatedQty))
    };

    return (

        <div>
            <Tshirtwrapper>
                <div className="tshirt">
                    <img src={tee}/>
                    <div className="tshirt-content">
                        <div className="print-area-wrapper">
                            <div className="print-area">
                                <div className="svg-container">
                                    <SVG src={item.design.svg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tshirtwrapper>
            <ItemActions>
            <div className="item-title">
                    <div>{item.product.name}</div>
                    {/* <Button size="small" type="button" variant="contained" color="secondary" onClick={()=>handleRemoveItem(item.itemId)}><DeleteForeverIcon/></Button> */}
                    <button type="button" onClick={()=>handleRemoveItem(item.itemId)}><CloseIcon/></button>
            </div>
            <div><i>{`${capitalize(item.design.lineage)}`}</i></div>
            <div>{`Gen ${item.design.generation}`}</div>
            <div className="line-total">
                <div className="choose-qty">
                        <Btn
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => decrease()}
                            disabled={qty <= 1 && true}
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
                <p>${lineTotal}</p>
            </div>
                 </ItemActions>
            {/* <CardContent className={classes.cardContent}>
                <Typography variant="h5">{lineTotal}</Typography>
            </CardContent>
            <CardActions>
                <div className={classes.buttons}>
                    <Button type="button" size="small">-</Button>
                    <Typography>quantity</Typography>
                    <Button type="button" size="small">+</Button>
                </div>
                    <Button type="button" variant="contained" color="secondary" onClick={()=>handleRemoveItem(item.itemId)}>Remove</Button>
            </CardActions> */}
        </div>
    )
}

export default CartItem
