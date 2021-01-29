import Collection from '../../src/classes/Collection'

const collection = new Collection()
collection.set('a', 'b')

console.log(
  collection,
  collection.get('a'),
  collection.find(e => e === 'b'),
  collection.delete('a'),
  collection,
  collection.set('Ghost', { id: 'Oi' }),
  collection.clear(),
  collection
)