import { ApolloClient, gql } from "@apollo/client";
import { cache } from "./cache";

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql",
});

client
  .query({
    query: gql`
      query TestQuery {
        launch(id: 69) {
          id
          mission {
            name
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));
