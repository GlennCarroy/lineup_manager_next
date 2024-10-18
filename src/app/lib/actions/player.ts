'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { PlayerType } from '../types';

export async function getPlayers() {
  const res = await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const players = await res.json()
  return players as unknown as  PlayerType[]
}

 
export async function addPlayer(formData: FormData) {
    const payload = {
        playerId: formData.get('playerId'),
        derbyName: formData.get('derbyName'),
        surname: formData.get('surname'),
        position: formData.get('position'),
        rotation: formData.get('rotation') ? parseInt(formData.get('rotation') as string) : null ,
      };

    await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players`, {
      method: "POST",
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    });

    revalidatePath("/players")
    return redirect("/players")
}

export async function deletePlayer(playerId: string) {
    await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players/${playerId}`, {
      method: "DELETE",
      mode: "cors", 
      headers: {
        "Content-Type": "application/json",
      },
    });

    return revalidatePath("/players")
}

export async function getPlayer(playerId: string) {
  const res = await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players/${playerId}`, {
    method: "GET",
    mode: "cors", 
    headers: {
      "Content-Type": "application/json",
    },
  });

  const player = await res.json()
  return player as unknown as  PlayerType
}

export async function editPlayer(formData: FormData) {
  const payload = {
    playerId: formData.get('playerId'),
    derbyName: formData.get('derbyName'),
    surname: formData.get('surname'),
    position: formData.get('position'),
    rotation: formData.get('rotation') ? parseInt(formData.get('rotation') as string) : null ,
  };
  // Thanks to dynamoDB: post and put methods are using the same function
  await fetch(`https://e1ro5w2m22.execute-api.eu-west-3.amazonaws.com/dev/players`, {
    method: "POST",
    mode: "cors", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  });

  revalidatePath("/players")
  revalidatePath(`/players/${formData.get("playerId")}`)
  return redirect("/players")
}