var movieRange = 3;
var item =0;
var movieArray=[]; 
var tkbox =false;

$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=e572ec9de5afe4b04e99f7d8ca059c8d", function (jsObject) {

    // LIST
    for (let i = 0; i < movieRange; i++) {
        title = jsObject.results[i].original_title ;
        poster = jsObject.results[i].poster_path ;
        overview = jsObject.results[i].overview ;
        movieArray[i] =jsObject.results[i].original_title;
        //document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '" v-on:createcart></acard>';
        document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '"></acard>';

    }
    // VUE////////////////////////////////////////////////////////////////////////////////

    Vue.component('acard', {
        props: ['name', 'img', 'ov'],
        data:function () {
            return {
                countchild : 0,
                countadult : 0
            }
        },
        methods:{
            createcartchild: function(){
                this.$parent.createcart();
                console.log(this.countchild);

            },
            createcartadult: function(){
                this.$parent.createcart();
                console.log(this.countadult);
            }
            
            
            
        },
        template: `<div>
                        <div class="col-sm">
                            <div class="card" style="width: 18rem;">
                                <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
                                <div class="card-body">
                                    <button
                                    class="btn btn-primary" 
                                    v-on:click="createcartchild(name); countchild++" 
                                    >Child Ticket</button>  

                                    <button  
                                    class="btn btn-primary" 
                                    v-on:click="createcartadult(name); countadult++" 
                                    >Adult Ticket</button>
                                    <p></p>
                                    <h5 class="card-title">{{name}}</h5>
                                    <p class="card-text">{{ov}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="table table-striped" id = 'cart' >
                        </div>
                    </div>
                `
    })

    var app1 = new Vue({
        el: "#app",
        data: {
            message:"",
            ticketsummary:"",
            movie: [
                {name:'default', adult: 0, child: 0}
            ],
                
            count:0
        },

        methods:{
            createcart: function(moviename){
                this.ticketsummary = 'Ticket Summary';
                this.movie[0].name =name;
            }   
        },
        })


    console.log('END VUE');
    // END VUE
    })