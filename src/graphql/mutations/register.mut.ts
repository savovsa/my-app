import gql from "graphql-tag";

export default gql`
  mutation register($user: RegisterInputUser!) {
    register(user: $user)
  }
`;
