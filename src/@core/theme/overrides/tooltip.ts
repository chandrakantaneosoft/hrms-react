// ** Type Import
import { fontSize, fontWeight, padding } from '@mui/system'
import { OwnerStateThemeType } from './'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const Tooltip = () => {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }: OwnerStateThemeType) => ({
          borderRadius: '4px',
          padding: '4px 8px',
          fontSize: '14px',
          fontWeight: 500,
          color: theme.palette.common.white,
          lineHeight: '21px',
          backgroundColor: theme.palette.customColors.title,
          '& .MuiTooltip-popper': {
            borderRadius: '4px !important',
            padding: '4px 8px',
            fontSize: '14px !important',
            fontWeight: 500,
            color: theme.palette.common.white,
            lineHeight: '21px',
            backgroundColor: theme.palette.customColors.title
          },
          '&.#richTooltip': {
            color: theme.palette.customColors.textLabel,
            backgroundColor: theme.palette.customColors.primaryLightest
          }
        }),
        arrow: ({ theme }: OwnerStateThemeType) => ({
          color: hexToRGBA(theme.palette.customColors.tooltipBg, 0.9)
        })
      }
    }
  }
}

export default Tooltip
