<template>
  <div class="auth">
    <div class="auth__inner">
      <form @submit.prevent="formHandler" class="auth__form">
        <input-mask
          v-model="username"
          name="username"
          :class="{ wrong: passwordError }"
          >Username</input-mask
        >
        <input-mask
          v-model="password"
          name="password"
          :class="{ wrong: passwordError }"
          >Password</input-mask
        >
        <form-button>Login</form-button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '@/utils/axios'
import InputMask from '@/components/InputMask.vue'
import FormButton from '@/components/FormButton.vue'

export default {
  components: {
    InputMask,
    FormButton,
  },

  created() {
    if (this.$route.params.logout != null) {
      axios.post('/logout')
    }
  },

  data() {
    return {
      username: '',
      usernameError: false,
      password: '',
      passwordError: false,
    }
  },

  methods: {
    async formHandler() {
      await axios.post('/login', {
        username: this.username,
        password: this.password
      }).then((res) => {
        this.$router.push({ name: 'Dashboard' })
      }).catch((e) => {
        if (e) console.warn(e)

        this.usernameError = true
        this.passwordError = true
      })
    },
  },

  watch: {
    username() {
      this.usernameError = false
    },
    password() {
      this.passwordError = false
    }
  },
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &__inner {
    padding: 2em;
    border-radius: 0.7em;
    background-color: #fff;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.16);
  }
}
</style>