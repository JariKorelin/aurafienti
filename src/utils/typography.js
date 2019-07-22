import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "h1, h2, h3, button": {
      fontFamily: ["Varela Round", "sans-serif"].join(","),
    },
  }
}

delete Wordpress2016.googleFonts

Wordpress2016.googleFonts = [
  {
    name: "Varela Round",
    styles: ["400"],
  },
  {
    name: "Merriweather",
    styles: ["400", "400i", "700", "700i", "900", "900i"],
  },
]

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
