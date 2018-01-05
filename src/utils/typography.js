import Typography from "typography";

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['proxima-nova', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['europa', 'proxima-soft', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 700,
  overrideStyles: () => ({
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontSize: '4em'
    },
    h2: {
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontSize: '2em',
    },
  })
});

export default typography;
