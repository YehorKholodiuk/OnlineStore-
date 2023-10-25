import {Button, Card} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {useState} from "react";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {






    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart()

    const quantity = getItemQuantity(id)

    return (
        //todo card

        <Card className="h-100">

            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "contain"}}
            />

            <Card.Body className="d-flex flex-column">
                <Card.Title>
                    <span className="fs-3">{name}</span>
                    <span className="ms-4 text-muted">{price}</span>
                </Card.Title>

                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button
                            className="w - 100"
                            variant="primary"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            Add to Cart
                        </Button>
                    ) : (
                        <div className = "d-flex align-items-center flex-column"
                        style = {{gap:"0.5rem"}}
                        >
                            <div className= "d-flex align-items-center justify-content-center"
                            style={{gap:"0.5rem"}}
                            >
                                <Button onClick = {() => decreaseCartQuantity(id)}> - </Button>
                                <div>
                                    <span>{quantity} </span> in cart
                                </div>
                               <Button onClick={() => increaseCartQuantity(id)}> + </Button>
                            </div>
                            <Button
                            variant = "danger"
                            size = "sm"
                            onClick = {() => removeFromCart(id)}
                            >Remove</Button>
                        </div>

                    )
                    }

                </div>
            </Card.Body>
        </Card>
    )
}
