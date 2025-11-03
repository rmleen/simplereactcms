// CardSectionData.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardSectionData from './index';

describe('CardSectionData', () => {
  const props = {
    title: 'Sample Title',
    link: '/sample-link',
    src: 'https://example.com/image.jpg',
    alt: 'Sample image alt text',
  };

  const renderComponent = () =>
    render(
      <MemoryRouter>
        <CardSectionData {...props} />
      </MemoryRouter>
    );

  test('renders link with correct href', () => {
    renderComponent();
    // MemoryRouter renders <a href="/sample-link">
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', props.link);
    expect(link).toHaveClass('cs-card', 'cs-style1');
  });

  test('renders image with correct src and alt', () => {
    renderComponent();
    const img = screen.getByRole('img', { name: props.alt });
    expect(img).toHaveAttribute('src', props.src);
    expect(img).toHaveAttribute('alt', props.alt);
  });

  test('renders the title text', () => {
    renderComponent();
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  test('renders overlay and info structure', () => {
    const { container } = renderComponent();
    // Check that the overlay div and info wrapper exist
    expect(container.querySelector('.cs-card_overlay')).toBeTruthy();
    expect(container.querySelector('.cs-card_info')).toBeTruthy();
    expect(container.querySelector('.cs-card_title')).toBeTruthy();
  });
});
