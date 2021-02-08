<template>
    <div>
      <hr>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <ul class="footer-list">
                <li>
                  <div>
                    <h5>Resapp</h5>
                  </div>
                </li>
                <li>
                  <div>
                    <p>Resapp (<i>baca: Resep</i>) adalah sebuah website aplikasi untuk berbagi resep masakan khas Indonesia.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <ul class="footer-list">
                <li>
                  <h5>Tentang</h5>
                </li>
                <li>
                  <p>Tentang Kami</p>
                </li>
                <li>
                  <router-link to='/resep'>
                    <p>Resep</p>
                  </router-link>
                </li>
                <li>
                  <router-link to='/kategori'>
                    <p>Kategori</p>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4">
              <ul class="footer-list">
                <li>
                  <h5>Hubungi Kami</h5>
                </li>
                <li>
                  <p>Sleman, Yogyakarta</p>
                </li>
                <li>
                  <p>support@restap.id</p>
                </li>
                <li>
                  <p>021 - 1111 - 2222</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="row justify-content-center">
            <p>&copy; 2021 Restap</p>
          </div>
          <div class="row justify-content-center">
            <p>API Source From : <a href="https://github.com/tomorisakura/unofficial-masakapahariini-api">Unofficial MasakapahariniAPI</a></p>
          </div>
        </div>
      </footer>
    </div>
</template>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

.footer {
  margin-top: 70px;

  &-list {
    list-style: none;

    li {
      h5 {
        font-weight: 500;
        font-size: 22px;
      }

      p {
        font-size: 16px;
        line-height: 22px;
        margin-bottom: 10px;
        color: $text-color;
      }

      a {
        text-decoration: none;
        }
    }
  }

  .row {
    p {
      a {
      text-decoration: none;
      color: $text-color;
      }
    }
  }
}
</style>