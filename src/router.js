import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import CheckboxAndRadioPage from "./pages/CheckboxAndRadioPage";
import SwitchPage from "./pages/SwitchPage"


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
            path : "/checkboxandradiopage" , 
            component : CheckboxAndRadioPage,
        },
        { 
            path : "/switchpage" , 
            component : SwitchPage,
        },

    ],

    mode : "history"
})