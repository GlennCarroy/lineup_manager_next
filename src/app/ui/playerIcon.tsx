import { PauseCircleIcon, StarIcon } from "@heroicons/react/24/outline"
import { PlayerType } from "../lib/types"

export default function getPlayerIcon (position: PlayerType["position"]) {
    if(position === "J") return <StarIcon className="size-6 text-blue-500"/>
    else if(position === "P") return <PauseCircleIcon className="size-6 text-blue-500" />
    else return <></>
}