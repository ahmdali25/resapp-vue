<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col">
                <h1>{{getDetail.title}}</h1>
                <p>{{getDetail.author.user}} | {{getDetail.author.datePublished}}</p>
                <img :src="getDetail.thumb" alt="">
                <p class="desc">{{getDetail.desc}}</p>
                <div class="row justify-content-center row-info">
                    <div class="col-lg-3 col-info">
                        <p>Waktu masak :</p>
                        <p><b>{{getDetail.times}}</b></p>
                    </div>
                    <div class="col-lg-3 col-info">
                        <p>Porsi :</p>
                        <p><b>{{getDetail.portion}}</b></p>
                    </div>
                    <div class="col-lg-3 col-info">
                        <p>Tingkatan :</p>
                        <p><b>{{getDetail.difficulty}}</b></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4>Bahan-bahan</h4>
                <div v-for="ingredient in getDetail.ingredient" :key="ingredient">
                    <ul>
                        <li>{{ingredient}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <h4>Cara Memasak</h4>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <ul v-for="(step,index) in getDetail.step" :key="step" style="list-style:none">
                    <li><b>{{index+=1}}.</b> {{step.replace(/1|2|3|4|5|6|7|8/gi, '')}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  title: 'Resapp - Detail Resep',
  computed: {
    ...mapGetters(['getDetail'])
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.container {
    .row {
        .col {
            h1 {
                margin-top: 100px;
            }
            img {
                margin-top: 20px;
                border-radius: 20px;
            }
            h4 {
                margin-top: 220px;
            }
            .desc {
                margin-top: 40px;
                text-indent: 40px;
                text-align: justify;
            }

            .row-info {
                .col-info {
                    background-color: $secondary-color;
                    border-radius: 10px;
                    margin-left: 20px;
                    margin-right: 20px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 8px 0 rgba(0, 0, 0, 0.2);

                    p {
                        font-size: 16px;
                        margin-top: 20px;
                        text-align: center;
                    }
                }
            }
        }
    }
}
</style>