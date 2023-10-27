import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {CartItem} from "./CartItem.tsx";
//import {StoreItem} from "./StoreItem.tsx";
import storeItems from "../data/items.json"
type ShoppingCartProps = {
    isOpen: Boolean
}

export function ShoppingCart ({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My shopping cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item}/>
                    ))}
                    <div>
          Total{" "}
                        {
                            cartItems.reduce((total, cartItem) => {
                                const item = storeItems.find(i => i.id === cartItem.id)
                                return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                        }

                    </div>

                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
