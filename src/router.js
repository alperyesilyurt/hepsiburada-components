import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "./pages/ButtonPage"


Vue.use(VueRouter)


export const router = new VueRouter({

    routes: [


        { 
            path : "/buttonpage" , 
            component : ButtonPage,
        },

    ],

    mode : "history"
})