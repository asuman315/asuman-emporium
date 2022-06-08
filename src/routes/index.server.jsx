// import {
//   useShop,
//   useShopQuery,
//   flattenConnection,
//   Link,
//   Seo,
//   CacheDays,
// } from '@shopify/hydrogen';
// import gql from 'graphql-tag';

// import Layout from '../components/Layout.server';
// import FeaturedCollection from '../components/FeaturedCollection';
// import ProductCard from '../components/ProductCard';
 import Welcome from '../components/Welcome.server';
// import {Suspense} from 'react';

// export default function Index({country = {isoCode: 'US'}}) {
//   return (
//     <Layout >
//       <Suspense fallback={null}>
//         <SeoForHomepage />
//       </Suspense>
//       <div className="relative mb-12">
//         <Welcome />
//         <Suspense fallback={<BoxFallback />}>
//           <FeaturedProductsBox country={country} />
//         </Suspense>
//         <Suspense fallback={<BoxFallback />}>
//           <FeaturedCollectionBox country={country} />
//         </Suspense>
//       </div>
//     </Layout>
//   );
// }

// function SeoForHomepage() {
//   const {
//     data: {
//       shop: {title, description},
//     },
//   } = useShopQuery({
//     query: SEO_QUERY,
//     cache: CacheDays(),
//     preload: true,
//   });

//   return (
//     <Seo
//       type="homepage"
//       data={{
//         title,
//         description,
//       }}
//     />
//   );
// }

// function BoxFallback() {
//   return <div className="bg-white p-12 shadow-xl rounded-xl mb-10 h-40"></div>;
// }

// function FeaturedProductsBox({country}) {
//   const {languageCode} = useShop();

//   const {data} = useShopQuery({
//     query: QUERY,
//     variables: {
//       country: country.isoCode,
//       language: languageCode,
//     },
//     preload: true,
//   });

//   const collections = data ? flattenConnection(data.collections) : [];
//   const featuredProductsCollection = collections[0];
//   const featuredProducts = featuredProductsCollection
//     ? flattenConnection(featuredProductsCollection.products)
//     : null;

//   return (
//     <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
//       {featuredProductsCollection ? (
//         <>
//           <div className="flex justify-between items-center mb-8 text-md font-medium">
//             <span className="text-black uppercase">
//               {featuredProductsCollection.title}
//             </span>
//             <span className="hidden md:inline-flex">
//               <Link
//                 to={`/collections/${featuredProductsCollection.handle}`}
//                 className="text-blue-600 hover:underline"
//               >
//                 Shop all
//               </Link>
//             </span>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
//             {featuredProducts.map((product) => (
//               <div key={product.id}>
//                 <ProductCard product={product} />
//               </div>
//             ))}
//           </div>
//           <div className="md:hidden text-center">
//             <Link
//               to={`/collections/${featuredProductsCollection.handle}`}
//               className="text-blue-600"
//             >
//               Shop all
//             </Link>
//           </div>
//         </>
//       ) : null}
//     </div>
//   );
// }

// function FeaturedCollectionBox({country}) {
//   const {languageCode} = useShop();

//   const {data} = useShopQuery({
//     query: QUERY,
//     variables: {
//       country: country.isoCode,
//       language: languageCode,
//     },
//     preload: true,
//   });

//   const collections = data ? flattenConnection(data.collections) : [];
//   const featuredCollection =
//     collections && collections.length > 1 ? collections[1] : collections[0];

//   return <FeaturedCollection collection={featuredCollection} />;
// }

// const SEO_QUERY = gql`
//   query homeShopInfo {
//     shop {
//       description
//     }
//   }
// `;

// const QUERY = gql`
//   query indexContent($country: CountryCode, $language: LanguageCode)
//   @inContext(country: $country, language: $language) {
//     collections(first: 2) {
//       edges {
//         node {
//           handle
//           id
//           title
//           image {
//             id
//             url
//             altText
//             width
//             height
//           }
//           products(first: 5) {
//             edges {
//               node {
//                 handle
//                 id
//                 title
//                 variants(first: 1) {
//                   edges {
//                     node {
//                       id
//                       title
//                       availableForSale
//                       image {
//                         id
//                         url
//                         altText
//                         width
//                         height
//                       }
//                       priceV2 {
//                         currencyCode
//                         amount
//                       }
//                       compareAtPriceV2 {
//                         currencyCode
//                         amount
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

import {
  // The `useShopQuery` hook makes server-only GraphQL queries to the Storefront API.
  useShopQuery,
  // The `flattenConnection` utility takes Shopify storefront relay data
  // and transforms it into a flat array of objects.
  flattenConnection,
  // Import `gql` to parse GraphQL queries.
  
} from '@shopify/hydrogen';
 import gql from 'graphql-tag';
// Import the `Layout` component that defines the structure of the page.
import Layout from '../components/Layout.server';
// Import the `ProductList` component that defines the products to display.
import ProductList from '../components/ProductList';
// Fetch product data from your storefront by passing in a GraphQL query to the
// `useShopQuery` server component.
export default function Index() {
  //fetch products from the storefront
  const {data} = useShopQuery({
    query: QUERY,
  });

  //console.log('This is unconverted data: ', data);

  // Transform Shopify storefront relay data into
  // a flat array of objects.
  const products = flattenConnection(data.products);
  // Return a list of products.
  //console.log('This is converted data: ', products);
  return (
    <Layout>
      <Welcome />
      <ProductList products={products} />
    </Layout>
  );
}
// Define the GraphQL query.
const QUERY = gql`
  query HomeQuery {
    products(first: 10) {
      edges {
        node {
          handle
          id
          media(first: 10) {
            edges {
              node {
                ... on MediaImage {
                  mediaContentType
                  image {
                    id
                    url
                    altText
                    width
                    height
                  }
                }
              }
            }
          }
          metafields(first: 3) {
            edges {
              node {
                id
                type
                namespace
                key
                value
                createdAt
                updatedAt
                description
                reference {
                  __typename
                  ... on MediaImage {
                    id
                    mediaContentType
                    image {
                      id
                      url
                      altText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          priceRange {
            maxVariantPrice {
              currencyCode
              amount
            }
            minVariantPrice {
              currencyCode
              amount
            }
          }
          title
          variants(first: 250) {
            edges {
              node {
                id
                title
                availableForSale
                image {
                  id
                  url
                  altText
                  width
                  height
                }
                priceV2 {
                  currencyCode
                  amount
                }
                compareAtPriceV2 {
                  currencyCode
                  amount
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
        }
      }
    }
  }
`;

//http://localhost:3000/graphiql
