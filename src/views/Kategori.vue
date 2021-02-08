<template>
  <section>
    <div class="banner">
      <div class="container">
        <h1 class="display-4 text-center">Kategori Masakan</h1>
        <p class="lead text-center">Mencari menu makanan yang enak dan telah teruji?<br>RESTAP punya banyak pilihannya.<br>Jangan lupa siapkan juga untuk bekal makan siang istimewa!</p>
      </div>
    </div>

  <div class="container">
    <div class="row justify-content-center mt-5">
     <h4>Telurusi berdasarkan</h4>
    </div>

    <div class="row justify-content-center align-content-center mb-5">
      <div v-for="category in categories" :key="category.title"  class="col-lg-4 text-center">
            <button class="btn-category" @click="getRecipesCategoryByKey(category.key)">
              <h5>{{category.title}}</h5>
            </button>
      </div>
    </div>

    <div v-show="isClicked === true" class="row justify-content-center align-content-center">
      <div v-for="recipe in getRecipesCategory.slice(0,9)" :key="recipe.title"  class="col-lg-4 text-center col-img">
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
              <p>Tingkatan<br> <b>{{recipe.dificulty}}</b></p>
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
  title: 'Resapp - Kategori Resep',
  data: () => ({
    categories: [
      {title: 'Masakan Hari Raya', key: 'masakan-hari-raya'},
      {title: 'Masakan Tradisional', key: 'masakan-tradisional'},
      {title: 'Menu Sarapan', key: 'sarapan'},
      {title: 'Menu Makan Siang', key: 'makan-siang'},
      {title: 'Menu Makan Malam', key: 'makan-malam'},
      {title: 'Resep Sayuran', key:'resep-sayuran'},
      {title: 'Resep Daging', key:'resep-daging'},
      {title: 'Resep Ayam', key:'resep-ayam'},
      {title: 'Resep Seafood', key:'resep-seafood'},
    ]
  }),
  computed: {
    ...mapState(['isClicked']),
    ...mapGetters(['getRecipesCategory'])
  },
  methods: {
    ...mapActions(['getRecipesCategoryByKey', 'getRecipeDetail', 'setFavoritRecipe'])
  },

  async mounted() {
    await this.getRecipesCategoryByKey()
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixin.scss";

.banner {
  background-image:url('https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
  background-size: cover;
  position: relative;
  width: 100%;
  height: 28rem;
  opacity: 0.9;
  
  .container {
    .display-4 {
      position: absolute;
      top: 100px;
      left: 0;
      right: 0;
      bottom: 0;
      font-weight: 500;
      color: $tertiary-color;
      text-shadow: 2px 2px $primary-color;
    }

    .lead {
      position: absolute;
      top: 220px;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 25px;
      color: $quarternary-color;
    }
  }
}

.row {
    .btn-category {
      @include btn();
      width: 240px;
      margin-top: 20px;
      padding-top: 10px !important;
      padding: 0px 20px;
  }
}

 .col-img {
   .card {
     .row {
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
</style>