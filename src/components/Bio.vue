<template>
  <div :style="{
    display: 'flex',
    marginBottom: '70px'
  }">
    <img
      v-bind:src="settings.metadata.authorAvatar.imgixUrl.src"
      v-bind:alt="settings.metadata.authorName"
      :style="{
        marginRight: `${rhythmMethod(1 / 2)}`,
        marginBottom: 0,
        width: `${rhythmMethod(2)}`,
        height: `${rhythmMethod(2)}`
    }">
      <div v-html="settings.metadata.authorBio"></div>
  </div>
</template>
<script>
import { rhythm } from "../utils/typography";
export default {
  props: ["settings"],
  methods: {
    rhythmMethod(value) {
      return rhythm(value);
    }
  }
};
</script>
