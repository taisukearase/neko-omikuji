<template>
  <transition
    name="fade">
    <slot />
  </transition>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class FadeTransition extends Vue {
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  /* will-change: opacity; */
  transition: all .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
