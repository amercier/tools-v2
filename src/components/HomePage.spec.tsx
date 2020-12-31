import { createRenderer } from 'react-test-renderer/shallow'
import HomePage from './HomePage'

function setup() {
  return createRenderer().render(<HomePage />)
}

it('renders without crashing', () => {
  expect(setup).not.toThrow()
})

it('renders as expected', () => {
  expect(setup()).toMatchInlineSnapshot(`
      <div>
        Hello world!
      </div>
    `)
})
