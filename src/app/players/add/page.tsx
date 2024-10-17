import PlayerForm from "@/app/ui/playerForm";

export default function AddPlayerPage() {

    return (
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between mt-3 mb-6">
                <h2 className="text-2xl leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Add a new player</h2>
            </div>
            <PlayerForm actionType="post" />
        </div>
    );
}