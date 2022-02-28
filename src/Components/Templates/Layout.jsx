import Header from '../Organisms/Header'
import './Layout.css'

function Layout ({children}) {
    return (
        <div className="layout" >
            <Header />
            {children}
        </div>
    )
}

export default Layout