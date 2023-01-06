import {defineField, defineType, defineArrayMember} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'short description',
      type: 'text',
      validation: (Rule) => Rule.max(400),
    }),
    defineField({
      name: 'image',
      title: 'Image of an restaurent',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Latitude of an restaurant',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude of an restaurnat',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Enter a rating (1-5) stars',
      type: 'number',
      validation: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error('Please enter value 1 and 5'),
    }),
    defineField({
      name:'type',
      title:'Category',
      validation: (Rule) => Rule.required(),
      type:'reference',
      to:[{type:'category'}]
    }),
    defineField({
      name:'dish',
      title:'Dishes',
      type:'array',
      of:[
       defineArrayMember({
        type:'reference',
        to:[{
          type: "dish"
        }]
       })
      ]
    })
  ],
})
