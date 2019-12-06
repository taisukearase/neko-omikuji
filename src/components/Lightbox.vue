<template>
  <fade-transition>
    <div
      v-if="isActive"
      class="lightbox"
      href="#"
      @click.prevent="onLightboxClick">
      <slot name="header" />
      <slot>
        <img :src="src">
      </slot>
      <slot name="footer">
        {{ result }}
      </slot>
    </div>
  </fade-transition>
</template>

<script lang="ts">
import {
  Component, Prop, Vue, Emit,
} from 'vue-property-decorator'
import FadeTransition from './FadeTransition.vue'

@Component({
  components: {
    FadeTransition,
  },
})
export default class Lightbox extends Vue {
  @Prop({ default: false })
    isActive!: Boolean

  @Prop({ default: '' })
    src!: String

  @Prop({ default: '' })
    result!: String

  @Emit('lightbox-close')
  // eslint-disable-next-line class-methods-use-this
  onLightboxClick() {}
}
</script>

<style scoped>
.lightbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1050;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  animation-duration: .25s;
  color: #ffffff;
}

.lightbox img {
  max-width: 50vw;
  max-height: 50vh;
  margin: 20px auto 20px auto;
}
</style>
