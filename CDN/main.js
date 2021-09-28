var vueInstance = new Vue({
    el:'#app',
    data:{
        title: 'PET',
    },
    methods: {
        say:function(text){
            return 'Hello'+text;
        }
    }
  })
  console.log(vueInstance)
  setTimeout(()=>{
      vueInstance.title="Dien thoại Oppo";
  },3000)