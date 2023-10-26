import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
import {Cartitem} from "./CartItem.tsx";
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
                        <Cartitem key={item.id} {...item}/>
                    ))}
                    {/*красивый знак доллара todo */}
                    {/* вывести тотал todo */}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}
