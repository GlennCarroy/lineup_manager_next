import { useState } from "react"
import { PlayerType } from "../lib/types"
import PlayerCard from "../ui/playerCard"

type Props = {
    players: PlayerType[]
}

export default function RosterBuilder({ players } : Props) {

    const blockers = players.filter(p => p.position !== "J")
    const jammers = players.filter(p => p.position === "J")
    const [roster, setRoster] = useState({
        blockers: [],
        jammers: [],
        lines: []
    })

    return (
        <div>
            <h3 className="text-3xl leading-7 text-gray-900 mb-6">Blockers</h3>
            <div  className="flex gap-3 flex-wrap mb-6">
                { blockers.map( (blocker: PlayerType) => {
                    return <PlayerCard player={blocker} managementMode={false} />
                })}
            </div>
            <h3 className="text-3xl leading-7 text-gray-900 mb-6">Jammers</h3>
            <div  className="flex gap-3 flex-wrap">
                { jammers.map( (jammer: PlayerType) => {
                    return <PlayerCard player={jammer} managementMode={false} />
                })}
            </div>
        </div>
    )
}