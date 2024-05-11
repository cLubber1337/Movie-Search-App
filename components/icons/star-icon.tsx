import React from 'react'

type Props = {
  color?: 'yellow' | 'grey' | 'purple'
}

export const StarIcon = ({ color = 'grey' }: Props) => {
  let fill

  switch (color) {
    case 'yellow':
      fill = 'var(--clr-yellow)'
      break
    case 'purple':
      fill = 'var(--clr-purple-main-500)'
      break
    case 'grey':
      fill = 'var(--clr-grey-300)'
      break
  }

  return (
    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.9999 19.7084L5.79926 23.4942L7.17476 15.4757L1.34143 9.79753L9.39143 8.63086L12.9918 1.33569L16.5921 8.63086L24.6421 9.79753L18.8088 15.4757L20.1843 23.4942L12.9999 19.7084Z"
        fill={fill}
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
