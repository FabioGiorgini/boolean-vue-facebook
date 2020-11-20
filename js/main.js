//1° PUNTO (TRAMITE PROPRIETA' VUE SU HTML)
//Inserire nome utente e immagine da user

//2° PUNTO (TRAMITE PROPRIETA' VUE SU HTML)
//Rendere dinamica la lista dei post

//3° PUNTO (HTML + VUE)
//Fare in modo che la data del post venga inserita con davanti la scritta "Data del post: "

//4° PUNTO (HTML + VUE)
//Aggiungere nuovo post personale in fondo alla lista

//5° PUNTO (HTML + VUE)
//Nascondere post tramite bottone (eye-slash)

var app = new Vue({
  el:"#app",
  data: {
    //CREATA PER V-MODEL DEL NUOVO POST SCRITTO
    nuovoPost: '',
    // --- START --- DATI INIZIALI
    user: {
      name: 'Luca',
      surname: 'Rossi',
      avatar: 'https://3.bp.blogspot.com/-fDaYbjlbfls/XFXcYDcNFmI/AAAAAAABv4g/wIylZ5bp74IOD48MAKsdQoidvA4KrrBHgCLcBGAs/s320/animoji-zepeto.webp'
    },
    posts: [
      {
        author: 'Luca Bianchi',
        avatar: 'https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg',
        visible: true,
        desc: 'Some quick example text to build on the card title and make up the bulk of the card content.',
        image: 'https://uploads.nonsprecare.it/wp-content/uploads/2013/04/Bosco-1.jpg',
        date: '20/11/2020 10:30:32'
      },
      {
        author: 'Mario Verdi',
        avatar: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png',
        visible: true,
        desc: 'Such a good day! Hello World',
        image: 'https://www.trovafrasi.com/wp-content/uploads/2020/04/frasi-sul-cielo-stellato.jpg',
        date: '20/11/2020 11:15:24'
      },{
        author: 'Asia Mattei',
        avatar: 'https://st3.depositphotos.com/3369547/12852/v/950/depositphotos_128525738-stock-illustration-woman-female-avatar-isolated.jpg',
        visible: true,
        desc: 'Another post for today',
        image: 'https://www.abruzzomagazine.it/wp-content/uploads/2020/02/Foto-3-Boolean-Careers.jpg',
        date: '19/11/2020 22:28:55'
      }
    ]
    // --- END --- DATI INIZIALI
  },
  methods: {
    //3° PUNTO
    //Fare in modo che la data del post venga inserita con davanti la scritta "Data del post: "
    formattaData(data) {
      return 'La data del post è: ' + data;
    },
    //4° PUNTO
    //Aggiungere nuovo post personale in fondo alla lista
    aggiungiPost(){
      let post = {
        author: this.user.name + " " + this.user.surname,
        avatar: this.user.avatar,
        visible: true,
        desc: this.nuovoPost,
        image: 'https://www.abruzzomagazine.it/wp-content/uploads/2020/02/Foto-3-Boolean-Careers.jpg',
        date: dayjs().format("DD/MM/YYYY HH:mm:ss")
      }
      //INSERITO IN CODA ALL'ARRAY
      // this.posts.push(post);
      //INSERITO IN CAPO ALL'ARRAY
      this.posts.unshift(post);

      this.nuovoPost = '';
    },
    //5° PUNTO
    //Nascondere post tramite bottone (eye-slash)
    nascondiPost(post){
      post.visible = false;
    }
  }
})
