// src/services/api.js
import axios from "axios";
import { platosMock } from "../data/mock.js";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getPlatos() {
    try {
        const response = await axios.get(`${BASE_URL}/api/platos`);
        return response.data;
    } catch (error) {
        console.warn("⚠️ Backend no disponible, usando mock");
        return platosMock; // 👈 fallback automático
    }
}