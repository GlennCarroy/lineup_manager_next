export type PlayerType = {
    playerId: string; // In game player number
    derbyName: string;
    surname: string;
    position: 'B' | 'J' | 'P';
    rotation: number;
}

export type RosterType = {
    blockers: PlayerType[];
    jammers: PlayerType[];
    lines: {
        name: string;
        blockers: number[];
        jammer: number;
    }[]
}

export type InGamePlayerType = PlayerType & {
    penalties: number;
}

export type GameType = {
    roster: InGamePlayerType[];
    jams: []
}