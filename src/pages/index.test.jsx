import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Default } from './index.stories'

describe('default', () => {
  it('renders a Hello World message', () => {
    render(<Default />)
    screen.getByText('Hello world!')
  })
})
