import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  'a.gridsome-resp-image-link': {
    boxShadow: 'none',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
typography.injectStyles()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale