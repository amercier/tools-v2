import CopyButton from './CopyButton'

export default {
  component: CopyButton,
  title: 'CopyButton',
  args: {
    text: '😃',
    title: 'smiley',
    children: 'Copy',
  },
}

export const Default = CopyButton
