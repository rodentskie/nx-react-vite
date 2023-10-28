import { gql } from 'graphql-request';

export const BADGES_QUERY = gql`
  query {
    getBadges {
      id
      title
      details
      imageUrl
      date
      email
      certificate {
        id
        s3Url
      }
    }
  }
`;
