import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import RightBar from './rightbar'

export default function MainLayout({ children }) {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar />
      <main className="flex-1 flex gap-[30px] ">
        <main className="outlet flex-1 max-w-[600px] border-x border-[#2f3838]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  )
}
