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
        //document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '" v-on:createcart></acard>';
        document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = "https://image.tmdb.org/t/p/w500' + poster + '" ov = " ' + overview + '"></acard>';

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
                this.$parent.createcart()
            }
        },
        template: `
                    <div class="col-sm">
                        <div class="card" style="width: 18rem;">
                            <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
                            <div class="card-body">
                                <button
                                class="btn btn-primary" 
                                v-on:click="createcart" 
                                 >Child Ticket</button> 
                                <button  
                                class="btn btn-primary" 
                                v-on:click="createcart" 
                                >Adult Ticket</button>
                                <p></p>
                                <h5 class="card-title">{{name}}</h5>
                                <p class="card-text">{{ov}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="table table-striped" id = 'cart' >
                    </div>
                `
    })

    var app1 = new Vue({
        el: "#app",
        data: {
            message:"",
            ticketsummary:"",   
        },
        methods:{
            createcart: function(){
                this.ticketsummary = 'Ticket Summary',
                this.$refs.myDiv = 
                    '<table class="table table-striped">'
                        '<thead>'
                            '<tr>'
                            '<th scope="col">Movie</th>'
                            '<th scope="col">Adult Tickets</th>'
                            '<th scope="col">Childrens Tickets</th>'
                            '<th scope="col">Subtotal</th>'
                            '<th scope="col">Button</th>'
                            '</tr>'
                        '</thead>'
                        '<tbody>'
                            '<tr>'
                                '<td>1</td>'
                                '<td>Mark</td>'
                                '<td>Otto</td>'
                                '<td>Mark</td>'
                                '<td><button class="btn btn-success">Remove</button></td>'
                            '</tr>'
                            '<tr><td colspan="5"></td></tr>'
                            '<tr>'
                                '<td colspan="2"></td>'
                                '<td>Adult Subtotal</td>'
                                '<td>Money</td>'
                                '<td></td>'
                            '</tr> '
                            '<tr>'
                                '<td colspan="2"></td>'
                                '<td>Children Subtotal</td>'
                                '<td>Money</td>'
                                '<td></td>'
                            '</tr>'
                            '<tr>'
                                '<td colspan="2"></td>'
                                '<td>Total</td>'
                                '<td>Money</td>'
                                '<td></td>'
                            '</tr>' 
                        '</tbody>'
                    '</table>'
            }   
        },
        })


    console.log('END VUE');
    // END VUE
    })