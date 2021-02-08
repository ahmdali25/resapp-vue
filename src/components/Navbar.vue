<template>
  <div class="container mt-4">
    <nav class="navbar navbar-expand-lg navbar-light bg-light bg-transparent navbar-custom">
      <a class="navbar-brand">
        <span>Resapp</span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#link-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="link-nav">
        <ul class="navbar-nav" v-for="link in links" :key="link.title">
          <li class="nav-item">
            <router-link :to="link.route" class="nav-link active">{{link.title}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>        
</template>

<script>
export default {
  data: () => ({
    links: [
      {title: 'Home', route: '/'},
      {title: 'Resep', route: '/resep'},
      {title: 'Kategori', route: '/kategori/:id'},
      {title: 'Favorit', route: '/favorit'}
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

 .navbar-custom {
        margin-left: -50px;
        margin-right: -50px;

        .navbar-brand {
            img {
                width: 28px;
                height: 28px;
                margin-top: -5px;
            }

            span {
                font-size: 22px;
                font-weight: 500;
                color: $primary-color;
                line-height: 35px;
                margin-left: 10px;
            }
        }

        .navbar-collapse {
            .navbar-nav {
                font-size: 18px;
                line-height: 22px;
                .nav-item {
                    .nav-link {
                        color: $text-color;
                        font-weight: 400;
                        margin-left: 15px;
                    }

                    .router-link-exact-active {
                        font-weight: 500;
                        color: $primary-color;
                    }
                }
            }
        }
    }
</style>