import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Chrome from './layouts/chrome'
import Components from './components'
import ComponentDetail from './components/detail'
import Home from './home'
import './index.css'

export default locals => {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter basename="/roboto" location={locals.path} context={{}}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/components/" component={Components} />
        <Route path="/components/:componentId/" component={ComponentDetail} />
      </div>
    </StaticRouter>
  )
}