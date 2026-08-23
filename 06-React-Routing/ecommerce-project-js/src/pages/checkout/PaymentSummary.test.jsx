import { describe, it, vi, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { MemoryRouter, useLocation } from 'react-router';
import PaymentSummary from './PaymentSummary';

vi.mock('axios');

function Location() {
    const location = useLocation();

    return (
        <div data-testid="url-path">
            {location.pathname}
        </div>
    );
}

describe('PaymentSummary component', () => {
    let loadCart;

    beforeEach(() => {
        loadCart = vi.fn();
        vi.clearAllMocks();
    });

    it('displays the payment summary correctly', () => {
        const paymentSummary = {
            totalItems: 3,
            productCostCents: 3000,
            shippingCostCents: 500,
            totalCostBeforeTaxCents: 3500,
            taxCents: 350,
            totalCostCents: 3850
        };

        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />
            </MemoryRouter>
        );

        expect(
            screen.getByTestId('product-cost-row')
        ).toHaveTextContent('$30.00');

        expect(
            screen.getByTestId('shipping-cost-row')
        ).toHaveTextContent('$5.00');

        expect(
            screen.getByTestId('subtotal-row')
        ).toHaveTextContent('$35.00');

        expect(
            screen.getByTestId('tax-row')
        ).toHaveTextContent('$3.50');

        expect(
            screen.getByTestId('total-row')
        ).toHaveTextContent('$38.50');
    });

    it('places an order', async () => {
        const user = userEvent.setup();

        const paymentSummary = {
            totalItems: 3,
            productCostCents: 3000,
            shippingCostCents: 500,
            totalCostBeforeTaxCents: 3500,
            taxCents: 350,
            totalCostCents: 3850
        };

        axios.post.mockResolvedValue({});

        render(
            <MemoryRouter>
                <PaymentSummary
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />

                <Location />
            </MemoryRouter>
        );

        const placeOrderButton =
            screen.getByText('Place your order');

        await user.click(placeOrderButton);

        expect(axios.post).toHaveBeenCalledWith('/api/orders');

        expect(loadCart).toHaveBeenCalled();

        expect(
            screen.getByTestId('url-path')
        ).toHaveTextContent('/orders');
    });
});