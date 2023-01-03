import React from 'react'
import { Router } from '@hotwired/stimulus/dist/types/core/router'
import { Greeting } from './Greeting'
import store from './redux/config/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router >
          <Greeting />
        </Router>
      </Provider>
    </>
  )
}

export default App