<template>
    
        <div class="navigation">
             <router-link class="pages" tag="div" to="/buttonpage">
                <a class="nav-link" href="#">Button Page</a>
            </router-link>
            <router-link class="pages" tag="div" to="calendarpage">
                <a class="nav-link" href="#">Calendar Page</a>
            </router-link>
            <router-link class="pages" tag="div" to="paginationpage">
                <a class="nav-link" href="#">Pagination Page</a>
            </router-link>
            <router-link class="pages" tag="div" to="">
                <a class="nav-link" href="#">Input-Switch Page</a>
            </router-link>
            <router-link class="pages" tag="div" to="">
                <a class="nav-link" href="#">Input-Checkbox Page</a>
            </router-link>
            
        

        </div>

</template>

<script>
export default {
    
}
</script>

<style scoped>
.navigation{
    display: flex;
    flex-direction: column;
    width: 180px;
    height: 690px;
    background-color: #FF6000;
    border-radius: 8px;
}


.pages {
    display: flex;
    margin: 10px;
    height: 40px;
    background-color: #FFFFFF;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    font-family: sans-serif;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding: 0px;   
}
.pages:hover{
   background-color: #BF4800;
   
}

.nav-link{
    text-decoration: none;
    color: black;
}

</style>