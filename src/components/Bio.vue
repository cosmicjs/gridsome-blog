<template>
  <div :style="{
    display: 'flex',
    marginBottom: '70px'
  }">
    <img
      v-bind:src="settings.metadata.authorAvatar.imgixUrl.src"
      v-bind:alt="settings.metadata.authorName"
      :style="{
        marginRight: `${rhythm(1 / 2)}`,
        marginBottom: 0,
        width: `${rhythm(2)}`,
        height: `${rhythm(2)}`
    }">
      <div v-html="settings.metadata.authorBio"></div>
  </div>
</template>
<script>
import mixins from '../utils/mixins'

export default {
  props: ["settings"],
  mixins: [mixins]
};
</script>
