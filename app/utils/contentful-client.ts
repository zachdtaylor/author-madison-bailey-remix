export function contentfulClient(query: string, variables?: any) {
  return fetch(
    "https://graphql.contentful.com/content/v1/spaces/6exbx0zy4oap",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer u2_zse6aykxBOlBCiTpTBsqGAnc2rOb9N0UTk-33Xyg",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  ).then(res => res.json());
}
