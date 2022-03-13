import logo from '../assets/apex-legends-logo.png';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="bg-white p-8 md:p-16 rounded-full overflow-hidden border animate-pulse">
        <img src={logo} alt="apex legends logo" className="h-28 w-28 md:h-52 md:w-52" width="200" height="200" />
      </span>
    </div>
  )
}

export default Loader
