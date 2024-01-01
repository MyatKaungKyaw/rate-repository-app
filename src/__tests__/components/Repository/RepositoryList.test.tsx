import { render, screen } from "@testing-library/react-native";

import { RepositoryListContainer } from "../../../components/Repository/RepositoryList";
import { RepositoryListType } from "../../../graphql/types";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories: RepositoryListType = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              name: "Formik",
              ownerName: "Jared Palmer",
              createdAt: new Date("2023/12/28"),
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              name: "Async library",
              ownerName: "Jared Palmer",
              createdAt: new Date("2023/12/28"),
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      render(<RepositoryListContainer repositories={repositories} />);
      const repositoryItems = screen.getAllByTestId("repositoryItem");
      const [firstRepItem, secRepItem] = repositoryItems;

      //first item
      expect(firstRepItem).toHaveTextContent(
        repositories.edges[0].node.fullName
      );
      expect(firstRepItem).toHaveTextContent(
        repositories.edges[0].node.description
      );
      expect(firstRepItem).toHaveTextContent(
        repositories.edges[0].node.language
      );
      expect(firstRepItem).toHaveTextContent("1.6kForks");
      expect(firstRepItem).toHaveTextContent("21.8kStars");
      expect(firstRepItem).toHaveTextContent("88Rating");
      expect(firstRepItem).toHaveTextContent("3Reviews");

      //second item
      expect(secRepItem).toHaveTextContent(repositories.edges[1].node.fullName);
      expect(secRepItem).toHaveTextContent(
        repositories.edges[1].node.description
      );
      expect(secRepItem).toHaveTextContent(repositories.edges[1].node.language);
      expect(secRepItem).toHaveTextContent("69Forks");
      expect(secRepItem).toHaveTextContent("1.7kStars");
      expect(secRepItem).toHaveTextContent("72Rating");
      expect(secRepItem).toHaveTextContent("3Reviews");
    });
  });
});
