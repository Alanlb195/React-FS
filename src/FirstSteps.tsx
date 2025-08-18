import { useState, type CSSProperties } from "react";
import { ItemCounter, ItemInCart } from "./shopping-cart/ItemCOunter";

const firstName = 'Alan'
const lastName = 'Lopez'
const favoriteGames = ['Honor of Kings', 'Elden Ring', 'Shaiya']
const isActiveBtn = true;
const address = {
    street: 'CDA. Flamingo',
    houseNo: '515'
}

const itemsInCart: ItemInCart[] = [
    { productName: "Nintendo Switch 2", quantity: 1 },
    { productName: "Super Smash", quantity: 2 },
    { productName: "Pro Controller", quantity: 3 },
]

export const FirstStepsApp = () => {

    const [isActive, setIsActive] = useState(isActiveBtn)

    const addressStyles: CSSProperties = {
        backgroundColor: isActive ? 'green' : "red",
        borderRadius: 10,
        padding: 10,
        color: "white",
        marginTop: 20,
    }

    const handleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <h1>{firstName}</h1>
                <p>{lastName}</p>
                <p>{favoriteGames.join(', ')}</p>
                <span>{isActive ? 'Active' : 'Not Active'}</span>
                <button onClick={handleIsActive} className="btn">Change State</button>
                <p style={addressStyles}>{JSON.stringify(address)}</p>
                <p>Carrito de compras</p>
                {
                    itemsInCart.map(({ productName, quantity }) => {
                        return (
                            <ItemCounter key={productName} productName={productName} quantity={quantity} />
                        )
                    })
                }

            </div>
        </>

    )
}