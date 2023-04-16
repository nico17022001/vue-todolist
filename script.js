const {createApp} = Vue

createApp({

  data(){
    return {
      daFare:"",

      lista:[
        {
          testo:"giallo",
          fatto: false,
        },

        {
          testo:"pino",
          fatto: false,
        },

        {
          testo:"franco",
          fatto: false,
        },
      ],
    }
  },

  methods: {
    elimina(i,elemento){
      if (elemento.fatto == true) {
        this.lista.splice(i,1)
      }
    },



    aggiungiTask(){
      const elemento = {
        testo: this.daFare,
        fatto: false,
      }
      this.lista.unshift(elemento)
      this.daFare = ""
    }
  }
}).mount("#app")



