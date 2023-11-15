import axios from "axios";

export const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // Menyediakan URL dasar untuk semua permintaan

    // timeout: 1000, // Batas waktu (dalam milidetik) sebelum permintaan dianggap timeout
    headers: {
        "Content-Type": "application/json" // Menentukan tipe konten permintaan
        // "Access-Control-Allow-Credentials": true
        // 'authorization': 'Bearer your-token' // Menambahkan header otorisasi jika diperlukan
    }
    // withCredentials: true
});
