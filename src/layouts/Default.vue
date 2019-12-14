<template>
<div>
    <div v-if="hero" :style="{
      backgroundColor: '#007ACC',
      backgroundImage: `url(${settings.metadata.homepage_hero.imgix_url}?w=2000)`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      width: '100%',
      height: `${rhythm(14)}`,
      position: 'relative',
      marginBottom:`${rhythm(1.5)}`,
      }">
      <h1
        :style="{
          ...scale(1.3),
          position: 'absolute',
          textAlign: 'center',
          left: 0,
          right: 0,
          top: `${rhythm(4)}`,
          marginTop: 0,
          height: `${rhythm(2.5)}`,
        }"
      >
      <g-link
        :style="{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'inherit',
        }"
        :to="'/'"
      >
          {{ settings.metadata.site_heading }}
        </g-link>
      </h1>
    </div>
    <div :style="{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `0 ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        minHeight: 'calc(100vh - 42px)',
      }">
      <slot/>
    </div>
  <footer
    :style="{
      textAlign: 'center',
      padding: `40px 0px 60px`,
    }"
  >
    powered by&nbsp;
    <a
      target="_blank"
      href="https://gridsome.org"
      :style="{
        color: '#191919',
        boxShadow: 'none',
      }"
    >
      <img
        src='../../static/gridsome.png'
        alt="Gatsby JS"
        :style="{
          width: '20px',
          margin: '0 4px -3px 2px',
        }"
      />
      <strong>Gridsome</strong>
    </a>
    &nbsp;and&nbsp;
    <a
      target="_blank"
      href="https://cosmicjs.com"
      :style="{
        color: '#191919',
        boxShadow: 'none',
      }"
    >
      <img
        src='../../static/cosmiclogo.svg'
        alt="Cosmic JS"
        :style="{
          width: '18px',
          margin: '0 4px -2px 5px',
        }"
      />
      <strong>Cosmic JS</strong>
    </a>
  </footer>
</div> 
</template>
<script>
import mixins from '../utils/mixins'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default {
  props: ['settings', 'hero'],
  mixins: [mixins]
}
</script>
<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.nav__link {
  margin-left: 20px;
}
</style>
