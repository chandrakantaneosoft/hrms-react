import { OwnerStateThemeType } from './'

export default {
  MuiButtonGroup: {
    styleOverrides: {
      root: ({ theme }: OwnerStateThemeType) => ({
        borderRadius: 8,
        padding: '10px 12px',
        boxShadow: 'none'
      })
    }
  }
}
