export const latestBookRelease = /* GraphQL */ `
  query {
    books: bookCollection(limit: 1, order: publicationDate_DESC) {
      items {
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
    }
  }
`;
