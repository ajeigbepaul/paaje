import {defineField, defineType} from 'sanity'
export default defineType( {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    defineField({
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options:{
        hotspot:true
      }
    }),
   defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
   defineField({
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',
    }),
    defineField({
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    }),
    defineField({
      name: 'isCurrentlyWorkingHere',
      title: 'IsCurrentlyWorkingHere',
      type: 'boolean',
    }),
   defineField({
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of:[{type:"reference", to:{type:"skills"}}]
    }),
   defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of:[{type:"string"}]
    }),
  ],

  
})
