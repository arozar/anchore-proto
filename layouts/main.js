import 'isomorphic-unfetch';
import { Link, Router } from '../routes'

import Header from '../components/header'

export default ({ children }) => (
  <div>
    <Header />
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
    </div>
  </nav>
    { children }
  </div>
)