import routesConfig from '../router/routes/routesConfig'
const state = {
    routesConfig,
    addRoutes:[]
    
}
const getters = {
  
}

const mutations = {
    setRoutes(state,asyncRouters){
        state.addRoutes = asyncRouters
        console.log(state.addRoutes);
    }
}
//用来管理mutations
const actions = {
    generateRoutes({ commit }) {
        let asyncRouters = filterAsyncRouter();
        commit("setRoutes", asyncRouters); 
    }
}



function filterAsyncRouter(){
    let roles = localStorage.getItem("_auth")
    let routes = []
    if(roles){
        roles = JSON.parse(roles)
        routesConfig.forEach((route=>{
            roles.forEach((role)=>{
                if(route.meta.id === role){
                    state.routes.push(route)
                }
            })
        }))
    }
    console.log(routes);
    return routes 
}

export default {
state,
getters,
mutations,
actions
}