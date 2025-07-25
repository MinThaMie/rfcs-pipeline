#!/bin/bash

gh api graphql --paginate -f query='query ($endCursor:String) {
  repository(owner: "EmberJS", name: "rfcs") {
    pullRequests(after: $endCursor, first: 100, orderBy:{ field: CREATED_AT, direction: DESC} ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        number
        url
        title
        createdAt
        closed
        closedAt
        merged
        mergedAt
        assignees(first: 5) {
          nodes {
            login
            avatarUrl
          }
        }
        timelineItems(first: 10, itemTypes: [LABELED_EVENT, UNLABELED_EVENT]) {
          nodes {
            ... on LabeledEvent {
              createdAt
              label {
                name
              }
              __typename
            }
            ... on UnlabeledEvent {
              createdAt
              label {
                name
              }
              __typename
            }
          }
        }
      }
    }
  }
}' | jq '.data.repository.pullRequests.nodes[]' | jq --slurp . > public/data.json
