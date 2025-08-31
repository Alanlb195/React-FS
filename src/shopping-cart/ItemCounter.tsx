import { useState } from "react";
import styles from './ItemCounter.module.css';

export interface ItemInCart {
    productName: string
    quantity: number;
}

export const ItemCounter = (props: ItemInCart) => {
    const { productName, quantity: initialQty } = props;
    const [quantity, setQuantity] = useState(initialQty);

    const handleAdd = (value: number) => {
        // console.log('log from ItemCounter');
        setQuantity(value + 1);
    };

    const handleSubtrac = (value: number) => {
        if (value === 0) return;
        setQuantity(value - 1);
    };

    return (
        <section
            className={styles['item-row']}
            data-testid="item-row"
        >
            <span
                data-testid="product-name"
                style={{
                    width: 150,
                    color: quantity >= 1 ? 'blue' : 'black'
                }}
            >
                {productName}
            </span>

            <button
                data-testid="button-add"
                className={styles.btn}
                onClick={() => handleAdd(quantity)}
            >
                +1
            </button>

            <span
                data-testid="counter"
            >{quantity}</span>

            <button
                data-testid="button-subtract"
                className={styles.btn}
                onClick={() => handleSubtrac(quantity)}
            >
                -1
            </button>
        </section>
    );
};
