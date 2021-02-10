const colors = {
  white: '#FFF',
  black: '#333',
  darkGray: '#777777',
  gray: '#999',
  lightGray: '#CDCDCD',
  softGray: '#E3E3E3',
  grayly: '#F7F7F7',
  mintGreen: '#00A074',
  darkerMintGreen: '#008F69',
  blue: '#0192C9',
  lightBlue: '#5AC6FF',
  red: '#EE395E',
  yellow: '#FBB117',
  lemon: '#6AB42D',
  orange: '#FF6820',
};

export const theme = {
  fonts: {
    regular: 'DINRoundPro',
    medium: 'DINRoundPro-Medium',
    bold: 'DINRoundPro-Bold',
  },
  colors: {
    primary: colors.mintGreen,
    secondary: colors.blue,
    disabled: colors.gray,
    inactive: colors.lightGray,
    text: colors.black,
    textAlternative: colors.darkGray,
    textWhite: colors.white,
    error: colors.red,
    success: colors.mintGreen,
    warning: colors.yellow,
    shadow: colors.black,
    background: colors.white,
    backgroundAlternative: colors.grayly,
    lemon: colors.lemon,
    linkEnabler: colors.lightBlue,
    orange: colors.orange,
  },
  button: {
    primary: {
      color: colors.mintGreen,
      textColor: colors.white,
      hoverColor: colors.darkerMintGreen,
    },
    secondary: {
      color: colors.white,
      textColor: colors.mintGreen,
      hoverColor: colors.grayly,
    },
    action: {
      color: colors.grayly,
      iconColor: colors.mintGreen,
      textColor: colors.black,
      hoverColor: colors.softGray,
    },
    link: {
      color: colors.grayly,
      iconColor: colors.mintGreen,
      textColor: colors.black,
      hoverColor: colors.softGray,
    },
  },
  input: {
    lineColor: colors.black,
    placeHolderColor: colors.gray,
    actionColor: colors.blue,
  },
  switch: {
    circleOn: colors.blue,
    circleOff: colors.white,
    enabled: colors.lightBlue,
    disabled: colors.softGray,
  },
  modal: {
    background: colors.white,
  },
  feedItem: {
    hover: 'rgba(205,205,205, 0.3)',
  },
  screens: {
    main: {
      background: colors.grayly,
      header: {
        background: colors.white,
      },
      flotableMenu: {
        background: colors.white,
      },
    },
  },
  notification: {
    primary: {
      background: colors.blue,
      textColor: colors.white,
    },
    secondary: {
      background: colors.yellow,
      textColor: colors.black,
    },
  },
  tooltip: {
    background: colors.black,
    textColor: colors.white,
  },
  cardOption: {
    borderColor: colors.softGray,
    labelColor: colors.gray,
  },
};
