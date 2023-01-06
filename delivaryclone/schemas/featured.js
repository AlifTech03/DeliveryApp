import {defineType, defineField, defineArrayMember} from 'sanity'

export default defineType({
  name: 'featured',
  type: 'document',
  title: 'Featured Menu Categories ',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Featured category name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'text',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurant',
      type: 'array',
      title: 'Restaurant',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [
            {
              type: 'restaurant',
            },
          ],
        }),
      ],
    }),
  ],
})
