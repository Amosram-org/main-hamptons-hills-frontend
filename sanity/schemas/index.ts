import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { gallery } from './gallery'
import { blogs } from './blogPosts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, gallery, blogs],
}
