import Link from "next/link";
import { PlayerType } from "../lib/types";
import { addPlayer, editPlayer } from "../lib/actions/player";
import clsx from "clsx";

type Props = {
    actionType: string;
    player ?: PlayerType
}

export default function PlayerForm({actionType="post", player}: Props) {
    return(
        <form action={ actionType === "edit" ? editPlayer : addPlayer}>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="surname" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                    <div className="mt-2">
                        <input 
                            type="text"
                            name="surname"
                            id="surname"
                            defaultValue={player?.surname || ""}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="derbyName" className="block text-sm font-medium leading-6 text-gray-900">Derby name</label>
                    <div className="mt-2">
                        <input 
                            type="text" 
                            name="derbyName" 
                            id="derbyName"
                            defaultValue={player?.derbyName || ""}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="playerId" className="block text-sm font-medium leading-6 text-gray-900">Number</label>
                    <div className="mt-2">
                        <input 
                            type="number" 
                            name="playerId" 
                            id="playerId" 
                            readOnly={actionType !== "post"}
                            defaultValue={player?.playerId || ""}
                            className={clsx("block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", { "readonly:bg-slate-50 readonly:text-slate-500": actionType !== "post"})} />
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">Position</label>
                    <div className="mt-2">
                        <select 
                            id="position" 
                            name="position" 
                            defaultValue={player?.position || "B"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="B">Blocker</option>
                                <option value="J">Jammer</option>
                                <option value="P">Pivot</option>
                        </select>
                    </div>
                </div>
                <div className="sm:col-span-3">
                    <label htmlFor="rotation" className="block text-sm font-medium leading-6 text-gray-900">Rotation</label>
                    <div className="mt-2">
                        <select 
                            id="rotation" 
                            name="rotation"
                            defaultValue={player?.rotation || "1"}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-3">
                    <Link
                        href="/players"
                        className="mt-2 flex border-2 rounded border-gray-900  text-gray-900 p-2 hover:text-white hover:bg-gray-900" 
                    >
                        Cancel
                    </Link>
                    <button 
                        type="submit"
                        className="mt-2 flex border-2 rounded border-blue-500  text-blue-500 p-2 hover:text-white hover:bg-blue-500" 
                        >
                        {actionType ==="edit" ? "Edit player" : "Add player"}
                    </button>
            </div>
        </form>
    )
}