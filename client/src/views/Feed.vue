<template>
  <main class="feed">
    <div class="feed__inner">
      <!-- <div class="feed__block recommend">
        <h1 class="recomend__title">Рекомендуем к просмотру</h1>
        <picture class="recomend__preview">
          <img src="" alt="">
        </picture>
        <aside class="recomend__sidebar">
          <h1 class="recomend__title">video title</h1>
          <p class="recomend__description">video description</p>
        </aside>
      </div> -->
      <div class="feed__list video">
        <router-link v-for="(video, idx) in videos" :to="{ name: 'Video', params: { id: video.id } }" :key="idx" class="video__item">
          <picture class="video__preview">
            <img :src="`${baseURL}static/${video.video_file_name}.jpg`" alt="">
          </picture>
          <h1 class="video__title">{{ video.title }}</h1>
          <p class="video__description">{{ video.description }}</p>
        </router-link>
      </div>
      <div class="feed__paginate">
        <button @click.stop="shiftPage(-1)" class="video__go-prev">back</button>
        <button @click.stop="showMoreVideos" class="video__show-more">Показать еще</button>
        <button @click.stop="shiftPage(1)" class="video__go-next">next</button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from '@/utils/axios'

export default {
  async created() {
    this.page = this.page || this.$route.params.page
    this.paginate = this.paginate || this.$route.params.paginate
    this.videos = await this.getVideos(this.page, this.paginate)
  },

  data() {
    return {
      videos: [],
      paginate: 10,
      page: 1,
      baseURL: axios.defaults.baseURL,
    }
  },

  methods: {
    async showMoreVideos() {
      this.page += 1
      this.videos = [...this.videos, ...await this.getVideos(this.page, this.paginate)]
    },

    async shiftPage(shift) {
      this.page += shift
      this.videos = await this.getVideos(this.page, this.paginate)
    },

    async getVideos(page, count) {
      const videos = await axios.get(`/videos?page=${page}&count=${count}`)
        .then(({ data }) => data.videos)
        .catch(() => null)
      return videos || []
    }
  },
}
</script>

<style lang="scss" scoped>
.feed {
  &__inner {

  }

  &__paginate {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > button {
      margin: 0 8px;
    }
  }
}

.video {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &__item {
    margin: 0 10px;
    padding: 5px;
    width: 150px;
    aspect-ratio: 16/9;
    color: #212121;
  }

  &__preview {
    width: 100%;
    object-fit: contain;
  }

  &__title {
    font-weight: 600;
  }

  &__description {
    
  }
}
</style>