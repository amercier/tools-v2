import CopyButton from './CopyButton'

export default {
  component: CopyButton,
  title: 'CopyButton',
}

const Template = ({ text, title }) => (
  <CopyButton title={title} text={text}>
    {text}
  </CopyButton>
)

export const Base = Template.bind({})
Base.args = {
  text: '😃',
  title: 'smiley',
}
