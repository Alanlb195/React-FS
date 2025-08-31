import { describe, test, expect, vi, afterEach } from 'vitest';
import { FirstSteps } from "./FirstSteps";
import { render, screen } from '@testing-library/react';


const mockItemCounter = vi.fn((_props: unknown) => {
    return <div data-testid="ItemCounter" />
});

vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter.tsx', () => ({
//     ItemCounter: (props: unknown) => (
//         <div
//             data-testid="ItemCounter"
//             productName={props.productName}
//             quantity={props.quantity}
//         />
//     )
// }))


describe('FirstSteps.tsx', () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    test('should remder firstName and LastName', () => {

        // method 1: [using container]
        // const { container } = render(<FirstSteps />);
        // console.log(container.innerHTML);

        // const h1 = container.querySelector('h1');
        // expect(h1?.innerHTML).toContain('Alan');

        // const h3 = container.querySelector('h3');
        // expect(h3?.innerHTML).toContain('Lopez');


        // method 2: [using screen] --- dirty form with test id ---
        render(<FirstSteps />);

        const h1 = screen.getByTestId('first-name-id');
        const h3 = screen.getByTestId('last-name-id');

        // console.log(h1.innerHTML);
        // console.log(h3.innerHTML);

        expect(h1.innerHTML).toContain('Alan');
        expect(h3.innerHTML).toContain('Lopez');

    });

    // test('should match snapshot', () => {
    //     const { container } = render(<FirstSteps />);
    //     expect(container).matchSnapshot();
    // });

    // test('should match snapshot', () => {
    //     render(<FirstSteps />);
    //     expect(screen.getByTestId('div-app')).toMatchSnapshot();
    // });

    test('should render the correct number of ItemCOunter components', () => {
        render(<FirstSteps />);
        // screen.debug();

        const itemCounters = screen.getAllByTestId('ItemCounter');

        expect(itemCounters.length).toBe(3);
        // console.log(itemCounters.length);
    });

    test('should render ItemCounter with correct props', () => {
        render(<FirstSteps />);
        screen.debug();

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({ productName: "Nintendo Switch 2", quantity: 1 });
        expect(mockItemCounter).toHaveBeenCalledWith({ productName: "Super Smash", quantity: 2 });
        expect(mockItemCounter).toHaveBeenCalledWith({ productName: "Pro Controller", quantity: 3 });
    });

});