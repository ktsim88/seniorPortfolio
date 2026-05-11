//modal code from boostrap. will implement vue later
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })


const app = Vue.createApp({
  created() { 
    fetch('zeronis.json').then(rep => rep.json()).then(json => {
      this.zeroniIcons = json;
     })
  },
  data() {
    return {
      zeroniIcons: [],
    }
   }
})

app.mount('#app')