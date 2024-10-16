'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

 
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