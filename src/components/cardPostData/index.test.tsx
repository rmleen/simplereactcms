// CardPostData.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardPostData from './index';

describe('CardPostData', () => {
  // Silence console logs during tests
  beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterAll(() => {
    (console.log as jest.Mock).mockRestore();
  });

  const makeProps = (overrides: Partial<{ isLoading: boolean; posts: any }>) => {
    const { isLoading = true, posts = {
      '1': { id: 1, title: 'First Post', body: 'Alpha body', views: 10 },
      '2': { id: 2, title: 'Second Post', body: 'Beta body', views: 20 },
    } } = overrides;

    return {
      postdata: {
        isLoading,
        data: { posts },
      },
    };
  };

  const renderWithRouter = (ui: React.ReactElement) =>
    render(<MemoryRouter>{ui}</MemoryRouter>);

  test('renders list of posts when isLoading is true and posts exist', () => {
    renderWithRouter(<CardPostData {...makeProps({ isLoading: true })} />);

    // Titles & bodies visible
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
    expect(screen.getByText('Alpha body')).toBeInTheDocument();
    expect(screen.getByText('Beta body')).toBeInTheDocument();

    // Links point to the detail routes
    const links = screen.getAllByRole('link');
    // Expect 2 links (one per post)
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '/posts/detail/1');
    expect(links[1]).toHaveAttribute('href', '/posts/detail/2');

    // No Skeleton shown in this branch
    const { container } = renderWithRouter(<CardPostData {...makeProps({ isLoading: true })} />);
    expect(container.querySelector('.MuiSkeleton-root')).toBeNull();
  });

  test('renders Skeleton when isLoading is true but posts is undefined', () => {
    const { container } = renderWithRouter(
      <CardPostData {...makeProps({ isLoading: true, posts: undefined })} />
    );

    // No post content should appear
    expect(screen.queryByText('First Post')).not.toBeInTheDocument();
    expect(screen.queryByText('Second Post')).not.toBeInTheDocument();

    // Skeleton present
    expect(container.querySelector('.MuiSkeleton-root')).toBeTruthy();
  });

  test('renders Skeleton when isLoading is false (even if posts exist)', () => {
    const { container } = renderWithRouter(
      <CardPostData {...makeProps({ isLoading: false })} />
    );

    // No post content should appear
    expect(screen.queryByText('First Post')).not.toBeInTheDocument();
    expect(screen.queryByText('Second Post')).not.toBeInTheDocument();

    // Skeleton present
    expect(container.querySelector('.MuiSkeleton-root')).toBeTruthy();
  });
});
