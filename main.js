var api = "https://pokeapi.co/api/v2/pokemon/";
        var api2 = "https://pokeapi.co/api/v2/characteristic/";
      let name;
      
        
        
        const id = document.querySelector('#searchBar')
        const butao = document.querySelector('#btn1');
        const description = document.querySelector('#description');
        const form = document.querySelector('#adicionar');
   
        
        function loadpk() {
        
          fetch(`${api}${id.value}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
            name = data['name'][0].toUpperCase() + data['name'].slice(1);
              document.getElementById("nome").innerHTML = name;
        
              document.getElementById("numero").innerHTML = "#" + data['id'];
        
              let img = data.sprites.front_default;
        
              document.querySelector('#img').style.opacity = 0;
              setTimeout(function() {
                document.querySelector('#img').setAttribute('src', img);
                document.querySelector('#img').style.opacity = 1;
              }, 300);
        
            })
            .catch((erro) => {
              console.log("erro: " + erro)
            })
        
          fetch(`${api2}${id.value}`)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              description.innerHTML = data['descriptions'][2].description;
            })
            .catch((erro) => {
              console.log("erro: " + erro)
            })
        
        }
        
        
        
        loadpk()
        
        butao.addEventListener('click', function changeID() {
          idpoke = Number(id.value);
        
          if (idpoke < 1) {
            idpoke = 1
            id.value = 1
          }
          if (idpoke > 807) {
            idpoke = 807;
            id.value = 807
          }
                   
          
          pokeApi = `https://pokeapi.co/api/v2/pokemon/${id.value}`;
          loadpk()
        })
      function BuscarMeuDado(id)  {
      
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id.value}`)
        
      .then(function(id){
        console.log(BuscarMeuDado.data);
        id.innerHTML = BuscsrMeuDado.data.id
      }
      
     ) }
     form.addEventListener('submit', function (evt){
       evt.preventDefault();
       console.log(id.value)
       BuscarMeuDado(id.value);
     })