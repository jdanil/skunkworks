import { useQuery } from "@tanstack/react-query";
import { type FunctionComponent } from "react";

import { getFrontPage } from "../../api/reddit";
import { Loading } from "../../components/Loading";

export const ContentView: FunctionComponent = () => {
  const { data, isLoading } = useQuery({
    queryFn: getFrontPage,
    queryKey: ["reddit-front-page"],
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div data-testid="content-view">
      {data?.data.children.map((child) => (
        <div key={child.data.id}>{child.data.title}</div>
      ))}
    </div>
  );
};
