import { gql } from "@apollo/client";
import { initializeApollo } from "../../lib/apolloClient";
import Title from "../../components/common/Title";
import { History } from "../../models/histories-query";

const GET_HISTORY_QUERY = gql`
  query fetchHistoryDetails($id: ID!) {
    history(id: $id) {
      details
      id
      title
      flight {
        links {
          flickr_images
        }
      }
    }
  }
`;

type Props = {
  data: History;
};

export default function PastLaunch({ data }: Props) {
  return (
    <div>
      <div className="md:text-center pt-5">
        <Title text={data.title} />
      </div>
      <p className="lg:text-lg my-5">{data.details}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 pb-10">
        {data.flight.links.flickr_images.map((image) => (
          <a href={image} target="_blank">
            <img
              className="mt-2 sm:mt-4 sm:h-64 sm:w-full sm:object-cover object-center md:pr-4"
              src={image}
              alt={data.title}
              key={image}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(params) {
  const apolloClient = initializeApollo();
  const data = await apolloClient.query({
    variables: { id: params.query.id },
    query: GET_HISTORY_QUERY,
  });
  return { props: { data: data.data.history } };
}
