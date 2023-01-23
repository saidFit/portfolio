import { blue, grey, pink } from "@mui/material/colors";

// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            text:{
              primary:grey[50],
              secondary:grey[50]
            },
            
            background: {
              default: colorTokens.primary[900],
              paper: colorTokens.primary[900],
              
              // alt: colorTokens.primary[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              
              main: colorTokens.primary[600],// link & button
              iconButton:colorTokens.grey[200],
             
              
            },
            background: {
              default: colorTokens.grey[50],
              paper: colorTokens.grey[50],
              alt: colorTokens.grey[0],

              
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },


    components: {
      MuiTypography: {
        defaultProps: {
          sx: {
            px: 2,
          },
          variant: 'subtitle2',
          textTransform: 'capitalize',
        },
      },
      MuiStack: {
        defaultProps: {
          sx: {
            px: 2,
            py: 1,
          },
          spacing: 2,
          direction: 'row',
        },
      },
      MuiPaper: {
        defaultProps: {
          elevation: 0,
        },
      },
      MuiLink: {
        defaultProps: {
          sx: {
            color: (theme) => theme.palette.primary,
          },
          underline: 'none',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'small',
          p: 0,
          // disableRipple: true,
        },
        variant: 'text',
      },
      MuiTab: {
        defaultProps: {
          disableRipple: true,
        },
      },
    },
  };
};