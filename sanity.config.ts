import { structureTool } from "sanity/structure";
import { defineConfig } from "sanity";
import { schema } from "./app/sanity/schema";
import { visionTool } from "@sanity/vision";
export default defineConfig({
  basePath: "/admin",
  projectId: "zr0owxdx",
  dataset: "production",
  title: "portfolio backend",
  apiVersion: "2022-03-07",
  schema,
  plugins: [structureTool(), visionTool()],
});
