import ky from "ky";

export type RedditFrontPage = {
  readonly data: {
    readonly children: ReadonlyArray<{
      readonly data: {
        readonly id: string;
        readonly title: string;
      };
    }>;
  };
};

export const getFrontPage = async (): Promise<RedditFrontPage> =>
  ky.get("https://www.reddit.com/.json").json();
