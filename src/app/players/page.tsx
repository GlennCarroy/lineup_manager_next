import { getPlayers } from "../lib/actions/player";

// Types
import { PlayerType } from "../lib/types";
// Components
import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ManagementButton from "../ui/buttons/managementButton";
import PlayerCard from "../ui/playerCard";
import SearchPlayer from "../ui/searchPlayer";

type Props = {
    searchParams: {
        [jey:string ]: string
    }
}

export default async function Players({
    searchParams
}: Props) {
    const data = await getPlayers();
    const query = searchParams?.query || '';
    const isInManagementMode = !!searchParams?.management

    let players
    if(query) players = data.filter(d => {
        return d.derbyName.toLowerCase().includes(query.toLowerCase()) || d.surname.toLowerCase().includes(query.toLowerCase())
    })
    else players = data

    return (
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl leading-7 text-gray-900 mt-3 mb-6 sm:truncate sm:text-3xl sm:tracking-tight">Players</h2>
                <div className="flex items-center gap-3">
                    <SearchPlayer />
                    <Link
                        href="/players/add"
                        className="flex border-2 rounded border-blue-500  text-blue-500 p-2 hover:text-white hover:bg-blue-500" 
                        >
                        <PlusIcon className="size-6" /> Add
                    </Link>
                    <ManagementButton label="Manage" />

                </div>
            </div>
            <div  className="flex gap-3 flex-wrap">
                {players.map((player: PlayerType) => {
                    return (
                        <PlayerCard 
                            player={player} 
                            key={player.playerId} 
                            managementMode={isInManagementMode}    
                        />
                    )
                })}
            </div>
        </div>
    )
}