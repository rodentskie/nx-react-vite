import { gql } from 'apollo-server-koa';

export const interfaces = gql`
  type Badge {
    id: String!
    title: String!
    details: String!
    imageUrl: String!
    date: String!
    email: String!
    certificate: Certificate
  }

  type Certificate {
    id: String!
    s3Url: String!
  }
`;
