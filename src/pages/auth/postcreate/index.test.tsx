import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import  PostCreate  from './index';

/*
test('submits email and password', async () => {
  const handleSubmit = jest.fn();
  render(<PostCreate onSubmit={handleSubmit} />);

  await userEvent.type(screen.getByPlaceholderText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByPlaceholderText(/password/i), '1234');
  await userEvent.click(screen.getByRole('button', { name: /login/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: '1234',
  });
});
*/