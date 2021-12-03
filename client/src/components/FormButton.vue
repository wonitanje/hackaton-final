<template>
  <div class="form-button">
    <button @click.stop="$emit('submit')" type="submit" class="button">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.form-button {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  width: 100%;

  &.left {
    justify-content: flex-start;
  }

  &.right {
    justify-content: flex-end;
  }
}

.button {
  padding: 10px 2em;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  color: #ffffff;
  background: #1c3062;
  transition: all 0.1s ease-in-out;

  &:hover {
    background: #223c80;
  }

  &:active {
    background: #3d5799;
  }
}
</style>