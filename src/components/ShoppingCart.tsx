import {Offcanvas} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
type ShoppingCartProps = {
    isOpen: Boolean
}

export function ShoppingCart ({isOpen}: ShoppingCartProps) {
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} onHide={closeCart}>
        </Offcanvas>
    )
}
