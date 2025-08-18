import { useState } from "react";


// import './ItemCounter.css';
import styles from './ItemCounter.module.css';


export interface ItemInCart {
    productName: string
    quantity: number;
}

export const ItemCounter = (props: ItemInCart) => {

    const { productName, quantity: initialQty } = props;
    const [quantity, setQuantity] = useState(initialQty)

    const handleAdd = (value: number) => {
        setQuantity(value + 1);
    }

    const handleSubtrac = (value: number) => {
        setQuantity(value - 1);
    }

    return (
        <section className={styles['item-row']}>

            <span style={{ width: 150 }}>{productName}</span>

            <button className={styles.btn} onClick={() => handleAdd(quantity)}>+1</button>

            <span>{quantity}</span>

            <button className={styles.btn} onClick={() => handleSubtrac(quantity)}>-1</button>

        </section>
    )
}
