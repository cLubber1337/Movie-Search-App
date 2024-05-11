import { Select as MantineSelect } from '@mantine/core'
import classes from './select.module.css'

export const Select = MantineSelect.extend({
  classNames: {
    input: classes.input,
  },
})
