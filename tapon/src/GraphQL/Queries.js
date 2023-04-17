import { gql } from "@apollo/client";

export const LOAD_KEGS = gql`
  query {
    kegs {
      id
      name
      active
      image
      beer {
        name
      }
    }
  }
`;

export const LOAD_BEERS = gql`
  query {
    beers {
      name
      id
      description
      active
    }
  }
`;

export const LOAD_BEER = gql`
  query Beer($id: String!) {
    beer(id: $id) {
      id
      name
      alcohol
      flavour
      styleDescription
      subStyle
      subFlavour
      description
      startDate
      endDate
      active
      style
    }
  }
`;

export const LOAD_KEG = gql`
  query Keg($id: String!) {
    keg(id: $id) {
      id
      name
      active
      image
      beer {
        id
        name
        alcohol
        flavour
        styleDescription
        subStyle
        subFlavour
        description
        startDate
        endDate
        active
        style
      }
    }
  }
`;
