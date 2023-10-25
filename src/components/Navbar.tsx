import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom";
import {useShoppingCart} from "../context/ShoppingCartContext.tsx";
export function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
<Container>
    <Nav className="me-auto">
        <Nav.Link to= "/" as={NavLink}>Home</Nav.Link>
        <Nav.Link to= "/store" as={NavLink}>Store</Nav.Link>
        <Nav.Link to= "/about" as={NavLink}>About</Nav.Link>
    </Nav>
    {/*ToDo basket element*/}
    {cartQuantity > 0 && (

        <Button
            onClick = {openCart}
            variant="info"
            style ={{width:"3rem", height:"3rem", position:'relative'}}
            className="rounded-circle"
            //ToDo function open basket
        >
            Cart
            <div
                className= "rounded-circle bg-danger d-flex  justify-content-center aligh-items-center"
                style={{
                    color: "black",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom:0,
                    right:0,
                    transform: "translate (35%, 35%)"
                }}
            >
                {cartQuantity}
                {/* cart quantity*/}
            </div>
        </Button>
    )}

</Container>

    </NavbarBs>)
}
