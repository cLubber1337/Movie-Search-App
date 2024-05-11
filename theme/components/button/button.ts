import { Button as MantineButton, rem } from '@mantine/core'
import s from './button.module.css'

export const Button = MantineButton.extend({
  classNames: {
    root: s.button,
  },
  defaultProps: {
    size: 'sm',
  },
  vars: (_, props) => {
    if (props.size === 'md') {
      return {
        root: {
          '--button-height': rem(40),
          '--button-padding-x': rem(20),
          '--button-padding-y': rem(10),
          '--button-fz': rem(14),
        },
      }
    }

    if (props.size === 'sm') {
      return {
        root: {
          '--button-height': rem(32),
          '--button-padding-x': rem(20),
          '--button-padding-y': rem(6),
          '--button-fz': rem(14),
        },
      }
    }
    return {
      root: {
        '--button-hover': '#ffffff',
      },
    }
  },
})
