import { type SchemaTypeDefinition } from 'sanity'
import experience from './schemas/experience'
import skills from './schemas/skills'
import social from './schemas/social'
import pageInfo from './schemas/pageInfo'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience,skills,social,pageInfo,project],
}
