const { gql } = require("apollo-server");

const typeDefs = gql`
  #the schema goes here(schema amra ekhane define korbo)
  #The language we'll use to write the schema is GraphQL's schema definition language (SDL).
  #--------------------------------------------------------------------------------------------------------
  #Because the schema sits directly between your application clients and your underlying data services,
  #front-end and back-end teams should collaborate on its structure. When you develop your own data graph,
  #practice schema-first development and agree on a schema before you begin implementing your API.
  #--------------------------------------------------------------------------------------------------------

  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
  #An exclamation point (!) after a declared field's type means "this field's value can never be null."

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]! #If a declared field's type is in [Square Brackets], it's an array of the specified type.
    #If an array has an exclamation point after it, the array cannot be null, but it can be empty.
    token: String
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): User
  }

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
