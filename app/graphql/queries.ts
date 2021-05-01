const bookFragment = /* GraphQL */ `
  fragment BookData on Book {
    sys {
      id
    }
    title
    description {
      json
    }
    coverArt {
      title
      url
    }
  }
`;

export const latestBookRelease = /* GraphQL */ `
  query {
    books: bookCollection(limit: 1, order: publicationDate_DESC) {
      items {
        ...BookData
      }
    }
  }
  ${bookFragment}
`;

export const allBooks = /* GraphQL */ `
  query {
    books: bookCollection(order: publicationDate_DESC) {
      items {
        ...BookData
      }
    }
  }
  ${bookFragment}
`;

export const book = /* GraphQL */ `
  query($id: String!) {
    book(id: $id) {
      ...BookData
    }
  }
  ${bookFragment}
`;
