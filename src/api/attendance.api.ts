import queryString from "query-string";
import { instance } from "./instance";

export class AttendanceApi {
    static async index(params: any) {
        const paramsActual = {} as any;

        Object.keys(params)?.forEach((key) => {
            if (params[key]) {
                paramsActual[key] = params[key];
            }
        });

        const { data } = await instance({
            method: "GET",
            url: `attendance?${queryString.stringify(paramsActual)}`
        });
        return data;
    }
}
