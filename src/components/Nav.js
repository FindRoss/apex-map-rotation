import logo from '../assets/apex-legends-logo.png';

function Nav() {

  return (
    <nav className="bg-white">
      <div className="container md:mx-auto py-4">
        <div className="flex justify-start items-center">
          <span className="inline mr-2 rounded-full bg-gray-200 p-2">
            <img src={logo} alt="apex legends logo" className="h-7 w-7" />
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-400">Apex Maps</h1>
        </div>
      </div>
    </nav>
  )
}

export default Nav
