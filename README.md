# Number Form

##### An easy way to format your numbers
&nbsp;
&nbsp;
#### Install
```
npm i number-form
```

#### Import
```
import { numberForm } from 'number-form';
```

#### Usage
```
var formattedValue = numberForm(originalValue, template, event);
```
###### Where 'template' is a string that represents the format you would like your numbers to form to.
&nbsp;
&nbsp;
#### Example of commonly used templates
```
Phone numbers: '(xxx)xxx-xxxx'
Credit cards: 'xxxx-xxxx-xxxx-xxxx'
Dates: 'xx/xx/xxxx'
```
###### Where your x's will be replaced by the user's input.
&nbsp;
&nbsp;
#### Example usage in Vue.js
```
<template>
  <input type="text" v-model="phone" @keyup="formatPhone" />
</template>
<script>
  import { numberForm } from 'number-form'

  export default {
    data() {
      return {
        phone: ''
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
