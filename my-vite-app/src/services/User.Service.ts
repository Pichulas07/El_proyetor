
import type { User } from "../models/User.Model";

const MOVIES_URL = "../../data/user.json";

export async function getUser(): Promise<User> {

    const response = await fetch(MOVIES_URL);

    if (!response.ok) {
        throw new Error(
            `No se pudo cargar movies.json (status ${response.status})`
        )
    }

    const data = await response.json();
    console.log("Usuario cargado", data);

    return data as User;
    
}