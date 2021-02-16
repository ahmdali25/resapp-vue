<template>
    <div class="container">
       <div class="row mt-5 mb-5">
           <h4>💾 Resep Yang Disimpan</h4>
       </div>
       <div class="row justify-content-center">
           <div v-show="getRecipesFavorit.length == 0">
               <div class="row justify-content-center">
                   <img src="../assets/img/save.png" alt="">
               </div>
               <div class="row justify-content-center">
                   <p><b>Belum ada resep yang disimpan 😞</b></p>
               </div>
               <div class="row justify-content-center">
                   <button class="btn btn-search">
                       <router-link :to='resep'>Cari resep</router-link>
                   </button>
               </div>
           </div>
           <div v-for="(recipe, index) in getRecipesFavorit" :key="recipe.title" class="col-lg-4 text-center col-fav">
              <div class="card border-warning w-100">
                <div class="row justify-content-end">
                  <button @click="removeRecipe(index)" class="btn btn-delete" title="Hapus dari favorit">x</button>
                </div>
                <div class="row justify-content-center mt-3">
                  <img :src="recipe.thumb" @click="getRecipeDetail(recipe.key)" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                   <h5 class="card-title">{{recipe.key.replace(/-|cara|resep|membuat/gi, ' ')}}</h5>
                </div>
                <div class="row justify-content-center">
                  <hr style="width: 85%">
                </div>
                <div class="row">
                  <div class="col-lg-4">
                      <p>Waktu masak <b>{{recipe.times}}</b></p>
                  </div>
                  <div class="col-lg-4">
                      <p>Porsi <br> <b>{{recipe.portion}}</b></p>
                  </div>
                  <div class="col-lg-4">
                      <p>Tingkatan <br> <b>{{recipe.dificulty}}</b></p>
                  </div>
                </div>
              </div>
           </div>
       </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    title: 'Resapp - Resep Favorit Kamu',
    data: () => ({
        resep: '/resep'
    }),
    computed: {
        ...mapGetters(['getRecipesFavorit'])
    },

    methods: {
        ...mapActions(['getRecipeDetail', 'removeRecipe'])
    }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixin.scss";

.container {
    .row {
        .row {
            .btn-search {
            @include btn();
                a {
                    text-decoration: none;
                    color: $primary-color;
                }
            }
        }

        .col-fav {
            .btn-delete {
                @include btn-function();
            }

            .card {
                @include card();
            }

            h5 {
                @include title();
            }

            p {
                font-size: 14px;
                line-height: 20px;
                color: $text-color;
            }
        }
    }
}
</style>