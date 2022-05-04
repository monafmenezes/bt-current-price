import { http } from "./config";

export default {
  list: () => {
    return http.get("/simple/price?ids=bitcoin&vs_currencies=BRL");
  },
  listOthers: () => {
    return http.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=250&page=1&sparkline=true"
    );
  },
  listDacxi: () => {
    return http.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&ids=dacxi&order=market_cap_desc&sparkline=false"
    );
  },
};
