import { createClient } from "next-sanity";

export const apiClient = createClient({
  projectId: "zr0owxdx",
  dataset: "production",
  apiVersion: "2024-02-06",
  useCdn: false,
});
