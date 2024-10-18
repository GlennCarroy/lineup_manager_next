import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center overflow-hidden z-50 ">
      <div className="mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
            <div>
                <div className="lg:max-w-xl lg:pr-5 z-40">
                    <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                        Lineup Manager for
                        <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">roller derby</span>
                    </h2>
                    <p className="text-base text-gray-700">Manage your team in game.</p>                
                </div>
            </div>
            <div className="lg:ml-32 lg:block lg:w-1/2 xs:mt-3">

                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[4rem] rounded-br-none rounded-tl-none">
                    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="p-4">
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                Build your charter
                            </h5>
                            <p className="text-slate-600 leading-normal font-light">
                                Manage all your players in one page
                            </p>
                        </div>
                    </div>
                </div>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[4rem] rounded-br-none rounded-tl-none">
                    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="p-4">
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                In game management
                            </h5>
                            <p className="text-slate-600 leading-normal font-light">
                                Build a roster, start a game, track penalties
                            </p>
                        </div>
                    </div>
                </div>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[4rem] rounded-br-none rounded-tl-none">
                    <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                        <div className="p-4">
                            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                Jam by jam data
                            </h5>
                            <p className="text-slate-600 leading-normal font-light">
                                Send your lines, pick the lead and get some data about how good your team is doing during the game.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="flex items-center justify-center overflow-hidden gap-6">
          <Link 
            href="/players" 
            className="rounded-md bg-gray-900 px-3 py-2 text-xl text-white" 
            aria-current="page"
            >
             Start managing charter 
          </Link>
          <a href="https://www.youtube.com/watch?v=cjkJfjTe-Ds&t=27s" target="_blank" className='rounded-md px-3 py-2 text-xl font-medium border-2 border-cyan-400 space-x-4 block text-cyan-400'>New to roller derby ?</a>
        </div>
      </div>  
    </div>
  );
}
