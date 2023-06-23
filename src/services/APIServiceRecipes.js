import axios from 'axios'

const CORS_URL='https://api.allorigins.win/raw?url='
const BASE_URL = "https://resep-hari-ini.vercel.app/";

export class APIServiceRecipes {
    constructor () {

    }

    getDataRecipes () {
        const url = `${CORS_URL}${BASE_URL}/recipes`
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getRecipeDetails (key) {
        const url = `${CORS_URL}${BASE_URL}/recipe/${key}`
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getDataCategoriesByKey (key) {
        const url = `${CORS_URL}${BASE_URL}/categorys/recipes/${key}`
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getDataBySearch (param) {
        const url = `${CORS_URL}${BASE_URL}/search/?s=${param}`
        let data = axios.get(url).then(response => response.data);
        return data;
    }
}
