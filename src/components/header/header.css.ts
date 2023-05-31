import { style } from '@vanilla-extract/css'

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  padding: '10px 5px',
  backgroundColor: '#FF6600'
})

export const title = style({
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'black'
})

export const link = style({
  textDecoration: 'none',
  color: 'currentcolor'
})

export const logo = style({
  border: '1px solid white',
  padding: '0 6px'
})
