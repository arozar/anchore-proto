import 'isomorphic-unfetch';
import { Link, Router } from '../routes'

import Header from '../components/header'

export default ({ children }) => (
  <div>
    <Header />
    <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link route={'other'} params={{id:3}} ><a className="navbar-item">other</a></Link>
      <Link href={'index'}><a className="navbar-item">Home</a></Link>
    </div>
  </nav>
    { children }
  </div>
)