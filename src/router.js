import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import OwAddCharacter from "../views/OwAddCharacter.vue";
import OwCharacterDetail from "../views/OwCharacterDetail.vue";
import HomeGraphql from "../views/HomeGraphql.vue";
import OwAddCharacterGraphql from '../views/OwAddCharacterGraphql';
import OwCharacterDetailGraphql from '../views/OwCharacterDetailGraphql';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add-character",
      name: "addCharacter",
      component: OwAddCharacter
    },
    {
      path:"/character-detail/:name",
      name: "characterDetail",
      component: OwCharacterDetail
    },
    {
      path:"/home-graphql",
      name: "homeGraphql",
      component: HomeGraphql
    },
    {
      path: "/add-character-graphql",
      name: "addCharacterGraphql",
      component: OwAddCharacterGraphql
    },
    {
      path: "/character-detail-graphql/:name",
      name: "characterDetailGraphql",
      component: OwCharacterDetailGraphql
    }
  ]
});