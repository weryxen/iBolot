import Footer from "../components/footer/Footer"
import HeaderNav from "../components/header/HeaderNav"

const Layout = ({ children }) => {
    return(
        <div className="content">
                {children}
        </div>
    )
}
export default Layout