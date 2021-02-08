import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { APIServiceRecipes } from '../services/APIServiceRecipes'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const apiServiceRecipes = new APIServiceRecipes();

export default new Vuex.Store({
  state: {
    recipes: [],
    recipesCategory: [],
    recipeDetail: [],
    recipesBySearch: [],
    recipesFavorit: [],
    isClicked: false,
    isLoading: null
  },
  getters: {
    getRecipes (state) {
      return state.recipes
    },

    getRecipesCategory (state) {
      return state.recipesCategory
    },

    getDetail (state) {
      return state.recipeDetail
    },

    getRecipesBySearch (state) {
      return state.recipesBySearch
    },

    getRecipesFavorit (state) {
      return state.recipesFavorit
    }
  },
  mutations: {
    setRecipesData (state, payload) {
      state.recipes.push(payload)
    },

    setRecipesCategory (state, payload) {
      state.recipesCategory = payload
    },

    setRecipeDetail (state, payload) {
      state.recipeDetail = payload
    },

    setDataBySearch (state, payload) {
      state.recipesBySearch = payload
    },

    saveFavoritRecipe (state, payload) {
      state.recipesFavorit.push(payload)
    },

    //remove favorit recipes from localStorage
    removeFavoritRecipe (state, index) {
      let recipes = state.recipesFavorit.splice(index, 1);
      localStorage.removeItem('recipes', JSON.stringify(recipes))
    }
  },
  actions: {
    async getDataRecipes({commit}) {
      try {
          await apiServiceRecipes.getDataRecipes()
          .then(data => data.results)
          .then(response => {
            response.forEach(e => {
              commit('setRecipesData', e)
            })
          })
      } catch (err) {
        console.log(err)
      }
    },

    async getRecipesCategoryByKey({commit}, key) {
      try {
        if (key) {
          await apiServiceRecipes.getDataCategoriesByKey(key)
          .then(data => data.results)
          .then(response => {
            commit('setRecipesCategory', response)
            this.state.isClicked = true
            router.push({ name: 'Kategori', params: { id: key } })
          })
        }
      } catch (err) {
        console.log(err)
      }
    },

    async getRecipeDetail({commit}, key) {
      try {
       if (key) {
        await apiServiceRecipes.getRecipeDetails(key)
        .then(data => data.results)
        .then(response => {
          commit('setRecipeDetail', response)
          router.push({ name: 'Detail Resep', params: { id: key } })
        })
       }
      } catch (err) {
        console.log(err)
      }
    },

    async getDataBySearch({commit}, param) {
      try {
        if (param) {
          this.state.isLoading = true
          await apiServiceRecipes.getDataBySearch(param)
          .then(data => data.results)
          .then(response => {
            commit('setDataBySearch', response)
            this.state.isClicked = true
            this.state.isLoading = false
          })
        }
      } catch (err) {
        console.log(err)
      }
    },

    setFavoritRecipe ({commit}, payload) {
      commit('saveFavoritRecipe', payload)
      Vue.toasted.success('Resep berhasil disimpan', {position: 'bottom-right', duration: 1500});
    },

    removeRecipe ({commit}, index) {
      commit('removeFavoritRecipe', index)
      Vue.toasted.success('Resep berhasil dihapus', {position: 'bottom-right', duration: 1500});
    }
  },
  plugins: [createPersistedState({
    key: 'recipes',
    paths: ['recipesCategory', 'recipeDetail', 'recipesFavorit']
  })]
})
