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
      amazonPurchaseLink
      barnesAndNoblePurchaseLink
      appleBooksPurchaseLink
      googlePlayBooksPurchaseLink
      koboPurchaseLink
    }
  }
  ${bookFragment}
`;

const blogPostFragment = /* GraphQL */ `
  fragment BlogPostData on BlogPost {
    sys {
      id
    }
    title
    postDate
    body {
      json
    }
  }
`;

export const allBlogPosts = /* GraphQL */ `
  query {
    posts: blogPostCollection(order: postDate_DESC) {
      items {
        ...BlogPostData
      }
    }
  }
  ${blogPostFragment}
`;

export const blogPost = /* GraphQL */ `
  query($id: String!) {
    blogPost(id: $id) {
      ...BlogPostData
    }
  }
  ${blogPostFragment}
`;
