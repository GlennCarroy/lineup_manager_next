'use client'
import { useState } from "react";
import clsx from "clsx";

import { deletePlayer } from "../lib/actions/player";
import { PlayerType } from "../lib/types";
// Component
import { XMarkIcon } from '@heroicons/react/24/outline';
import getPlayerIcon from "./playerIcon";

type props = {
    player: PlayerType;
    managementMode: boolean;
    isClicked?: (bool: boolean) => any;
}

export default function PlayerCard({ player, managementMode, isClicked }: props) {
    const [ selected, setSelected ] = useState(false)
    const playerIcon = getPlayerIcon(player.position)

    function manageSelection(bool: boolean) {
        setSelected(bool)
        if (isClicked) return isClicked(bool)
    }

    return (
        <div className="relative" onClick={() => manageSelection(!selected)}>
            <div
                className={clsx("w-32 h-32 cursor-pointer border-2 rounded-lg border-slate-500 p-2 shadow-lg flex flex-col justify-between", {"border-cyan-400 bg-slate-600 text-white": selected})}>
                <span className="text-lg">
                    {player.derbyName}
                </span>
                <div>
                    <span className="text-sm">{player.surname}</span>
                    <div className="flex justify-between">
                        <span>{player.playerId}</span>
                        <span>{playerIcon}</span>
                    </div>
                </div>
            </div>
            {managementMode && (
                <button
                    onClick={()=> deletePlayer(player.playerId)}
                    className="absolute right-[-10px] top-[-10px] w-7 border-2 rounded-lg border-lg border-slate-500 text-white bg-slate-500"
                >
                    <XMarkIcon />
                </button>
            )}
        </div>
    )
} 