import  Main from '../views/layouts/main.jsx'
import Home from '../views/home/index.jsx'
module.exports = {
	path:'/',
	component:Main,
	indexRoute:{component:Home},
	childRoutes:[
        require("./start/index.js"),
        require("./api/index.js"),
        require("./demo/index.js")
	]
}