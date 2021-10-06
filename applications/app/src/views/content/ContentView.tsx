import type { FunctionComponent } from "react";
import { useQuery } from "react-query";

import { getData } from "../../api/data";

export const ContentView: FunctionComponent = () => {
  const { data } = useQuery("data", getData);

  return (
    <div>
      {data?.data.children.map((child) => (
        <div key={child.data.id}>{child.data.title}</div>
      ))}
    </div>
  );
};
