<template>
<div>
    <div v-if="hero" :style="{
      backgroundColor: '#007ACC',
      backgroundImage: `url(${settings.metadata.homepageHero.imgixUrl.src}?w=2000)`,
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      width: '100%',
      height: `${rhythmMethod(14)}`,
      position: 'relative',
      marginBottom:`${rhythmMethod(1.5)}`,
      }">
      <h1
        :style="{
          ...scaleMethod(1.3),
          position: 'absolute',
          textAlign: 'center',
          left: 0,
          right: 0,
          top: `${rhythmMethod(4)}`,
          marginTop: 0,
          height: `${rhythmMethod(2.5)}`,
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
          {{ settings.metadata.siteHeading }}
        </g-link>
      </h1>
    </div>
    <div :style="{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythmMethod(24),
        padding: `0 ${rhythmMethod(3 / 4)} ${rhythmMethod(1.5)} ${rhythmMethod(3 / 4)}`,
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
import { rhythm, scale } from '../utils/typography'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

export default {
  props: ['settings', 'hero'],
  methods: {
    rhythmMethod(value) {
      return rhythm(value);
    },
    scaleMethod(value) {
      return scale(value);
    },
  }
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
