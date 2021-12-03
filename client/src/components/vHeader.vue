<template>
  <header class="header">
    <a href="https://www.rbc.ru/"><span class="header__logo"></span></a>
    <nav class="header__navigation">
      <ul class="header__menu">
        <li class="header__item"><a class="header__link link" href="">Телеканал</a></li>
        <li class="header__item"><a class="header__link link" href="">Газета</a></li>
        <li class="header__item"><a class="header__link link" href="">Тренды</a></li>
        <li class="header__item"><a class="header__link link" href="">РБК+</a></li>
        <li class="header__item"><a class="header__link link" href="">Pro</a></li>
        <li class="header__item"><a class="header__link link" href="">Инвестиции</a></li>
        <li class="header__item"><a class="header__link link" href="">Авто</a></li>
        <li class="header__item"><a class="header__link link" href="">Спорт</a></li>
        <li class="header__item"><a class="header__link link" href="">РБК Компания</a></li>
        <li class="header__item"><a class="header__link link" href="">ESG Конгресс</a></li>
        <button class="header__more"><span></span><span></span><span></span></button>
      </ul>
    </nav>
    <nav class="header__btns">
      <button class="header__btn">find</button>
      <button class="header__btn">profile</button>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  border-bottom: 2px solid #ddd;

  &__logo {
    margin-left: 10px;
    display: block;
    width: 20px;
    height: 20px;
    background: url(//s.rbk.ru/v10_rbcnews_static/common/common-10.8.68/styles/blocks/topline/images/logo.svg) center center no-repeat;
  }

  &__navigation {
    flex: 1 1 auto;
    height: 100%;
  }

  &__menu {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__item {
    margin: 0 10px;
  }

  &__more {
    padding: 3px 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30px;
    background-color: transparent;

    & > span {
      width: 4px;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: #212121;
    }
  }

  &__btns {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__btn {
    margin: 0 8px;
    background-color: transparent;
  }
}
</style>