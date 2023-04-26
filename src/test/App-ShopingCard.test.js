import '@testing-library/dom'
import App from '../components/App'
import { render , screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

test('test if select work', () => {
  render(<App />)

  act(() => {
    userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole('combobox'),
      // Find and select the Ireland option, like a real user would.
      screen.getByRole('option', { name: 'graines' }),
    );
  });
  
  expect(screen.getByRole('option', { name: 'graines' }).selected).toBe(true)

})


