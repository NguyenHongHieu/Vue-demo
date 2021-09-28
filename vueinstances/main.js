var VueInstance = new Vue({
  el: "#app",
  data: {
    url: "https://www.healthline.com/health/best-pets-for-kids",
    target: "_blank",
    ok:true
  },
  computed:{
    checkOk() {
        if (this.ok) {
          return "YES";
        } 
        else {
          return "NO";
        }
      },
  },

  methods: {
  
  },
});
//he thong phan ung Reactivity
console.log(VueInstance);
setTimeout(() => {
  VueInstance.title = "Some kind of plants!";
}, 3000);
