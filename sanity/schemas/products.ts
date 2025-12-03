// schemas/product.ts
import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
    }),

    defineField({
      name: 'installationIncluded',
      title: 'Installation Included',
      type: 'boolean',
    }),

    defineField({
      name: 'customizationOptions',
      title: 'Customization Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),

    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Headstones & Plaques', value: 'Headstones & Plaques' },
          { title: 'Gravestones & Tombstones', value: 'Gravestones & Tombstones' },
        ],
      },
    }),

    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', type: 'string', title: 'Alternative Text' },
            { name: 'title', type: 'string', title: 'Title' },
          ],
        },
      ],
    }),
  ],
})
