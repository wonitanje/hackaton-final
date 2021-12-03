<template>
  <div class="area-wrap">
    <textarea
      @focus="focus"
      @focusout="unfocus"
      @input="updateValue"
      :name="name"
      :id="name"
      :value="modelValue"
      class="form-text"
    ></textarea>
    <label :for="name" :class="{ active: modelValue || focused, focus: focused }" class="area-label"
      ><slot></slot
    ></label>
  </div>
</template>

<script>
export default {
  name: 'InputArea',

  props: {
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      focused: false,
    }
  },

  methods: {
    updateValue(e) {
      this.$emit('update:modelValue', e.target.value)
    },

    focus() {
      this.focused = true
    },

    unfocus() {
      this.focused = false
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  cursor: text;
}

.area-wrap {
  margin: 15px auto;
  position: relative;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }

  &.wrong {
    label {
      color: #ed414f;
    }
    input,
    textarea {
      border-color: #ed414f;
    }
  }
}

.form-text {
  padding: calc(1em + 12px) 12px 7px;
  min-height: calc(2em + 25px);
  height: 125px;
  max-height: 300px;
  width: 100%;
  outline: none;
  border: solid 1px #dde1e6;
  border-radius: 1em;
  transition: border 0.2s ease-in-out;
  resize: vertical;

  &:hover {
    border: solid 1px #b4bbc3;
  }

  &:focus {
    border: solid 1px #1c3062;
  }
}

.area-label {
  position: absolute;
  left: 20px;
  top: 20px;
  color: #848e99;
  cursor: text;
  transition: all 0.2s ease-in-out;

  &.active {
    font-size: 12px;
    top: 12px;
  }

  &.focus {
    color: #1c3062;
  }
}
</style>