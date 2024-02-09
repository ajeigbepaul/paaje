import { createClient } from "next-sanity";

export const apiClient = createClient({
  projectId: "zr0owxdx",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: false,
});
