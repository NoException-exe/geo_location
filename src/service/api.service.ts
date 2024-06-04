import { GeoLocationLite } from "../../lib/GeoLite2/index";
import { ApiBody } from "src/type/api.type";

export const ApiService = () => {
  return {
    execute: async ({ ip }: ApiBody) => {
      const location = new GeoLocationLite(ip);

      const data = await location.getIp();

      return data;
    },
  };
};
