import Navbar from "./Navbar"
import { Outlet } from "react-router-dom"
import store from "../store/store"
import { Provider } from "react-redux"

const RootLayout = () => {
    return (
        <div>
            <Provider store={store}>
                <Navbar />
                <main >
                    <Outlet />
                </main>
            </Provider>
        </div>
    )
}

export default RootLayout
