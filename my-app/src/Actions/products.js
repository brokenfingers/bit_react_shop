import { GET_PRODUCTS_FROM_SERVER } from "../Constants/frontTypes";

export default function getProductsFromServer(products) {

    return (
        {
            type: GET_PRODUCTS_FROM_SERVER,
            payload: products
        }

    )

}