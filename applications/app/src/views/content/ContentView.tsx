import type { FunctionComponent } from "react";
import { useQuery } from "react-query";

import { getFrontPage } from "../../api/reddit";

export const ContentView: FunctionComponent = () => {
  const { data } = useQuery("reddit-front-page", getFrontPage);

  return (
    <div>
      {data?.data.children.map((child) => (
        <div key={child.data.id}>{child.data.title}</div>
      ))}
    </div>
  );
};
