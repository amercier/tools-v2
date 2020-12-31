import ShallowRenderer from 'react-test-renderer/shallow'
import Home from '.'

function setup() {
  return new ShallowRenderer().render(<Home />)
}

describe('home component', () => {
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
})
