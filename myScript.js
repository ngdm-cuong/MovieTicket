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
        document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '" v-on:createcart></acard>';
    }
    // VUE////////////////////////////////////////////////////////////////////////////////

    Vue.component('acard', {
        props: ['name', 'img', 'ov'],
        data:function () {
            return {
              
            }
        },
        methods:{
            createcart: function(){
                this.ticketsummary = 'Ticket Summary'
            }
        },
        template: `
                    <div class="col-sm">
                        <div class="card" style="width: 18rem;">
                            <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
                            <div class="card-body">
                                <button >Child Ticket</button> 
                                <button v-on:click="$emit('createcart')" class="btn btn-primary" >Adult Ticket</button>
                                <p></p>
                                <h5 class="card-title">{{name}}</h5>
                                <p class="card-text">{{ov}}</p>
                            </div>
                        </div>
                    </div>
                `
    })
    var app1 = new Vue({
        el: "#app",
        data: {
            message:"",
            ticketsummary:"",
            movierange:0,
        },
        methods:{
            createcart: function(){
                this.ticketsummary = 'Ticket Summary'
            }   
        },
        })


    console.log('END VUE');
    // END VUE
    })