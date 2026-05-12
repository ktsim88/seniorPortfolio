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
      }),
      fetch('websites.json').then(a => a.json()).then(json => {
        this.websites = json;
      })
  },
  data() {
    return {
      zeroniIcons: [],
      skills: [],
      websites: []
    }
   }
})

app.mount('#app')