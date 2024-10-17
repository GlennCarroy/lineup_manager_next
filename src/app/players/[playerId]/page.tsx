import { getPlayer } from "@/app/lib/actions/player";

type Props = {
    params : {
        [key: string]: string
    }
}

export default async function Player({
    params,
  }: Props) {
    // const { playerId} = useParams()

    if(!params.playerId) return (<>Parameter is missing </>)

    const player = await getPlayer(params.playerId);

    return (
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl leading-7 text-gray-900 mt-3 mb-6 sm:truncate sm:text-3xl sm:tracking-tight">{player.derbyName}</h2>
            </div>
        </div>
    )
}