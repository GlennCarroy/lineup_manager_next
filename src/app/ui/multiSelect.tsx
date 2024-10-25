"use client"

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Option = {
    value: string;
    label: string;
}

type Props = {
    options: Option[];
}

export default function MultiSelect({ options }: Props) {
    const [selection, setSelection] = useState<Option[]>([])
    const [open, setOpen] = useState(false)

    function addToSelection(value: Option) {
        const existingIndex = selection.findIndex(s => s.value == value.value)
        if(existingIndex !== -1) return ;
        selection.push(value)
        return setSelection([...selection])
    }
    function removeFromSelection(value: string) {
        const filtered = selection.filter(s => s.value !== value)
        return setSelection(filtered)
    }

    return (
        <div className="w-full md:w-1/2 flex flex-col items-center h-64">
            <div className="w-full">
                <div className="flex flex-col items-center relative">
                    <div className="w-full">
                        <div className="p-1 flex border border-gray-200 bg-white rounded">
                            <div className="flex flex-auto flex-wrap">
                                {selection.map(s => {
                                  return (
                                    <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-teal-700 bg-cyan-100 border border-cyan-300 ">
                                        <div className="text-xs font-normal leading-none max-w-full flex-initial">{s.label}</div>
                                        <div className="flex flex-auto flex-row-reverse">
                                            <div onClick={() => removeFromSelection(s.value)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                  )  
                                })}
                            </div>
                            <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                                <button
                                    onClick={() => setOpen(!open)} 
                                    className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                                    {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                                </button>
                            </div>
                        </div>
                    </div>
                    {open && 
                        <div className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded overflow-y-auto">
                            <div className="flex flex-col w-full">
                                {options.map(option => {
                                    return (
                                        <div 
                                            onClick={() => addToSelection(option)}
                                            className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100">
                                            <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                                                <div className="w-full items-center flex">
                                                    <div className="mx-2 leading-6">{option.label} </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}