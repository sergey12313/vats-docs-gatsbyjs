import Typography from "typography"
const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    googleFonts: [
        {
          name: 'Open+Sans',
          styles: [
            '400',
          ],
        },
        {
          name: 'Open+Sans',
          styles: [
            '400',
            '400i',
            '700',
            '700i',
          ],
        },
      ],
      bodyGray: 10,
    includeNormalize: true,
    headerFontFamily: ['Open Sans', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Open Sans', 'serif'],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        html:{
            overflowY: 'initial',
        },
        body:{
            color:`rgb(54, 65, 73)`,
           
        },
        a: {
            textDecoration: "none",
            color: '#364149',
        },
        'a:hover': {
            textDecoration: "underline",
        },
        "a.active": {color: `rgb(0, 140, 255)`},
      })
  })

export const { scale, rhythm, options } = typography
export default typography
