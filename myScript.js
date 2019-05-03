var movieRange = 3;
var item =0;
var movie = [];
var tkbox =false;

$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=e572ec9de5afe4b04e99f7d8ca059c8d", function (jsObject) {

    // LIST
    for (let i = 0; i < movieRange; i++) {
        title = jsObject.results[i].original_title ;
        poster = jsObject.results[i].poster_path ;
        overview = jsObject.results[i].overview ;
        document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '"></acard>';
    }
    // VUE////////////////////////////////////////////////////////////////////////////////

    Vue.component('acard', {
        props: ['name', 'img', 'ov'],
        data: function () {
            return {
                count: 0
            }
        },

        template: `
                    <div class="card" style="width: 18rem;">
                        <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
                        <div class="card-body">
                            <button >Child Ticket</button> 
                            <button v-on:click="createcart" class="btn btn-primary" >Adult Ticket</button>
                            <p></p>
                            <h5 class="card-title">{{name}}</h5>
                            <p class="card-text">{{ov}}</p>
                        </div>
                    </div>
                `
    })
    var app = new Vue({
        el: "#app",
        data: {
            ticketsummary:"",
            movierange:0,
        },
        methods:{
            createcart: function(){
                this.ticketsummary = 'Ticket Summary'
        },
    }})


    console.log("END VUE");
    // END VUE
})//END JSON



// const movieRange = 3;

// var nowplaying = new XMLHttpRequest();

// nowplaying.open("get", "https://api.themoviedb.org/3/movie/now_playing?api_key=e572ec9de5afe4b04e99f7d8ca059c8d")
// nowplaying.send();

// nowplaying.onreadystatechange = aFunction;

// function aFunction(){
//     if (nowplaying.readyState == 4 && nowplaying.status == 200)
//     {
//        var jsObject  = JSON.parse(nowplaying.responseText);

//        // LIST
//        for (let i=0; i<movieRange; i++)
//        {    
//             document.getElementById('cardDeck').innerHTML += '<acard name="'+jsObject.results[i].original_title+'"img = "https://image.tmdb.org/t/p/w500'+jsObject.results[i].poster_path+ '" ov = " '+jsObject.results[i].overview+ '"></acard>' ;   
//        }
//        console.log("Start LIST");

//        // VUE
//         console.log("Start VUE");
//        Vue.component('acard', {
//         props : ['name','img','ov'],
//         data: function() {
//             return{
//                 count: 0
//             }
//         } ,

//         template: `
//                 <div class="col">
//                     <div class="card" style="width: 18rem;">
//                         <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
//                         <div class="card-body">
//                             <h5 class="card-title">{{name}}</h5>
//                             <p class="card-text">{{ov}}</p>
//                             <a href="#" class="btn btn-primary">Child Ticket</a>
//                             <a href="#" class="btn btn-primary">Adult Ticket</a>
//                         </div>
//                     </div>
//                 </div>
//                 `
//     })

//     var app = new Vue({
//         el: "#app",
//         data: {
//             message: "",
//         }
//     })
//     console.log("END VUE");
//     // END VUE
//     }
// }




