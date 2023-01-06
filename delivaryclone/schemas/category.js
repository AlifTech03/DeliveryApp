import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ]
})
