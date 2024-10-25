import { getPlayers } from "../lib/actions/player";
import Wrapper from "./wrapper";

export default async function Game() {
    const data = await getPlayers();
    return (
        <Wrapper players={data}/>
    )
}