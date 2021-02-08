<template>
  <div>
     <section class="banner">
      <div class="container">
          <div class="row banner-custom">
              <div class="col-lg-6 banner-text">
                  <h2>Bingung mau masak apa hari ini ?</h2>
                  <p>Kami hadir disini untuk membagikan resep<br> masakan dari seluruh Indonesia</p>
                  <div class="input-group">
                      <a href="#recipes" class="btn btn-decide">
                        Cari resep!
                      </a>
                  </div>
              </div>
              <div class="col-lg-4 banner-img">
                  <img src="../assets/img/pic.png" alt="Banner">
              </div>
          </div>
      </div>
    </section>
        <Recipes/>
  </div>
</template>

<script>
import Recipes from '../components/Recipes.vue'

export default {
  title: 'Resapp - Bingung masak apa?',
  components: {
    Recipes
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixin.scss";

.banner {
        margin-left: 140px;
        margin-right: 140px;

        .banner-custom {
            .banner-text {
                margin-top: 125px;

                .form-outline {
                    margin-top: 40px;
                    .form-control {
                        &:focus, &:active {
                            outline: none;
                            box-shadow: none;
                        }
                    }
                    .form-rounded {
                        border-top-left-radius: 30px;
                        border-bottom-left-radius: 30px;
                    }
                }
            }
            h2 {
                font-size: 46px;
                font-weight: 700;
                line-height: 70px;
                color: $primary-color;
                text-transform: capitalize;
            }
            p {
                font-size: 20px;
                font-weight: 400;
                line-height: 34px;
                color: $text-color;
                white-space: pre-line;
                margin-top: 10px;
            }
            .btn-decide {
               @include btn();
               margin-top: 40px;
            }
            .banner-img {
                margin-top: 100px;
                margin-left: -80px;
            }
        }
    }

</style>
