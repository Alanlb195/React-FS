import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter.tsx', () => {
    test('should render with default values', () => {
        const name = "perro";
        const qty = 2;

        render(<ItemCounter productName={name} quantity={qty} />);

        expect(screen.getByTestId("product-name")).toHaveTextContent(name);
        expect(screen.getByTestId("counter")).toHaveTextContent(String(qty));
    });

    test('should increase count when +1 button is pressed', () => {
        render(<ItemCounter productName="Test item" quantity={5} />);

        const counter = screen.getByTestId('counter');
        const buttonAdd = screen.getByTestId('button-add');

        expect(counter).toHaveTextContent("5"); // initial state
        fireEvent.click(buttonAdd);
        expect(counter).toHaveTextContent("6"); // after one click
        fireEvent.click(buttonAdd);
        expect(counter).toHaveTextContent("7"); // after two clicks
    });

    test('should decrease count when -1 button is pressed', () => {
        render(<ItemCounter productName="Test item" quantity={5} />);

        const counter = screen.getByTestId('counter');
        const buttonSubtract = screen.getByTestId('button-subtract');

        expect(counter).toHaveTextContent("5"); // initial state
        fireEvent.click(buttonSubtract);
        expect(counter).toHaveTextContent("4"); // after one click
        fireEvent.click(buttonSubtract);
        expect(counter).toHaveTextContent("3"); // after two clicks
    });

    test('should not decrease below zero', () => {
        render(<ItemCounter productName="Test item" quantity={0} />);

        const counter = screen.getByTestId('counter');
        const buttonSubtract = screen.getByTestId('button-subtract');

        expect(counter).toHaveTextContent("0"); // initial state
        fireEvent.click(buttonSubtract);
        expect(counter).toHaveTextContent("0"); // continues with cero
    });

    test('should change to blue when count is >= one', () => {
        const name = "Test item";
        const qty = 0;
        render(<ItemCounter productName={name} quantity={qty} />);

        const productName = screen.getByTestId('product-name');
        const buttonAdd = screen.getByTestId('button-add');

        // before click
        // console.log(productName.style.color);
        expect(productName.style.color).toBe('black');

        // after one click
        fireEvent.click(buttonAdd);
        // console.log(productName.style.color);
        expect(productName.style.color).toBe('blue')
    });

});
