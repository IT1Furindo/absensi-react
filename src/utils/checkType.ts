export const checkType = (params: string) => {
    switch (params) {
        case "0":
            return "Pulang";

        case "1":
            return "Mulai Istirahat";

        case "i":
            return "Selesai Istirahat";

        case "O":
            return "Masuk";

        default:
            return "Tidak diketahui";
    }
};
