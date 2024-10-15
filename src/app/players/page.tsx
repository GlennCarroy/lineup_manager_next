import Link from "next/link";

import fetchPlayers from "./api/route";
// Types
import { PlayerType } from "../lib/types";
// Components
import { PlusIcon } from "@heroicons/react/24/outline";
import PlayerCard from "../ui/playerCard";

export default async function Players() {
    const players = await fetchPlayers();

    return (
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 mt-3 mb-6 sm:truncate sm:text-3xl sm:tracking-tight">Players</h2>
                <Link
                    href="/players/add"
                    className="flex border-2 rounded border-blue-500  text-blue-500 p-2 hover:text-white hover:bg-blue-500" 
                    >
                    <PlusIcon className="size-6" /> Add
                </Link>
            </div>
            <div  className="flex gap-3 flex-wrap">
                {players.map((player: PlayerType) => {
                    return (
                        <PlayerCard player={player} key={player.playerId} />
                    )
                })}
            </div>
        </div>
    )
}