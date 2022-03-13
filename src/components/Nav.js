import logo from '../assets/apex-legends-logo.png';

function Nav() {

  return (
    <div className="bg-white">
      <div className="md:container md:mx-auto md:px-0 px-4 py-4">
        <div className="flex justify-start items-center">
          <span className="inline mr-2 rounded-full bg-gray-200 p-2">
            <img src={logo} alt="apex legends logo" className="h-7 w-7" />
          </span>
          <span className="sm:text-2xl">Apex Map Rotation</span>
        </div>
      </div>
    </div>
  )
}

export default Nav
