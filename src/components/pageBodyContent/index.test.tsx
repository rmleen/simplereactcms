import React from 'react';
import { render, screen } from '@testing-library/react';
import PageHeading from './index';

describe('PageHeading', () => {
  // Preserve original env var between tests
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv, PUBLIC_URL: '/public' };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  test('renders the title text', () => {
    render(<PageHeading title="My Test Page" />);
    expect(screen.getByText('My Test Page')).toBeInTheDocument();
  });

  test('uses default background image from PUBLIC_URL', () => {
    const { container } = render(<PageHeading title="Check Background" />);
    // It should reference /public/images/header01.jpg as the background
    const styledDiv = container.querySelector('div[style]');
    expect(styledDiv?.getAttribute('style')).toContain(
      'background-image: url(/public/images/header01.jpg)'
    );
  });

  test('renders the structure correctly', () => {
    const { container } = render(<PageHeading title="Structure Test" />);
    // Outer Box wrapper should exist
    const box = container.querySelector('.MuiBox-root');
    expect(box).toBeTruthy();

    // Typography element for title
    const heading = screen.getByRole('heading', { name: /structure test/i });
    expect(heading).toBeInTheDocument();

    // Verify styled HeadBackground div exists
    const backgroundDivs = container.querySelectorAll('div');
    expect(backgroundDivs.length).toBeGreaterThan(1);
  });

  test('does not break when title is missing', () => {
    const { container } = render(<PageHeading />);
    // It should still render without throwing
    const typography = container.querySelector('.MuiTypography-root');
    expect(typography).toBeTruthy();
  });
});
