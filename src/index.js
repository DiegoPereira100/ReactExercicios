import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './components/Greeting'

ReactDOM.render(
        <div>
            <Greeting type="Bom dia" name="Diego" />
        </div>
    , document.getElementById('root'))