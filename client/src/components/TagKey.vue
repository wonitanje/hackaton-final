<template>
  <p><slot></slot></p>
</template>

<style lang="scss" scoped>
p {
  padding: 3px 6px;
  border-radius: 6px;
  background-color: #f5f5f5;
  color: #212121;
  transition: 0.25s ease-out;

  &.active {
    background-color: #2a8288;
    color: #fff;
  }
}
</style>