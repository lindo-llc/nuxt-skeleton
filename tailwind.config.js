const defaultTheme = require('tailwindcss/defaultTheme')
const tinycolor = require('tinycolor2')

const customColors = [
  {
    name: 'primary',
    hex: '#00E3AE'
  },
  {
    name: 'secondary',
    hex: '#9BE15D'
  },
  {
    name: 'dark',
    hex: '#101117'
  },
  {
    name: 'gray',
    hex: defaultTheme.colors.gray[500]
  },
  {
    name: 'white',
    hex: defaultTheme.colors.white
  },
  {
    name: 'blue',
    hex: defaultTheme.colors.blue[500]
  },
]

const numAlphas = 20;
const alphaInterval = 1 / numAlphas; // Alphas: 0.1, 0.2, 0.3 ...
const alphaColors = {};

for (let index = 0; index < customColors.length; index++) {
  let color_name = customColors[index].name;
  let color_hex = customColors[index].hex;

  // Push the default color in
  alphaColors[color_name] = color_hex;

  for (let index = 1; index < numAlphas; index++) {
    let alphaVal = alphaInterval * index;
    let alphaName = Math.floor(alphaVal * 100);
    let alphaColorName = `${color_name}-a-${alphaName}`
    alphaColors[alphaColorName] = tinycolor(color_hex).setAlpha(alphaVal).toRgbString()
  }
};

const colors = {
  ...defaultTheme.colors,
  'green': {
    100: '#ECFAF1',
    200: '#CFF2DB',
    300: '#B1EBC5',
    400: '#77DB9A',
    500: '#3DCC6F',
    600: '#37B864',
    700: '#257A43',
    800: '#1B5C32',
    900: '#123D21',
  },
  'emerald': {
    100: '#EBFFF5',
    200: '#CEFFE7',
    300: '#B0FED8',
    400: '#75FEBA',
    500: '#3AFD9D',
    600: '#34E48D',
    700: '#23985E',
    800: '#1A7247',
    900: '#114C2F',
  },
  // 'blue': {
  //   100: '#ECEFFE',
  //   200: '#D0D6FD',
  //   300: '#B4BDFB',
  //   400: '#7C8CF9',
  //   500: '#445AF6',
  //   600: '#3D51DD',
  //   700: '#293694',
  //   800: '#1F296F',
  //   900: '#141B4A',
  // },
  blue: {
    100: '#EEF4FF',
    200: '#D5E4FF',
    300: '#BBD4FF',
    400: '#89B4FF',
    500: '#5694FF',
    600: '#4D85E6',
    700: '#345999',
    800: '#274373',
    900: '#1A2C4D',
  },
  'saturated-blue': {
    100: '#EBF2FF',
    200: '#CEDEFF',
    300: '#B1CBFF',
    400: '#76A3FF',
    500: '#3B7CFF',
    600: '#3570E6',
    700: '#234A99',
    800: '#1B3873',
    900: '#12254D',
  },
  yellow: {
    100: '#FDFBF0',
    200: '#FBF4DA',
    300: '#F9EDC3',
    400: '#F4E096',
    500: '#EFD269',
    600: '#D7BD5F',
    700: '#8F7E3F',
    800: '#6C5F2F',
    900: '#483F20',
  },
  indigo: {
    100: '#F2F6FD',
    200: '#DEE8F9',
    300: '#CAD9F6',
    400: '#A2BDEF',
    500: '#7AA1E8',
    600: '#6E91D1',
    700: '#49618B',
    800: '#374868',
    900: '#253046',
  },
  'orange': {
    100: '#FFF5EC',
    200: '#FEE6D0',
    300: '#FDD7B4',
    400: '#FCB87B',
    500: '#FA9A43',
    600: '#E18B3C',
    700: '#965C28',
    800: '#71451E',
    900: '#4B2E14',
  },
}

const newColors = {
  ...alphaColors,
  'ghost-white': {
    100: '#FEFEFF',
    200: '#FDFEFE',
    300: '#FBFDFE',
    400: '#F9FBFD',
    500: '#F6F9FC',
    600: '#DDE0E3',
    700: '#949597',
    800: '#6F7071',
    900: '#4A4B4C',
  },
  /** Serves as a placeholder for color select component (Atoms/AppColor.vue) */
  'color-select': defaultTheme.colors.gray[500],
  ...colors
}

const tailwindConfig = {
  important: true,
  theme: {
    colors: newColors,
    boxShadow: {
      none: '0 none',
      xs: '0 0 0 1px rgba(0, 0, 0, 0.045)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.035)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, .015)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, .025)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, .020)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, .015)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
      /** Circle Icon shadow */
      'solid': '0px 0px 0px 0.3124rem rgba(55, 226, 146, 0.35)',
      'solid-active': '0px 0px 0px 0.625rem rgba(55, 226, 146, 0.35)',
      'solid-info': '0px 0px 0px 0.3124rem rgba(86, 148, 255, 0.35)',
      'solid-info-active': '0px 0px 0px 0.625rem rgba(86, 148, 255, 0.35)',
      'solid-warning': '0px 0px 0px 0.3124rem rgba(255, 154, 61, 0.35)',
      'solid-warning-active': '0px 0px 0px 0.625rem rgba(255, 154, 61, 0.35)',
      'solid-danger': '0px 0px 0px 0.3124rem rgba(245, 101, 101, 0.35)',
      'solid-danger-active': '0px 0px 0px 0.625rem rgba(245, 101, 101, 0.35)',
      'solid-dark': '0px 0px 0px 0.3124rem var(--color-gray-a-35)',
      'solid-dark-active': '0px 0px 0px 0.625rem var(--color-gray-a-35)',

      /** Input shadows */
      'input': '0px 0px 0px 0.2rem rgba(86, 148, 255, 0.15)',
    },
    extend: {
      fontFamily: {
        header: ['Rubik', 'sans-serif'],
        nunito: ['Nunito', 'arial'],
        fira: ['Fira Sans', 'sans-serif']
      },
      borderWidth: {
        '1': '1px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
      },
      boxShadow: {
        ghost: '0 50px 15px 5px rgba(45, 45, 85, 0.1)',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        'full': '100%',
      }
    },
    textShadow: {
      default: '0 1px 0 rgba(0,0,1,0.15)',
      md: '0 1px 1px rgba(0,0,1,0.15)',
      button: '0px 0px 2px rgba(0,0,0,0.19)',
      none: 'none',
    },
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
  },
  corePlugins: {},
  plugins: [
    require('tailwindcss-bg-alpha'),
    require('tailwindcss-transforms')(),
    require('tailwindcss-gradients'),
    require('tailwindcss-textShadow')()
  ],
};

module.exports = tailwindConfig
