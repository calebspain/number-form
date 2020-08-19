# number-form


## Example usage in Vue.js
```
<template>
  <input type="text" v-model="phone" @keyup="formatPhone" />
</template>
<script>
  import { numberForm } from 'number-form'

  export default {
    data() {
      return {
        phone: '',
      }
    },
    methods: {
      formatPhone(event) {
        this.phone = numberForm(this.phone, 'xxx-xxx-xxxx', event)
      }
    }
  }
</script>
```
