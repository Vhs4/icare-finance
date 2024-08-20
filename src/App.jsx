import { BrowserRouter, Route, Routes } from "react-router-dom"
import IconSet from "./components/iconSet"
import Home from "./pages/Home"

function App() {
  return (
    <div className="main-structure navbar-expand-lg ">
      <aside id="collapseExample" className="main-sidebar navbar-collapse collapse collapse-horizontal">
        <header className="brand pb-5">
          <img src="./src/assets/images/logo-simbol-color.svg" alt="Icare Finance"></img>
        </header>
        <div className="body flex-fill">
          <nav>
            <small className="menu-title">Páginas</small>
            <ul className="navbar-nav flex-column">
              <li className="nav-item ">
                <a className="nav-link active" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-home-stats.svg'} />Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-brand-cashapp.svg'}/>Gestão e Pagamentos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-presentation-analytics.svg'}/>Relatórios e Análises
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-shield-cog.svg'}/>Segurança/Acesso
                </a>
              </li>
            </ul>
          </nav>
          <nav>
            <small className="menu-title">Outros</small>
            <ul className="navbar-nav flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-brand-messenger.svg'}/>Mensagens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <IconSet styleClass={'me-3'} imageUrl={'./src/assets/icons/icon-bell.svg'}/>Notificação
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <footer>
          <div className="d-flex align-items-center px-3 py-3">
            <div className="rounded-pills p-i me-3">
            <img srcSet="./src/assets/images/image-placeholder.png" width={'40px'} className="object-fit-cover border rounded-pill" alt="..."/>
            </div>
            <div className="flex-fill pe-2">
              <h6>
                Guilherme Brenne Bello<br/>
                <small className="text-body-tertiary">Administrador</small>
              </h6>
            </div>
            <button className="btn btn-outline-danger border-0 px-2">
              <IconSet imageUrl={'./src/assets/icons/icon-logout.svg'}></IconSet>
            </button>
          </div>
        </footer>
      </aside>

      <div className="main-content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
