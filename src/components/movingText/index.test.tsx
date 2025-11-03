// MovingText.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovingText from './index';

describe('MovingText', () => {
  test('renders text twice', () => {
    const text = 'Scrolling Text';
    render(<MovingText text={text} />);

    // There should be two elements containing the text
    const textElements = screen.getAllByText(text);
    expect(textElements).toHaveLength(2);
  });

  test('applies base CSS classes', () => {
    const text = 'Base Class Test';
    const { container } = render(<MovingText text={text} />);

    const wrapper = container.querySelector('.cs-moving_text_wrap');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('cs-moving_text_wrap', 'cs-bold', 'cs-primary_font');

    // The inner structure should exist
    expect(container.querySelector('.cs-moving_text_in')).toBeTruthy();
    expect(container.querySelectorAll('.cs-moving_text')).toHaveLength(2);
  });

  test('adds variant class when provided', () => {
    const text = 'Variant Text';
    const variant = 'cs-variant-demo';
    const { container } = render(<MovingText text={text} variant={variant} />);

    const wrapper = container.querySelector('.cs-moving_text_wrap');
    expect(wrapper).toHaveClass(variant);
  });

  test('does not add undefined variant class when none provided', () => {
    const { container } = render(<MovingText text="No Variant" />);
    const wrapper = container.querySelector('.cs-moving_text_wrap');
    expect(wrapper?.className).not.toContain('undefined');
  });
});
