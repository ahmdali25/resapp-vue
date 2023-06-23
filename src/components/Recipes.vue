<template>
    <section class="recipes" id="recipes">
       <div class="container">
        <div class="row justify-content-center mb-4">
          <div class="title">
            <h2>Resep Untukmu</h2>
          </div>
        </div>
        <div class="items items-row">
          <div class="row justify-content-center">
            <div v-for="recipe in getRecipes.slice(0,3)" :key="recipe.id"  class="col-lg-4 text-center">
              <div class="card border-warning w-100">
                <div class="row justify-content-end">
                  <button @click="setFavoritRecipe(recipe)" class="btn btn-save" title="Simpan ke favorit">+</button>
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
                      <p>Tingkatan <br> <b>{{recipe.difficulty}}</b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-5 mb-5">
           <router-link to="/resep">
             <button class="btn btn-goto">Lebih banyak resep</button>
           </router-link>
        </div>
       </div>
      </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    isLoading : true
  }),

  computed: {
    ...mapGetters(['getRecipes'])
  },

  methods: {
    ...mapActions(['getDataRecipes', 'getRecipeDetail', 'setFavoritRecipe'])
  },

  async mounted() {
    await this.getDataRecipes();
    await this.getRecipeDetail();
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixin.scss";

 .recipes {
   margin-top: 100px;
   .title {
      h2 {
        color: $primary-color;
      }
    }
        
    .items-row {
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

    .row {
      .btn-goto {
        @include btn();
      }
    }
  }
</style>