<template>
  <main class="video">
    <div class="video__preview">
      <video :src="`${baseURL}static/${video?.video_information?.video_file_name}`">
        <h1 class="video__title">{{ video?.video_information?.title }}</h1>
        <p class="video__description">{{ video?.video_information?.description }}</p>
      </video>
      <!-- <div class="video__recomend recomend">
        <div class="recomend__prev"></div>
        <div class="recomend">
          
        </div>
        <div class="recomend__next"></div>
      </div> -->
    </div>
    <aside class="video__right">
      <div class="video__block keys">
        <h1 class="video__title">Ключевые слова</h1>
        <tag-key v-for="(key, idx) in video?.details?.keywords" :key="idx" :class="{ active: selectedKeys.includes(key) }">{{ key }}</tag-key>
      </div>
      <div class="video__block sum">
        <h1 class="video__title">Суммаризация</h1>

      </div>
      <div class="video__block dialog">
        <h1 class="video__title">Стенограмма</h1>
      </div>
    </aside>
  </main>
</template>

<script>
import axios from '@/utils/axios'

export default {
  created() {
    const { id } = this.$route.params
    console.log('id', id)

    axios.get(`/details/${id}`)
      .then(({ data }) => {
        this.video = data
        console.log('video', this.video)
      })
      .catch((err) => console.error(err))
  },

  data() {
    return {
      video: null,
      baseURL: axios?.defaults?.baseURL,
    }
  },

  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
.video {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  width: 100%;

  &__preview {
    width: Min(900px, 100%);
    aspect-ratio: 16/9;
  }

  &__right {
    padding: 0 1em;
    flex: 1 0 400px;
    border-left: 2px solid #ddd;
  }

  &__block {
    margin: 1em 0;
  }

  &__title {
    font-weight: 700;
    text-align: left;
    font-size: 21px;
  }
}
</style>