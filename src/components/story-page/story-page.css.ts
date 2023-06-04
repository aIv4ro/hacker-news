import { style } from '@vanilla-extract/css'

export const section = style({
  padding: '10px'
})

export const sectionWithoutPadding = style({
  paddingLeft: '0'
})

export const commentsList = style({
  marginTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px 0'
})
