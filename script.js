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
    }),
      fetch('skills.json').then(a => a.json()).then(json => {
        this.skills = json;
      })
  },
  data() {
    return {
      zeroniIcons: [],
      skills: []
    }
   }
})

app.mount('#app')