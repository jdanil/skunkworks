import type { FunctionComponent } from "react";
import { useQuery } from "react-query";

import { getFrontPage } from "../../api/reddit";
import { Loading } from "../../components/Loading";

export const ContentView: FunctionComponent = () => {
  const { data, isLoading } = useQuery("reddit-front-page", getFrontPage);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data?.data.children.map((child) => (
        <div key={child.data.id}>{child.data.title}</div>
      ))}
    </div>
  );
};
