<template>
  <div :style="{
    display: 'flex',
    marginBottom: '70px'
  }">
    <img
      v-bind:src="settings.metadata.author_avatar.imgix_url"
      v-bind:alt="settings.metadata.author_name"
      :style="{
        marginRight: `${rhythm(1 / 2)}`,
        marginBottom: 0,
        width: `${rhythm(2)}`,
        height: `${rhythm(2)}`
    }">
      <div v-html="settings.metadata.author_bio"></div>
  </div>
</template>
<script>
import mixins from '../utils/mixins'

export default {
  props: ["settings"],
  mixins: [mixins]
};
</script>
