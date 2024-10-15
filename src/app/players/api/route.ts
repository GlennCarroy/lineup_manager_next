import { PlayerType } from "@/app/lib/types"

export default async function GET() {
    const res = await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const players = await res.json()
    return players as unknown as  PlayerType[]
  }