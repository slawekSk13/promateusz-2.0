const API_PATHS = ["trips"] as const;
export type ApiPath = `/${(typeof API_PATHS)[number]}`;
