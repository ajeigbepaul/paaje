import { structureTool } from 'sanity/structure'
import {defineConfig} from 'sanity'
import {schema} from "./app/sanity/schema"
export default defineConfig({
    basePath: '/admin',
    projectId:"zr0owxdx",
    dataset:"production",
    title:"portfolio backend",
    apiVersion:"2024-02-06",
    schema,
    plugins: [
      structureTool(),
    ],
  })