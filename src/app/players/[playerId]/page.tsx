import { getPlayer } from "@/app/lib/actions/player";
import PlayerForm from "@/app/ui/playerForm";
import getPlayerIcon from "@/app/ui/playerIcon";

type Props = {
    params : {
        [key: string]: string
    }
}

export default async function Player({
    params,
  }: Props) {

    if(!params.playerId) return (<>Parameter is missing </>)

    const player = await getPlayer(params.playerId);

    return (
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between mt-3 mb-6">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{player.derbyName}</h2>
                    {getPlayerIcon(player.position)}
                </div>
            </div>
            <PlayerForm
                actionType="edit"
                player={player}
            />
        </div>
    )
}