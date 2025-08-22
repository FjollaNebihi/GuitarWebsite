import { gql } from "@apollo/client";


export const FIND_ALL_BRANDS = gql`
  query FindAllBrands {
    findAllBrands {
      id
      name
      origin
      image
    }
  }
`;


export const FIND_UNIQUE_BRAND = gql`
  query FindUniqueBrand($id: ID!) {
    findUniqueBrand(id: $id) {
      id
      name
      origin
      image
      categories
      models {
        id
        name
        image
        price
      }
    }
  }
`;


export const FIND_BRAND_MODELS = gql`
  query FindBrandModels($id: ID!, $sortBy: sortBy!) {
    findBrandModels(id: $id, sortBy: $sortBy) {
      id
      name
      type
      image
      description
      price
      specs {
        material
      }
      musicians {
        id
        name
      }
    }
  }
`;


export const FIND_UNIQUE_MODEL = gql`
  query FindUniqueModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        material
      }
      musicians {
        id
        name
      }
    }
  }
`;

export const SEARCH_MODELS = gql`
  query SearchModels($brandId: String!, $name: String!) {
    searchModels(brandId: $brandId, name: $name) {
      id
      name
      type
      image
      description
      price
      specs {
        material
      }
      musicians {
        id
        name
      }
    }
  }
    

  `
;
