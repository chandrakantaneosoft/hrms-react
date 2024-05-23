// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.dark,
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '24px',
  letterSpacing: '0.15px'
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Typography variant='subtitle1' sx={{ mr: 2, lineHeight: '24px', color: '#929090' }}>
          {`© ${new Date().getFullYear()}, Powered `}

          {` by `}
          <LinkStyled target='_blank' href='https://hubblehox.com/'>
            HubbleHox
          </LinkStyled>
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <LinkStyled sx={{ mr: 3 }} target='_blank' href='https://hubblehox.com/'>
          License
        </LinkStyled>
        <LinkStyled sx={{ mr: 3 }} target='_blank' href='https://hubblehox.com/'>
          More Themes
        </LinkStyled>
        <LinkStyled sx={{ mr: 3 }} target='_blank' href='https://hubblehox.com/'>
          Documentation
        </LinkStyled>
        <LinkStyled target='_blank' href='https://hubblehox.com/'>
          Support
        </LinkStyled>
      </Box>
    </Box>
  )
}

export default FooterContent
