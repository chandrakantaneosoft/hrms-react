// ** Type Import
import { OwnerStateThemeType } from './'

const typography = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }: OwnerStateThemeType) => ({
        marginBottom: theme.spacing(2)
      })
    },
    variants: [
      {
        props: { variant: 'h1' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 300,
          fontSize: '96px !important'
        })
      },
      {
        props: { variant: 'h2' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 300,
          fontSize: '60px !important'
        })
      },
      {
        props: { variant: 'h3' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '48px !important'
        })
      },
      {
        props: { variant: 'h4' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '34px !important'
        })
      },
      {
        props: { variant: 'h5' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '24px !important'
        })
      },
      {
        props: { variant: 'h6' },
        style: ({ theme }: OwnerStateThemeType) => ({
          fontWeight: 500,
          fontSize: '20px !important',
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: 'subtitle1' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '16px !important'
        })
      },
      {
        props: { variant: 'subtitle2' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 500,
          fontSize: '14px !important'
        })
      },
      {
        props: { variant: 'body1' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '16px !important'
        })
      },
      {
        props: { variant: 'body2' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '14px !important'
        })
      },
      {
        props: { variant: 'button' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 500,
          fontSize: '14px !important'
        })
      },
      {
        props: { variant: 'caption' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '12px !important'
        })
      },
      {
        props: { variant: 'overline' },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary,
          fontWeight: 400,
          fontSize: '10px !important'
        })
      }
    ]
  }
}

export default typography
