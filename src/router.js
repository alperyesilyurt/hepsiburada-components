import Vue from "vue";
import VueRouter from "vue-router";
import ButtonPage from "./pages/ButtonPage";
import InputPage from "./pages/InputPage";
import CheckboxAndRadioPage from "./pages/CheckboxAndRadioPage";
import SwitchPage from "./pages/SwitchPage";
import TabPage from "./pages/TabPage";
import ModalPage from "./pages/ModalPage";
import DrawerPage from "./pages/DrawerPage";
import ToastPage from "./pages/ToastPage";
import TablePage from "./pages/TablePage";
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
            path : "/checkboxandradiopage" , 
            component : CheckboxAndRadioPage,
        },
        { 
            path : "/switchpage" , 
            component : SwitchPage,
        },
        { 
            path : "/tabpage" , 
            component : TabPage,
        },
        { 
            path : "/modalpage" , 
            component : ModalPage,
        },
        { 
            path : "/drawerpage" , 
            component : DrawerPage,
        },
        { 
            path : "/toastpage" , 
            component : ToastPage,
        },
        { 
            path : "/tablepage" , 
            component : TablePage,
        },
        { 
            path : "/paginationpage" , 
            component : PaginationPage,
        },

    ],

    mode : "history"
})