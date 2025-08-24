import { SDK } from "@planner/sdk";

const sdk = new SDK({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
});

export default sdk;
