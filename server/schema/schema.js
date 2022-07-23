const {
  graphql,
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");

const Book = require("../models/book");
const Author = require("../models/author");

const dummyBooks = [
  { id: 1, name: "2022: A championship story", genre: "drama", authorId: 1 },
  { id: 2, name: "Hardwork over Talent", genre: "documentary", authorId: 2 },
  { id: 3, name: "Journey of a 5 time champion", genre: "thriller", authorId: 1 },
  { id: 4, name: "A song of ice and fire", genre: "adventure", authorId: 3 },
  { id: 5, name: "A game of thrones", genre: "adventure", authorId: 3 },
  { id: 6, name: "Evolution of the 3pt shot", genre: "documentary", authorId: 1 },
  { id: 7, name: "Back in manchester", genre: "adventure", authorId: 2 },
  { id: 8, name: "Who needs Durant", genre: "thriller", authorId: 1 },
  {
    id: 9,
    name: "All we do is shoot threes and win championships",
    genre: "adventure",
    authorId: 1,
  },
  { id: 10, name: "Football till the death of my bones", genre: "sports", authorId: 2 },
];
const dummyAuthors = [
  { id: 1, name: "Steph Curry", age: 34 },
  { id: 2, name: "Cristiano Ronaldo", age: 36 },
  { id: 3, name: "George R.R Martin", age: 55 },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {
        return Book.find({ authorId: parent.id });
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve: (source, args) => {
        if (args.id) {
          return Book.findById(args.id);
        } else if (args.name) {
          return Book.find({ name: args.name });
        } else {
          return Book.findOne({});
        }
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: () => Book.find({}),
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
      },
      resolve: (parent, args) => {
        if (args.id) {
          return Author.findById(args.id);
        } else if (args.name) {
          return Author.find({ name: args.name });
        } else {
          return Author.findOne({});
        }
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: () => Author.find({}),
    },
  },
});

const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      resolve: (parent, args) => {
        let author = new Author({
          name: args.name,
          age: args.age,
        });

        return author.save();
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve: (parent, args) => {
        let book = new Book({
          name: args.name,
          genre: args.genre,
          authorId: args.authorId,
        });

        return book.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
