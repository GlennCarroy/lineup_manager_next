"use client"

import { useState } from "react"
import { PlayerType } from "../lib/types"
import clsx from "clsx"
import RosterBuilder from "./rosterBuilder"

type Props = {
    players: PlayerType[]
}

export default function Wrapper({ players } : Props) {
    const [activePan, setActivePan] = useState("roster")

    return (
    <div className="flex items-center overflow-hidden z-50 ">
        <div className="w-full">
            <h2 className="text-2xl leading-7 text-gray-900 mt-3 mb-6 sm:truncate sm:text-3xl sm:tracking-tight">Game preparation</h2>
            <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                <ul 
                    className="flex flex-wrap -mb-px" 
                    id="myTab" 
                    data-tabs-toggle="#myTabContent" 
                    role="tablist">
                    <li className="mr-2" role="presentation">
                        <button 
                            className={clsx("inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2", {
                                "text-gray-600 border-gray-600" : activePan === "roster"
                            })} 
                            id="roster-tab" 
                            data-tabs-target="#roster" 
                            type="button" 
                            role="tab" 
                            aria-controls="roster" 
                            aria-selected="false"
                            onClick={() => setActivePan("roster")}>
                                Build a roster
                        </button>
                    </li>
                    <li className="mr-2" role="presentation">
                        <button 
                            className={clsx("inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2", {
                                "text-gray-600 border-gray-600" : activePan === "lines"
                            })} 
                            id="lines-tab" 
                            data-tabs-target="#lines" 
                            type="button" 
                            role="tab" 
                            aria-controls="lines" 
                            aria-selected="true"
                            onClick={() => setActivePan("lines")}>
                                Make lines
                        </button>
                    </li>
                </ul>
            </div>
            <div id="myTabContent">
                {
                    activePan === "roster" ? (
                        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="lines" role="tabpanel" aria-labelledby="lines-tab">
                            <RosterBuilder  players={players} />
                        </div>
                    ) : (
                        <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-800" id="lines" role="tabpanel" aria-labelledby="lines-tab">
                            LINES
                        </div>
                    )
                }
            </div>
        </div>
    </div>
    )
}