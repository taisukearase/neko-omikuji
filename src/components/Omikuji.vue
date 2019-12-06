<template>
  <div>
    <p>運試しにゃ🐱</p>
    <a
      href="#"
      @click="onLightboxOpen">
      <img
        alt="omikuji"
        class="omikuji"
        src="../assets/omikuji.png">
    </a>

    <lightbox
      v-if="isLightboxActive"
      :is-active="isLightboxActive"
      :src="src"
      :result="resultList[result]"
      @lightbox-close="onLightboxClose" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Lightbox from './Lightbox.vue'

@Component({
  components: {
    Lightbox,
  },
})
export default class Omikuji extends Vue {
  // data
  isLightboxActive: boolean = false

  resultList: {} = {
    daikichi: '大吉',
    kichi: '吉',
    chukichi: '中吉',
    syokichi: '小吉',
    suekichi: '末吉',
    kyo: '凶',
    daikyo: '大凶',
  }

  result: string = ''

  number: number = 1

  // computed
  get src(): string {
    return `./img/${this.result}_${this.number}.png`
  }

  // methods
  getResult(): void {
    const keys = Object.keys(this.resultList)
    this.result = keys[Math.floor(Math.random() * keys.length)]
    this.number = Math.floor(Math.random() * 3) + 1
  }

  onLightboxOpen(): void {
    this.getResult()
    this.isLightboxActive = true
  }

  onLightboxClose(): void {
    this.isLightboxActive = false
  }
}
</script>

<style scoped>
.omikuji {
  max-height:300px;
  width: auto;
}
</style>
