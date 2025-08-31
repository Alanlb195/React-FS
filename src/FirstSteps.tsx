import { type CSSProperties } from "react";
import { ItemCounter, ItemInCart } from "./shopping-cart/ItemCounter";

const firstName = 'Alan'
const lastName = 'Lopez'
const favoriteGames = ['Honor of Kings', 'Elden Ring', 'Shaiya']
const isActive = true;
const address = {
    street: 'CDA. Flamingo',
    houseNo: '515'
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Super Smash", quantity: 2 },
    { productName: "Pro Controller", quantity: 3 },
]

export const FirstSteps = () => {

    const addressStyles: CSSProperties = {
        backgroundColor: isActive ? 'green' : "red",
        color: "white",
    }

    return (
        <>
            <div
                data-testid="div-app"
                style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                <h1 data-testid="first-name-id">{firstName}</h1>
                <h3 data-testid="last-name-id">{lastName}</h3>
                <p>{favoriteGames.join(', ')}</p>
                <span>{isActive ? 'Active' : 'Not Active'}</span>
                <p style={addressStyles}>{JSON.stringify(address)}</p>


                <p>Carrito de compras</p>
                {
                    itemsInCart.map(({ productName, quantity }) => {
                        return (
                            <ItemCounter
                                key={productName}
                                productName={productName}
                                quantity={quantity}
                            />
                        )
                    })
                }

            </div>
        </>

    )
}