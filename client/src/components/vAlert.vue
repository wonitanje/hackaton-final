<template>
  <div :class="`bg-${alertClass[type]}-100 border-${alertClass[type]}-500 text-${alertClass[type]}-700`" class="p-4" role="alert">
    <p class="font-bold">{{ type }}</p>
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info'
    }
  },

  setup() {
    return {
      alertClass: {
        danger: 'red',
        info: 'blue',
        success: 'green',
        warning: 'orange',
      }
    }
  }
}
</script>