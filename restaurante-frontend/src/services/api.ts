import axios from "axios";
import { platosMock } from "../data/mock";

const BASE_URL = import.meta.env.VITE_API_URL;

export interface Plato {
    _id: string;
    nombre: string;
    precio: number;
}

export async function getPlatos(): Promise<Plato[]> {
    try {
        const response = await axios.get<Plato[]>(
            `${BASE_URL}/api/platos`
        );
        return response.data;
    } catch (error) {
        console.warn("⚠️ Usando mock (backend no disponible)");

        await new Promise((res) => setTimeout(res, 500));
        return platosMock;
    }
}