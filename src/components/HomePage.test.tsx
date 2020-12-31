import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Default } from './HomePage.stories'

test('Default', () => {
  render(<Default />)
  screen.getByText('Hello world!')
})
