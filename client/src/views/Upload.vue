<template>
  <div class="upload">
    <form @submit.prevent="submitHandler" class="upload__form">
      <div class="upload__error">
        <div v-for="(msg, idx) in request.messages" :key="idx" class="upload__error-item">
          <v-alert :type="request.type">{{ msg }}</v-alert>
        </div>
      </div>
      <h1 class="upload__title">Загрузить видео</h1>
      <div class="upload__left">
        <p class="upload__error"></p>
        <input-mask v-model="title" :name="'title'" class="upload__input">Название</input-mask>
        <input-area v-model="description" :name="'description'" class="upload__input">Описание</input-area>
        <form-button class="right">Отправить</form-button>
      </div>
      <div class="upload__right">
        <drop-zone @update:file="fileUpdated" />
      </div>
    </form>
    <div v-if="video != null" class="result">
      <router-link class="result__link" :to="{ name: 'Video', params: { id: video.id } }">Перейти на страницу видео</router-link>
    </div>
  </div>
</template>

<script>
import DropZone from '@/components/DropZone.vue'
import InputMask from '@/components/InputMask.vue'
import InputArea from '@/components/InputArea.vue'
import FormButton from '@/components/FormButton.vue'
import vAlert from '@/components/vAlert.vue'
import axios from '@/utils/axios'

export default {
  components: {
    DropZone,
    InputMask,
    InputArea,
    FormButton,
    vAlert,
  },

  data() {
    return {
      request: {
        messages: [],
        type: null
      },
      title: '',
      description: '',
      file: null,
      video: null,
    }
  },

  methods: {
    async submitHandler(e) {
      this.request = {}

      const data = new FormData()
      data.append('title', this.title)
      data.append('description', this.description)
      data.append('file', this.file)
      console.log(this.file)

      const status = await axios.post(`/post_video`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      }).then(({ data, status }) => {
        this.request.messages = ['Видео поставленно в очередь на обработку']
        this.request.type = 'success'
        this.video = data
        console.log(this.video)
        return status
      })
      .catch((err) => {
        console.log('err', err.response, err.response.data, err.response.data.detail.map((item) => item.msg))
        this.request.messages = err.response.data.detail.map((item) => `${item.loc[1]}: ${item.msg}`)
        this.request.type = 'danger'
        console.log(this.request)
        return err?.response?.status
      })
    },

    fileUpdated(file) {
      this.file = file
    }
  }
}
</script>

<style lang="scss" scoped>
.upload {
  width: 100%;

  &__form {
    margin: 25px 0;
    padding: 0.7em 1em;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__title {
    padding: 0.7em 1em;
    width: 100%;
    font-size: 20px;
    text-align: left;
  }

  &__left {
    flex: 1 1 auto;
  }

  &__right {
    margin: 0 40px;
  }

  &__error-item {
    margin: 5px 0;
  }
}
</style>