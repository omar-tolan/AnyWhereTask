import SideMenu from '../components/menus/SideMenu'
import Dashboard from '../components/containers/Dashboard'

const Home = () => {
  return (
    <div className='flex flex-row h-screen'>
      <SideMenu />
      <Dashboard />
    </div>
  )
}

export default Home
