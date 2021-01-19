const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      /**
       * Color
       */
      colors: {

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      const default_option = {
        '*': {
          boxSizing: 'border-box',
          fontFamily: 'Inter',
          fontWeight: '500',
          transition: 'all .3s ease-out',
          fontSize: 'inherit',
        },
        'body': {
          margin: '0 auto',
          width: '100%',
          maxWidth: '1920px',
          minWidth: '280px',

          fontSize: '16px',
          backgroundColor: 'var(--main-bg)',
          color: 'var(--black)',
          textAlign: 'center',
        },
        '::-webkit-scrollbar': {
          width: '6px',
          height: '6px',
          backgroundColor: '#0002'
        },
        '::-webkit-scrollbar-thumb': {
          width: '6px',
          height: '6px',
          borderRadius: '4px',
          backgroundColor: '#0004',
        },
        '.bg-color': {
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.txt-underline': {
          textDecoration: 'none !important',
        },
        '.txt-right': {
          textAlign: 'right',
        },
        '.txt-center': {
          textAlign: 'center',
        },
        '.txt-left': {
          textAlign: 'left',
        },
        'a': {
          textDecoration: 'none',
        },
        '.flex-left': {
          display: 'flex',
        },
        '.flex-justify': {
          display: 'flex',
          justifyContent: 'space-between',
        },
        '.justify-center': {
          display: 'flex',
          textAlign: 'center',
          verticalAlign: 'middle',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.flex-grid': {
          display: 'grid',
          gridAutoRows: '1fr',
        },
        '.grid2': {
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '25px',
        },
        '.grid20': {
          gridTemplateColumns: '4.5fr 1fr',
          gridColumnGap: '100px',
        },
        '.grid3': {
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '50px',
        },
        '.grid-title-change': {
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '10px',
          gridRowGap: '10px',
        },
        '.grid30': {
          gridTemplateColumns: '1fr 1fr 1fr',
        },
        '.grid31': {
          gridTemplateColumns: '3fr 1fr',
        },
        '.grid4': {
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          gridColumnGap: '80px',
        },
        '.grid24': {
          gridTemplateColumns: '1fr 2fr',
          gridColumnGap: '5px',
        },
        '.justify-cover': {
          margin: '0 auto',
          width: '100%',
          maxWidth: '100%',
        },
        '.mouse-cursor': {
          cursor: 'pointer',
        },
      };
      addComponents(default_option);

      //addComponents([
      //   {
      //     '@media (min-width: 500px)': {
      //       // ...
      //     }
      //   },
      //   {
      //     '@media (min-width: 500px)': {
      //       // ...
      //     }
      //   },
      //   {
      //     '@media (min-width: 500px)': {
      //       // ...
      //     }
      //   },
      // ])
      // addComponents({
      //   '.card': {
      //     backgroundColor: '#fff',
      //     borderRadius: '.25rem',
      //     boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      //     '&:hover': {
      //       boxShadow: '0 10px 15px rgba(0,0,0,0.2)',
      //     },
      //     '@media (min-width: 500px)': {
      //       borderRadius: '.5rem',
      //     }
      //   }
      // });
      //font-family, font size, color
      const style_txt = {
        '.txt-medium': {
          fontWeight: '500',
        },
        '.txt-light': {
          fontWeight: '300',
        },
        '.txt-regular': {
          fontWeight: '400',
        },
        '.txt-semi-bold': {
          fontWeight: '600',
        },
        '.txt-italic': {
          fontWeight: 'Italic',
        },
        '.txt-medium-italic': {
          fontWeight: 'MediumItalic',
        },
        '.txt-bold': {
          fontWeight: '700',
        },
        '.txt-weight-500': {
          fontWeight: '500',
        },
        //font
        '.txt-90': {
          fontSize: '90px',
          lineHeight: '1.3',
        },
        '.txt-80': {
          fontSize: '80px',
        },
        '.txt-70': {
          fontSize: '70px',
        },
        '.txt-60': {
          fontSize: '60px',
        },
        '.txt-54': {
          fontSize: '54px',
        },
        '.txt-40': {
          fontSize: '40px',
        },
        '.txt-34': {
          fontSize: '34px',
        },
        '.txt-30': {
          fontSize: '30px',
        },
        '.txt-28': {
          fontSize: '28px',
        },
        '.txt-26': {
          fontSize: '26px',
        },
        '.txt-24': {
          fontSize: '24px',
        },
        '.txt-20': {
          fontSize: '20px',
        },
        '.txt-18': {
          fontSize: '18px',
        },
        '.txt-16': {
          fontSize: '16px',
        },
        '.txt-14': {
          fontSize: '14px',
        },
        // color
        '.main-color': {
          color: 'var(--main-color)',
        },
        '.chat-color': {
          color: 'var(--chat-color)',
        },
        '.grid1-color': {
          color: 'var(--grid1-color)',
        },
        '.grid2-color': {
          color: 'var(--grid2-color)',
        },
        '.grid3-color, .gray-color': {
          color: 'var(--grid3-color)',
        },
        '.gradient-color': {
          color: 'var(--gradient-color)',
        },
        '.white-color': {
          color: 'var(--white)',
        },
        '.black-color': {
          color: 'var(--black)',
        },
        '.grey-color': {
          color: 'var(--grey-color)',
        },
      };
      addComponents(style_txt);

      const buttons = {
        '.btn-sign': {
          margin: '0 auto',
          padding: '10px 50px',
          borderRadius: '16px',
          border: '2px solid var(--main-color)',
          fontSize: '50px',
          backgroundColor: 'var(--main-color)',
          color: 'var(--white)',
          transition: 'all .15s linear',
          '&:hover': {
            borderRadius: '50px',
            backgroundColor: 'var(--white)',
            color: 'var(--main-color)',
          },
        },
        '.btn-light-design': {
          border: '1px solid var(--black)',
          color: 'var(--black)',
        },
        '.btn-dark-design': {
          border: '1px solid var(--btn-color)',
          color: 'var(--btn-color)',
        },
        '.btn-light-design, .btn-dark-design': {
          marginRight: '30px',
          borderRadius: '50px',
          padding: '10px 50px 10px 10px',
          fontSize: '20px',
          '&:hover': {
            border: '1px solid var(--main-color)',
            color: 'var(--white)',
            backgroundColor: 'var(--main-color)',
          },
        },
        '.btn-border-black': {
          padding: '10px',
          border: '3px solid var(--black)',
          '&:hover': {
            borderRadius: '30px',
            backgroundColor: 'var(--black)',
            color: 'var(--white)',
          },
        },
      };
      addComponents(buttons);

      const custom = {
        '.pt-140': {
          paddingTop: '140px',
        },
        '.pt-20': {
          paddingTop: '20px',
        },
        '.pt-15': {
          paddingTop: '50px',
        },
        '.embed-width': {
          margin: '0 auto',
          width: '100%',
          maxWidth: '1250px',
        },
        '.img-width': {
          width: '100%',
          maxWidth: '85vw',
        },
        '.text-width': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '100%',
          maxWidth: '15vw',
        },
        '.txt-detail-width': {
          width: '60%',
          textAlign: 'right',
        },
        '.grid-body': {
          margin: '0 auto',
          padding: '20px 100px',
        },
        '.img-hover': {
          '&:hover': {
            transform: 'scale(1.05)',
            opacity: '0.5',
          },
        },
        '.key-benefits': {
          padding: '100px',
          backgroundColor: 'var(--grid3-color)',
          height: 'auto',
        },
        '.txt-width': {
          margin: '0 auto',
          width: '60%',
        },
        '.image-coming': {
          position: 'relative',
          display: 'inline-block',
        },
        '.coming-soon': {
          position: 'absolute',
          top: '-60px',
          right: '-60px',
          borderRadius: '50%',
          width: '120px',
          height: '120px',
          fontSize: '22px',
          lineHeight: '1.1',
          color: 'var(--black)',
          backgroundColor: 'var(--main-color)',
        },
        '.icons-body': {
          margin: '0 auto',
          padding: '0 200px 150px',
        },
        '.icons-top': {
          paddingTop: '120px',
          paddingBottom: '50px',
        },
        '.icon-txt': {
          width: '90%',
        },
        '.bg-middle': {
          padding: '130px 130px 140px',
          backgroundColor: 'var(--main-color)',
        },
        '.who-body': {
          padding: '60px 0 50px 70px',
        },
        '.icon-loves': {
          width: '100%',
          maxWidth: '120px',
        },
        '.try-body': {
          position: 'relative',
          padding: '200px 100px 150px',
          borderTop: '2px solid var(--black)',
          backgroundColor: 'var(--white)',
        },
        '.try-out': {
          position: 'absolute',
          top: '-45px',
          left: '100px',
          borderRadius: '50%',
          width: '180px',
          height: '180px',
          fontSize: '44px',
          lineHeight: '1.1',
          color: 'var(--white)',
          backgroundColor: 'var(--grid3-color)',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: 'var(--main-color)',
          }
        },
        '.individual': {
          backgroundColor: 'var(--grid1-color)',
        },
        '.community': {
          backgroundColor: 'var(--grid2-color)',
        },
        '.enterprise': {
          backgroundColor: 'var(--grid3-color)',
        },
        '.individual, .community, .enterprise': {
          position: 'relative',
          padding: '100px 70px',
          height: 'auto',
          fontSize: '24px',
        },
        '.btn-p': {
          position: 'absolute',
          bottom: '100px',
          display: 'flex',
          justifyContent: 'center',
          padding: '10px !important',
          minWidth: '80%',
          width: 'fit-content',
          height: '100px',
        },
        '.btn-white-border': {
          padding: '5px 15px',
          border: '2px solid var(--white)',
          borderRadius: '4px',
          textAlign: 'left',
          width: 'fit-content',
          height: 'fit-content',
          fontSize: '28px',
        },
        '.btn-white-border .free': {
          paddingRight: '70px'
        },
        '.btn-white-border .custom': {
          paddingRight: '50px'
        },
        '.click-example-body': {
          padding: '110px 70px 150px',
        },
        '.circle-number': {
          display: 'inline-flex',
          border: '1px solid var(--main-color)',
          borderRadius: '50px',
          width: '50px',
          height: '50px',
          color: 'var(--main-color)',
          backgroundColor: 'var(--white)',
          "&:hover": {
            border: '1px solid var(--white)',
            color: 'var(--white)',
            backgroundColor: 'var(--main-color)',
          }
        },
        '.number-icon': {
          margin: '0 auto',
          maxWidth: '100%',
          width: '50%',
        },
        '.bg-footer': {
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          maxHeight: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left -10px',
          backgroundSize: '300px cover',
          backgroundImage: 'url("../images/footer-bg.png")',
        },
        '.footer-p': {
          padding: '100px 300px 170px',
        },
        '.btn-footer': {
          margin: '0 auto',
          padding: '10px 80px',
          borderRadius: '20px',
          border: '2px solid var(--main-color)',
          fontSize: '80px',
          backgroundColor: 'var(--main-color)',
          color: 'var(--white)',
          transition: 'all .15s linear',
          '&:hover': {
            borderRadius: '80px',
            backgroundColor: 'var(--white)',
            color: 'var(--main-color)',
          },
        },
        '.learn-more': {
          '&:hover': {
            color: 'var(--grid1-color)',
          },
        },
        /**
         * Settings component
         */
        '.div-border': {
          border: '1px solid black',
        },
        '.justify-left': {
          display: 'flex',
          justifyContent: 'left',
        },
        '.hr-black': {
          borderTop: '1px solid var(--black) !important',
        },
        '.border-elliptic': {
          padding: '0 0 0 10px',
          border: '1px solid var(--black)',
          borderRadius: '20px',
        },
        '.border-left': {
          position: 'relative',
          borderLeft: '1px solid var(--black)',
        },
        '.txt-position': {
          position: 'absolute',
          bottom: '10px',
          margin: '0 auto',
          width: '100%',
          maxWidth: '100%',
        },
        'textarea': {
          padding: '10px',
          border: '1px solid var(--grid1-color)',
          borderRadius: '10px',
          minHeight: '60px',
          outline: 'none',
          width: '90%',
          maxWidth: '100%',
        },
        '.chat-scroll': {
          overflowY: 'auto',
          maxHeight: '70vh',
          wordBreak: 'break-all',
        }
      };
      addComponents(custom);
    }),
  ],
};
