import ky from "ky";

export type Data = {
  readonly data: {
    readonly children: ReadonlyArray<{
      readonly data: {
        readonly id: string;
        readonly title: string;
      };
    }>;
  };
};

export const getData = async (): Promise<Data> =>
  ky.get("https://www.reddit.com/.json").json();
