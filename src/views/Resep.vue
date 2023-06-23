<template>
    <section class="recipes">
       <div class="container">
         <div class="row justify-content-center mb-2">
           <h2>Cari Resep</h2>
         </div>
          <div class="input-group justify-content-center">
            <form>
                <div class="row">
                  <div class="form-outline">
                  <input type="search" v-model="param" class="form-control" placeholder="Cari resep" size="30"/>
                </div>
                <button @click="getDataBySearch(param)" type="button" class="btn btn-search">
                  Cari
                </button>
                </div>
            </form>
          </div>
          <div class="items items-row">
            <div v-if="isClicked === false">
              <div class="row justify-content-center">
                <div class="title">
                  <h2>Resep Terkini Untukmu</h2>
                </div>
              </div>
              <div class="row justify-content-center align-content-center mt-4">
                <div v-for="recipe in getRecipes.slice(0,9)" :key="recipe.id"  class="col-lg-4 text-center">
                  <div class="card border-warning w-100 mt-5">
                    <div class="row justify-content-end">
                      <button @click="setFavoritRecipe(recipe)" class="btn btn-save" title="Simpan ke bagian favorit">+</button>
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
                          <p>Porsi<br> <b>{{recipe.portion}}</b></p>
                      </div>
                      <div class="col-lg-4">
                          <p>Tingkatan<br> <b>{{recipe.difficulty}}</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
           
           <div v-show="isClicked === true">
             <div class="row justify-content-center mb-4">
                <div class="title">
                  <h2>Resep Yang Kamu Cari</h2>
                </div>
             </div>
             <div v-show="isLoading === true" class="row justify-content-center">
               <div class="text-center">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
               </div>
             </div>
             <div v-show="isLoading === false" class="row justify-content-center align-content-center">
                <div v-for="recipe in getRecipesBySearch.slice(0,9)" :key="recipe.id"  class="col-lg-4 text-center col-img">
                  <div class="card border-warning w-100 mt-5">
                    <div class="row justify-content-end">
                      <button @click="setFavoritRecipe(recipe)" class="btn btn-save" title="Simpan ke bagian favorit">+</button>
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
                          <p>Waktu masak : {{recipe.times}}</p>
                      </div>
                      <div class="col-lg-4">
                          <p>Porsi :<br> {{recipe.portion}}</p>
                      </div>
                      <div class="col-lg-4">
                          <p>Tingkatan :<br> {{recipe.dificulty}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          </div>
       </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  title: 'Resapp - Cari Resep',
  data: () => ({
    param : ''
  }),

  computed: {
    ...mapState(['isClicked', 'isLoading']),
    ...mapGetters(['getRecipes', 'getRecipesBySearch'])
  },

  methods: {
    ...mapActions(['getDataRecipes', 'getRecipeDetail', 'getDataBySearch', 'setFavoritRecipe']),
  },

  async mounted() {
    await this.getDataRecipes();
    await this.getDataBySearch();
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixin.scss";

 .recipes {
   .input-group {
     .form-outline {
       input {
         border-top-left-radius: 30px;
         border-bottom-left-radius: 30px;
         height: 50px;
        &:focus, &:active {
        outline: none;
        box-shadow: none;
        }
       }
     }
   }
   .btn-search {
      @include btn();
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
   }
   
   margin-top: 100px;
   .title {
     h2 {
        color: $primary-color;
     }
   }
   
   .items-row {
      margin-top: 80px;
      .row {
        .card {
          @include card();
        }
      }

      .btn-save {
          @include btn-function();
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
</style>