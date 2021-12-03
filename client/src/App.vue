<template>
  <v-header />
  <sub-header />
  <router-view />
</template>

<script>
import vHeader from '@/components/vHeader.vue'
import SubHeader from '@/components/SubHeader.vue'

export default {
  components: {
    vHeader,
    SubHeader,
  }
}
</script>

<style lang="scss">
#app {
  font-size: 100%;
  line-height: 1;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
}

.link {
    position: relative;
    padding: 3px 5px;
    color: #212121;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      display: block;
      width: calc((100% - 10px) / 1.5);
      height: 2px;
      background-color: #212121;
      opacity: 0;
      transition: 0.25s ease;
    }

    &:hover::after {
      bottom: -2px;
      width: calc(100% - 10px);
      opacity: 1;
    }
  }
</style>
