<template>
  <div>
    <h1>Hello</h1>
    <pre>{{date}}</pre>
    <Calendar v-model="date" :showButtonBar="true" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      date: null
    }
  }
}
</script>
