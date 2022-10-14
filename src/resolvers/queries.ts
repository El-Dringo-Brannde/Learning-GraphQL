import { Resolvers, Book } from '../generated/graphql';

const books: Book[] = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export const resolvers: Resolvers = {
  Query: {
    books: () => books,
  },
};
