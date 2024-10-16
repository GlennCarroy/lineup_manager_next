export default function Game() {
    return (
    <div className="flex items-center  n justify-center overflow-hidden z-50 ">
        <div className="mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
                <div>
                    <div className="lg:max-w-xl lg:pr-5 z-40">
                        <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                            Manage your team
                            <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">in game</span>
                        </h2>
                        <p className="text-base text-gray-700">Here is a glimpse on what to expect on this page.</p>                
                    </div>
                </div>
                <div className="lg:ml-32 lg:block lg:w-1/2 xs:mt-3">

                    <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[4rem] rounded-br-none rounded-tl-none">
                        <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                            <div className="p-4">
                                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                    Build your roster
                                </h5>
                                <p className="text-slate-600 leading-normal font-light">
                                    Choose your players and attribute them to lines you will use in the game.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[4rem] rounded-br-none rounded-tl-none">
                        <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                            <div className="p-4">
                                <h5 className="mb-2 text-slate-800 text-xl font-semibold">
                                    Manage penalties
                                </h5>
                                <p className="text-slate-600 leading-normal font-light">
                                    Just tap on player's card to adjust their penalties. Warning when they are close to 7.
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
        </div>  
    </div>
    )
}