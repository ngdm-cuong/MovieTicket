var movieRange = 3;

var movieArray=[]; 
var tkbox =false;
var movieCart = [[[]]];

$.getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=e572ec9de5afe4b04e99f7d8ca059c8d", function (jsObject) {

    // LIST
    for (let i = 0; i < movieRange; i++) {
        title = jsObject.results[i].original_title ;
        poster = 'https://image.tmdb.org/t/p/w500'+jsObject.results[i].poster_path ;
        overview = jsObject.results[i].overview ;

        movieArray[i]= {'title':title, 'poster': poster, 'overview':overview, 'child':0, 'adult':0};

        // document.getElementById('cardDeck').innerHTML += '<acard name="' + title + '"img = " ' + poster + '" ov = " ' + overview + '"></acard>';

    } // End For loops


    Vue.component('acard', {
        props: ['name', 'img', 'ov'],
        data:function () {
            return {
                countchild : 0,
                countadult : 0,
                created: 0,
                cartItem:{'itemName':'default',countchild:0,  countadult : 0},
                cart:movieCart,

            }
        },
        methods:{
            createcart1: function(movietitle,countchild,countadult){
                this.$parent.createcart(this.cartItem);
                // this.cartItem.itemName = movietitle;
                // this.cartItem.countchild = countchild;
                // this.cartItem.countadult = countadult;
                console.log(countchild);
                console.log(this.cartItem.itemName+' Count Child: ' +this.cartItem.countchild);
                console.log(this.cartItem.itemName+' Count Adult: ' +this.cartItem.countadult);

            },
            // createcartadult: function(movietitle,countadult){
            //     this.$parent.createcart(movietitle,countadult);
            //     this.$parent.cartItem = {'itemName':movietitle, child:countadult};

            //     console.log('Adult: '+this.countadult);
            // }
            
            
            
        }, // End vue component method
        template: `<div>
                        <div class="col-sm">
                            <div class="card" style="width: 18rem;">
                                <img v-bind:src='img' class="card-img-top" v-bind:alt='name'>
                                <div class="card-body">
                                    <button
                                    class="btn btn-primary" 
                                    @click=" cartItem.itemName = name; createcart1(name,cartItem.countchild++,0); created = 1" 
                                    >Child Ticket</button>  

                                    <button  
                                    class="btn btn-primary" 
                                    @click=" cartItem.itemName = name; createcart1(name,0,cartItem.countadult++); created = 1" 
                                    >Adult Ticket</button>
                                    <p></p>
                                    <h5 class="card-title"> {{name}}</h5>
                                    <p class="card-text">{{ov}}</p>
                                </div>
                            </div>
                        </div>
                        <div class="table table-striped" id = 'cart' >
                        </div>
                    </div>
                `
    }) //END VUE.Component

    var app1 = new Vue({
        el: "#app",
        data: {
            message:"",
            ticketsummary:"",
            movies: movieArray,
            cartItem:{'itemName':'default',child:0,adult:0},
            cartArray:[],

            count:0
        }, // End vuedata

        methods:{
            createcart: function(aaa){
                this.ticketsummary = 'Ticket Summary';
                this.cartItem=aaa;
                console.log(this.cartArray.length);
                for (let i = 0; i<= this.cartArray.length; i++)
                {
                    if (this.cartArrayp[i].itemName ==  this.cartItem.itemName)
                    {
                        this.cartArray[i] = this.cartItem;
                        console.log(this.cartArray[i].itemName)
                        
                    }
                    else{
                        this.cartArray.push(this.cartItem)
                        console.log(this.cartArray[i].itemName)
                        
                    }

                }
               
                

                // console.log(moviename);
            }   
        },
        })// END Vue root


    console.log('END VUE');

    })