import { render, screen, waitFor  } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { test, expect } from 'vitest';
import AllProducts from "../pages/subpages/AllProducts";


// test if there is any element on page
test('renders AllProducts component', () => {
    const { container } = render(
        <BrowserRouter>
            <AllProducts />
        </BrowserRouter>
    );

    expect(container.firstChild).toBeTruthy();
});

// Find the <h1> element 
test('renders AllProducts <h1> element', async () => {
    render(
        <BrowserRouter>
            <AllProducts />
        </BrowserRouter>
    );

    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
});

// find rendered images
test('renders AllProducts images', async () => {
    const { container } = render(
        <BrowserRouter>
            <AllProducts />
        </BrowserRouter>
    );

    await waitFor(() => {
        const images = container.getElementsByTagName('img');
        expect(images.length).toBeGreaterThan(0);

        Array.from(images).forEach(image => {
            expect(image).toBeInTheDocument();
        });
    });
});










