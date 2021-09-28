var vueInstance = new Vue({
    el:"#app",
    data:{
        title:'Some kind of pets!',
        url:'https://agriculture.vic.gov.au/livestock-and-animals/animal-welfare-victoria/choosing-a-pet/what-type-of-pet',
        target:"_blank",
        ok:false,
    },
    methods:{
        action:function(text){
            return 'do'+text;
        }
    }

    //he thong phan ung Reacttivity
  })
  console.log(vueInstance);

      vueInstance.title="Some kind of follower!!!"

  