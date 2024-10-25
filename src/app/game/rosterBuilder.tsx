import { useState } from "react"

import { PlayerType, RosterType } from "../lib/types"
// Components
import PlayerCard from "../ui/playerCard"
import getPlayerIcon from "../ui/playerIcon"

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
    } as RosterType)
    const [spots, setSpots] = useState(0)

    function manageRoster(selected: boolean, what: string, player: PlayerType) {
        if(selected && spots === 15) return alert("Roster can contain more then 15 players");
        if(selected) {
            //@ts-expect-error
            roster[what].push(player)
        } else {
            //@ts-expect-error
            const updated = roster[what].filter((r: PlayerType) => r.playerId !== player.playerId )
            //@ts-expect-error
            roster[what] = updated
        }
        setSpots(roster["blockers"].length + roster["jammers"].length)

        return setRoster(roster)
    }
    
    const BlockerIcon = getPlayerIcon("P") 
    const JammerIcon = getPlayerIcon("J") 

    return (
        <div>
            { spots > 0  && 
                <div className="flex items-center gap-6 mb-6">
                    <span className="text-2xl leading-7 text-gray-900">Roster {spots}/15</span>
                    <div className="flex items-center gap-x-1 text-blue-500">{roster["blockers"].filter(b => b.position === "P").length} {BlockerIcon}</div>
                    <div className="flex items-center gap-x-1 text-blue-500">{roster["jammers"].length} {JammerIcon}</div>
                </div>
            }
            <h3 className="text-3xl leading-7 text-gray-900 mb-6">Blockers</h3>
            <div  className="flex gap-3 flex-wrap mb-6">
                { blockers.map( (blocker: PlayerType) => {
                    return <PlayerCard 
                        player={blocker} 
                        managementMode={false}
                        isClicked={(bool) => manageRoster(bool, "blockers", blocker)}
                        />
                })}
            </div>
            <h3 className="text-3xl leading-7 text-gray-900 mb-6">Jammers</h3>
            <div  className="flex gap-3 flex-wrap">
                { jammers.map( (jammer: PlayerType) => {
                    return <PlayerCard 
                        player={jammer} 
                        managementMode={false}
                        isClicked={(bool) => manageRoster(bool, "jammers", jammer)}
                        />
                })}
            </div>
        </div>
    )
}