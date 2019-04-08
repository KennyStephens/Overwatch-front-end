import Vue from "vue";
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import App from "./App.vue";
import router from "./router"

Vue.config.productionTip = false;

// HTTP connexion to the API
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");