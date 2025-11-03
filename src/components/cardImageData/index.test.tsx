import React from 'react';
import { render, screen } from '@testing-library/react';
import CardImageData from './index';

describe('CardImageData', () => {
  const items = [
    {
      title: 'First Image',
      url: 'https://dummyjson.com/image/400x300',
      description: 'First description',
    },
    {
      title: 'Second Image',
      url: 'https://dummyjson.com/image/400x300',
      description: 'Second description',
    },
  ];

  // Silence console logs from the component during tests
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterAll(() => {
    (console.log as jest.Mock).mockRestore();
  });

  const makeProps = (isLoading: boolean) => ({
    imagesdata: {
      isLoading,
      data: { data: items },
    },
  });

  test('renders a list of cards when isLoading is true', () => {
    render(<CardImageData {...makeProps(true)} />);

    // Titles visible via CardHeader
    expect(screen.getByText('First Image')).toBeInTheDocument();
    expect(screen.getByText('Second Image')).toBeInTheDocument();

    // Descriptions visible in Typography
    expect(screen.getByText('First description')).toBeInTheDocument();
    expect(screen.getByText('Second description')).toBeInTheDocument();

    // Images are rendered by MUI CardMedia -> <img>, check src attributes
    const imgs = screen.getAllByRole('img');
    // There should be one img per item
    expect(imgs).toHaveLength(items.length);
    expect(imgs[0]).toHaveAttribute('src', items[0].url);
    expect(imgs[1]).toHaveAttribute('src', items[1].url);

    // IconButton wraps a link with href = item.url
    // MUI's IconButton with LinkComponent="a" renders an <a>, so query all links and verify
    const links = screen.getAllByRole('link');
    // There should be one link per item
    expect(links).toHaveLength(items.length);
    expect(links[0]).toHaveAttribute('href', items[0].url);
    expect(links[1]).toHaveAttribute('href', items[1].url);

    // Should NOT show Skeleton when isLoading is true in your current logic
    // (Sanity check: no element with MUI Skeleton class)
    const { container } = render(<CardImageData {...makeProps(true)} />);
    expect(container.querySelector('.MuiSkeleton-root')).toBeNull();
  });

  test('renders a Skeleton when isLoading is false', () => {
    const { container } = render(<CardImageData {...makeProps(false)} />);

    // Expect no card titles present
    expect(screen.queryByText('First Image')).not.toBeInTheDocument();
    expect(screen.queryByText('Second Image')).not.toBeInTheDocument();

    // Skeleton has no accessible role/text by default; check via class selector
    // This targets MUI's default root class for Skeleton.
    const skeleton = container.querySelector('.MuiSkeleton-root');
    expect(skeleton).toBeTruthy();
  });
});