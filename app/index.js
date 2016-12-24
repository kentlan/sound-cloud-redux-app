import React from 'react'
import {render} from 'react-dom'
import App from './containers/app'
import {Provider} from 'react-redux'
import store from './store'
import './style/scss/style.scss'
import 'normalize.css'

window.store = store

const root = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(root, document.getElementById('app'))
