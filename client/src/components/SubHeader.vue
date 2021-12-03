<template>
  <nav class="subheader">
    <ul class="subheader__navigation">
      <a class="subheader__link link"><h1 class="subheader__title">Телеканал</h1></a>
      <li class="subheader__item"><a class="subheader__link link">Телепрограмма</a></li>
      <li class="subheader__item"><a class="subheader__link link">Архив программ</a></li>
      <li class="subheader__item"><a class="subheader__link link">Вечерний РБК</a></li>
      <li class="subheader__item"><a class="subheader__link link">О телеканале</a></li>
      <li class="subheader__item"><a class="subheader__link link">Подключение</a></li>
      <li class="subheader__item"><a class="subheader__link link">Рекомендации</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    items: {
      title: {
        type: String,
        require: true,
      },
      link: {
        type: String,
        require: true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.subheader {
  padding: 0 32px;
  width: 100%;
  height: 75px;
  border-bottom: 2px solid #ddd;

  &__navigation {
    display: flex;
    align-items: center;
  }

  &__item {
    margin: 0 10px;
  }

  &__title {
    text-transform: uppercase;
    font-size: 40px;
  }
}
</style>