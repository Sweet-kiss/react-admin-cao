import './App.css';
import { HashRouter,Switch, Route } from 'react-router-dom'
import Login from './views/login/index'
import 'antd/dist/antd.css'

function App() {
  return (
     <HashRouter>
        <Switch>
          <Route component={Login} exact  path="/" />
        </Switch>
     </HashRouter>
  )
}

export default App;
