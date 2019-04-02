new Vue({
  el: '#app',
  data () {
    return {
      quote: null
    }
  },
  methods: {
      mounted() {
      axios
      .get('https://api.kanye.rest/')
      .then(response => (this.quote = response.data.quote))}
  }
})

