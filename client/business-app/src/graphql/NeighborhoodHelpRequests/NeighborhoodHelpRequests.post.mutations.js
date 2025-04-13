import { gql } from "@apollo/client";

export const CREATE_HELP_REQUEST_POST = gql`
  mutation createHelpRequestPost($input: CreateHelpRequestPostInput!) {
    createHelpRequestPost(input: $input) {
      id
      authorid
      title
      content
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_HELP_REQUEST_POST = gql`
  mutation updateHelpRequestPost(
    $updateHelpRequestPostId: ID!
    $input: UpdateHelpRequestPostInput!
  ) {
    updateHelpRequestPost(id: $updateHelpRequestPostId, input: $input) {
      id
      authorid
      title
      content
      createdAt
      updatedAt
    }
  }
`;
export const DELETE_HELP_REQUEST_POST = gql`
  mutation DeleteHelpRequestPost($deleteHelpRequestPostId: ID!) {
    deleteHelpRequestPost(id: $deleteHelpRequestPostId) {
      message
      success
      error
      deleteObjectId
    }
  }
`;
