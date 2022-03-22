// import mirage from '../assets/mirage-transparent.png';

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container sm:mx-auto py-8">
        <div className="sm:grid sm:grid-cols-2 gap-8">
          <div>
            <h5 className="font-bold">About</h5>
            <p className="text-sm text-slate-700">Track the current and next map is for every game-mode across Apex Legends. Pubs, ranked, arenas, ranked arenas, and eventually control: we've got it all.</p>
          </div>
          <div className="mt-8 sm:mt-0">
            <h5 className="font-bold">Get in touch</h5>
            <p className="text-sm text-slate-700">Got a suggestion? Reach out at apexlegendsmap@gmail.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer