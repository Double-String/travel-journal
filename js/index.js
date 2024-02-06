import Router from "./router"

const router = new Router()
router.add("/", "../pages/home.html")
router.add("/about", "../pages/about.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()