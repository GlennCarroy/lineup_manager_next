import { PlayerType } from "../lib/types";
import { StarIcon, PauseCircleIcon } from '@heroicons/react/24/outline'

type props = {
    player: PlayerType
}

export default function PlayerCard({ player }: props) {

    const getPlayerIcon = (position: PlayerType["position"]) => {
        if(position === "J") return <StarIcon className="size-6 text-blue-500"/>
        else if(position === "P") return <PauseCircleIcon className="size-6 text-blue-500" />
        else return <></>
    }

    return (
        <div className="min-w-28 min-h-28 border-2 rounded-lg border-slate-500 p-2 shadow-lg flex flex-col justify-between">
            <span className="text-lg">
                {player.derbyName}
            </span>
            <div>
                <span className="text-sm">{player.surname}</span>
                <div className="flex justify-between">
                    <span>{player.playerId}</span>
                    <span>{getPlayerIcon(player.position)}</span>
                </div>
            </div>
        </div>
    )
}