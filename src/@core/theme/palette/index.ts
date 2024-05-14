// ** Type Imports
import { Palette } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Skin } from 'src/@core/layouts/types'

const DefaultPalette = (mode: Palette['mode'], skin: Skin): Palette => {
  // ** Vars
  const whiteColor = '#FFF'
  const lightColor = '76, 78, 100'
  const darkColor = '234, 234, 255'
  const mainColor = mode === 'light' ? lightColor : darkColor

  const defaultBgColor = () => {
    if (skin === 'bordered' && mode === 'light') {
      return whiteColor
    } else if (skin === 'bordered' && mode === 'dark') {
      return '#30334E'
    } else if (mode === 'light') {
      return '#F7F7F9'
    } else return '#282A42'
  }

  return {
    customColors: {
      dark: darkColor,
      main: mainColor,
      light: lightColor,
      darkBg: '#282A42',
      lightBg: '#F0f2f4',
      bodyBg: mode === 'light' ? '#F7F7F9' : '#282A42', // Same as palette.background.default but doesn't consider bordered skin
      trackBg: mode === 'light' ? '#F2F2F4' : '#41435C',
      avatarBg: mode === 'light' ? '#F1F1F3' : '#3F425C',
      tooltipBg: mode === 'light' ? '#262732' : '#464A65',
      tableHeaderBg: mode === 'light' ? '#F5F5F7' : '#3A3E5B',
      primaryLighter: '#CFD5F1',
      primaryLightest: '#EBEBFA',
      secondaryLighter: '#EBDEE5',
      title: '#111111',
      mainText: '#535252',
      inactive: '#929090',
      disable: '#C9C6C5',
      label: '#535252',
      text1: '#212121',
      text2: '#666666',
      text3: '#A3A3A3',
      text4: '#BDBDBD',
      text5: '#E0E0E0',
      text6: '#5A5D72',
      text7: '#1B1B23',
      surfaeLighter: '#F7F7F9',
      chipWarningText: '#881115',
      textLabel: '#626477',
      chipBorder: '#767586',
      disabled: '#F3F0F0',
      disableBorder: '#49454F1F',
      chipHoverBackground: '#FCF8FF',
      chipTonalBackground: '#F4F0EF',
      dividerColor: '#C7C4D7',
      badgeColorDefault: '#B3234B'
    },
    mode: mode,
    common: {
      black: '#000',
      white: whiteColor
    },
    primary: {
      light: '#7B7FDE',
      main: '#4B4DD4',
      dark: '#3F41D1',
      contrastText: whiteColor
    },
    secondary: {
      light: '#E8ADBE',
      main: '#E697AB',
      dark: '#310000',
      contrastText: whiteColor
    },
    error: {
      main: '#E6393E',
      dark: '#881115',
      contrastText: whiteColor
    },
    warning: {
      light: '#FDBE42',
      main: '#FDB528',
      dark: '#DF9F23',
      contrastText: whiteColor
    },
    info: {
      light: '#40CDFA',
      main: '#26C6F9',
      dark: '#21AEDB',
      contrastText: whiteColor
    },
    success: {
      main: '#F3F9EC',
      dark: '#507326',
      contrastText: whiteColor
    },
    grey: {
      50: '#F3F0F0',
      100: '#767586',
      200: '#EEEEEE',
      300: '#E0E0E0',
      400: '#BDBDBD',
      500: '#9E9E9E',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#F5F5F5',
      A200: '#EEEEEE',
      A400: '#BDBDBD',
      A700: '#616161'
    },
    text: {
      primary: '#535252',
      secondary: `rgba(${mainColor}, 0.6)`,
      disabled: `rgba(${mainColor}, 0.38)`
    },
    divider: `rgba(${mainColor}, 0.12)`,
    background: {
      paper: mode === 'light' ? whiteColor : '#30334E',
      default: defaultBgColor()
    },
    action: {
      active: `rgba(${mainColor}, 0.54)`,
      hover: `rgba(${mainColor}, 0.05)`,
      hoverOpacity: 0.05,
      selected: `rgba(${grey[50]}, 0.08)`,
      disabled: `rgba(${mainColor}, 0.26)`,
      disabledBackground: `rgba(${mainColor}, 0.12)`,
      focus: `rgba(${grey[50]}, 0.12)`
    }
  } as Palette
}

export default DefaultPalette
