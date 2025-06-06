import { gql } from '@apollo/client';

export const CREATE_BUSINESS_PROFILE = gql`
  mutation CreateBusinessProfile($input: BusinessProfileInput!) {
    createBusinessProfile(input: $input) {
      id
      businessName
      description
      businessTags
      location {
        id
        city
        postalCode
        address
      }
    }
  }
`;

export const UPDATE_BUSINESS_PROFILE = gql`
  mutation UpdateBusinessProfile($id: ID!, $input: BusinessProfileUpdateInput!) {
    updateBusinessProfile(id: $id, input: $input) {
      id
      businessName
      description
      businessTags
    }
  }
`;

export const CREATE_OFFER = gql`
  mutation CreateOffer($input: OfferInput!) {
    createOffer(input: $input) {
      id
      title
      content
      images
      expiresAt
      isActive
    }
  }
`;

export const UPDATE_OFFER = gql`
  mutation UpdateOffer($id: ID!, $input: OfferUpdateInput!) {
    updateOffer(id: $id, input: $input) {
      id
      title
      content
      images
      expiresAt
      isActive
    }
  }
`;

export const DELETE_OFFER = gql`
  mutation DeleteOffer($id: ID!) {
    deleteOffer(id: $id)
  }
`;

export const RESPOND_TO_REVIEW = gql`
  mutation RespondToReview($reviewId: ID!, $response: String!) {
    respondToReview(reviewId: $reviewId, response: $response) {
      id
      responses
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation CreateEvent($input: EventInput!) {
    createEvent(input: $input) {
      id
      title
      description
      startDate
      endDate
      tags
      location {
        id
        city
        postalCode
        address
      }
    }
  }
`;

export const CANCEL_EVENT = gql`
  mutation CancelEvent($id: ID!) {
    cancelEvent(id: $id) {
      id
      isCancelled
    }
  }
`;

export const SUGGEST_VOLUNTEERS = gql`
  mutation SuggestVolunteers($eventId: ID!) {
    suggestVolunteersForEvent(eventId: $eventId) {
      id
      username
    }
  }
`;

// bulletinboard
export const CREATE_POST = gql`
  mutation CreatePost($input: PostInput!) {
    createPost(input: $input) {
      id
      title
      content
      createdAt
      author {
        id
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($input: CommentInput!) {
    addComment(input: $input) {
      id
      text
      createdAt
      author {
        id
      }
      postId
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

// Marketplace
export const CREATE_REVIEW = gql`
  mutation CreateReview($input: ReviewInput!) {
    createReview(input: $input) {
      id
      title
      content
      rating
      createdAt
      author {
        id
      }
      responses
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation UpdateReview($reviewId: ID!, $input: ReviewUpdateInput!) {
    updateReview(id: $reviewId, input: $input) {
      id
      title
      content
      rating
      createdAt
      author {
        id
      }
      responses
    }
  }
`;