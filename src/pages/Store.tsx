import {Col, Row} from "react-bootstrap";
import storeItems from "../data/items.json"
import {StoreItem} from "../components/StoreItem.tsx";
export function Store(){
    return(
<>
    <h1>Store</h1>
    <Row>
        {
storeItems.map(item => (
    <Col key = {item.id}>
        {/*{JSON.stringify(item}*/}
        <StoreItem {...item}/>
    </Col>
))
        }
    </Row>
</>

    )
}
