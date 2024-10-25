import { useContext } from "react";
import MultiSelect from "../ui/multiSelect";
import { RosterContext } from "./wrapper";

export default function LinesBuilder() {
    const {roster} = useContext(RosterContext)
    const rosterCount = roster.blockers.length + roster.jammers.length    
    const blockerOptions = roster.blockers.map(b => ({value: b.playerId, label: b.derbyName}))

    return (
        <div className="flex gap-4">
            {
                rosterCount >= 7 ? (
                    <>
                    <div>
                        <input 
                            type="text"
                            onChange={(e) => {console.log(e.target.value)}}
                            id="surname"
                            defaultValue={""}
                            className="block rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        />
                    </div>
                    <MultiSelect 
                        options={blockerOptions}
                    />
                    </>
                ) : <>Please select at least 7 players before making lines</>
            }
        </div>
    )
}