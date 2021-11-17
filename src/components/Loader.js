import apexLogo from '../assets/al-logo.png';

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center" style={{ marginTop: "100px" }}>
      <img src={apexLogo} alt="apex legends logo" className="rounded-xl bg-black h-auto shadow-lg" />
    </div>
  )
}

export default Loader
