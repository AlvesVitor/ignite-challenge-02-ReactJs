import AuthProvider from './context/auth';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AuthProvider>

        <SideBar />

        <Content />

      </AuthProvider>
    </div>
  )
}