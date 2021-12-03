<template>
  <div class="speaker">
    <picture class="speaker__logo">
      <img src="" alt="">
    </picture>
    <h3 class="speaker__name">{{ name }}</h3>
    <div v-html="text" class="speaker__text"></p>
  </div>
</template>

<script>
export default {  
  props: {
    name: {
      type: String,
      requere: true
    },
    text: {
      type: String,
      requere: true
    }
  }
}
</script>