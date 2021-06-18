import React, {useState} from 'react'
import {Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './CartItemElements'
import { useSelector, useDispatch } from "react-redux"
import {removeItem} from '../../../state/actions/shopActions'
import SVG from 'react-inlinesvg';
import styled from 'styled-components'
import tee from '../../../assets/Tshirt.png'
    

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
        padding-bottom: calc(45% / 0.875);
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
  & .choose-qty {
        width: 100%;
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

    const lineTotal = item.price // * qty


    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    console.log("ITEM")
    console.log(item)


    const [qty, setValue] = useState(1);


    const increase = () => {
        let newValue = qty + 1;
        setValue(newValue);
    };

    const decrease = () => {
        let newValue = qty - 1;
        setValue(newValue);
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
                                    <SVG src={item.item.design.svg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tshirtwrapper>
            <ItemActions>
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
