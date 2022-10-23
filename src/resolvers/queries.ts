import { Resolvers, Book } from '../generated/graphql';

const books: Book[] = [
  {
    _id: '123',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    _id: '1234',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};
