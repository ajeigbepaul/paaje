
import { groq } from "next-sanity";
import { apiClient } from "./libs/apiClient";
export async function getPageInfo() { //Time interval
  const query = groq`
*[_type == "pageInfo"][0]`;
 // Type assertion to specify the type of params
  const data = await apiClient.fetch(query, undefined, { cache: 'no-store' });
  return data;
 
}
export async function getSocials() {
  const query = groq`
*[_type == "social"]`;
  return apiClient.fetch(query, undefined, { cache: 'no-store' });
}
export async function getSkills() {
  const query = groq`
*[_type == "skills"]`;
  return apiClient.fetch(query, undefined, { cache: 'no-store' });
}
export async function getProjects() {
  const query = groq`
*[_type == "project"]{
    ...,technologies[]->
}`;
  return apiClient.fetch(query, undefined, { cache: 'no-store' });
}
export async function getExperiences() {
  const query = groq`
*[_type == "experience"]{
    ...,technology[]->
}`;
  return apiClient.fetch(query, undefined, { cache: 'no-store' });
}
