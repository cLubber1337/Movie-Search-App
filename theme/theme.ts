'use client'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import { createTheme } from '@mantine/core'
import { colors, primaryColor } from './colors'
import { defaultRadius, radius } from './radius'
import { Button, Select } from './components'
import { headings } from './heading'

export const theme = createTheme({
  fontFamily: 'var(--font-family)',
  headings,
  colors,
  radius,
  defaultRadius,
  components: { Select, Button },
  primaryColor,
})
