import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import PaginationPage from "./pages/PaginationPage";


Vue.use(VueRouter)


export const router = new VueRouter({

    routes: [

        { 
            path : "/" , 
            component : ButtonPage,
        },

        { 
            path : "/buttonpage" , 
            component : ButtonPage,
        },

        { 
            path : "/inputpage" , 
            component : InputPage,
        },

        { 
            path : "/paginationpage" , 
            component : PaginationPage,
        },

    ],

    mode : "history"
})