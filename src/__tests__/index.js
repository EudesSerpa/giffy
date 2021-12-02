import React from 'react';
import { fireEvent, render, screen, waitForElement } from '@testing-library/react';
import App from '../App';

test('home works as expected', async () => {
    // No usar de esta forma
    const {container} = render(<App />);
    const gifLink = await waitForElement(
        () => container.querySelector('.Gif')
    );

    expect(gifLink).toBeVisible();
});


test('search form could be used', async () => {
    render(<App />);

    // Obtiene el elemento por su role predeterminado
    const input = await screen.findByRole('searchbox');

    // Activa eventos
    fireEvent.change(input, { target: { value: 'Matrix' }});
    fireEvent.submit(input);

    const title = await screen.findByText('Matrix');
    expect(title).toBeVisible();
});