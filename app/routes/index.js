import Route from '@ember/routing/route';

const rfcs = [
  {
    number: 1022,
    title:
      'Advance RFC #1006 `"Deprecate (action) template helper and {{action}} modifier."` to Stage Released',
    createdAt: '2024-04-26T18:19:36Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-04-26T18:19:37Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-26T18:19:37Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1021,
    title:
      'Advance RFC #0984 `"Treat Safari as an Evergreen Browser"` to Stage Released',
    createdAt: '2024-04-26T18:12:30Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-04-26T18:12:31Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-26T18:12:31Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1020,
    title:
      'Advance RFC #0848 `"Deprecate array prototype extensions"` to Stage Ready for Release',
    createdAt: '2024-04-24T15:46:49Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-04-24T15:46:49Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-24T15:46:49Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1019,
    title:
      'Advance RFC #0831 `"Standardize use of scripts in package.json for common tasks"` to Stage Recommended',
    createdAt: '2024-04-19T18:14:24Z',
    closed: true,
    closedAt: '2024-04-26T18:12:57Z',
    merged: true,
    mergedAt: '2024-04-26T18:12:57Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-04-19T18:14:25Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-19T18:14:25Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-19T18:15:44Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1018,
    title:
      'Advance RFC #0831 `"Standardize use of scripts in package.json for common tasks"` to Stage Released',
    createdAt: '2024-04-17T14:11:10Z',
    closed: true,
    closedAt: '2024-04-19T18:13:44Z',
    merged: true,
    mergedAt: '2024-04-19T18:13:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-04-17T14:11:11Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-17T14:11:11Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1017,
    title: 'Propose Themes for ember-qunit',
    createdAt: '2024-03-28T14:54:59Z',
    closed: true,
    closedAt: '2024-04-10T14:51:26Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-28T14:55:21Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1016,
    title: 'Remove support for this.attrs',
    createdAt: '2024-03-27T21:32:56Z',
    closed: true,
    closedAt: '2024-03-29T22:55:13Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-27T21:33:10Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1015,
    title:
      'Advance RFC #1003 `"Deprecate `import Ember from \'ember\';"` to Stage Ready for Release',
    createdAt: '2024-03-22T18:12:58Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-22T18:12:58Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-22T18:12:58Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1014,
    title: 'Introduce "Ember Language Tooling Roadmap" RFC',
    createdAt: '2024-03-17T01:26:28Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-17T01:26:43Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-22T18:20:02Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-03-22T18:20:02Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1013,
    title:
      'Advance RFC #1001 `"Deprecate named inject export from @ember/service"` to Stage Ready for Release',
    createdAt: '2024-03-08T20:07:06Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-08T20:07:07Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-08T20:07:07Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1012,
    title:
      'Advance RFC #0995 `"Deprecate non-co-located components."` to Stage Ready for Release',
    createdAt: '2024-03-08T20:06:04Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-08T20:06:05Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-08T20:06:05Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-26T18:33:21Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1011,
    title:
      'Advance RFC #1006 `"Deprecate (action) template helper and {{action}} modifier."` to Stage Ready for Release',
    createdAt: '2024-03-08T20:03:52Z',
    closed: true,
    closedAt: '2024-04-26T18:18:43Z',
    merged: true,
    mergedAt: '2024-04-26T18:18:43Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-03-08T20:03:53Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-08T20:03:53Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-17T14:29:51Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1010,
    title:
      'Update 0774-implicit-record-route-loading to include optional feature',
    createdAt: '2024-02-28T15:20:31Z',
    closed: true,
    closedAt: '2024-02-28T15:21:46Z',
    merged: true,
    mergedAt: '2024-02-28T15:21:46Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 1009,
    title: 'Make deprecation workflow built in',
    createdAt: '2024-02-22T17:46:40Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-02-22T17:46:57Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-01T19:12:04Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-03-01T19:12:04Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1007,
    title:
      'maybe, maybe not better on syntax - this RFC accidentally found some decision trees around when to use {{on}} vs on*',
    createdAt: '2024-02-16T23:19:00Z',
    closed: true,
    closedAt: '2024-02-23T19:09:35Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-02-16T23:19:17Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1006,
    title: 'Deprecate the (action) template helper and modifier',
    createdAt: '2024-02-13T20:42:58Z',
    closed: true,
    closedAt: '2024-03-08T20:03:07Z',
    merged: true,
    mergedAt: '2024-03-08T20:03:07Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-02-13T20:43:16Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-23T19:46:57Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-23T19:47:32Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-02-23T19:51:22Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1005,
    title:
      'Advance RFC #0984 `"Treat Safari as an Evergreen Browser"` to Stage Ready for Release',
    createdAt: '2024-02-07T15:17:13Z',
    closed: true,
    closedAt: '2024-04-26T18:11:44Z',
    merged: true,
    mergedAt: '2024-04-26T18:11:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-02-07T15:17:14Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-07T15:17:14Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-19T18:19:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1004,
    title:
      'Advance RFC #0726 `"DOM Element descriptor interface for test helpers"` to Stage Released',
    createdAt: '2024-01-26T15:12:05Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-01-26T15:12:06Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-26T15:12:06Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1003,
    title: "Deprecate `import Ember from 'ember'`",
    createdAt: '2024-01-22T19:56:02Z',
    closed: true,
    closedAt: '2024-03-22T18:12:08Z',
    merged: true,
    mergedAt: '2024-03-22T18:12:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2024-01-22T19:56:18Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-16T19:55:05Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-02-16T19:55:05Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-08T19:54:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1002,
    title:
      'Update RFC template and deprecation RFC template and Ready for Release, Recommended PR templates',
    createdAt: '2024-01-12T16:24:48Z',
    closed: true,
    closedAt: '2024-01-19T19:32:35Z',
    merged: true,
    mergedAt: '2024-01-19T19:32:35Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 1001,
    title: 'Deprecate named `inject` export from `@ember/service`',
    createdAt: '2023-12-26T18:17:20Z',
    closed: true,
    closedAt: '2024-03-08T20:06:28Z',
    merged: true,
    mergedAt: '2024-03-08T20:06:28Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-26T18:17:35Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:59:37Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:48Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-03-01T20:01:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 1000,
    title: 'Make array built-in in strict-mode',
    createdAt: '2023-12-22T19:04:19Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-22T19:04:34Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:59:09Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:47Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 999,
    title: 'Make hash built-in in strict-mode',
    createdAt: '2023-12-22T19:03:34Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-22T19:03:57Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:59:02Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 998,
    title: 'Make fn built-in in strict-mode',
    createdAt: '2023-12-22T19:02:22Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-22T19:02:38Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:59:15Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 997,
    title: 'Make the `on` modifier built-in in strict-mode',
    createdAt: '2023-12-22T19:01:32Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-22T19:01:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:58:56Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:45Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 996,
    title: 'Interactive CLI by default',
    createdAt: '2023-12-21T21:57:52Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-21T21:58:11Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T20:00:08Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:44Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 995,
    title: 'Deprecate non-colocated components.',
    createdAt: '2023-12-15T19:38:46Z',
    closed: true,
    closedAt: '2024-03-08T20:05:24Z',
    merged: true,
    mergedAt: '2024-03-08T20:05:24Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-15T19:39:10Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-23T19:46:23Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-23T19:47:21Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-03-01T19:17:19Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 994,
    title:
      'Advance RFC #0918 `"Deprecate Support for Travis CI"` to Stage Recommended',
    createdAt: '2023-12-15T19:21:13Z',
    closed: true,
    closedAt: '2024-01-05T19:07:30Z',
    merged: true,
    mergedAt: '2024-01-05T19:07:30Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-15T19:21:14Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-15T19:21:14Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-15T19:22:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 993,
    title:
      'Let the app define Testem middleware in testem.js rather than implicitly import middleware only from v1 addons',
    createdAt: '2023-12-06T11:13:37Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-06T11:13:56Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-08T19:36:57Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-02-09T20:03:43Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 992,
    title:
      'Advance RFC #0726 `"DOM Element descriptor interface for test helpers"` to Stage Ready for Release',
    createdAt: '2023-12-01T19:29:56Z',
    closed: true,
    closedAt: '2024-01-26T15:11:19Z',
    merged: true,
    mergedAt: '2024-01-26T15:11:19Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-12-01T19:29:56Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-01T19:29:57Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-19T19:38:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 991,
    title:
      'Advance RFC #0785 `"Introduce new test helpers for rendering (and re-rendering) that obviate the need for get and set"` to Stage Recommended',
    createdAt: '2023-11-29T19:55:37Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-11-29T19:55:38Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-29T19:55:38Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 990,
    title:
      'Add a default PR template that will be used for newly opened PRs / RFC',
    createdAt: '2023-11-10T22:05:01Z',
    closed: true,
    closedAt: '2023-11-11T06:18:02Z',
    merged: true,
    mergedAt: '2023-11-11T06:18:02Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 989,
    title: 'Add a Rendered link to the templates of advancing RFC PRs',
    createdAt: '2023-11-10T21:36:36Z',
    closed: true,
    closedAt: '2023-11-12T16:34:41Z',
    merged: true,
    mergedAt: '2023-11-12T16:34:41Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 988,
    title:
      'Advance RFC #0939 `"Introduce a Wildcard Module Import API"` to Stage Ready for Release',
    createdAt: '2023-11-10T15:11:09Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-11-10T15:11:11Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-10T15:11:11Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 986,
    title: 'Unify ember and glimmer(vm) repos',
    createdAt: '2023-11-07T15:06:29Z',
    closed: true,
    closedAt: '2023-12-27T16:08:20Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-11-07T15:06:50Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 985,
    title: 'v2 addon by default',
    createdAt: '2023-11-02T20:05:06Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-11-02T20:05:27Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-12T18:28:24Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-12T18:28:29Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 984,
    title: 'Amend browser support policy for Safari',
    createdAt: '2023-11-02T19:39:32Z',
    closed: true,
    closedAt: '2024-02-07T15:16:23Z',
    merged: true,
    mergedAt: '2024-02-07T15:16:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-11-02T19:39:51Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-03T14:42:30Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-03T14:42:33Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-02-02T19:37:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 983,
    title: 'Advance RFC #0763 `"Asset Import Spec"` to Stage Ready for Release',
    createdAt: '2023-10-27T18:17:07Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-10-27T18:17:08Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-27T18:17:08Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 981,
    title: 'Update runtime details for #931',
    createdAt: '2023-10-24T17:28:28Z',
    closed: true,
    closedAt: '2023-10-27T18:42:57Z',
    merged: true,
    mergedAt: '2023-10-27T18:42:57Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 980,
    title: ' deprecate controller mixin',
    createdAt: '2023-10-17T13:04:07Z',
    closed: true,
    closedAt: '2023-11-03T14:48:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-10-17T13:04:30Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 979,
    title:
      'Advance RFC #0743 `"EmberData | Deprecate Legacy Imports"` to Stage Recommended',
    createdAt: '2023-10-13T18:09:05Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-10-13T18:09:06Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-13T18:09:06Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 978,
    title:
      'Advance RFC #0918 `"Deprecate Support for Travis CI"` to Stage Released',
    createdAt: '2023-10-13T18:05:38Z',
    closed: true,
    closedAt: '2023-12-15T19:20:29Z',
    merged: true,
    mergedAt: '2023-12-15T19:20:29Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-10-13T18:05:39Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-13T18:05:39Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 977,
    title: 'V2 App',
    createdAt: '2023-10-06T17:12:27Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-10-06T17:12:49Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-12T18:28:38Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-04-12T18:28:38Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 976,
    title: 'Enable Glint by Default',
    createdAt: '2023-09-29T17:34:19Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-29T17:34:37Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-27T18:14:36Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-02T16:35:03Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 975,
    title: 'Add context API',
    createdAt: '2023-09-28T09:14:10Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-28T09:14:31Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-15T18:54:39Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-03-15T18:54:44Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 973,
    title: 'Update asset importing spec to use `import.meta.resolve`',
    createdAt: '2023-09-26T14:50:10Z',
    closed: true,
    closedAt: '2023-10-13T17:59:30Z',
    merged: true,
    mergedAt: '2023-10-13T17:59:30Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 972,
    title:
      'Advance RFC #0740 `"EmberData | Deprecate Non Strict Types"` to Stage Recommended',
    createdAt: '2023-09-24T10:20:40Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-24T10:20:41Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-24T10:20:41Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-13T18:04:05Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 971,
    title: 'Advance RFC #0907 `"pnpm support"` to Stage Recommended',
    createdAt: '2023-09-22T19:59:09Z',
    closed: true,
    closedAt: '2023-10-06T14:10:51Z',
    merged: true,
    mergedAt: '2023-10-06T14:10:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-22T19:59:10Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T19:59:10Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-29T18:13:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 970,
    title:
      'Advance RFC #0774 `"Deprecate Implicit Record Loading in Routes"` to Stage Recommended',
    createdAt: '2023-09-22T19:16:12Z',
    closed: true,
    closedAt: '2024-04-05T18:21:06Z',
    merged: true,
    mergedAt: '2024-04-05T18:21:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-22T19:16:13Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T19:16:13Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-29T18:10:51Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-06T18:25:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2024-03-29T18:11:15Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 969,
    title:
      'Advance RFC #0743 `"EmberData | Deprecate Legacy Imports"` to Stage Released',
    createdAt: '2023-09-22T18:43:19Z',
    closed: true,
    closedAt: '2023-10-13T18:08:16Z',
    merged: true,
    mergedAt: '2023-10-13T18:08:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-22T18:43:20Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:43:20Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-13T18:04:04Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 968,
    title: 'Fix title of RFC',
    createdAt: '2023-09-22T18:26:10Z',
    closed: true,
    closedAt: '2023-09-23T01:39:07Z',
    merged: true,
    mergedAt: '2023-09-23T01:39:07Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 967,
    title:
      'Advance RFC #0740 `"EmberData | Deprecate Non Strict Types"` to Stage Released',
    createdAt: '2023-09-22T18:20:32Z',
    closed: true,
    closedAt: '2023-09-24T10:19:45Z',
    merged: true,
    mergedAt: '2023-09-24T10:19:45Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-22T18:20:33Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:20:33Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:42:47Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 966,
    title: 'Remove ember-cli-dependency-checker',
    createdAt: '2023-09-22T16:16:55Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-22T16:17:12Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 965,
    title:
      "Reactivity: an early draft of *everything* we've learned since Octane",
    createdAt: '2023-09-21T04:23:39Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-21T04:23:56Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 964,
    title: 'EmberData | deprecate legacy finder support',
    createdAt: '2023-09-19T05:14:28Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-19T05:14:28Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-19T05:14:28Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-19T19:08:49Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:39:06Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:39:06Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 963,
    title: 'Docs fix - Update README.md with info about the app',
    createdAt: '2023-09-18T15:58:20Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 962,
    title: 'Bugfix - release date format',
    createdAt: '2023-09-18T15:52:02Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 961,
    title: 'Bugfix - date format on RFC 831',
    createdAt: '2023-09-18T14:25:07Z',
    closed: true,
    closedAt: '2023-09-18T14:54:53Z',
    merged: true,
    mergedAt: '2023-09-18T14:54:53Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-18T14:25:07Z',
          label: {
            name: 'bug',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 960,
    title: 'Advance RFC #0858 `"Deprecate ember-mocha"` to Stage Recommended',
    createdAt: '2023-09-15T19:09:29Z',
    closed: true,
    closedAt: '2023-10-13T18:05:51Z',
    merged: true,
    mergedAt: '2023-10-13T18:05:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-15T19:09:29Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-15T19:09:30Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-06T14:23:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 959,
    title:
      'Advance RFC #0831 `Standardize use of scripts in package.json for common tasks` to Stage Ready for Release',
    createdAt: '2023-09-15T18:58:04Z',
    closed: true,
    closedAt: '2024-04-17T14:10:28Z',
    merged: true,
    mergedAt: '2024-04-17T14:10:27Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-15T18:58:05Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-15T18:58:05Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:15:43Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-04-10T14:29:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 958,
    title:
      'Update automation to fix spurious "more than one RFC added or modified"',
    createdAt: '2023-09-13T21:42:21Z',
    closed: true,
    closedAt: '2023-09-14T03:14:01Z',
    merged: true,
    mergedAt: '2023-09-14T03:14:01Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 957,
    title: 'Render Aware Scheduler Interface',
    createdAt: '2023-09-09T21:32:21Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-09T21:32:21Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:21Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:21Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:21Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:21Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:22Z',
          label: {
            name: 'T-fastboot',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:22Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:22Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:22Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-09T21:32:39Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 956,
    title: 'Advance RFC #0858 `"Deprecate ember-mocha"` to Stage Released',
    createdAt: '2023-09-08T18:33:29Z',
    closed: true,
    closedAt: '2023-09-15T19:08:43Z',
    merged: true,
    mergedAt: '2023-09-15T19:08:43Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-08T18:33:30Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-08T18:33:30Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 955,
    title:
      'Advance RFC #0774 `"Deprecate Implicit Record Loading in Routes"` to Stage Released',
    createdAt: '2023-09-01T14:09:03Z',
    closed: true,
    closedAt: '2023-09-22T19:15:17Z',
    merged: true,
    mergedAt: '2023-09-22T19:15:17Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-01T14:09:04Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-01T14:09:04Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 954,
    title:
      'Advance RFC #0918 `"Deprecate Support for Travis CI"` to Stage Ready for Release',
    createdAt: '2023-09-01T14:06:46Z',
    closed: true,
    closedAt: '2023-10-13T18:04:46Z',
    merged: true,
    mergedAt: '2023-10-13T18:04:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-09-01T14:06:47Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-01T14:06:47Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-06T14:34:33Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 953,
    title:
      'Advance RFC #0800 `"TypeScript Adoption Plan"` to Stage Recommended',
    createdAt: '2023-08-24T18:22:36Z',
    closed: true,
    closedAt: '2023-09-15T19:05:25Z',
    merged: true,
    mergedAt: '2023-09-15T19:05:25Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T18:22:37Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:22:37Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:30:35Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-07T16:18:07Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 952,
    title:
      'Advance RFC #0724 `"Official TypeScript Support"` to Stage Recommended',
    createdAt: '2023-08-24T18:20:49Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T18:20:50Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:20:50Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:21:28Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 951,
    title:
      'Advance RFC #0730 `"Semantic Versioning for TypeScript Types"` to Stage Recommended',
    createdAt: '2023-08-24T18:06:09Z',
    closed: true,
    closedAt: '2023-09-15T19:02:00Z',
    merged: true,
    mergedAt: '2023-09-15T19:02:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T18:06:10Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:06:10Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:20:35Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-07T16:22:30Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 950,
    title: 'Advance RFC #0800 `"TypeScript Adoption Plan"` to Stage Released',
    createdAt: '2023-08-24T18:03:27Z',
    closed: true,
    closedAt: '2023-08-24T18:21:16Z',
    merged: true,
    mergedAt: '2023-08-24T18:21:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T18:03:28Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:03:28Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:20:40Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 949,
    title:
      'Advance RFC #0730 `"Semantic Versioning for TypeScript Types"` to Stage Released',
    createdAt: '2023-08-24T18:01:16Z',
    closed: true,
    closedAt: '2023-08-24T18:05:14Z',
    merged: true,
    mergedAt: '2023-08-24T18:05:14Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T18:01:16Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:01:16Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 948,
    title:
      'Advance RFC #0724 `"Official TypeScript Support"` to Stage Released',
    createdAt: '2023-08-24T17:47:30Z',
    closed: true,
    closedAt: '2023-08-24T18:19:50Z',
    merged: true,
    mergedAt: '2023-08-24T18:19:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-24T17:47:31Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T17:47:31Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 947,
    title:
      'Advance RFC #0743 `"EmberData | Deprecate Legacy Imports"` to Stage Ready for Release',
    createdAt: '2023-08-21T22:20:27Z',
    closed: true,
    closedAt: '2023-09-22T18:42:28Z',
    merged: true,
    mergedAt: '2023-09-22T18:42:28Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-21T22:20:28Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-21T22:20:28Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-24T18:30:09Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:27:54Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 946,
    title: 'Simplified imports',
    createdAt: '2023-08-18T15:00:52Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-18T15:01:13Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 944,
    title: 'Advance RFC #0907 `"pnpm support"` to Stage Released',
    createdAt: '2023-08-11T14:28:53Z',
    closed: true,
    closedAt: '2023-09-22T19:58:09Z',
    merged: true,
    mergedAt: '2023-09-22T19:58:09Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-11T14:28:54Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-11T14:28:54Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 943,
    title: 'Advance RFC #0812 `"Add tracked-built-ins"` to Stage Recommended',
    createdAt: '2023-08-04T15:09:32Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-08-04T15:09:33Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T15:09:33Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-29T18:24:55Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-20T18:09:22Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 942,
    title:
      'Advance RFC #0860 `"EmberData | Request Service"` to Stage Recommended',
    createdAt: '2023-07-28T17:54:25Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-07-28T17:54:26Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T17:54:26Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:22:30Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:33:26Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 941,
    title: 'Update Stage for RFC 739 to Recommended',
    createdAt: '2023-07-28T17:45:39Z',
    closed: true,
    closedAt: '2023-07-28T17:54:08Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-07-28T17:45:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 939,
    title: 'Introduce import.meta.glob',
    createdAt: '2023-07-26T23:03:04Z',
    closed: true,
    closedAt: '2023-11-10T15:10:13Z',
    merged: true,
    mergedAt: '2023-11-10T15:10:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-07-26T23:03:24Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T15:02:39Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T15:02:45Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-11-03T18:33:47Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 938,
    title: 'Strict ES Module Support',
    createdAt: '2023-07-26T23:02:09Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-07-26T23:02:29Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T15:03:25Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T15:03:32Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 937,
    title: 'Advance RFC #0812 `"Add tracked-built-ins"` to Stage Released',
    createdAt: '2023-07-07T18:14:17Z',
    closed: true,
    closedAt: '2023-08-04T15:08:37Z',
    merged: true,
    mergedAt: '2023-08-04T15:08:37Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-07-07T18:14:18Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-07T18:14:18Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 934,
    title: 'Advance RFC #0811 `"Element Modifiers"` to Stage Recommended',
    createdAt: '2023-06-10T15:07:24Z',
    closed: true,
    closedAt: '2024-01-19T19:27:40Z',
    merged: true,
    mergedAt: '2024-01-19T19:27:40Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-06-10T15:07:25Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-10T15:07:25Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:23:00Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2024-01-12T15:23:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 933,
    title:
      'Advance RFC #0931 `"JS Representation of Template Tag"` to Stage Ready for Release',
    createdAt: '2023-06-09T18:30:04Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-06-09T18:30:05Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-09T18:30:05Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 932,
    title: 'Advance RFC #0907 `"pnpm support"` to Stage Ready for Release',
    createdAt: '2023-06-02T18:53:51Z',
    closed: true,
    closedAt: '2023-08-11T14:28:05Z',
    merged: true,
    mergedAt: '2023-08-11T14:28:05Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-06-02T18:53:52Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-02T18:53:53Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-09T18:55:52Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-11T18:46:31Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-08-04T14:57:42Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 931,
    title: 'JS Representation of Template Tag',
    createdAt: '2023-05-23T14:58:57Z',
    closed: true,
    closedAt: '2023-06-09T18:29:09Z',
    merged: true,
    mergedAt: '2023-06-09T18:29:09Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-05-23T14:59:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-05-31T15:58:58Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-05-31T15:59:20Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-06-02T18:44:58Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-02T18:45:01Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-06-02T18:45:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 930,
    title:
      'Fix code examples & add ember-cli release version in emberjs/rfcs#637',
    createdAt: '2023-04-24T20:26:37Z',
    closed: true,
    closedAt: '2023-04-25T21:10:04Z',
    merged: true,
    mergedAt: '2023-04-25T21:10:04Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 929,
    title: 'Update FCP guidance to include Discord',
    createdAt: '2023-04-19T18:12:48Z',
    closed: true,
    closedAt: '2023-04-19T18:20:31Z',
    merged: true,
    mergedAt: '2023-04-19T18:20:30Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 928,
    title: 'Advance RFC #0811 `"Element Modifiers"` to Stage Released',
    createdAt: '2023-04-07T18:48:36Z',
    closed: true,
    closedAt: '2023-06-10T15:06:02Z',
    merged: true,
    mergedAt: '2023-06-10T15:06:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-07T18:48:38Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-07T18:48:38Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 926,
    title: 'Advance RFC #0854 `"EmberData Cache V2.1"` to Stage Recommended',
    createdAt: '2023-04-05T04:36:44Z',
    closed: true,
    closedAt: '2023-07-28T18:21:17Z',
    merged: true,
    mergedAt: '2023-07-28T18:21:17Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-05T04:36:45Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:36:45Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:37:36Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:09:50Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 925,
    title:
      'Advance RFC #0860 `"EmberData | Request Service"` to Stage Released',
    createdAt: '2023-04-05T04:30:14Z',
    closed: true,
    closedAt: '2023-07-28T17:53:32Z',
    merged: true,
    mergedAt: '2023-07-28T17:53:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-05T04:30:15Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:30:15Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:34:31Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 924,
    title:
      'Advance RFC #0739 `"EmberData | Deprecate Non Strict Relationships"` to Stage Released',
    createdAt: '2023-04-05T04:25:14Z',
    closed: true,
    closedAt: '2023-07-28T18:01:04Z',
    merged: true,
    mergedAt: '2023-07-28T18:01:04Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-05T04:25:15Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:25:15Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:34:30Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 923,
    title:
      'Advance RFC #0854 `"EmberData Cache V2.1"` to Stage Ready for Release',
    createdAt: '2023-04-05T04:13:37Z',
    closed: true,
    closedAt: '2023-04-05T04:35:48Z',
    merged: true,
    mergedAt: '2023-04-05T04:35:48Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-05T04:13:38Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:13:38Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:30:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T04:34:15Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 922,
    title: 'RFC to allow setting dynamic query params in Controllers',
    createdAt: '2023-04-01T01:02:59Z',
    closed: true,
    closedAt: '2023-09-08T18:03:50Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-04-01T01:03:21Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-01T14:42:12Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 920,
    title:
      'Update RFC 496, typos, use correct field name (strict => strictMode)',
    createdAt: '2023-03-28T18:17:31Z',
    closed: true,
    closedAt: '2023-04-07T18:57:13Z',
    merged: true,
    mergedAt: '2023-04-07T18:57:13Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 919,
    title: 'EmberData | updates to rfc#860 - request service',
    createdAt: '2023-03-27T07:22:06Z',
    closed: true,
    closedAt: '2023-04-05T03:41:24Z',
    merged: true,
    mergedAt: '2023-04-05T03:41:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-27T07:22:06Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-27T07:22:37Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 918,
    title: 'Deprecate Support for Travis CI',
    createdAt: '2023-03-25T10:04:50Z',
    closed: true,
    closedAt: '2023-09-01T14:05:40Z',
    merged: true,
    mergedAt: '2023-09-01T14:05:40Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-25T10:04:50Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-25T10:04:50Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-25T10:05:09Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-07T18:59:11Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-04-07T18:59:11Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:46:10Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 916,
    title: 'Miscellaneous frontmatter fixes',
    createdAt: '2023-03-13T21:31:15Z',
    closed: true,
    closedAt: '2023-03-21T13:30:29Z',
    merged: true,
    mergedAt: '2023-03-21T13:30:29Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 915,
    title: 'Advance RFC #0580 `"Destroyables"` to Stage Recommended',
    createdAt: '2023-03-13T21:25:12Z',
    closed: true,
    closedAt: '2023-08-04T14:25:15Z',
    merged: true,
    mergedAt: '2023-08-04T14:25:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T21:25:13Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T21:25:13Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:36:41Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:36:41Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:29:03Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 914,
    title: 'Advance RFC #0566 `"@cached"` to Stage Recommended',
    createdAt: '2023-03-13T21:21:29Z',
    closed: true,
    closedAt: '2023-10-06T14:09:48Z',
    merged: true,
    mergedAt: '2023-10-06T14:09:48Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T21:21:30Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T21:21:30Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:35:30Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:35:30Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-29T18:24:09Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 913,
    title: 'Advance RFC #0631 `"RouterService#refresh"` to Stage Recommended',
    createdAt: '2023-03-13T21:12:14Z',
    closed: true,
    closedAt: '2023-08-04T14:31:59Z',
    merged: true,
    mergedAt: '2023-08-04T14:31:59Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T21:12:16Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T21:12:16Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T19:03:16Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T19:04:11Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-07-28T19:04:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 912,
    title:
      'Advance RFC #0776 `"Author Built-In Blueprints in TypeScript"` to Stage Recommended',
    createdAt: '2023-03-13T19:55:08Z',
    closed: true,
    closedAt: '2023-12-15T19:08:35Z',
    merged: true,
    mergedAt: '2023-12-15T19:08:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T19:55:10Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T19:55:10Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:46:05Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T18:25:14Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-11T18:10:00Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:34:45Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-08T15:53:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 911,
    title:
      'Advance RFC #0776 `"Author Built-In Blueprints in TypeScript"` to Stage Released',
    createdAt: '2023-03-13T19:44:39Z',
    closed: true,
    closedAt: '2023-03-13T19:54:08Z',
    merged: true,
    mergedAt: '2023-03-13T19:54:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T19:44:40Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T19:44:40Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 910,
    title:
      'Advance RFC #0740 `"EmberData | Deprecate Non Strict Types"` to Stage Ready for Release',
    createdAt: '2023-03-13T16:31:51Z',
    closed: true,
    closedAt: '2023-09-22T18:19:31Z',
    merged: true,
    mergedAt: '2023-09-22T18:19:31Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T16:31:53Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T16:31:53Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-14T07:07:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:18:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 909,
    title:
      'Advance RFC #0739 `"EmberData | Deprecate Non Strict Relationships"` to Stage Ready for Release',
    createdAt: '2023-03-13T16:31:51Z',
    closed: true,
    closedAt: '2023-04-05T04:24:17Z',
    merged: true,
    mergedAt: '2023-04-05T04:24:17Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-13T16:31:52Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T16:31:53Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-14T07:07:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T03:48:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 908,
    title:
      'Advance RFC #0858 `"Deprecate ember-mocha"` to Stage Ready for Release',
    createdAt: '2023-03-10T19:54:33Z',
    closed: true,
    closedAt: '2023-09-08T18:32:37Z',
    merged: true,
    mergedAt: '2023-09-08T18:32:37Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-10T19:54:34Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-10T19:54:34Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T14:21:09Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-01T18:21:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 907,
    title: 'Propose pnpm support',
    createdAt: '2023-03-06T19:58:21Z',
    closed: true,
    closedAt: '2023-06-02T18:53:00Z',
    merged: true,
    mergedAt: '2023-06-02T18:53:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-03-06T19:58:41Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T18:40:52Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T18:41:01Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-05-22T15:54:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 903,
    title: 'Add title of RFC to advancement PR titles',
    createdAt: '2023-02-07T21:35:10Z',
    closed: true,
    closedAt: '2023-02-08T18:19:33Z',
    merged: true,
    mergedAt: '2023-02-08T18:19:33Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 902,
    title: 'Revise RFC 0800 with learnings from implementation',
    createdAt: '2023-02-07T14:31:51Z',
    closed: true,
    closedAt: '2023-09-07T16:27:42Z',
    merged: true,
    mergedAt: '2023-09-07T16:27:42Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-02-07T14:31:51Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-07T14:31:51Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:49:00Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 900,
    title:
      'Advance RFC #0774 "Deprecate implicit record loading in Ember Route" to Stage Ready for Release',
    createdAt: '2023-02-03T19:25:43Z',
    closed: true,
    closedAt: '2023-09-01T14:08:03Z',
    merged: true,
    mergedAt: '2023-09-01T14:08:03Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-02-03T19:25:44Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-03T19:25:44Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:26:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 899,
    title: 'Advance RFC #0889 "Deprecate @ember/error" to Stage Recommended',
    createdAt: '2023-01-14T00:18:12Z',
    closed: true,
    closedAt: '2023-03-03T19:20:01Z',
    merged: true,
    mergedAt: '2023-03-03T19:20:01Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-14T00:18:13Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-14T00:18:13Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-17T16:12:21Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 898,
    title:
      'Advance RFC #0236 "Ember.String deprecation RFC" to Stage Recommended',
    createdAt: '2023-01-14T00:02:40Z',
    closed: true,
    closedAt: '2023-04-07T18:40:49Z',
    merged: true,
    mergedAt: '2023-04-07T18:40:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-14T00:02:41Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-14T00:02:41Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-13T21:05:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 897,
    title: 'Advance RFC #0236 to Stage Released',
    createdAt: '2023-01-13T19:32:41Z',
    closed: true,
    closedAt: '2023-01-14T00:01:54Z',
    merged: true,
    mergedAt: '2023-01-14T00:01:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-13T19:32:42Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T19:32:42Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 896,
    title: 'Advance RFC #0649 "Deprecation Staging" to Stage Ready for Release',
    createdAt: '2023-01-12T21:16:31Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-12T21:16:33Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-12T21:16:33Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 895,
    title: 'Advance RFC #0889 to Stage Released',
    createdAt: '2023-01-10T19:09:48Z',
    closed: true,
    closedAt: '2023-01-14T00:17:16Z',
    merged: true,
    mergedAt: '2023-01-14T00:17:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-10T19:09:50Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-10T19:09:50Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 894,
    title: 'Add eslint-plugin-import to ember-cli blueprint',
    createdAt: '2023-01-07T18:58:55Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-07T18:59:14Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-05-26T18:51:17Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-05-26T18:51:17Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T14:25:27Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 893,
    title:
      'Advance RFC #0821 "RFC: public types for Owner, Transition, RouteInfo" to Stage Recommended',
    createdAt: '2023-01-06T20:22:40Z',
    closed: true,
    closedAt: '2023-03-03T19:17:15Z',
    merged: true,
    mergedAt: '2023-03-03T19:17:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-06T20:22:41Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-06T20:22:41Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-17T20:15:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 892,
    title: 'Advance RFC #0236 to Stage Ready for Release',
    createdAt: '2023-01-03T22:57:58Z',
    closed: true,
    closedAt: '2023-01-13T19:31:42Z',
    merged: true,
    mergedAt: '2023-01-13T19:31:42Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-03T22:57:59Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-03T22:57:59Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-06T19:11:28Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 891,
    title: '@ember/string deprecation RFC should not be recommended',
    createdAt: '2023-01-03T22:55:59Z',
    closed: true,
    closedAt: '2023-01-03T22:57:10Z',
    merged: true,
    mergedAt: '2023-01-03T22:57:10Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 890,
    title: 'Advance RFC #0889 to Stage Ready for Release',
    createdAt: '2022-12-29T18:42:55Z',
    closed: true,
    closedAt: '2023-01-10T19:08:35Z',
    merged: true,
    mergedAt: '2023-01-10T19:08:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2023-01-03T22:27:19Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-06T19:13:14Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-06T19:13:14Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 889,
    title: 'Deprecate @ember/error',
    createdAt: '2022-12-15T23:40:58Z',
    closed: true,
    closedAt: '2022-12-29T18:41:59Z',
    merged: true,
    mergedAt: '2022-12-29T18:41:59Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-15T23:41:17Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-15T23:42:03Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-15T23:42:03Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-16T19:19:42Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 888,
    title:
      'Advance RFC #0637 "Facilitate customization of setupTest* functions" to Stage Recommended',
    createdAt: '2022-12-14T23:01:04Z',
    closed: true,
    closedAt: '2023-10-13T18:06:33Z',
    merged: true,
    mergedAt: '2023-10-13T18:06:33Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-14T23:01:05Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-14T23:01:05Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T19:15:14Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-11T18:26:56Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-10-06T14:16:32Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 887,
    title:
      'Discontinue RFC #0790 "Deprecate ajax in favor of fetch in ember-data"',
    createdAt: '2022-12-13T00:45:36Z',
    closed: true,
    closedAt: '2023-08-04T14:33:05Z',
    merged: true,
    mergedAt: '2023-08-04T14:33:05Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-13T00:45:37Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-13T00:45:37Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-14T07:08:53Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:03:17Z',
          label: {
            name: 'S-Discontinued',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:03:23Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-07-28T18:04:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 886,
    title:
      'Advance RFC #0812 "Add tracked-built-ins dependency" to Stage Ready for Release',
    createdAt: '2022-12-13T00:40:00Z',
    closed: true,
    closedAt: '2023-07-07T18:13:22Z',
    merged: true,
    mergedAt: '2023-07-07T18:13:21Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-13T00:40:03Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-13T00:40:03Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T20:11:27Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 885,
    title: 'Advance RFC #0811 "Element Modifiers" to Stage Ready for Release',
    createdAt: '2022-12-13T00:38:17Z',
    closed: true,
    closedAt: '2023-04-07T18:47:41Z',
    merged: true,
    mergedAt: '2023-04-07T18:47:41Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-13T00:38:18Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-13T00:38:19Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 884,
    title: 'Advance RFC #0821 to Stage Released',
    createdAt: '2022-12-13T00:36:25Z',
    closed: true,
    closedAt: '2023-01-06T20:21:40Z',
    merged: true,
    mergedAt: '2023-01-06T20:21:40Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-13T00:36:26Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-13T00:36:26Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 883,
    title: 'RFC: add new timing capabilities to modifier manager',
    createdAt: '2022-12-10T17:11:39Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-20T16:47:39Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T20:55:40Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 881,
    title: 'fix broken link in RFC #226',
    createdAt: '2022-12-06T15:39:54Z',
    closed: true,
    closedAt: '2022-12-06T23:44:23Z',
    merged: true,
    mergedAt: '2022-12-06T23:44:23Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 880,
    title: 'Refine some of the advancement PR templates',
    createdAt: '2022-12-02T22:20:15Z',
    closed: true,
    closedAt: '2022-12-02T22:38:55Z',
    merged: true,
    mergedAt: '2022-12-02T22:38:55Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 879,
    title:
      'Advance RFC #0860 "EmberData | Request Service" to Stage Ready for Release',
    createdAt: '2022-12-02T20:40:24Z',
    closed: true,
    closedAt: '2023-04-05T04:29:26Z',
    merged: true,
    mergedAt: '2023-04-05T04:29:26Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T20:40:25Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:40:25Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-14T07:08:52Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-04-05T03:49:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 878,
    title:
      'Advance RFC #0830 "Evolving Ember\'s Major Version Process" to Stage Ready for Release',
    createdAt: '2022-12-01T15:03:26Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T15:03:27Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-01T15:03:27Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 877,
    title:
      "Bump rfcs-tooling to fix ' null' replacement issue when opening advan…",
    createdAt: '2022-11-30T17:59:04Z',
    closed: true,
    closedAt: '2022-11-30T18:27:06Z',
    merged: true,
    mergedAt: '2022-11-30T18:27:06Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 876,
    title: 'RFC: Support for ES `accessor` Decorators',
    createdAt: '2022-11-29T16:47:34Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-29T16:48:00Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-01T15:05:27Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-01T15:05:27Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:49:23Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 875,
    title:
      'Advance RFC #0730 "Semantic Versioning for TypeScript Types" to Stage Ready for Release',
    createdAt: '2022-11-29T01:50:56Z',
    closed: true,
    closedAt: '2023-08-24T18:00:19Z',
    merged: true,
    mergedAt: '2023-08-24T18:00:19Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-29T01:50:57Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-29T01:50:57Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:46:04Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:34:16Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 874,
    title: 'Advance RFC #0821 to Stage Ready for Release',
    createdAt: '2022-11-29T01:43:49Z',
    closed: true,
    closedAt: '2022-12-13T00:35:30Z',
    merged: true,
    mergedAt: '2022-12-13T00:35:30Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-29T01:43:50Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-29T01:43:50Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:48:46Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 873,
    title:
      'Advance RFC #0776 "Author built-in blueprints in Typescript" to Stage Ready for Release',
    createdAt: '2022-11-28T22:18:37Z',
    closed: true,
    closedAt: '2023-03-13T19:43:43Z',
    merged: true,
    mergedAt: '2023-03-13T19:43:43Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-28T22:18:38Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-28T22:18:38Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 872,
    title: 'Fix typo in RFC 0440',
    createdAt: '2022-11-28T16:09:06Z',
    closed: true,
    closedAt: '2022-11-28T22:18:13Z',
    merged: true,
    mergedAt: '2022-11-28T22:18:13Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 871,
    title:
      'Advance RFC #0779 "First-Class Component Templates" to Stage Ready for Release',
    createdAt: '2022-11-23T21:15:23Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-23T21:15:24Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-23T21:15:24Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:46:03Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 870,
    title: 'Always run new RFC checks so CI can pass',
    createdAt: '2022-11-23T19:57:44Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 869,
    title:
      'Advance RFC #0724 "Official TypeScript support" to Stage Ready for Release',
    createdAt: '2022-11-23T18:33:31Z',
    closed: true,
    closedAt: '2023-08-24T17:46:31Z',
    merged: true,
    mergedAt: '2023-08-24T17:46:31Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-23T18:33:32Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-23T18:33:32Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:46:02Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:34:26Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 868,
    title:
      'Advance RFC #0800 "Typescript Adoption Plan" to Stage Ready for Release',
    createdAt: '2022-11-23T18:25:31Z',
    closed: true,
    closedAt: '2023-08-24T18:02:35Z',
    merged: true,
    mergedAt: '2023-08-24T18:02:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-23T18:25:32Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-23T18:25:32Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:46:00Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-18T18:34:35Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 867,
    title: 'Advancement workflow docs',
    createdAt: '2022-11-23T18:22:51Z',
    closed: true,
    closedAt: '2022-11-23T23:15:00Z',
    merged: true,
    mergedAt: '2022-11-23T23:15:00Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 866,
    title: 'Advance RFC #0756 to Stage Recommended',
    createdAt: '2022-11-23T17:10:08Z',
    closed: true,
    closedAt: '2023-02-03T19:13:51Z',
    merged: true,
    mergedAt: '2023-02-03T19:13:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-23T17:10:09Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-23T17:10:09Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:16:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 865,
    title: 'Advance RFC #0659 "unique-id helper" to Stage Recommended',
    createdAt: '2022-11-23T17:09:48Z',
    closed: true,
    closedAt: '2023-12-15T19:09:46Z',
    merged: true,
    mergedAt: '2023-12-15T19:09:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-23T17:09:50Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-23T17:09:50Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-04T14:42:55Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-08T15:15:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 864,
    title: 'Deprecate Ember.A',
    createdAt: '2022-11-22T23:15:20Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-22T23:28:30Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:50:36Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:50:36Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 863,
    title: 'Advance RFC #0617 "RFC Stages" to Stage Recommended',
    createdAt: '2022-11-22T19:47:54Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-22T19:47:55Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-22T19:47:55Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 862,
    title: 'Advance RFC #0617 to Stage Released',
    createdAt: '2022-11-22T19:25:18Z',
    closed: true,
    closedAt: '2022-11-22T19:47:10Z',
    merged: true,
    mergedAt: '2022-11-22T19:47:10Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-22T19:25:20Z',
          label: {
            name: 'S-Released',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-22T19:25:20Z',
          label: {
            name: 'RFC Advancement',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 861,
    title: 'Update Glimmer Template Truthiness Semantics',
    createdAt: '2022-11-16T15:37:06Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-16T16:00:24Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-16T16:00:24Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-16T16:00:24Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-16T16:00:24Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:58:55Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:58:56Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 860,
    title: 'EmberData | Request Service',
    createdAt: '2022-11-11T02:06:40Z',
    closed: true,
    closedAt: '2022-12-02T20:39:32Z',
    merged: true,
    mergedAt: '2022-12-02T20:39:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-11T02:06:40Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-24T05:40:45Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-24T05:40:45Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 859,
    title: 'Fix order of items in RFC 0821',
    createdAt: '2022-11-09T00:31:06Z',
    closed: true,
    closedAt: '2022-11-09T00:33:43Z',
    merged: true,
    mergedAt: '2022-11-09T00:33:43Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 858,
    title: 'Deprecate `ember-mocha`',
    createdAt: '2022-11-08T19:27:18Z',
    closed: true,
    closedAt: '2023-03-10T19:53:37Z',
    merged: true,
    mergedAt: '2023-03-10T19:53:37Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-11-08T19:27:37Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-08T19:27:37Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-08T19:27:37Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:29Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:45:34Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:45:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:45:34Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:46:32Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-03-03T19:05:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 856,
    title: 'Default workspace settings of code editors',
    createdAt: '2022-10-08T10:39:56Z',
    closed: true,
    closedAt: '2022-10-10T17:47:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-10-09T06:11:30Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 854,
    title: 'EmberData | Cache v2.1',
    createdAt: '2022-09-24T04:58:45Z',
    closed: true,
    closedAt: '2023-04-05T04:12:33Z',
    merged: true,
    mergedAt: '2023-04-05T04:12:33Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-09-24T04:58:45Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-24T05:36:16Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-24T05:36:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-24T05:39:52Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-03-27T06:42:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 853,
    title: 'Amend RFC 0821: add Resolver public type',
    createdAt: '2022-09-22T13:28:37Z',
    closed: true,
    closedAt: '2022-11-02T18:59:49Z',
    merged: true,
    mergedAt: '2022-11-02T18:59:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-09-22T13:28:37Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-09-22T13:28:37Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-09-30T22:48:47Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 852,
    title: 'Fix metadata for 0830',
    createdAt: '2022-09-06T20:46:17Z',
    closed: true,
    closedAt: '2022-09-06T20:55:52Z',
    merged: true,
    mergedAt: '2022-09-06T20:55:52Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 851,
    title: 'Fix frontmatter for two RFCs',
    createdAt: '2022-09-01T17:05:19Z',
    closed: true,
    closedAt: '2022-09-01T21:06:45Z',
    merged: true,
    mergedAt: '2022-09-01T21:06:45Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 850,
    title: 'Fix RFC header',
    createdAt: '2022-08-31T22:38:03Z',
    closed: true,
    closedAt: '2022-08-31T22:41:44Z',
    merged: true,
    mergedAt: '2022-08-31T22:41:44Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 849,
    title: 'data: updates to the polymorphic relationships rfc',
    createdAt: '2022-08-30T23:31:52Z',
    closed: true,
    closedAt: '2022-09-13T00:17:51Z',
    merged: true,
    mergedAt: '2022-09-13T00:17:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-30T23:31:52Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-30T23:31:52Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 848,
    title: 'RFC: Deprecate array prototype extensions',
    createdAt: '2022-08-30T18:02:40Z',
    closed: true,
    closedAt: '2022-09-30T21:37:21Z',
    merged: true,
    mergedAt: '2022-09-30T21:37:21Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-30T18:17:04Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-30T18:17:26Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-30T18:17:26Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-09-03T06:38:35Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-09-09T18:25:54Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 847,
    title:
      'Deprecate support for `ember-cli-qunit` and `ember-cli-mocha` when generating test blueprints',
    createdAt: '2022-08-26T19:37:43Z',
    closed: true,
    closedAt: '2022-09-09T18:57:35Z',
    merged: true,
    mergedAt: '2022-09-09T18:57:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-28T17:05:14Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-28T17:05:14Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-28T17:05:49Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-28T17:05:49Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-31T17:36:18Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 846,
    title: 'feat: deprecate proxies in ember-data',
    createdAt: '2022-08-18T21:09:52Z',
    closed: true,
    closedAt: '2022-08-31T22:28:44Z',
    merged: true,
    mergedAt: '2022-08-31T22:28:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-18T21:09:52Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-18T21:09:52Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-24T18:48:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 844,
    title:
      'Add a workflow to open a PR to the next stage when the stage of an RFC has been updated',
    createdAt: '2022-08-11T21:11:24Z',
    closed: true,
    closedAt: '2022-11-22T19:18:07Z',
    merged: true,
    mergedAt: '2022-11-22T19:18:07Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 843,
    title: 'Test automation',
    createdAt: '2022-08-09T17:11:07Z',
    closed: true,
    closedAt: '2022-09-09T18:24:07Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-09T17:13:11Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-09T19:17:07Z',
          label: {
            name: 'S-Accepted',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-09T19:17:44Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-08-09T19:17:44Z',
          label: {
            name: 'S-Accepted',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-08-09T19:17:44Z',
          label: {
            name: 'S-Recommended',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 842,
    title: 'Automation',
    createdAt: '2022-08-09T17:09:35Z',
    closed: true,
    closedAt: '2022-08-19T21:10:36Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 841,
    title: 'update rfc-tooling to allow null for release-date',
    createdAt: '2022-08-09T15:56:53Z',
    closed: true,
    closedAt: '2022-08-09T16:18:26Z',
    merged: true,
    mergedAt: '2022-08-09T16:18:26Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 840,
    title: 'fix invalid data issues with FIXMEs',
    createdAt: '2022-08-09T11:55:58Z',
    closed: true,
    closedAt: '2022-08-09T14:07:23Z',
    merged: true,
    mergedAt: '2022-08-09T14:07:23Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 839,
    title: 'Update deprecation template frontmatter',
    createdAt: '2022-08-08T21:24:30Z',
    closed: true,
    closedAt: '2022-08-08T21:27:07Z',
    merged: true,
    mergedAt: '2022-08-08T21:27:07Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 838,
    title: 'Move stage to top of frontmatter',
    createdAt: '2022-08-08T21:22:30Z',
    closed: true,
    closedAt: '2022-08-08T21:25:27Z',
    merged: true,
    mergedAt: '2022-08-08T21:25:27Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 837,
    title:
      'Add missing frontmatter, including stages - but this time with reformatting! ',
    createdAt: '2022-08-06T00:02:09Z',
    closed: true,
    closedAt: '2022-08-08T21:35:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 836,
    title: 'Advance RFC #0617 to Stage Ready for Release',
    createdAt: '2022-08-03T21:29:11Z',
    closed: true,
    closedAt: '2022-11-22T19:24:27Z',
    merged: true,
    mergedAt: '2022-11-22T19:24:27Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-31T19:34:45Z',
          label: {
            name: 'S-Ready for Release',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-11-16T00:05:27Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 835,
    title: 'Add missing frontmatter, including stages',
    createdAt: '2022-08-03T19:04:50Z',
    closed: true,
    closedAt: '2022-08-09T04:03:53Z',
    merged: true,
    mergedAt: '2022-08-09T04:03:53Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 834,
    title: 'Amend RFC 0821 given implementation tweaks',
    createdAt: '2022-08-02T15:10:01Z',
    closed: true,
    closedAt: '2022-08-12T18:07:49Z',
    merged: true,
    mergedAt: '2022-08-12T18:07:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-02T15:10:01Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-02T15:10:01Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-02T15:10:01Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-05T18:10:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 833,
    title: '[RFCs App Rendering] Reformat frontmatter',
    createdAt: '2022-07-29T12:47:17Z',
    closed: true,
    closedAt: '2022-08-08T18:27:24Z',
    merged: true,
    mergedAt: '2022-08-08T18:27:24Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 831,
    title: 'Standardize use of scripts in package.json for common tasks',
    createdAt: '2022-07-22T13:30:12Z',
    closed: true,
    closedAt: '2023-09-15T18:57:17Z',
    merged: true,
    mergedAt: '2023-09-15T18:57:17Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-04T03:10:22Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-04T03:10:45Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:28Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:55:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:55:46Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-01T18:35:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 830,
    title: "RFC: Evolving Ember's Major Version Process",
    createdAt: '2022-07-12T14:47:21Z',
    closed: true,
    closedAt: '2022-09-06T20:32:52Z',
    merged: true,
    mergedAt: '2022-09-06T20:32:52Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-07-12T14:48:37Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-12T14:48:37Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-12T14:48:37Z',
          label: {
            name: 'T-steering',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-22T17:16:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 828,
    title: 'fix image urls in embedded images',
    createdAt: '2022-06-20T21:49:26Z',
    closed: true,
    closedAt: '2022-06-22T03:46:47Z',
    merged: true,
    mergedAt: '2022-06-22T03:46:46Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 826,
    title: 'disable mdbook builds',
    createdAt: '2022-06-16T17:02:44Z',
    closed: true,
    closedAt: '2022-06-30T16:38:12Z',
    merged: true,
    mergedAt: '2022-06-30T16:38:12Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 825,
    title: 'Add redirects for all the github.io links to the new RFCs app',
    createdAt: '2022-06-16T16:52:45Z',
    closed: true,
    closedAt: '2022-06-30T16:47:49Z',
    merged: true,
    mergedAt: '2022-06-30T16:47:49Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 823,
    title: 'Update ember to ember-addon in v2 package spec rfc',
    createdAt: '2022-06-06T21:17:47Z',
    closed: true,
    closedAt: '2022-07-01T18:15:06Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 821,
    title: 'RFC: public types for Owner, Transition, RouteInfo',
    createdAt: '2022-05-24T03:02:48Z',
    closed: true,
    closedAt: '2022-07-29T18:14:54Z',
    merged: true,
    mergedAt: '2022-07-29T18:14:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-05-24T19:20:41Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-05-24T19:20:41Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-05-24T19:20:41Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-23T01:36:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 819,
    title: 'Public router service',
    createdAt: '2022-05-12T20:00:08Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-05-12T20:06:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-05-12T20:06:09Z',
          label: {
            name: 'T-ember-engines',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:28Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:59:06Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:59:06Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T19:04:01Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-09-22T19:04:01Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 818,
    title: 'Fix stage for accepted RFCs',
    createdAt: '2022-05-09T16:22:21Z',
    closed: true,
    closedAt: '2022-05-28T07:50:19Z',
    merged: true,
    mergedAt: '2022-05-28T07:50:19Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 814,
    title: 'Add Stylelint To Ember Blueprints',
    createdAt: '2022-04-20T00:42:57Z',
    closed: true,
    closedAt: '2022-10-20T15:49:17Z',
    merged: true,
    mergedAt: '2022-10-20T15:49:17Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-08-04T03:11:14Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-08-31T17:39:44Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 813,
    title: '<template> layering proposal',
    createdAt: '2022-04-16T22:00:45Z',
    closed: true,
    closedAt: '2023-06-30T18:23:34Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-07-26T13:52:43Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-26T13:52:43Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-26T13:52:43Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-26T13:52:43Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:27Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T20:02:10Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T20:02:10Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:50:04Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-06-23T19:06:13Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 812,
    title: 'Add `tracked-built-ins` dependency',
    createdAt: '2022-03-29T20:53:51Z',
    closed: true,
    closedAt: '2022-12-13T00:39:00Z',
    merged: true,
    mergedAt: '2022-12-13T00:39:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-31T14:09:50Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:26Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:10:49Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:10:49Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:10:49Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 811,
    title: 'Element Modifiers',
    createdAt: '2022-03-29T20:17:58Z',
    closed: true,
    closedAt: '2022-12-13T00:37:00Z',
    merged: true,
    mergedAt: '2022-12-13T00:37:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-31T14:09:50Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:07:07Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:07:07Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:28:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 810,
    title: '[WIP] Add `ember-modifier` dependency',
    createdAt: '2022-03-28T20:40:06Z',
    closed: true,
    closedAt: '2022-03-28T20:40:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 809,
    title: 'Add TypeScript team to teams list in README',
    createdAt: '2022-03-24T00:16:09Z',
    closed: true,
    closedAt: '2022-03-24T00:18:25Z',
    merged: true,
    mergedAt: '2022-03-24T00:18:25Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 808,
    title: 'Amend RFC 0724 to include template type checking',
    createdAt: '2022-03-24T00:13:30Z',
    closed: true,
    closedAt: '2022-04-15T18:27:31Z',
    merged: true,
    mergedAt: '2022-04-15T18:27:31Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-24T00:13:46Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-24T00:13:46Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-24T00:14:40Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-25T19:00:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 806,
    title: 'Engine Router Helpers',
    createdAt: '2022-03-11T17:42:29Z',
    closed: true,
    closedAt: '2022-03-17T19:41:29Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-12T00:34:54Z',
          label: {
            name: 'T-ember-engines',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-12T00:35:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 804,
    title: 'Add release versions for RFCs released between 3.25 and 4.1',
    createdAt: '2022-03-06T02:13:23Z',
    closed: true,
    closedAt: '2022-08-04T17:51:56Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 801,
    title: 'Deprecate `blacklist` and `whitelist` build options',
    createdAt: '2022-02-25T16:55:13Z',
    closed: true,
    closedAt: '2022-03-16T17:07:50Z',
    merged: true,
    mergedAt: '2022-03-16T17:07:50Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-03T19:39:04Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-03T21:09:41Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-09T18:09:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 800,
    title: 'RFC: TypeScript Adoption Plan',
    createdAt: '2022-02-24T23:35:06Z',
    closed: true,
    closedAt: '2022-04-15T18:27:13Z',
    merged: true,
    mergedAt: '2022-04-15T18:27:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-24T23:35:33Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-24T23:35:33Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-24T23:35:33Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-24T23:35:33Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-25T18:59:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 796,
    title: 'RFC: ember data deprecate RSVP.Promise for native Promises',
    createdAt: '2022-02-20T15:49:41Z',
    closed: true,
    closedAt: '2022-03-31T15:17:08Z',
    merged: true,
    mergedAt: '2022-03-31T15:17:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-20T15:49:41Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 795,
    title: 'ember-data: Return a Promise from Model.save()',
    createdAt: '2022-02-14T03:36:41Z',
    closed: true,
    closedAt: '2022-03-10T03:16:36Z',
    merged: true,
    mergedAt: '2022-03-10T03:16:36Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-14T03:36:41Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-20T20:49:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 794,
    title: 'Simplifying Schema Definition Service type signatures',
    createdAt: '2022-02-12T22:01:38Z',
    closed: true,
    closedAt: '2022-02-14T03:13:23Z',
    merged: true,
    mergedAt: '2022-02-14T03:13:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-12T22:01:38Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-12T22:01:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 793,
    title: 'EmberData | Polymorphic Relationship Support',
    createdAt: '2022-02-11T12:13:08Z',
    closed: true,
    closedAt: '2022-07-24T00:22:02Z',
    merged: true,
    mergedAt: '2022-07-24T00:22:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-20T20:50:48Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-13T23:01:51Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 790,
    title: 'Deprecate ajax in favor of fetch in ember-data',
    createdAt: '2022-01-29T16:52:51Z',
    closed: true,
    closedAt: '2022-12-13T00:44:46Z',
    merged: true,
    mergedAt: '2022-12-13T00:44:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-01-29T16:52:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-03T21:09:40Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-13T23:01:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-13T00:42:59Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 788,
    title: 'in-implementation updates to the default helper manager RFC, 756',
    createdAt: '2022-01-13T23:54:32Z',
    closed: true,
    closedAt: '2023-06-08T17:42:32Z',
    merged: true,
    mergedAt: '2023-06-08T17:42:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:31:24Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T20:01:15Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 786,
    title: 'rfc: Ember Learn | Add Ember cookbook ',
    createdAt: '2022-01-11T07:03:13Z',
    closed: true,
    closedAt: '2022-03-16T03:22:02Z',
    merged: true,
    mergedAt: '2022-03-16T03:22:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:13:24Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 785,
    title:
      ' Introduce new test helpers for rendering (and re-rendering) that obviate the need for `get` and `set`',
    createdAt: '2022-01-07T19:42:46Z',
    closed: true,
    closedAt: '2022-04-15T18:24:23Z',
    merged: true,
    mergedAt: '2022-04-15T18:24:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:13:42Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-15T17:13:42Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-15T17:13:42Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-08T18:09:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-08T18:09:51Z',
          label: {
            name: 'T-TypeScript',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 784,
    title: 'Introduce `no-globals` optional feature',
    createdAt: '2022-01-07T11:48:41Z',
    closed: true,
    closedAt: '2023-07-29T10:07:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:15:07Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-25T17:13:47Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-25T17:13:47Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-25T17:13:47Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-25T17:13:47Z',
          label: {
            name: 'T-ember-engines',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:31:23Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T20:00:28Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T20:00:29Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 779,
    title: 'First-Class Component Templates',
    createdAt: '2021-12-03T17:54:56Z',
    closed: true,
    closedAt: '2022-03-04T19:10:36Z',
    merged: true,
    mergedAt: '2022-03-04T19:10:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:15:28Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-15T17:15:28Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-15T18:13:13Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 778,
    title: 'Instrumentation using Debug-Render-Tree',
    createdAt: '2021-12-03T09:02:42Z',
    closed: true,
    closedAt: '2022-08-24T06:09:11Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 776,
    title: 'Author Built-In Blueprints in TypeScript',
    createdAt: '2021-11-16T22:21:23Z',
    closed: true,
    closedAt: '2022-01-05T18:13:41Z',
    merged: true,
    mergedAt: '2022-01-05T18:13:41Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-11-16T22:27:31Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-12-17T18:28:27Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 774,
    title: 'Deprecate implicit record loading in Ember Route',
    createdAt: '2021-11-14T13:31:13Z',
    closed: true,
    closedAt: '2023-02-03T19:24:49Z',
    merged: true,
    mergedAt: '2023-02-03T19:24:48Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-11-14T13:31:13Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-03T21:09:39Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:27Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T21:16:01Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T21:16:05Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:37:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 772,
    title: 'Deprecate Bower Support',
    createdAt: '2021-11-10T15:52:50Z',
    closed: true,
    closedAt: '2021-12-08T18:11:09Z',
    merged: true,
    mergedAt: '2021-12-08T18:11:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-11-19T18:24:36Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-12-01T18:34:57Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 763,
    title: 'Asset Import Spec',
    createdAt: '2021-08-13T20:23:58Z',
    closed: true,
    closedAt: '2023-10-27T18:16:12Z',
    merged: true,
    mergedAt: '2023-10-27T18:16:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T14:51:24Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-20T14:47:24Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 762,
    title: 'invokeHelper argument-based thunks',
    createdAt: '2021-08-11T15:59:12Z',
    closed: true,
    closedAt: '2021-10-22T19:55:11Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-10-08T19:37:14Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 758,
    title: 'Default Component Manager',
    createdAt: '2021-07-21T22:41:17Z',
    closed: true,
    closedAt: '2021-12-10T22:30:03Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 757,
    title: 'Default Modifier Manager',
    createdAt: '2021-07-21T22:14:52Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:16:22Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-15T17:16:22Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-01T16:10:25Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 756,
    title: 'Default Helper Manager',
    createdAt: '2021-07-18T17:45:41Z',
    closed: true,
    closedAt: '2021-10-15T18:46:08Z',
    merged: true,
    mergedAt: '2021-10-15T18:46:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-10-08T19:02:19Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-10-08T19:02:19Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-10-08T19:02:27Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 755,
    title: 'Correct 0669 `isEqual` arguments',
    createdAt: '2021-06-30T22:59:40Z',
    closed: true,
    closedAt: '2021-06-30T23:36:46Z',
    merged: true,
    mergedAt: '2021-06-30T23:36:46Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 754,
    title: 'Default managers',
    createdAt: '2021-06-22T17:25:26Z',
    closed: true,
    closedAt: '2021-07-18T17:47:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 753,
    title: 'Adds Logging and Debugging Context API',
    createdAt: '2021-06-15T23:42:35Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T14:51:23Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 752,
    title: 'Add inject service RFC',
    createdAt: '2021-06-10T08:41:22Z',
    closed: true,
    closedAt: '2021-10-08T18:13:57Z',
    merged: true,
    mergedAt: '2021-10-08T18:13:57Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-06-25T18:59:35Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 751,
    title: 'Change transition deprecations to 5.0',
    createdAt: '2021-05-28T21:21:12Z',
    closed: true,
    closedAt: '2021-05-28T21:29:22Z',
    merged: true,
    mergedAt: '2021-05-28T21:29:21Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 750,
    title: 'RFC: Deprecate Ember.assign',
    createdAt: '2021-05-26T18:09:45Z',
    closed: true,
    closedAt: '2021-07-09T18:06:39Z',
    merged: true,
    mergedAt: '2021-07-09T18:06:39Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-06-25T18:59:28Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 748,
    title: 'RFC: Glimmer component `Signature` type',
    createdAt: '2021-05-13T13:32:02Z',
    closed: true,
    closedAt: '2022-03-25T18:26:15Z',
    merged: true,
    mergedAt: '2022-03-25T18:26:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-26T22:41:12Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-18T18:42:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 747,
    title: 'Standardize on @ember/legacy-built-in-components in the RFC',
    createdAt: '2021-05-11T20:00:45Z',
    closed: true,
    closedAt: '2021-05-12T08:04:19Z',
    merged: true,
    mergedAt: '2021-05-12T08:04:19Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 746,
    title: 'Enable Embroider',
    createdAt: '2021-05-07T19:21:01Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T14:51:40Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-03-23T18:50:23Z',
          label: {
            name: 'E-Polaris',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 745,
    title: 'rfc: ember-data | Modernize PromiseManyArray',
    createdAt: '2021-05-06T00:45:45Z',
    closed: true,
    closedAt: '2022-08-05T22:13:06Z',
    merged: true,
    mergedAt: '2022-08-05T22:13:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-05-06T00:45:45Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-05-06T00:45:45Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-24T00:26:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 744,
    title: 'RFC 0418 - Fix value of key `into`',
    createdAt: '2021-05-04T06:49:20Z',
    closed: true,
    closedAt: '2021-10-15T18:46:47Z',
    merged: true,
    mergedAt: '2021-10-15T18:46:47Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 743,
    title: 'rfc: ember-data | Deprecate Legacy Imports',
    createdAt: '2021-04-24T06:55:16Z',
    closed: true,
    closedAt: '2022-08-31T22:30:20Z',
    merged: true,
    mergedAt: '2022-08-31T22:30:20Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T06:55:16Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T06:55:16Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-24T00:27:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 742,
    title: 'rfc: ember-data | Deprecate Helper Functions',
    createdAt: '2021-04-24T06:42:45Z',
    closed: true,
    closedAt: '2022-04-13T23:03:43Z',
    merged: true,
    mergedAt: '2022-04-13T23:03:43Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T06:42:45Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T06:42:45Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-05-06T00:50:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 741,
    title:
      'rfc: ember-data | Deprecate Accessing Static Fields On Model Prior To Lookup',
    createdAt: '2021-04-24T06:23:52Z',
    closed: true,
    closedAt: '2022-07-24T00:23:01Z',
    merged: true,
    mergedAt: '2022-07-24T00:23:01Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T06:23:52Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T06:23:52Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-13T23:34:42Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 740,
    title: 'rfc: ember-data | deprecate-non-strict-types',
    createdAt: '2021-04-24T05:52:07Z',
    closed: true,
    closedAt: '2022-07-24T00:24:28Z',
    merged: true,
    mergedAt: '2022-07-24T00:24:28Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T05:52:15Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T06:01:30Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-04-13T23:26:40Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 739,
    title: 'rfc: ember-data | deprecate-non-strict-relationships',
    createdAt: '2021-04-24T05:10:14Z',
    closed: true,
    closedAt: '2022-04-13T23:06:49Z',
    merged: true,
    mergedAt: '2022-04-13T23:06:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T05:10:57Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T05:10:57Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-05-06T00:51:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 738,
    title: 'rfc: ember-data | deprecate-model-reopen',
    createdAt: '2021-04-24T04:33:55Z',
    closed: true,
    closedAt: '2021-05-06T00:52:05Z',
    merged: true,
    mergedAt: '2021-05-06T00:52:05Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T04:33:55Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-24T04:33:55Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-28T21:49:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 737,
    title: 'rfc: ember-data | state-machine-update',
    createdAt: '2021-04-24T04:06:51Z',
    closed: true,
    closedAt: '2021-05-11T00:12:43Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-04-24T04:06:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 736,
    title: 'Clarify deprecation and interface in 0649',
    createdAt: '2021-04-16T14:12:10Z',
    closed: true,
    closedAt: '2021-05-06T15:54:51Z',
    merged: true,
    mergedAt: '2021-05-06T15:54:51Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 733,
    title: 'Add public `intermediateTransitionTo` method on `RouterService`',
    createdAt: '2021-03-29T12:15:20Z',
    closed: true,
    closedAt: '2022-02-08T20:32:40Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 732,
    title: 'Fix references of headless Firefox',
    createdAt: '2021-03-27T16:45:06Z',
    closed: true,
    closedAt: '2021-12-17T18:23:29Z',
    merged: true,
    mergedAt: '2021-12-17T18:23:29Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 731,
    title: 'Add setRouteComponent API',
    createdAt: '2021-03-26T15:11:59Z',
    closed: true,
    closedAt: '2023-10-20T14:10:34Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T14:51:39Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:37:19Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:37:19Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-13T18:44:45Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 730,
    title: 'RFC: Semantic Versioning for TypeScript Types',
    createdAt: '2021-03-23T19:42:16Z',
    closed: true,
    closedAt: '2022-04-19T01:35:30Z',
    merged: true,
    mergedAt: '2022-04-19T01:35:30Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-04-08T18:09:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 728,
    title: 'Deprecate using tracked in classic classes',
    createdAt: '2021-03-18T20:38:30Z',
    closed: true,
    closedAt: '2022-12-09T19:39:21Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-03-03T21:07:32Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-01T16:10:37Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T19:18:25Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 727,
    title: 'Deprecate `{{unbound}}` helper',
    createdAt: '2021-03-16T17:57:59Z',
    closed: true,
    closedAt: '2022-03-30T09:06:53Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-02-15T17:21:58Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-03T21:09:38Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 726,
    title: 'DOM Element descriptor interface for test helpers',
    createdAt: '2021-03-15T18:47:15Z',
    closed: true,
    closedAt: '2023-12-01T19:29:12Z',
    merged: true,
    mergedAt: '2023-12-01T19:29:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-03-15T22:09:00Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-03-15T22:09:00Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:26Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T21:19:10Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-13T21:19:10Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-11-17T19:41:38Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-11-17T19:41:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-12-01T19:11:23Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 724,
    title: 'RFC: Official TypeScript support',
    createdAt: '2021-03-11T20:50:43Z',
    closed: true,
    closedAt: '2022-03-04T19:11:16Z',
    merged: true,
    mergedAt: '2022-03-04T19:11:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-03-11T21:33:50Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-03-11T21:33:50Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-02-18T19:33:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 723,
    title: 'Update 0460-yieldable-named-blocks.md',
    createdAt: '2021-02-26T18:01:07Z',
    closed: true,
    closedAt: '2021-02-27T01:50:55Z',
    merged: true,
    mergedAt: '2021-02-27T01:50:55Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 722,
    title: 'Align the mount and route APIs',
    createdAt: '2021-02-12T08:27:20Z',
    closed: true,
    closedAt: '2023-09-29T18:06:40Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-02-12T13:11:33Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-12T13:11:33Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:55:42Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 720,
    title: 'Amend RFC #671',
    createdAt: '2021-02-09T01:45:18Z',
    closed: true,
    closedAt: '2021-02-09T12:30:41Z',
    merged: true,
    mergedAt: '2021-02-09T12:30:41Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 719,
    title: 'copy teaching section from other related RFCs',
    createdAt: '2021-02-05T17:36:44Z',
    closed: true,
    closedAt: '2021-02-05T21:43:59Z',
    merged: true,
    mergedAt: '2021-02-05T21:43:59Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 717,
    title: 'Swap get-changed-files action for another ',
    createdAt: '2021-02-03T04:54:51Z',
    closed: true,
    closedAt: '2021-02-03T14:31:09Z',
    merged: true,
    mergedAt: '2021-02-03T14:31:09Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 716,
    title: 'Rename Equality Operators file',
    createdAt: '2021-01-30T18:09:50Z',
    closed: true,
    closedAt: '2021-02-01T18:26:24Z',
    merged: true,
    mergedAt: '2021-02-01T18:26:24Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 715,
    title: 'Arbitrary Query Params',
    createdAt: '2021-01-30T18:07:34Z',
    closed: true,
    closedAt: '2022-12-16T19:35:53Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T15:14:59Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:37:48Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-06T23:45:12Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 713,
    title: 'Convert Travis CI configuration into a GitHub Action',
    createdAt: '2021-01-28T11:18:54Z',
    closed: true,
    closedAt: '2022-01-06T19:09:04Z',
    merged: true,
    mergedAt: '2022-01-06T19:09:04Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 712,
    title: 'Query Params as derived data',
    createdAt: '2021-01-26T19:33:49Z',
    closed: true,
    closedAt: '2022-12-16T19:35:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-02-22T13:49:39Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-04-06T08:44:41Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-01T15:14:58Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:37:47Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-06T23:45:45Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 711,
    title: 'Deprecate Auto Location',
    createdAt: '2021-01-23T08:41:00Z',
    closed: true,
    closedAt: '2021-02-26T18:58:22Z',
    merged: true,
    mergedAt: '2021-02-26T18:58:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-02-04T16:16:10Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-04T16:16:10Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-05T21:44:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 710,
    title: 'Amend RFC 707',
    createdAt: '2021-01-21T22:15:19Z',
    closed: true,
    closedAt: '2021-01-22T15:52:11Z',
    merged: true,
    mergedAt: '2021-01-22T15:52:11Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 708,
    title: 'Fixup metadata on recently merged PR',
    createdAt: '2021-01-15T20:48:35Z',
    closed: true,
    closedAt: '2021-01-15T20:53:53Z',
    merged: true,
    mergedAt: '2021-01-15T20:53:53Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 707,
    title: 'Modernize built-in components (part 2)',
    createdAt: '2021-01-15T03:46:39Z',
    closed: true,
    closedAt: '2021-01-22T19:13:54Z',
    merged: true,
    mergedAt: '2021-01-22T19:13:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-15T03:47:32Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T03:47:32Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T03:47:32Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T19:41:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 706,
    title: 'Deprecate the Ember Global',
    createdAt: '2021-01-14T23:46:42Z',
    closed: true,
    closedAt: '2021-01-22T19:14:21Z',
    merged: true,
    mergedAt: '2021-01-22T19:14:21Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-15T20:51:53Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T20:55:23Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 705,
    title: 'Deprecate jQuery Integration Optional Feature',
    createdAt: '2021-01-14T22:53:15Z',
    closed: true,
    closedAt: '2021-01-22T19:14:59Z',
    merged: true,
    mergedAt: '2021-01-22T19:14:59Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-15T13:22:39Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T13:22:39Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T19:33:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 704,
    title: 'Deprecate Octane Optional Features',
    createdAt: '2021-01-14T22:06:14Z',
    closed: true,
    closedAt: '2021-01-22T19:15:28Z',
    merged: true,
    mergedAt: '2021-01-22T19:15:28Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-15T13:21:52Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T13:21:52Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T19:29:59Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 702,
    title: 'Add eslint-plugin-qunit to ember-cli blueprint',
    createdAt: '2021-01-10T00:45:36Z',
    closed: true,
    closedAt: '2021-02-26T19:14:14Z',
    merged: true,
    mergedAt: '2021-02-26T19:14:14Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-02-17T18:16:23Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-17T18:16:23Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-19T23:27:19Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 701,
    title: 'Update frontmatter format for RFC #680',
    createdAt: '2021-01-08T19:23:06Z',
    closed: true,
    closedAt: '2021-01-08T20:39:12Z',
    merged: true,
    mergedAt: '2021-01-08T20:39:12Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 700,
    title: 'Clarify and amend import paths in RFC #496 and #671',
    createdAt: '2021-01-07T07:14:59Z',
    closed: true,
    closedAt: '2021-01-08T19:40:56Z',
    merged: true,
    mergedAt: '2021-01-08T19:40:55Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-07T07:15:18Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-07T07:15:18Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-07T07:15:18Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 699,
    title:
      'Add additional info in blueprint lifecycle hooks to support 3rd-party addons to provide a way to codemod blueprints to reduce copy-pasta',
    createdAt: '2021-01-06T20:43:03Z',
    closed: true,
    closedAt: '2023-08-11T19:43:43Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T15:14:57Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 698,
    title: 'Deprecate `<LinkTo>` Component Positional Arguments',
    createdAt: '2021-01-06T09:35:07Z',
    closed: true,
    closedAt: '2021-01-15T19:11:30Z',
    merged: true,
    mergedAt: '2021-01-15T19:11:30Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-06T09:47:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-06T09:47:09Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-08T19:33:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 697,
    title: 'Readme wording and text',
    createdAt: '2021-01-05T16:12:11Z',
    closed: true,
    closedAt: '2021-01-11T15:15:41Z',
    merged: true,
    mergedAt: '2021-01-11T15:15:41Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 696,
    title:
      'Replace Travis CI with GitHub Actions in generated Ember CLI projects',
    createdAt: '2021-01-04T10:50:26Z',
    closed: true,
    closedAt: '2021-12-17T18:25:12Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 695,
    title: 'Argument Default Primitives',
    createdAt: '2020-12-26T23:52:15Z',
    closed: true,
    closedAt: '2022-07-23T23:07:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 694,
    title: 'Argument Validation Primitives',
    createdAt: '2020-12-26T20:08:59Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-01T15:14:56Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 692,
    title: 'Deprecate Array Observers',
    createdAt: '2020-12-23T20:43:49Z',
    closed: true,
    closedAt: '2021-01-15T19:12:49Z',
    merged: true,
    mergedAt: '2021-01-15T19:12:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-08T19:28:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 691,
    title:
      'Deprecate passing `classBinding` and `classNameBindings` as arguments',
    createdAt: '2020-12-23T16:12:37Z',
    closed: true,
    closedAt: '2021-01-15T19:13:55Z',
    merged: true,
    mergedAt: '2021-01-15T19:13:55Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-08T19:20:54Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 690,
    title: 'Deprecate `{{attrs}}` in templates',
    createdAt: '2020-12-23T03:13:24Z',
    closed: true,
    closedAt: '2021-01-15T19:15:21Z',
    merged: true,
    mergedAt: '2021-01-15T19:15:21Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-08T19:13:57Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 689,
    title: 'Deprecate {{hasBlock}} and {{hasBlockParams}} in templates',
    createdAt: '2020-12-23T01:54:30Z',
    closed: true,
    closedAt: '2021-01-22T19:32:06Z',
    merged: true,
    mergedAt: '2021-01-22T19:32:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-15T19:27:24Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T20:55:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-15T20:55:14Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 688,
    title: 'Correctly point to the added RFCs when linting',
    createdAt: '2020-12-11T20:58:15Z',
    closed: true,
    closedAt: '2020-12-12T15:46:52Z',
    merged: true,
    mergedAt: '2020-12-12T15:46:52Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 686,
    title: 'Deprecate old manager capabilities versions',
    createdAt: '2020-11-28T21:37:23Z',
    closed: true,
    closedAt: '2020-12-13T22:20:47Z',
    merged: true,
    mergedAt: '2020-12-13T22:20:47Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-12-10T01:05:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 685,
    title: 'New browser support policy',
    createdAt: '2020-11-28T18:18:16Z',
    closed: true,
    closedAt: '2020-12-13T22:28:56Z',
    merged: true,
    mergedAt: '2020-12-13T22:28:56Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-12-10T01:06:00Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 683,
    title: 'Deprecate Fallback Lookup Paths in ember-resolver',
    createdAt: '2020-11-23T21:38:44Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-12T21:41:58Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-09-22T18:50:59Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 682,
    title: 'Update templates with new frontmatter style',
    createdAt: '2020-11-09T22:01:04Z',
    closed: true,
    closedAt: '2020-11-12T16:14:51Z',
    merged: true,
    mergedAt: '2020-11-12T16:14:51Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 681,
    title: 'Convert RFC metadata to real frontmatter',
    createdAt: '2020-11-02T06:37:52Z',
    closed: true,
    closedAt: '2020-11-02T16:38:49Z',
    merged: true,
    mergedAt: '2020-11-02T16:38:48Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 680,
    title: 'Deprecate Implicit Injection on arbitrary Ember Framework objects',
    createdAt: '2020-11-02T03:56:06Z',
    closed: true,
    closedAt: '2021-01-08T19:10:22Z',
    merged: true,
    mergedAt: '2021-01-08T19:10:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-11-02T03:56:06Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-11-04T14:53:30Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-11-04T14:53:30Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-12-18T20:29:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-12-18T20:29:50Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 679,
    title: 'Add Github Workflows',
    createdAt: '2020-10-30T05:56:49Z',
    closed: true,
    closedAt: '2020-10-30T21:37:00Z',
    merged: true,
    mergedAt: '2020-10-30T21:37:00Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 678,
    title: 'Documenting Components',
    createdAt: '2020-10-27T10:49:58Z',
    closed: true,
    closedAt: '2021-05-13T16:12:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 676,
    title:
      'Return noop function from {{fn}} helper if invoked without arguments',
    createdAt: '2020-10-20T21:23:32Z',
    closed: true,
    closedAt: '2022-07-23T23:00:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-11-20T09:54:54Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-11-20T09:54:54Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 674,
    title: 'Deprecate transition methods of Controller and Route',
    createdAt: '2020-10-12T19:15:11Z',
    closed: true,
    closedAt: '2020-11-07T00:30:04Z',
    merged: true,
    mergedAt: '2020-11-07T00:30:04Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-10-13T18:26:33Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-13T18:26:33Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-30T18:42:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 673,
    title: 'deprecate tryinvoke',
    createdAt: '2020-10-05T16:36:29Z',
    closed: true,
    closedAt: '2020-11-07T00:26:55Z',
    merged: true,
    mergedAt: '2020-11-07T00:26:55Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-10-05T18:02:21Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-05T18:02:21Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-23T19:14:57Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 672,
    title: 'Updates the HelperManager RFC based on changes in implementation',
    createdAt: '2020-10-03T15:06:59Z',
    closed: true,
    closedAt: '2020-10-14T17:23:37Z',
    merged: true,
    mergedAt: '2020-10-14T17:23:37Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 671,
    title: 'Stop Leaking Implementation Details of Built-in Components',
    createdAt: '2020-10-02T20:12:05Z',
    closed: true,
    closedAt: '2020-10-17T14:07:11Z',
    merged: true,
    mergedAt: '2020-10-17T14:07:11Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-10-05T18:45:01Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-05T18:45:01Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-05T18:45:01Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-09T19:03:47Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 670,
    title: 'Fix PlusOne typos in invokeHelper',
    createdAt: '2020-10-02T04:54:49Z',
    closed: true,
    closedAt: '2020-10-02T17:56:32Z',
    merged: true,
    mergedAt: '2020-10-02T17:56:32Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 669,
    title: 'Tracked Storage Primitives',
    createdAt: '2020-09-30T21:45:05Z',
    closed: true,
    closedAt: '2021-02-12T18:55:12Z',
    merged: true,
    mergedAt: '2021-02-12T18:55:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-29T20:03:56Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 668,
    title: 'Additional changes to Readme for stages RFC',
    createdAt: '2020-09-30T00:14:16Z',
    closed: true,
    closedAt: '2020-09-30T00:21:53Z',
    merged: true,
    mergedAt: '2020-09-30T00:21:53Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 667,
    title: 'Fix example in invokeHelper summary',
    createdAt: '2020-09-29T00:54:52Z',
    closed: true,
    closedAt: '2020-10-02T17:58:02Z',
    merged: true,
    mergedAt: '2020-10-02T17:58:02Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 663,
    title: 'Update the README add RFC Stages',
    createdAt: '2020-09-26T17:49:44Z',
    closed: true,
    closedAt: '2022-11-22T19:30:24Z',
    merged: true,
    mergedAt: '2022-11-22T19:30:24Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 659,
    title: 'unique-id helper',
    createdAt: '2020-08-25T20:41:39Z',
    closed: true,
    closedAt: '2020-10-16T19:32:23Z',
    merged: true,
    mergedAt: '2020-10-16T19:32:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-10-09T18:44:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 656,
    title:
      '@cacheFor decorator to read last-cached value on a @cached decorator - RFC',
    createdAt: '2020-08-18T17:43:03Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:24Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 654,
    title: 'RFC 566: rename `@memo` -> `@cached`',
    createdAt: '2020-08-11T09:10:11Z',
    closed: true,
    closedAt: '2020-08-11T13:00:56Z',
    merged: true,
    mergedAt: '2020-08-11T13:00:55Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 649,
    title: 'Deprecation Staging',
    createdAt: '2020-07-24T02:15:34Z',
    closed: true,
    closedAt: '2020-08-14T20:03:33Z',
    merged: true,
    mergedAt: '2020-08-14T20:03:33Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-07-24T19:54:40Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-08-07T18:31:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 648,
    title:
      'Extend the supported asset file types to include commonly used formats svg and webp',
    createdAt: '2020-07-15T09:03:57Z',
    closed: true,
    closedAt: '2020-10-09T18:44:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-09-16T15:14:00Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 646,
    title: 'Update RFC section on inter-package dependencies',
    createdAt: '2020-07-08T09:41:10Z',
    closed: true,
    closedAt: '2020-07-20T16:31:36Z',
    merged: true,
    mergedAt: '2020-07-20T16:31:36Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 645,
    title: 'Add ember-page-title to app default blueprint',
    createdAt: '2020-07-03T12:41:16Z',
    closed: true,
    closedAt: '2020-10-16T19:21:26Z',
    merged: true,
    mergedAt: '2020-10-16T19:21:26Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-10-09T18:43:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-09T18:43:39Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-10-09T18:43:39Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 643,
    title: 'Provide access to template invocation stack in debug builds',
    createdAt: '2020-06-27T11:06:25Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-30T12:23:32Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:23Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 642,
    title: 'Simplifying Schema Definition Service type signatures',
    createdAt: '2020-06-24T20:46:25Z',
    closed: true,
    closedAt: '2022-02-12T22:05:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-24T20:46:38Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-06-24T21:13:56Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 640,
    title: 'fix example typo',
    createdAt: '2020-06-18T16:51:13Z',
    closed: true,
    closedAt: '2020-06-19T17:59:34Z',
    merged: true,
    mergedAt: '2020-06-19T17:59:34Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 639,
    title: 'Replace terms blacklist & whitelist',
    createdAt: '2020-06-15T11:17:47Z',
    closed: true,
    closedAt: '2020-07-24T19:51:12Z',
    merged: true,
    mergedAt: '2020-07-24T19:51:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-07-17T19:05:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 638,
    title: 'Interactive way to create new Ember apps',
    createdAt: '2020-06-12T19:45:13Z',
    closed: true,
    closedAt: '2020-08-10T16:30:09Z',
    merged: true,
    mergedAt: '2020-08-10T16:30:09Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-08-03T15:28:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 637,
    title: 'Facilitate customization of setupTest* functions',
    createdAt: '2020-06-05T21:57:52Z',
    closed: true,
    closedAt: '2020-07-17T19:14:02Z',
    merged: true,
    mergedAt: '2020-07-17T19:14:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-06T00:09:44Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-06-06T00:09:51Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-06-26T18:10:02Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 635,
    title: '`ember new --lang`',
    createdAt: '2020-05-29T20:28:04Z',
    closed: true,
    closedAt: '2020-06-12T22:43:41Z',
    merged: true,
    mergedAt: '2020-06-12T22:43:41Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-08T14:33:03Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 632,
    title: 'Deprecate string based actions',
    createdAt: '2020-05-23T18:12:11Z',
    closed: true,
    closedAt: '2023-01-13T21:23:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:23Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 631,
    title: 'add refresh method to router service',
    createdAt: '2020-05-23T17:49:14Z',
    closed: true,
    closedAt: '2020-10-09T13:46:18Z',
    merged: true,
    mergedAt: '2020-10-09T13:46:18Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-09-18T19:12:50Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 630,
    title: 'New browser support policy',
    createdAt: '2020-05-22T09:43:37Z',
    closed: true,
    closedAt: '2020-10-21T19:54:12Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 628,
    title: '💅 Add Prettier 💇',
    createdAt: '2020-05-18T20:16:44Z',
    closed: true,
    closedAt: '2020-06-05T22:14:03Z',
    merged: true,
    mergedAt: '2020-06-05T22:14:03Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-18T20:17:32Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-05-22T19:26:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 627,
    title: 'Timeline for Transitioning Away from IE11',
    createdAt: '2020-05-15T07:30:48Z',
    closed: true,
    closedAt: '2020-10-21T19:53:40Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 626,
    title: '`invokeHelper`',
    createdAt: '2020-05-08T00:16:58Z',
    closed: true,
    closedAt: '2020-06-22T16:42:00Z',
    merged: true,
    mergedAt: '2020-06-22T16:42:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-12T23:17:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 625,
    title: 'Helper Managers',
    createdAt: '2020-05-06T21:14:54Z',
    closed: true,
    closedAt: '2020-05-22T19:27:26Z',
    merged: true,
    mergedAt: '2020-05-22T19:27:26Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-15T20:05:00Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-05-18T22:45:05Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-05-18T22:45:05Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 624,
    title: 'Update 0410-tracked-properties.md',
    createdAt: '2020-05-06T17:03:24Z',
    closed: true,
    closedAt: '2020-05-08T00:18:35Z',
    merged: true,
    mergedAt: '2020-05-08T00:18:35Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 622,
    title: 'Fix missing macroGetOwnConfig description',
    createdAt: '2020-05-02T12:11:18Z',
    closed: true,
    closedAt: '2020-05-08T17:35:32Z',
    merged: true,
    mergedAt: '2020-05-08T17:35:32Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 621,
    title: 'Introduce array and object literal syntax in templates',
    createdAt: '2020-05-01T23:44:17Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-11-23T10:40:23Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:34:22Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 620,
    title: 'Revise RFC #389 with details about its argument',
    createdAt: '2020-04-29T21:14:09Z',
    closed: true,
    closedAt: '2020-05-01T19:32:02Z',
    merged: true,
    mergedAt: '2020-05-01T19:32:02Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 619,
    title: 'Better environment handling',
    createdAt: '2020-04-23T14:54:14Z',
    closed: true,
    closedAt: '2020-11-24T14:09:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-20T17:19:18Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-05-20T17:19:19Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 618,
    title: 'Update 0000-template.md',
    createdAt: '2020-04-22T18:11:19Z',
    closed: true,
    closedAt: '2020-04-22T18:16:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 617,
    title: 'RFC Stages',
    createdAt: '2020-04-22T17:49:02Z',
    closed: true,
    closedAt: '2020-09-18T19:08:36Z',
    merged: true,
    mergedAt: '2020-09-18T19:08:36Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-09-11T18:05:30Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 615,
    title: 'Autotracking Memoization',
    createdAt: '2020-04-18T00:22:24Z',
    closed: true,
    closedAt: '2020-05-08T19:32:35Z',
    merged: true,
    mergedAt: '2020-05-08T19:32:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-01T20:49:45Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 599,
    title: 'Test Co-Location',
    createdAt: '2020-03-02T17:52:04Z',
    closed: true,
    closedAt: '2022-07-23T23:34:35Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 594,
    title: 'set helper',
    createdAt: '2020-02-20T19:24:16Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:21Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:49:22Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 593,
    title: 'Spreadable Arguments',
    createdAt: '2020-02-12T13:04:43Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:21Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:58:21Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:58:24Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 585,
    title: 'Registry APIs: deprecate micro-syntax; introduce replacement API',
    createdAt: '2020-01-27T16:13:35Z',
    closed: true,
    closedAt: '2020-02-21T19:58:22Z',
    merged: true,
    mergedAt: '2020-02-21T19:58:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-01-27T16:56:24Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-02-07T20:35:05Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 581,
    title: 'New Test Waiters',
    createdAt: '2020-01-14T17:15:17Z',
    closed: true,
    closedAt: '2020-02-21T22:05:15Z',
    merged: true,
    mergedAt: '2020-02-21T22:05:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-02-07T20:34:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-02-07T20:36:34Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 580,
    title: 'Destroyables',
    createdAt: '2020-01-11T00:26:29Z',
    closed: true,
    closedAt: '2020-04-21T18:48:04Z',
    merged: true,
    mergedAt: '2020-04-21T18:48:04Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-03-04T21:30:24Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-04-10T18:38:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 579,
    title: 'Add fastboot to the default package.json',
    createdAt: '2020-01-10T23:00:34Z',
    closed: true,
    closedAt: '2023-11-03T07:30:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:20Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 578,
    title: 'Ember CLI build pipeline',
    createdAt: '2020-01-10T22:09:51Z',
    closed: true,
    closedAt: '2022-02-16T18:24:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-06-08T19:14:22Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 577,
    title: 'Tracked Maps and Sets',
    createdAt: '2020-01-10T21:57:33Z',
    closed: true,
    closedAt: '2022-07-23T23:51:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 576,
    title: 'Move HTTP Mock to addon',
    createdAt: '2020-01-10T02:00:36Z',
    closed: true,
    closedAt: '2023-10-20T21:09:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:19Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-07T18:41:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-07T18:41:25Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-01-13T20:55:26Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-10-20T18:35:24Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 575,
    title: 'Test Directories',
    createdAt: '2020-01-10T01:52:53Z',
    closed: true,
    closedAt: '2020-11-06T19:38:22Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-29T20:39:28Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 574,
    title: 'Controller Injection Deprecation',
    createdAt: '2020-01-10T01:48:34Z',
    closed: true,
    closedAt: '2020-02-08T00:15:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-02-07T22:07:10Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 573,
    title: 'App Boot Hooks',
    createdAt: '2020-01-10T01:40:38Z',
    closed: true,
    closedAt: '2023-11-03T07:31:25Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:19Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 572,
    title: 'Promise based initializers',
    createdAt: '2020-01-10T01:09:43Z',
    closed: true,
    closedAt: '2020-08-06T23:30:46Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-01-31T18:59:25Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 571,
    title: 'fix broken link (or the dark side of the Internet)',
    createdAt: '2020-01-09T00:50:06Z',
    closed: true,
    closedAt: '2020-01-14T18:16:10Z',
    merged: true,
    mergedAt: '2020-01-14T18:16:10Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 570,
    title: 'URL Manager',
    createdAt: '2020-01-04T23:25:01Z',
    closed: true,
    closedAt: '2021-03-14T16:40:35Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 569,
    title: 'TrackedList',
    createdAt: '2020-01-03T18:07:19Z',
    closed: true,
    closedAt: '2022-07-23T17:51:42Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 567,
    title: '`@use` and Resources',
    createdAt: '2019-12-23T16:03:39Z',
    closed: true,
    closedAt: '2020-10-29T03:48:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 566,
    title: '@cached',
    createdAt: '2019-12-23T03:20:00Z',
    closed: true,
    closedAt: '2021-02-26T19:15:22Z',
    merged: true,
    mergedAt: '2021-02-26T19:15:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-18T22:50:42Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-02-19T19:20:18Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 565,
    title: 'Deprecation Shaking',
    createdAt: '2019-12-18T19:19:54Z',
    closed: true,
    closedAt: '2021-02-03T16:01:29Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 562,
    title: 'Adding Logical Operators to Templates',
    createdAt: '2019-12-08T22:31:50Z',
    closed: true,
    closedAt: '2021-01-15T19:24:55Z',
    merged: true,
    mergedAt: '2021-01-15T19:24:55Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-08T20:56:21Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-08T20:56:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2021-01-08T20:57:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 561,
    title: 'Adding Numeric Comparison Operators to Templates',
    createdAt: '2019-12-08T21:00:24Z',
    closed: true,
    closedAt: '2021-02-05T21:43:57Z',
    merged: true,
    mergedAt: '2021-02-05T21:43:57Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-29T19:58:05Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 560,
    title: 'Adding Equality Operators to Templates',
    createdAt: '2019-12-08T20:45:34Z',
    closed: true,
    closedAt: '2021-01-29T19:17:29Z',
    merged: true,
    mergedAt: '2021-01-29T19:17:29Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2021-01-08T20:35:24Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2021-01-08T20:57:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2021-01-22T19:42:00Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 559,
    title: "Fix typo's and incorrect verbiage",
    createdAt: '2019-12-07T18:41:49Z',
    closed: true,
    closedAt: '2019-12-07T22:41:28Z',
    merged: true,
    mergedAt: '2019-12-07T22:41:27Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 558,
    title: 'Specifying and detecting an applications edition.',
    createdAt: '2019-12-05T22:12:58Z',
    closed: true,
    closedAt: '2019-12-13T20:11:32Z',
    merged: true,
    mergedAt: '2019-12-13T20:11:31Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-12-05T22:12:58Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-12-05T22:12:58Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-12-05T22:12:58Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-12-05T22:12:58Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-12-06T20:25:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 557,
    title: 'Deprecate implicit record loading in routes',
    createdAt: '2019-11-27T14:51:04Z',
    closed: true,
    closedAt: '2022-07-24T00:16:41Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-20T16:16:16Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 554,
    title: 'Deprecate getWithDefault',
    createdAt: '2019-11-08T21:58:46Z',
    closed: true,
    closedAt: '2020-01-31T18:09:52Z',
    merged: true,
    mergedAt: '2020-01-31T18:09:52Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-01-03T20:35:45Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 549,
    title: 'Ember dev for other platforms',
    createdAt: '2019-10-22T23:57:01Z',
    closed: true,
    closedAt: '2022-07-24T00:07:25Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 548,
    title: 'Add link to Component Templates Co-location RFC PR',
    createdAt: '2019-10-22T23:57:00Z',
    closed: true,
    closedAt: '2019-10-25T04:05:49Z',
    merged: true,
    mergedAt: '2019-10-25T04:05:49Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 528,
    title: 'Deprecate Events',
    createdAt: '2019-08-15T13:10:23Z',
    closed: true,
    closedAt: '2022-07-29T23:12:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 526,
    title: 'fix: bump mdbook to remove section labels',
    createdAt: '2019-08-07T06:08:56Z',
    closed: true,
    closedAt: '2019-08-09T15:49:40Z',
    merged: true,
    mergedAt: '2019-08-09T15:49:40Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 523,
    title: '@model for route templates',
    createdAt: '2019-08-05T22:33:02Z',
    closed: true,
    closedAt: '2019-08-30T18:36:50Z',
    merged: true,
    mergedAt: '2019-08-30T18:36:50Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-08-05T23:31:27Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-05T23:31:27Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-23T19:42:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 522,
    title: 'RFC - deprecate default serializers and adapters',
    createdAt: '2019-07-30T02:12:25Z',
    closed: true,
    closedAt: '2019-08-22T00:00:36Z',
    merged: true,
    mergedAt: '2019-08-22T00:00:36Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-07-31T16:04:19Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-07-31T16:04:19Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-14T21:53:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 521,
    title: '[DATA] findRecord/peekRecord via Identifier',
    createdAt: '2019-07-29T20:49:10Z',
    closed: true,
    closedAt: '2019-08-22T00:02:00Z',
    merged: true,
    mergedAt: '2019-08-22T00:02:00Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-07-31T16:05:53Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-07-31T16:05:53Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-14T21:50:46Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 519,
    title: 'Ember 2020 Roadmap RFC',
    createdAt: '2019-07-29T18:29:49Z',
    closed: true,
    closedAt: '2020-05-01T18:57:15Z',
    merged: true,
    mergedAt: '2020-05-01T18:57:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-04-03T16:40:37Z',
          label: {
            name: 'T-steering',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-04-17T17:39:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 514,
    title: 'Update tracking and filenames for 486 and 468',
    createdAt: '2019-07-19T18:58:34Z',
    closed: true,
    closedAt: '2019-07-19T20:14:03Z',
    merged: true,
    mergedAt: '2019-07-19T20:14:03Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 512,
    title: 'Release a major version when any deprecations are removed',
    createdAt: '2019-07-08T20:14:14Z',
    closed: true,
    closedAt: '2022-09-09T18:45:46Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-07-29T20:10:36Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-29T20:11:02Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-29T20:11:02Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-29T20:11:02Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-29T20:11:02Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 511,
    title: 'fix some typos',
    createdAt: '2019-07-05T18:02:56Z',
    closed: true,
    closedAt: '2019-07-06T01:54:10Z',
    merged: true,
    mergedAt: '2019-07-06T01:54:10Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 510,
    title: 'Add `load` hook to Route',
    createdAt: '2019-07-01T15:08:56Z',
    closed: true,
    closedAt: '2022-07-23T02:01:30Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 509,
    title: 'fix some typos',
    createdAt: '2019-07-01T12:28:01Z',
    closed: true,
    closedAt: '2019-07-01T13:47:40Z',
    merged: true,
    mergedAt: '2019-07-01T13:47:40Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 507,
    title: 'v2 Addon Format (Embroider compatibility)',
    createdAt: '2019-06-22T21:41:18Z',
    closed: true,
    closedAt: '2020-05-15T20:03:06Z',
    merged: true,
    mergedAt: '2020-05-15T20:03:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-01T20:50:52Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 506,
    title: 'Support Populating head tags in Routes',
    createdAt: '2019-06-21T20:03:41Z',
    closed: true,
    closedAt: '2022-09-30T18:13:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-09-16T19:39:44Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 502,
    title: 'Explicit Service Injection',
    createdAt: '2019-06-15T01:52:50Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:18Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-10T20:01:22Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-02-10T20:01:25Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 501,
    title: 'Deprecate inline link-to',
    createdAt: '2019-06-12T16:56:41Z',
    closed: true,
    closedAt: '2022-05-01T19:04:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 500,
    title: 'Update 0391-router-helpers.md',
    createdAt: '2019-06-12T09:22:13Z',
    closed: true,
    closedAt: '2019-06-12T16:30:18Z',
    merged: true,
    mergedAt: '2019-06-12T16:30:18Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 499,
    title: 'An alternative to Controllers',
    createdAt: '2019-06-10T16:37:33Z',
    closed: true,
    closedAt: '2021-03-27T15:09:20Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 496,
    title: 'Strict mode templates',
    createdAt: '2019-06-02T04:42:15Z',
    closed: true,
    closedAt: '2020-04-24T22:09:45Z',
    merged: true,
    mergedAt: '2020-04-24T22:09:45Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-06-02T04:42:15Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-06-02T04:42:15Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-04-10T18:07:49Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2020-04-17T18:50:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 495,
    title: 'Add some more RFC-closing details to the README',
    createdAt: '2019-05-31T18:37:31Z',
    closed: true,
    closedAt: '2019-06-03T13:50:59Z',
    merged: true,
    mergedAt: '2019-06-03T13:50:59Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 494,
    title: 'Async Observers',
    createdAt: '2019-05-30T21:23:53Z',
    closed: true,
    closedAt: '2019-06-20T16:07:01Z',
    merged: true,
    mergedAt: '2019-06-20T16:07:01Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-06-07T19:37:33Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 492,
    title:
      'Fix a typo and list formatting in 0369-deprecate-computed-clobberability.md',
    createdAt: '2019-05-21T15:53:22Z',
    closed: true,
    closedAt: '2019-05-21T16:12:42Z',
    merged: true,
    mergedAt: '2019-05-21T16:12:42Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 491,
    title: 'Deprecate disconnectOutlet',
    createdAt: '2019-05-20T13:54:26Z',
    closed: true,
    closedAt: '2019-06-03T14:40:51Z',
    merged: true,
    mergedAt: '2019-06-03T14:40:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-05-24T19:11:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 489,
    title: 'Use Empress to render the Ember RFCs',
    createdAt: '2019-05-16T11:01:45Z',
    closed: true,
    closedAt: '2022-07-24T13:26:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 487,
    title: 'Custom Model Classes',
    createdAt: '2019-05-09T18:30:34Z',
    closed: true,
    closedAt: '2019-06-29T04:04:07Z',
    merged: true,
    mergedAt: '2019-06-29T04:04:07Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-05-09T19:27:00Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-06-24T06:34:46Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 486,
    title: 'Deprecate mouseEnter/Leave/Move Ember events',
    createdAt: '2019-04-27T23:48:02Z',
    closed: true,
    closedAt: '2019-07-19T18:52:20Z',
    merged: true,
    mergedAt: '2019-07-19T18:52:20Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-07-12T19:01:07Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 485,
    title: 'Set up CI with Azure Pipelines',
    createdAt: '2019-04-26T20:08:15Z',
    closed: true,
    closedAt: '2020-05-18T22:49:26Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 483,
    title: "Fix 'tempalte' typos",
    createdAt: '2019-04-24T22:34:29Z',
    closed: true,
    closedAt: '2019-04-25T01:40:51Z',
    merged: true,
    mergedAt: '2019-04-25T01:40:51Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 482,
    title: 'Deprecate hash helper',
    createdAt: '2019-04-23T20:27:29Z',
    closed: true,
    closedAt: '2022-03-02T15:43:25Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 481,
    title: 'Component Templates Co-location',
    createdAt: '2019-04-23T06:39:33Z',
    closed: true,
    closedAt: '2019-05-31T20:32:15Z',
    merged: true,
    mergedAt: '2019-05-31T20:32:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-23T06:47:15Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-23T06:47:15Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-23T06:47:15Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-23T06:47:16Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-05-06T12:48:52Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-05-08T15:16:01Z',
          label: {
            name: 'Octane',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 480,
    title: 'Update Merged RFCs to point to tracking issues',
    createdAt: '2019-04-19T18:57:41Z',
    closed: true,
    closedAt: '2019-04-19T19:14:40Z',
    merged: true,
    mergedAt: '2019-04-19T19:14:40Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 478,
    title: 'Tracked Properties Updates',
    createdAt: '2019-04-18T05:50:35Z',
    closed: true,
    closedAt: '2019-05-06T13:00:36Z',
    merged: true,
    mergedAt: '2019-05-06T13:00:36Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-20T17:08:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-20T17:08:38Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 477,
    title: 'Blueprints Update',
    createdAt: '2019-04-17T15:11:35Z',
    closed: true,
    closedAt: '2020-04-25T17:46:22Z',
    merged: true,
    mergedAt: '2020-04-25T17:46:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-02-10T15:31:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 472,
    title: 'Update 0395-ember-data-packages.md',
    createdAt: '2019-04-01T21:37:22Z',
    closed: true,
    closedAt: '2019-04-03T09:02:35Z',
    merged: true,
    mergedAt: '2019-04-03T09:02:35Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 471,
    title: '`{{on}}` Modifier',
    createdAt: '2019-03-22T04:41:21Z',
    closed: true,
    closedAt: '2019-04-12T18:57:07Z',
    merged: true,
    mergedAt: '2019-04-12T18:57:07Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:08:13Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-02T15:09:01Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-05T20:59:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 470,
    title: '`{{fn}}` Helper',
    createdAt: '2019-03-21T01:11:06Z',
    closed: true,
    closedAt: '2019-04-12T18:54:08Z',
    merged: true,
    mergedAt: '2019-04-12T18:54:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:08:21Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-02T15:08:52Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-02T15:08:56Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2019-04-05T20:57:53Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 468,
    title: '`@classic` Decorator',
    createdAt: '2019-03-15T05:31:57Z',
    closed: true,
    closedAt: '2019-07-19T18:46:03Z',
    merged: true,
    mergedAt: '2019-07-19T18:46:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:36:29Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-07-12T18:47:49Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 467,
    title: 'Injection Hook Normalization',
    createdAt: '2019-03-15T05:27:54Z',
    closed: true,
    closedAt: '2020-06-10T03:21:00Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:36:34Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-12T18:59:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-12T19:05:18Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 466,
    title: 'Request state service',
    createdAt: '2019-03-15T01:29:34Z',
    closed: true,
    closedAt: '2019-08-14T20:51:30Z',
    merged: true,
    mergedAt: '2019-08-14T20:51:30Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-15T01:30:02Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-05-13T17:52:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 465,
    title: 'Record Data Errors RFC',
    createdAt: '2019-03-14T23:18:20Z',
    closed: true,
    closedAt: '2019-05-15T15:36:58Z',
    merged: true,
    mergedAt: '2019-05-15T15:36:57Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-15T01:29:54Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-25T11:15:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 464,
    title:
      'Include ember-cli-dependency-lint in the default app blueprint [Revived]',
    createdAt: '2019-03-14T07:24:59Z',
    closed: true,
    closedAt: '2022-12-14T18:08:04Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:34:17Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-07T18:39:08Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 463,
    title: 'Record Data State',
    createdAt: '2019-03-13T21:07:50Z',
    closed: true,
    closedAt: '2019-05-22T02:41:49Z',
    merged: true,
    mergedAt: '2019-05-22T02:41:49Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-13T21:16:38Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-05-09T19:15:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 462,
    title: 'Configuring addon modules in Module Unification layout',
    createdAt: '2019-03-10T07:04:10Z',
    closed: true,
    closedAt: '2020-11-20T19:41:33Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-10-21T12:17:53Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 461,
    title: '[DATA] Singleton RecordData',
    createdAt: '2019-03-07T04:06:27Z',
    closed: true,
    closedAt: '2019-06-26T21:56:54Z',
    merged: true,
    mergedAt: '2019-06-26T21:56:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-07T04:06:27Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-07T04:06:27Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-05-29T23:20:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 460,
    title: 'Yieldable named blocks',
    createdAt: '2019-03-07T00:46:36Z',
    closed: true,
    closedAt: '2019-04-23T22:36:39Z',
    merged: true,
    mergedAt: '2019-04-23T22:36:39Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:08:32Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-02T15:08:32Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-12T18:27:09Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 459,
    title: 'Angle Bracket Invocations For Built-in Components',
    createdAt: '2019-03-06T20:35:59Z',
    closed: true,
    closedAt: '2019-03-15T23:49:26Z',
    merged: true,
    mergedAt: '2019-03-15T23:49:26Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-06T21:18:24Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-06T21:18:24Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-06T21:18:24Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-06T21:18:25Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-09T00:35:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 458,
    title: '[DATA] RecordData Operations',
    createdAt: '2019-03-06T19:45:09Z',
    closed: true,
    closedAt: '2019-04-24T21:39:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-06T19:45:09Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 457,
    title: 'Nested Invocations in Angle Bracket Syntax',
    createdAt: '2019-03-05T23:59:59Z',
    closed: true,
    closedAt: '2019-03-15T23:49:07Z',
    merged: true,
    mergedAt: '2019-03-15T23:49:07Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-03-07T20:14:31Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-09T01:38:16Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 454,
    title: 'SFC & Template Import Primitives',
    createdAt: '2019-02-23T04:56:28Z',
    closed: true,
    closedAt: '2022-02-09T15:45:04Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-04-02T15:08:43Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 452,
    title: '[Data] Medium Term Plan',
    createdAt: '2019-02-21T02:18:27Z',
    closed: true,
    closedAt: '2019-06-26T21:08:22Z',
    merged: true,
    mergedAt: '2019-06-26T21:08:22Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-22T22:08:25Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-17T01:18:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 451,
    title: 'Injection Parameter Normalization',
    createdAt: '2019-02-20T15:55:35Z',
    closed: true,
    closedAt: '2019-04-12T18:50:47Z',
    merged: true,
    mergedAt: '2019-04-12T18:50:47Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-20T20:49:01Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-08T19:39:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-15T22:50:54Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2019-04-02T17:51:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 449,
    title: 'Deprecate {{partial}}',
    createdAt: '2019-02-17T21:28:55Z',
    closed: true,
    closedAt: '2019-03-16T22:56:51Z',
    merged: true,
    mergedAt: '2019-03-16T22:56:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-20T20:48:44Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-02-20T20:48:49Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-08T20:41:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 447,
    title: 'Cleaning up small typos',
    createdAt: '2019-02-14T22:38:23Z',
    closed: true,
    closedAt: '2019-02-15T01:36:28Z',
    merged: true,
    mergedAt: '2019-02-15T01:36:28Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 446,
    title: 'Contribution Guides',
    createdAt: '2019-02-14T15:25:37Z',
    closed: true,
    closedAt: '2019-03-10T11:38:14Z',
    merged: true,
    mergedAt: '2019-03-10T11:38:14Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T15:26:53Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-02-14T15:26:53Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-02-28T16:45:00Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 445,
    title: 'Deprecate {{with}}',
    createdAt: '2019-02-13T14:47:52Z',
    closed: true,
    closedAt: '2019-03-16T22:57:16Z',
    merged: true,
    mergedAt: '2019-03-16T22:57:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:17:40Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-02-14T19:17:40Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-09T01:15:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 444,
    title: 'Update packaging rfc 51->110',
    createdAt: '2019-02-10T03:31:36Z',
    closed: true,
    closedAt: '2019-02-10T16:15:52Z',
    merged: true,
    mergedAt: '2019-02-10T16:15:52Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 443,
    title: '`trustedHtml` and `trusted-html`',
    createdAt: '2019-02-09T11:10:14Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:19:09Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-02-14T19:19:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:52Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:14:36Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:14:42Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 442,
    title: 'Add `descriptor()`',
    createdAt: '2019-02-07T17:00:22Z',
    closed: true,
    closedAt: '2019-03-27T15:24:33Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:26:25Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 441,
    title: 'Deprecate `computed().meta()`',
    createdAt: '2019-02-07T16:59:16Z',
    closed: true,
    closedAt: '2022-07-29T23:13:02Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:17:15Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 440,
    title: ' Decorator Support RFC',
    createdAt: '2019-02-07T15:48:50Z',
    closed: true,
    closedAt: '2019-03-15T23:46:27Z',
    merged: true,
    mergedAt: '2019-03-15T23:46:27Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:25:45Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-08T20:35:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 439,
    title: 'First draft for Model Name property',
    createdAt: '2019-02-03T18:51:35Z',
    closed: true,
    closedAt: '2019-02-03T18:51:58Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 437,
    title: "Add 'Relevant Team(s)' frontmatter to CLI RFCs",
    createdAt: '2019-01-19T23:06:16Z',
    closed: true,
    closedAt: '2019-01-20T03:28:38Z',
    merged: true,
    mergedAt: '2019-01-20T03:28:38Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 435,
    title: 'Forwarding Element Modifiers with "Splattributes"',
    createdAt: '2019-01-19T06:31:13Z',
    closed: true,
    closedAt: '2019-01-28T21:05:37Z',
    merged: true,
    mergedAt: '2019-01-28T21:05:37Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-19T07:01:08Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 433,
    title: 'Accessible Routing ',
    createdAt: '2019-01-18T17:16:07Z',
    closed: true,
    closedAt: '2022-12-02T20:18:38Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-19T15:43:45Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:52Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:36:40Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 432,
    title:
      'Contextual Helpers and Modifiers (a.k.a. "first-class helpers/modifiers")',
    createdAt: '2019-01-14T22:57:20Z',
    closed: true,
    closedAt: '2019-02-05T13:22:14Z',
    merged: true,
    mergedAt: '2019-02-05T13:22:14Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-19T15:43:54Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T21:48:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 431,
    title: 'Restructuring the Guides Table of Contents',
    createdAt: '2019-01-13T17:23:25Z',
    closed: true,
    closedAt: '2019-02-16T04:43:54Z',
    merged: true,
    mergedAt: '2019-02-16T04:43:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-19T15:44:15Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-31T17:30:00Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-31T17:31:55Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-31T17:31:55Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 427,
    title: 'Add once-for-observer RFC',
    createdAt: '2018-12-28T22:49:54Z',
    closed: true,
    closedAt: '2019-02-11T22:20:21Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-04T20:48:05Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-04T20:48:05Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 426,
    title: 'Build-in Ember-Exam',
    createdAt: '2018-12-24T10:19:10Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:04:45Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:51Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:36:19Z',
          label: {
            name: 'T-ember-cli',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:12:31Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:12:35Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 425,
    title: 'Website Redesign RFC',
    createdAt: '2018-12-22T01:44:07Z',
    closed: true,
    closedAt: '2019-04-05T17:44:42Z',
    merged: true,
    mergedAt: '2019-04-05T17:44:42Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:03:30Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:03:30Z',
          label: {
            name: 'T-learning',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:03:30Z',
          label: {
            name: 'T-steering',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-11T17:22:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 424,
    title: 'fix: typo',
    createdAt: '2018-12-21T20:41:25Z',
    closed: true,
    closedAt: '2018-12-21T21:20:53Z',
    merged: true,
    mergedAt: '2018-12-21T21:20:53Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 423,
    title:
      'Update the RFC templates and README to reflect RFC Process Updates RFC',
    createdAt: '2018-12-21T06:16:30Z',
    closed: true,
    closedAt: '2019-01-23T16:33:31Z',
    merged: true,
    mergedAt: '2019-01-23T16:33:31Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 422,
    title:
      'Update and rename 0000-deprecate-route-render-methods.md to 0418-depr…',
    createdAt: '2018-12-19T20:38:01Z',
    closed: true,
    closedAt: '2018-12-19T20:38:17Z',
    merged: true,
    mergedAt: '2018-12-19T20:38:17Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 421,
    title: 'Deprecate Application Controller Router Properties',
    createdAt: '2018-12-19T19:51:09Z',
    closed: true,
    closedAt: '2019-02-05T13:24:42Z',
    merged: true,
    mergedAt: '2019-02-05T13:24:41Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:03:09Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T22:00:23Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 419,
    title: 'Update deprecation-template.md',
    createdAt: '2018-12-19T19:38:00Z',
    closed: true,
    closedAt: '2018-12-19T21:04:28Z',
    merged: true,
    mergedAt: '2018-12-19T21:04:28Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 418,
    title: 'Deprecate Route Render APIs',
    createdAt: '2018-12-19T19:09:14Z',
    closed: true,
    closedAt: '2019-02-15T20:20:46Z',
    merged: true,
    mergedAt: '2019-02-15T20:20:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:03:05Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T22:01:59Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 417,
    title: 'Extensible inspector',
    createdAt: '2018-12-18T18:07:16Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-12-19T20:40:11Z',
          label: {
            name: 'T-Tooling',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:50Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:15:01Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:15:05Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-13T20:57:40Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 416,
    title: 'Glimmer Components',
    createdAt: '2018-12-14T02:10:06Z',
    closed: true,
    closedAt: '2019-01-22T16:22:04Z',
    merged: true,
    mergedAt: '2019-01-22T16:22:04Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-12-14T23:55:02Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-15T01:18:07Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-11T20:49:42Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 415,
    title: 'Render Element Modifiers',
    createdAt: '2018-12-14T00:20:23Z',
    closed: true,
    closedAt: '2019-01-22T16:26:03Z',
    merged: true,
    mergedAt: '2019-01-22T16:26:03Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-12-15T01:17:42Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-15T01:17:42Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-11T20:55:33Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 411,
    title: 'Add Ember.js PR link for emberjs#337',
    createdAt: '2018-12-08T03:58:26Z',
    closed: true,
    closedAt: '2018-12-08T04:22:29Z',
    merged: true,
    mergedAt: '2018-12-08T04:22:29Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 410,
    title: 'Tracked Properties',
    createdAt: '2018-12-05T23:56:19Z',
    closed: true,
    closedAt: '2019-02-05T13:24:01Z',
    merged: true,
    mergedAt: '2019-02-05T13:24:01Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-12-06T13:26:16Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-06T13:26:16Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T20:01:32Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 409,
    title: 'fix: correct typo `inject as service` -> `inject`',
    createdAt: '2018-12-05T00:17:07Z',
    closed: true,
    closedAt: '2018-12-05T00:51:36Z',
    merged: true,
    mergedAt: '2018-12-05T00:51:36Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 408,
    title: 'Decorators',
    createdAt: '2018-12-04T02:18:42Z',
    closed: true,
    closedAt: '2019-01-11T20:54:50Z',
    merged: true,
    mergedAt: '2019-01-11T20:54:50Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-12-04T14:56:14Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-04T14:56:14Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-04T20:49:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 407,
    title: 'Component Boolean Arguments',
    createdAt: '2018-11-30T20:50:31Z',
    closed: true,
    closedAt: '2022-07-23T17:35:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:05:34Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:05:34Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:05:42Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 403,
    title: '[DATA] Identifiers ',
    createdAt: '2018-11-26T04:38:38Z',
    closed: true,
    closedAt: '2019-04-04T20:08:34Z',
    merged: true,
    mergedAt: '2019-04-04T20:08:34Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-26T04:38:38Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-03-24T05:43:56Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 398,
    title: 'RouteInfo Metadata',
    createdAt: '2018-11-02T13:29:46Z',
    closed: true,
    closedAt: '2018-11-30T19:39:29Z',
    merged: true,
    mergedAt: '2018-11-30T19:39:29Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-14T04:44:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 395,
    title: '@ember-data packages',
    createdAt: '2018-11-01T01:41:52Z',
    closed: true,
    closedAt: '2019-01-16T22:23:50Z',
    merged: true,
    mergedAt: '2019-01-16T22:23:50Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-14T22:02:58Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-19T22:50:26Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 394,
    title: 'Route actions',
    createdAt: '2018-10-29T08:25:20Z',
    closed: true,
    closedAt: '2019-01-04T20:45:44Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-09T17:10:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-07T19:13:40Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-07T19:13:40Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-05T17:28:54Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 393,
    title: 'Fixed some grammar and spelling',
    createdAt: '2018-10-25T05:33:26Z',
    closed: true,
    closedAt: '2018-10-25T06:19:20Z',
    merged: true,
    mergedAt: '2018-10-25T06:19:20Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 392,
    title: 'Deprecate setupComponentManager String Lookup',
    createdAt: '2018-10-23T14:32:16Z',
    closed: true,
    closedAt: '2018-11-02T18:43:35Z',
    merged: true,
    mergedAt: '2018-11-02T18:43:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-24T21:25:53Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-24T21:25:53Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-24T21:26:29Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-26T18:07:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 391,
    title: 'Router Helpers',
    createdAt: '2018-10-22T13:49:01Z',
    closed: true,
    closedAt: '2018-11-13T18:15:40Z',
    merged: true,
    mergedAt: '2018-11-13T18:15:40Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-24T21:25:14Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-24T21:25:14Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-11-05T14:07:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 389,
    title: 'Dynamic tags in glimmer templates',
    createdAt: '2018-10-14T11:53:02Z',
    closed: true,
    closedAt: '2019-04-12T18:43:16Z',
    merged: true,
    mergedAt: '2019-04-12T18:43:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-24T21:27:03Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-24T21:27:03Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-05T19:04:59Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 388,
    title: 'Add new basic helpers to Ember',
    createdAt: '2018-10-13T11:40:40Z',
    closed: true,
    closedAt: '2020-01-14T18:24:08Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-15T21:44:12Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-15T21:44:12Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-19T18:59:20Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-11-05T14:26:48Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-11-08T04:08:15Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2019-12-20T19:46:09Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 387,
    title: '[Ember Data] Improve findHasMany/findBelongsTo decision making',
    createdAt: '2018-10-08T10:02:43Z',
    closed: true,
    closedAt: '2018-10-31T21:09:56Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-08T18:18:58Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 386,
    title: 'Remove jQuery by default',
    createdAt: '2018-10-07T13:27:28Z',
    closed: true,
    closedAt: '2019-01-11T20:53:14Z',
    merged: true,
    mergedAt: '2019-01-11T20:53:14Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-24T21:27:22Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-04T20:20:57Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 384,
    title:
      '[DEPRECATION RFC ember-data] deprecate errors changing record state',
    createdAt: '2018-10-04T21:02:46Z',
    closed: true,
    closedAt: '2019-01-04T23:12:43Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-04T21:02:46Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-16T15:16:01Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-25T01:48:37Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-11-28T01:07:23Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-12-03T20:29:45Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 382,
    title: 'named dynamic segments',
    createdAt: '2018-10-03T18:42:41Z',
    closed: true,
    closedAt: '2022-07-23T17:31:36Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 380,
    title: 'Add queryParams to the router service',
    createdAt: '2018-09-22T00:55:00Z',
    closed: true,
    closedAt: '2021-03-14T16:36:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 378,
    title: 'RFC to collocate tests in in-repo-addons',
    createdAt: '2018-09-18T16:14:24Z',
    closed: true,
    closedAt: '2022-07-23T17:31:00Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 375,
    title: 'Deprecate Computed `.property()` Modifier',
    createdAt: '2018-09-14T17:49:00Z',
    closed: true,
    closedAt: '2018-10-26T15:38:47Z',
    merged: true,
    mergedAt: '2018-10-26T15:38:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-06T13:42:45Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-06T13:46:07Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 373,
    title: 'Modifier managers',
    createdAt: '2018-09-10T19:02:33Z',
    closed: true,
    closedAt: '2018-10-19T18:21:35Z',
    merged: true,
    mergedAt: '2018-10-19T18:21:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-06T13:40:37Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-06T13:45:44Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-06T13:46:31Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-06T13:46:31Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 372,
    title: '[RFC ember-data] modelFactoryFor',
    createdAt: '2018-09-07T02:09:50Z',
    closed: true,
    closedAt: '2018-10-24T21:18:05Z',
    merged: true,
    mergedAt: '2018-10-24T21:18:05Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-09-07T02:09:50Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-17T21:58:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 371,
    title: 'Editions',
    createdAt: '2018-09-04T14:59:13Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:35:50Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:15:43Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:15:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 370,
    title: 'Deprecate `computed().volatile()`',
    createdAt: '2018-08-31T19:13:15Z',
    closed: true,
    closedAt: '2018-10-05T18:43:33Z',
    merged: true,
    mergedAt: '2018-10-05T18:43:33Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-09-14T20:01:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 369,
    title: 'Deprecate Computed Overridability and `.readOnly()`',
    createdAt: '2018-08-31T18:16:08Z',
    closed: true,
    closedAt: '2018-10-26T15:37:44Z',
    merged: true,
    mergedAt: '2018-10-26T15:37:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-05T21:05:56Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-06T13:44:48Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 367,
    title: 'Module Unification Packages (MU with Ember Addons)',
    createdAt: '2018-08-27T14:38:04Z',
    closed: true,
    closedAt: '2019-03-02T15:36:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 366,
    title: 'Fix typo',
    createdAt: '2018-08-27T05:34:46Z',
    closed: true,
    closedAt: '2018-08-27T15:44:41Z',
    merged: true,
    mergedAt: '2018-08-27T15:44:41Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 364,
    title: 'RFC: Ember 2018 Roadmap',
    createdAt: '2018-08-24T17:00:06Z',
    closed: true,
    closedAt: '2018-11-01T23:18:55Z',
    merged: true,
    mergedAt: '2018-11-01T23:18:55Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-04T04:01:12Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 362,
    title: 'Ember Data: Return Promise from DS.Model.save()',
    createdAt: '2018-08-22T21:05:34Z',
    closed: true,
    closedAt: '2022-02-14T03:37:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-08-22T21:06:59Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-21T21:22:32Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 361,
    title: 'fix: typo',
    createdAt: '2018-08-17T15:20:21Z',
    closed: true,
    closedAt: '2018-08-17T15:35:40Z',
    merged: true,
    mergedAt: '2018-08-17T15:35:40Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 353,
    title: 'Modifiers',
    createdAt: '2018-08-16T23:50:17Z',
    closed: true,
    closedAt: '2022-07-24T00:38:06Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-24T21:26:19Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-10-24T21:26:19Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 351,
    title: 'Component Manager Bounds',
    createdAt: '2018-08-01T16:01:04Z',
    closed: true,
    closedAt: '2018-08-25T15:07:45Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 348,
    title: 'Restructure and refresh the Ember CLI Guides',
    createdAt: '2018-07-30T03:44:42Z',
    closed: true,
    closedAt: '2018-07-30T04:01:30Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 346,
    title: 'Rename RFCs to their numbers and update to add links to their PRs',
    createdAt: '2018-07-16T20:15:17Z',
    closed: true,
    closedAt: '2018-07-16T20:25:14Z',
    merged: true,
    mergedAt: '2018-07-16T20:25:14Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 345,
    title: 'Discord',
    createdAt: '2018-07-11T20:54:20Z',
    closed: true,
    closedAt: '2018-08-28T23:26:02Z',
    merged: true,
    mergedAt: '2018-08-28T23:26:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-08-11T12:34:52Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 344,
    title: 'Spelling correction',
    createdAt: '2018-07-06T11:53:05Z',
    closed: true,
    closedAt: '2018-07-09T11:24:16Z',
    merged: true,
    mergedAt: '2018-07-09T11:24:16Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 343,
    title: 'Ember Data Deprecate Transforms',
    createdAt: '2018-06-26T06:57:03Z',
    closed: true,
    closedAt: '2018-06-27T23:40:06Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-26T16:43:12Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 340,
    title: 'Deprecate Ember.merge',
    createdAt: '2018-06-19T18:32:38Z',
    closed: true,
    closedAt: '2018-08-31T21:02:09Z',
    merged: true,
    mergedAt: '2018-08-31T21:02:09Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-08-17T19:16:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 339,
    title: 'Router link component and routing helpers',
    createdAt: '2018-06-15T13:21:11Z',
    closed: true,
    closedAt: '2020-11-03T21:08:31Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 338,
    title: 'Native Class Roadmap',
    createdAt: '2018-06-15T06:10:10Z',
    closed: true,
    closedAt: '2019-01-26T21:18:11Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-28T04:30:00Z',
          label: {
            name: 'Octane',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-04T20:32:55Z',
          label: {
            name: 'Octane',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 337,
    title: 'Native Class Constructor Update',
    createdAt: '2018-06-15T06:04:42Z',
    closed: true,
    closedAt: '2018-09-07T19:06:36Z',
    merged: true,
    mergedAt: '2018-09-07T19:06:36Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-08-31T21:51:47Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-09-07T19:09:03Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 335,
    title: 'RFC to deprecate `component#sendAction`',
    createdAt: '2018-05-29T09:50:32Z',
    closed: true,
    closedAt: '2018-06-22T18:54:51Z',
    merged: true,
    mergedAt: '2018-06-22T18:54:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-09T00:13:42Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 334,
    title: 'Deprecate Ember Utils',
    createdAt: '2018-05-25T14:40:20Z',
    closed: true,
    closedAt: '2022-07-08T18:42:12Z',
    merged: true,
    mergedAt: '2022-07-08T18:42:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:09:50Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:09:50Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-03-03T21:09:37Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-07-01T18:53:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 332,
    title: '[EMBER DATA] record links & meta',
    createdAt: '2018-05-11T00:37:19Z',
    closed: true,
    closedAt: '2018-10-19T02:23:14Z',
    merged: true,
    mergedAt: '2018-10-19T02:23:13Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-27T16:47:42Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-08-17T01:04:19Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 331,
    title: 'Deprecate Globals Resolver',
    createdAt: '2018-05-08T16:57:33Z',
    closed: true,
    closedAt: '2018-09-07T19:09:32Z',
    merged: true,
    mergedAt: '2018-09-07T19:09:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-01T20:44:04Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-06-26T18:00:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-08-31T21:55:11Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 329,
    title: 'Start RFC to deprecate the use of Ember Evented in Ember Data',
    createdAt: '2018-05-01T13:06:43Z',
    closed: true,
    closedAt: '2018-09-26T21:52:23Z',
    merged: true,
    mergedAt: '2018-09-26T21:52:23Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-05-01T13:06:52Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-08-17T01:04:37Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-09-18T15:43:04Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 328,
    title: 'Include `ember-cli-build-notifications` by default',
    createdAt: '2018-04-27T20:46:07Z',
    closed: true,
    closedAt: '2020-11-20T19:41:36Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-11-13T22:52:28Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 327,
    title: 'Semantic Test Selectors',
    createdAt: '2018-04-19T14:39:05Z',
    closed: true,
    closedAt: '2020-11-04T09:37:50Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-02-14T19:27:00Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 326,
    title: 'Ember data filter deprecation',
    createdAt: '2018-04-19T05:23:00Z',
    closed: true,
    closedAt: '2018-05-09T21:13:39Z',
    merged: true,
    mergedAt: '2018-05-09T21:13:39Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-04-30T14:26:01Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-06-28T01:43:02Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 325,
    title: 'Fixed spelling mistake :)',
    createdAt: '2018-04-10T06:43:24Z',
    closed: true,
    closedAt: '2018-04-10T06:44:56Z',
    merged: true,
    mergedAt: '2018-04-10T06:44:56Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 324,
    title: 'Deprecate Component#isVisible',
    createdAt: '2018-04-03T09:19:11Z',
    closed: true,
    closedAt: '2018-06-22T18:59:02Z',
    merged: true,
    mergedAt: '2018-06-22T18:59:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-01T20:36:53Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 323,
    title: 'Array functions',
    createdAt: '2018-03-25T05:23:14Z',
    closed: true,
    closedAt: '2022-01-31T15:40:04Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-10-01T08:32:11Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:10:31Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 322,
    title: 'Deprecation of copy and Copyable',
    createdAt: '2018-03-24T21:45:27Z',
    closed: true,
    closedAt: '2018-04-27T18:07:58Z',
    merged: true,
    mergedAt: '2018-04-27T18:07:58Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-04-06T19:21:26Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 321,
    title: 'Key functions for `each`/`each-in`',
    createdAt: '2018-03-24T21:23:03Z',
    closed: true,
    closedAt: '2023-02-03T19:09:56Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:11:01Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:11:01Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:49Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:16:24Z',
          label: {
            name: 'S-Exploring',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T20:16:27Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2023-01-27T19:23:52Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 320,
    title:
      'Updated RFC 297 with removal of codemod and additional design issues',
    createdAt: '2018-03-24T14:50:46Z',
    closed: true,
    closedAt: '2018-03-24T15:20:44Z',
    merged: true,
    mergedAt: '2018-03-24T15:20:44Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 319,
    title: '`html-safe` helper',
    createdAt: '2018-03-24T04:49:52Z',
    closed: true,
    closedAt: '2019-02-19T15:47:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 318,
    title: '`array` helper',
    createdAt: '2018-03-24T04:17:18Z',
    closed: true,
    closedAt: '2018-04-06T18:17:24Z',
    merged: true,
    mergedAt: '2018-04-06T18:17:24Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-03-30T21:24:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 317,
    title: 'Named block syntax',
    createdAt: '2018-03-23T23:26:25Z',
    closed: true,
    closedAt: '2019-06-28T17:48:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:12:34Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 314,
    title: 'HTML Attribute and Property Rationalization',
    createdAt: '2018-03-22T00:28:02Z',
    closed: false,
    closedAt: null,
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2019-01-25T03:12:48Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:49Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 312,
    title: 'Spelling fixes',
    createdAt: '2018-03-11T04:51:07Z',
    closed: true,
    closedAt: '2018-03-11T04:51:43Z',
    merged: true,
    mergedAt: '2018-03-11T04:51:43Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 311,
    title: 'Introduce `<AngleBracketInvocationSyntax />`',
    createdAt: '2018-03-11T04:35:51Z',
    closed: true,
    closedAt: '2018-05-04T18:15:31Z',
    merged: true,
    mergedAt: '2018-05-04T18:15:31Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-04-06T18:57:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-07-09T01:41:26Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 309,
    title: 'Module Unification Namespaces',
    createdAt: '2018-03-02T18:07:50Z',
    closed: true,
    closedAt: '2018-08-27T14:38:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 308,
    title: 'Transition Away From Property Fallback Behavior',
    createdAt: '2018-02-16T20:18:55Z',
    closed: true,
    closedAt: '2018-06-22T19:00:56Z',
    merged: true,
    mergedAt: '2018-06-22T19:00:56Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-06-01T21:34:22Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 300,
    title: 'RFC Process Update',
    createdAt: '2018-02-04T17:23:10Z',
    closed: true,
    closedAt: '2018-11-30T20:33:06Z',
    merged: true,
    mergedAt: '2018-11-30T20:33:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-11-16T19:26:14Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 298,
    title: 'Lint Component Lifecycle Events',
    createdAt: '2018-01-19T14:02:00Z',
    closed: true,
    closedAt: '2019-08-16T14:32:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-01-19T22:41:59Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-01-19T22:41:59Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-02-05T13:53:40Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-08-17T19:14:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-09-18T15:43:10Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-22T02:10:28Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 297,
    title: 'Deprecating Ember.Logger',
    createdAt: '2018-01-19T01:32:34Z',
    closed: true,
    closedAt: '2018-03-02T14:52:21Z',
    merged: true,
    mergedAt: '2018-03-02T14:52:21Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-01-19T19:40:03Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-02-09T21:14:59Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 296,
    title: 'fix syntax error on is-active helper',
    createdAt: '2018-01-16T16:53:37Z',
    closed: true,
    closedAt: '2018-01-17T01:36:41Z',
    merged: true,
    mergedAt: '2018-01-17T01:36:41Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 295,
    title: 'Fix is-active helper example in router-service',
    createdAt: '2018-01-16T08:48:01Z',
    closed: true,
    closedAt: '2018-01-16T13:23:35Z',
    merged: true,
    mergedAt: '2018-01-16T13:23:35Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 294,
    title: 'Make jQuery optional',
    createdAt: '2018-01-12T21:14:35Z',
    closed: true,
    closedAt: '2018-02-04T21:19:44Z',
    merged: true,
    mergedAt: '2018-02-04T21:19:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-01-22T15:31:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-02-04T16:38:10Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 293,
    title: 'Ember Data Record Data RFC',
    createdAt: '2018-01-10T10:47:04Z',
    closed: true,
    closedAt: '2018-08-28T17:33:12Z',
    merged: true,
    mergedAt: '2018-08-28T17:33:12Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-01-15T10:11:36Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-02-08T03:00:31Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-06-20T21:33:06Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-06-20T21:34:34Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 292,
    title: 'Setup mdbook',
    createdAt: '2018-01-05T10:59:49Z',
    closed: true,
    closedAt: '2018-01-05T11:17:07Z',
    merged: true,
    mergedAt: '2018-01-05T11:17:07Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 291,
    title: 'Update 0281-es5-getters.md',
    createdAt: '2018-01-04T14:33:14Z',
    closed: true,
    closedAt: '2018-01-04T19:35:40Z',
    merged: true,
    mergedAt: '2018-01-04T19:35:40Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 290,
    title: 'headings- case consistency',
    createdAt: '2017-12-28T02:47:17Z',
    closed: true,
    closedAt: '2017-12-28T02:50:51Z',
    merged: true,
    mergedAt: '2017-12-28T02:50:51Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 289,
    title: 'Consume node_modules with Ember-CLI',
    createdAt: '2017-12-28T01:43:45Z',
    closed: true,
    closedAt: '2017-12-30T01:37:55Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 287,
    title: 'Promote {{-in-element}} to public API',
    createdAt: '2017-12-22T12:42:58Z',
    closed: true,
    closedAt: '2018-06-22T18:54:09Z',
    merged: true,
    mergedAt: '2018-06-22T18:54:09Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-02-04T16:38:23Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-06-15T20:24:53Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 286,
    title: 'Block `let` template helper',
    createdAt: '2017-12-21T03:45:04Z',
    closed: true,
    closedAt: '2018-01-18T01:54:06Z',
    merged: true,
    mergedAt: '2018-01-18T01:54:06Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-21T03:48:10Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-01-04T23:29:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 285,
    title: 'Update 0000-template.md',
    createdAt: '2017-12-14T07:30:08Z',
    closed: true,
    closedAt: '2017-12-16T22:42:52Z',
    merged: true,
    mergedAt: '2017-12-16T22:42:52Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 284,
    title: 'Splitting Ember into packages',
    createdAt: '2017-12-13T18:39:23Z',
    closed: true,
    closedAt: '2022-12-07T18:56:00Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-01-19T19:40:26Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-01-24T02:09:36Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-03-09T22:16:32Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:48Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 283,
    title: 'Always run model hook',
    createdAt: '2017-12-13T03:19:27Z',
    closed: true,
    closedAt: '2023-08-18T14:04:38Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-13T18:38:48Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:47Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2023-08-11T14:53:11Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 282,
    title: 'Update 0281-es5-getters.md',
    createdAt: '2017-12-12T19:34:53Z',
    closed: true,
    closedAt: '2017-12-12T21:02:45Z',
    merged: true,
    mergedAt: '2017-12-12T21:02:45Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 281,
    title: 'ES5 Getters',
    createdAt: '2017-12-12T16:36:29Z',
    closed: true,
    closedAt: '2018-01-03T18:08:16Z',
    merged: true,
    mergedAt: '2018-01-03T18:08:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-13T18:38:34Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-12-16T20:55:46Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 280,
    title: 'Remove Application wrapper div',
    createdAt: '2017-12-11T22:39:26Z',
    closed: true,
    closedAt: '2018-01-03T18:07:48Z',
    merged: true,
    mergedAt: '2018-01-03T18:07:48Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-16T20:43:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 279,
    title: 'Fixed typos/grammar in RFC 278',
    createdAt: '2017-12-11T19:20:03Z',
    closed: true,
    closedAt: '2017-12-11T20:49:28Z',
    merged: true,
    mergedAt: '2017-12-11T20:49:28Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 278,
    title: 'Template-only Components',
    createdAt: '2017-12-11T14:53:03Z',
    closed: true,
    closedAt: '2018-01-03T18:07:16Z',
    merged: true,
    mergedAt: '2018-01-03T18:07:16Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-11T14:58:17Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-12-16T20:38:24Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 277,
    title: 'Fixed typos in RFC 276',
    createdAt: '2017-12-11T06:03:42Z',
    closed: true,
    closedAt: '2017-12-11T09:26:23Z',
    merged: true,
    mergedAt: '2017-12-11T09:26:23Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 276,
    title: 'Named Arguments Syntax (`{{@foo}}`)',
    createdAt: '2017-12-10T16:42:36Z',
    closed: true,
    closedAt: '2018-01-03T18:06:48Z',
    merged: true,
    mergedAt: '2018-01-03T18:06:48Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-12-10T17:09:26Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-12-20T17:36:58Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 275,
    title: 'RFC: Yield link-to component state',
    createdAt: '2017-12-10T05:23:08Z',
    closed: true,
    closedAt: '2018-01-07T05:23:43Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 272,
    title:
      'Deprecate Function.prototype.on, Function.prototype.property, Function.prototype.observes',
    createdAt: '2017-11-20T13:51:54Z',
    closed: true,
    closedAt: '2019-01-11T22:19:33Z',
    merged: true,
    mergedAt: '2019-01-11T22:19:33Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-11-20T15:33:42Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-02-12T22:52:31Z',
          label: {
            name: 'work in progress',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2018-09-18T15:43:21Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-09-18T15:43:22Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-12-21T19:18:27Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 268,
    title: 'Rethink Acceptance Testing',
    createdAt: '2017-11-06T00:26:06Z',
    closed: true,
    closedAt: '2017-12-01T20:11:28Z',
    merged: true,
    mergedAt: '2017-12-01T20:11:28Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-11-06T00:26:06Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-11-10T20:28:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 267,
    title: 'Deprecate `disabledWhen` of link-to component  ',
    createdAt: '2017-11-03T15:42:11Z',
    closed: true,
    closedAt: '2021-10-13T12:47:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-09-18T15:43:28Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-09-18T15:43:28Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 266,
    title: '[Ember Data] load relationships without data or links',
    createdAt: '2017-10-31T00:23:42Z',
    closed: true,
    closedAt: '2018-08-17T00:20:44Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2018-02-28T02:36:36Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 265,
    title: 'Fix typos',
    createdAt: '2017-10-28T12:28:39Z',
    closed: true,
    closedAt: '2017-10-28T13:17:16Z',
    merged: true,
    mergedAt: '2017-10-28T13:17:16Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 264,
    title: 'Fixing typos',
    createdAt: '2017-10-28T09:08:25Z',
    closed: true,
    closedAt: '2017-10-28T12:23:42Z',
    merged: true,
    mergedAt: '2017-10-28T12:23:42Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 263,
    title: 'Fixing non-context-shifting partial RFC typos',
    createdAt: '2017-10-28T00:12:32Z',
    closed: true,
    closedAt: '2017-10-28T00:13:13Z',
    merged: true,
    mergedAt: '2017-10-28T00:13:13Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 262,
    title: 'Non-context-shifting partials',
    createdAt: '2017-10-27T23:11:53Z',
    closed: true,
    closedAt: '2018-01-03T21:34:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 260,
    title: 'Serializer Test Helpers',
    createdAt: '2017-10-18T22:11:53Z',
    closed: true,
    closedAt: '2019-04-24T21:41:35Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-10-19T11:29:27Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-10T22:02:27Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 259,
    title: 'Marketing Releases',
    createdAt: '2017-10-11T23:00:05Z',
    closed: true,
    closedAt: '2018-09-07T20:03:20Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 253,
    title: 'Update 0252-browser-support-changes.md',
    createdAt: '2017-09-25T16:20:24Z',
    closed: true,
    closedAt: '2017-09-25T16:40:51Z',
    merged: true,
    mergedAt: '2017-09-25T16:40:51Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 252,
    title: 'Browser Support Changes',
    createdAt: '2017-09-25T15:45:17Z',
    closed: true,
    closedAt: '2017-10-13T18:41:35Z',
    merged: true,
    mergedAt: '2017-10-13T18:41:35Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-10-01T15:41:35Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 246,
    title: 'Array#findIndex and Array#findIndexBy',
    createdAt: '2017-08-25T12:11:22Z',
    closed: true,
    closedAt: '2018-03-01T23:53:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-09-01T14:33:59Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 244,
    title: 'Update 0000-find-polymorphism.md',
    createdAt: '2017-08-16T10:13:36Z',
    closed: true,
    closedAt: '2023-03-27T05:44:15Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-09-01T14:33:32Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:35:47Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 242,
    title:
      'Ember.component support for aria-label, aria-labelledby, and aria-describedby',
    createdAt: '2017-07-31T22:37:23Z',
    closed: true,
    closedAt: '2018-06-01T20:18:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:18:16Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 240,
    title: 'ES Classes',
    createdAt: '2017-07-29T04:54:54Z',
    closed: true,
    closedAt: '2017-08-25T19:11:05Z',
    merged: true,
    mergedAt: '2017-08-25T19:11:05Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:14:56Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-11T21:58:03Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 239,
    title: 'Fix typo',
    createdAt: '2017-07-29T02:17:58Z',
    closed: true,
    closedAt: '2017-07-29T03:07:43Z',
    merged: true,
    mergedAt: '2017-07-29T03:07:43Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 238,
    title: 'Ember Data JavaScript Modules API',
    createdAt: '2017-07-25T13:34:56Z',
    closed: true,
    closedAt: '2018-02-15T00:09:53Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:18:10Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 237,
    title: 'Remove Ember.Map, Ember.MapWithDefault and Ember.OrderedSet',
    createdAt: '2017-07-20T11:00:38Z',
    closed: true,
    closedAt: '2018-04-06T19:00:47Z',
    merged: true,
    mergedAt: '2018-04-06T19:00:47Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:14:56Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:21:08Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-03-09T20:11:16Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 236,
    title: 'Ember.String deprecation RFC',
    createdAt: '2017-07-19T21:07:40Z',
    closed: true,
    closedAt: '2017-09-26T08:21:15Z',
    merged: true,
    mergedAt: '2017-09-26T08:21:15Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:14:55Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:19:07Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-09-01T23:40:22Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 235,
    title: 'Release Channel Names',
    createdAt: '2017-07-12T12:37:20Z',
    closed: true,
    closedAt: '2017-09-01T13:58:10Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:02:19Z',
          label: {
            name: 'T-infrastructure',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 233,
    title: 'Replace `any` in favour of `some` to align with regular JS',
    createdAt: '2017-06-29T17:03:14Z',
    closed: true,
    closedAt: '2020-01-18T12:53:00Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:14:55Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:21:07Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:18:50Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 232,
    title: 'Add new QUnit testing API.',
    createdAt: '2017-06-14T03:49:12Z',
    closed: true,
    closedAt: '2017-07-29T14:11:51Z',
    merged: true,
    mergedAt: '2017-07-29T14:11:51Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-07-01T10:14:17Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 231,
    title: 'Update issue link to go directly to where progress was tracked',
    createdAt: '2017-06-13T18:20:27Z',
    closed: true,
    closedAt: '2017-06-14T03:45:08Z',
    merged: true,
    mergedAt: '2017-06-14T03:45:08Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 230,
    title: 'Link component hook',
    createdAt: '2017-06-12T21:06:13Z',
    closed: true,
    closedAt: '2020-11-20T19:41:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:18:36Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2020-11-13T19:47:30Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 229,
    title: 'Deprecate usage of restricted resolver.',
    createdAt: '2017-06-12T00:30:52Z',
    closed: true,
    closedAt: '2017-07-29T14:11:02Z',
    merged: true,
    mergedAt: '2017-07-29T14:11:02Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-07-01T10:13:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:20:16Z',
          label: {
            name: 'T-framework',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:20:29Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 228,
    title: 'Single File Components RFC',
    createdAt: '2017-05-22T16:57:19Z',
    closed: true,
    closedAt: '2018-08-08T05:14:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:18:36Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 226,
    title: 'Named Blocks',
    createdAt: '2017-05-05T18:41:13Z',
    closed: true,
    closedAt: '2017-07-28T23:03:08Z',
    merged: true,
    mergedAt: '2017-07-28T23:03:08Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-07-17T12:20:51Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 225,
    title: 'Allow {{mount}} syntax to accept parameters',
    createdAt: '2017-04-26T16:56:29Z',
    closed: true,
    closedAt: '2017-05-06T15:39:32Z',
    merged: true,
    mergedAt: '2017-05-06T15:39:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-04-28T18:56:21Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-05-06T15:39:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 223,
    title: 'Add `isEqual` named export to`@ember/utils`',
    createdAt: '2017-04-21T01:39:08Z',
    closed: true,
    closedAt: '2017-06-12T17:49:13Z',
    merged: true,
    mergedAt: '2017-06-12T17:49:13Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 221,
    title: 'RFC to deprecate `resetNamespace`',
    createdAt: '2017-04-18T13:37:26Z',
    closed: true,
    closedAt: '2018-01-22T15:29:56Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:19:42Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-08-01T03:19:53Z',
          label: {
            name: 'T-deprecation',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 220,
    title: 'Introduce external redirects',
    createdAt: '2017-04-10T16:03:59Z',
    closed: true,
    closedAt: '2022-07-23T17:52:15Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:24:11Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 219,
    title: 'Update Ember Issue of Module Unification RFC',
    createdAt: '2017-04-06T16:47:26Z',
    closed: true,
    closedAt: '2017-04-07T02:07:14Z',
    merged: true,
    mergedAt: '2017-04-07T02:07:14Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 216,
    title: 'Add dasherized-test-name-generator-option RFC',
    createdAt: '2017-03-20T10:18:19Z',
    closed: true,
    closedAt: '2018-01-21T16:59:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:23:16Z',
          label: {
            name: 'T-testing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 215,
    title: 'Fix destructure syntax',
    createdAt: '2017-03-14T15:15:46Z',
    closed: true,
    closedAt: '2017-03-15T17:33:57Z',
    merged: true,
    mergedAt: '2017-03-15T17:33:57Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 214,
    title: 'Cleanup',
    createdAt: '2017-03-14T14:55:35Z',
    closed: true,
    closedAt: '2017-03-14T15:00:21Z',
    merged: true,
    mergedAt: '2017-03-14T15:00:21Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 213,
    title: 'Custom Components API',
    createdAt: '2017-03-13T23:02:46Z',
    closed: true,
    closedAt: '2018-03-21T15:34:46Z',
    merged: true,
    mergedAt: '2018-03-21T15:34:46Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:22:10Z',
          label: {
            name: 'T-components',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-03-09T22:12:54Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 208,
    title: 'Contextual helpers',
    createdAt: '2017-02-07T22:40:00Z',
    closed: true,
    closedAt: '2019-01-17T19:50:48Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:22:03Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 205,
    title: 'Allow for specifying epsilon segments in routes',
    createdAt: '2017-01-26T18:53:59Z',
    closed: true,
    closedAt: '2022-07-23T17:28:06Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:24:11Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 204,
    title: 'RFC: Template import directives',
    createdAt: '2017-01-24T20:30:08Z',
    closed: true,
    closedAt: '2019-05-31T17:41:32Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:23:28Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 203,
    title: 'Nested Glimmer Syntax + attr/component-centric slots',
    createdAt: '2017-01-20T05:47:09Z',
    closed: true,
    closedAt: '2017-03-08T13:32:55Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 202,
    title: 'Allow the `with` helper accept named arguments',
    createdAt: '2017-01-17T12:53:47Z',
    closed: true,
    closedAt: '2020-11-03T18:44:05Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:23:51Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-01-25T03:18:55Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 201,
    title: 'Update 0000-template.md',
    createdAt: '2017-01-16T13:18:07Z',
    closed: true,
    closedAt: '2017-01-24T23:01:09Z',
    merged: true,
    mergedAt: '2017-01-24T23:01:09Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 200,
    title: '`let` it be: bind names to values in templates',
    createdAt: '2017-01-15T00:53:12Z',
    closed: true,
    closedAt: '2018-09-18T15:19:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:23:51Z',
          label: {
            name: 'T-templates',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 199,
    title: 'Local template blocks (as a precursor to block slot syntax)',
    createdAt: '2017-01-14T20:39:41Z',
    closed: true,
    closedAt: '2017-01-18T18:51:10Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 194,
    title: 'Deprecate component `eventManager`',
    createdAt: '2016-12-26T12:42:39Z',
    closed: true,
    closedAt: '2017-03-26T06:36:44Z',
    merged: true,
    mergedAt: '2017-03-26T06:36:44Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-01-27T18:35:29Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 193,
    title: 'Yet another named blocks/yields RFC',
    createdAt: '2016-12-19T10:02:08Z',
    closed: true,
    closedAt: '2017-07-30T14:44:17Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 192,
    title: 'Query-Params Lifecycle',
    createdAt: '2016-12-14T23:44:31Z',
    closed: true,
    closedAt: '2017-01-04T18:30:04Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 191,
    title: 'Deprecate component lifecycle hook arguments.',
    createdAt: '2016-12-14T17:02:24Z',
    closed: true,
    closedAt: '2017-01-02T01:12:40Z',
    merged: true,
    mergedAt: '2017-01-02T01:12:40Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-12-23T23:03:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 188,
    title: 'v1 of the proposal',
    createdAt: '2016-12-09T23:06:09Z',
    closed: true,
    closedAt: '2016-12-09T23:09:43Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 186,
    title: 'RFC: Track unique history location state',
    createdAt: '2016-12-05T14:20:45Z',
    closed: true,
    closedAt: '2017-01-20T19:42:57Z',
    merged: true,
    mergedAt: '2017-01-20T19:42:57Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-01-17T01:59:07Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 185,
    title: 'RFC: POST to Fastboot',
    createdAt: '2016-12-05T00:02:22Z',
    closed: true,
    closedAt: '2019-01-18T18:36:28Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-08-01T03:33:01Z',
          label: {
            name: 'T-fastboot',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 181,
    title: 'Add RFC for deprecation Ember Data initializers',
    createdAt: '2016-11-22T21:46:46Z',
    closed: true,
    closedAt: '2017-01-25T19:32:54Z',
    merged: true,
    mergedAt: '2017-01-25T19:32:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-01-05T15:08:50Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-01-09T03:42:38Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 178,
    title: 'Deprecate Ember.K',
    createdAt: '2016-11-18T20:02:47Z',
    closed: true,
    closedAt: '2016-12-21T01:57:16Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-12-10T15:42:27Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 176,
    title: 'RFC: JavaScript Modules API',
    createdAt: '2016-11-06T01:55:03Z',
    closed: true,
    closedAt: '2017-01-13T22:40:32Z',
    merged: true,
    mergedAt: '2017-01-13T22:40:32Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-12-14T01:16:05Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2017-04-05T14:41:39Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 173,
    title: 'Add support for nested saves',
    createdAt: '2016-10-18T14:15:11Z',
    closed: true,
    closedAt: '2019-06-19T23:17:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-10-18T14:21:51Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 171,
    title: 'Improved ajax',
    createdAt: '2016-10-11T11:50:03Z',
    closed: true,
    closedAt: '2018-06-27T16:45:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-10-11T11:50:03Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 166,
    title: 'Added the missing }}',
    createdAt: '2016-08-26T10:44:45Z',
    closed: true,
    closedAt: '2016-08-26T11:24:16Z',
    merged: true,
    mergedAt: '2016-08-26T11:24:16Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 165,
    title: 'typos',
    createdAt: '2016-08-23T14:02:54Z',
    closed: true,
    closedAt: '2016-08-23T14:07:17Z',
    merged: true,
    mergedAt: '2016-08-23T14:07:17Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 164,
    title: 'RFC for public ApplicationInstance API',
    createdAt: '2016-08-19T17:28:04Z',
    closed: true,
    closedAt: '2022-07-23T17:22:32Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 162,
    title: 'Update 0000-router-service.md',
    createdAt: '2016-08-02T23:26:23Z',
    closed: true,
    closedAt: '2016-08-12T17:55:36Z',
    merged: true,
    mergedAt: '2016-08-12T17:55:36Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 161,
    title: 'Overhaul store.push and store.pushPayload',
    createdAt: '2016-08-01T16:26:10Z',
    closed: true,
    closedAt: '2019-08-21T21:20:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-08-01T16:26:10Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-06-19T21:58:05Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 160,
    title: 'Links and meta improvements',
    createdAt: '2016-07-29T14:53:23Z',
    closed: true,
    closedAt: '2018-10-12T14:42:50Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-07-29T14:53:23Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 159,
    title: 'Add base model',
    createdAt: '2016-07-26T20:23:01Z',
    closed: true,
    closedAt: '2019-06-05T21:19:38Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-07-26T20:23:01Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-24T21:47:57Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 158,
    title: 'RFC: Asset Loader Service',
    createdAt: '2016-07-22T17:01:58Z',
    closed: true,
    closedAt: '2018-03-09T22:19:29Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-04-28T18:59:16Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2018-03-09T22:17:20Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 155,
    title: 'RFC: Ancillary Package Module Standardization',
    createdAt: '2016-07-19T15:56:31Z',
    closed: true,
    closedAt: '2018-01-24T17:31:10Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 154,
    title: 'RFC for router enhancements',
    createdAt: '2016-07-19T00:10:49Z',
    closed: true,
    closedAt: '2022-07-23T17:30:10Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 153,
    title: 'RFC: Asset Manifest',
    createdAt: '2016-07-17T22:45:10Z',
    closed: true,
    closedAt: '2018-03-09T22:20:10Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-04-28T18:59:30Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 152,
    title: 'Introduce basic logic HBS helpers',
    createdAt: '2016-07-16T11:30:06Z',
    closed: true,
    closedAt: '2019-01-25T02:49:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 150,
    title: '`factoryFor` as a public API replacing `_lookupFactory`',
    createdAt: '2016-07-01T20:30:37Z',
    closed: true,
    closedAt: '2016-10-07T19:07:47Z',
    merged: true,
    mergedAt: '2016-10-07T19:07:47Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-09-27T00:20:25Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2016-10-07T19:26:46Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 149,
    title: 'Introduce "final comment period" into process description',
    createdAt: '2016-06-23T20:07:24Z',
    closed: true,
    closedAt: '2016-06-29T15:08:24Z',
    merged: true,
    mergedAt: '2016-06-29T15:08:24Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 148,
    title: 'Update and rename 0000-isHtmlSafe.md to 0139-isHtmlSafe.md',
    createdAt: '2016-06-19T15:43:06Z',
    closed: true,
    closedAt: '2016-06-19T15:43:10Z',
    merged: true,
    mergedAt: '2016-06-19T15:43:10Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 147,
    title: 'Tweak weakmap template.',
    createdAt: '2016-06-16T18:18:48Z',
    closed: true,
    closedAt: '2016-06-16T18:18:59Z',
    merged: true,
    mergedAt: '2016-06-16T18:18:59Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 145,
    title: 'typo',
    createdAt: '2016-05-30T15:42:05Z',
    closed: true,
    closedAt: '2016-05-30T15:45:15Z',
    merged: true,
    mergedAt: '2016-05-30T15:45:15Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 144,
    title: 'Add Ember issue to 0136-contains-to-includes.md',
    createdAt: '2016-05-25T11:18:05Z',
    closed: true,
    closedAt: '2016-05-25T11:42:44Z',
    merged: true,
    mergedAt: '2016-05-25T11:42:44Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 143,
    title: 'Module Unification',
    createdAt: '2016-05-09T18:11:26Z',
    closed: true,
    closedAt: '2016-10-18T15:06:41Z',
    merged: true,
    mergedAt: '2016-10-18T15:06:41Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-06-29T20:05:41Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2016-10-18T16:48:51Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
  {
    number: 141,
    title: 'Adds lazy-load-overview',
    createdAt: '2016-04-26T01:54:01Z',
    closed: true,
    closedAt: '2016-11-28T04:24:33Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 139,
    title: 'Ember.String.isHtmlSafe RFC',
    createdAt: '2016-04-18T14:47:14Z',
    closed: true,
    closedAt: '2016-06-12T23:37:14Z',
    merged: true,
    mergedAt: '2016-06-12T23:37:14Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 136,
    title: 'Add contains to includes RFC',
    createdAt: '2016-04-16T15:06:05Z',
    closed: true,
    closedAt: '2016-04-30T19:38:42Z',
    merged: true,
    mergedAt: '2016-04-30T19:38:42Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 135,
    title: 'buildQuery RFC',
    createdAt: '2016-04-15T17:32:33Z',
    closed: true,
    closedAt: '2018-11-13T16:05:09Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-04-15T17:41:15Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 133,
    title: 'Deprecation RFC Template',
    createdAt: '2016-04-14T19:34:05Z',
    closed: true,
    closedAt: '2016-04-20T21:05:14Z',
    merged: true,
    mergedAt: '2016-04-20T21:05:14Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 132,
    title:
      'Ember CLI: Strip some framework function invocations from production builds',
    createdAt: '2016-04-06T15:43:49Z',
    closed: true,
    closedAt: '2016-04-06T15:59:21Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 130,
    title: 'RFC doc for adding uniqBy to enumerable',
    createdAt: '2016-04-03T18:51:31Z',
    closed: true,
    closedAt: '2016-04-15T19:08:55Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 126,
    title: 'RFC for Hook/Event for Transitioning During a Transition',
    createdAt: '2016-03-16T18:35:24Z',
    closed: true,
    closedAt: '2016-09-16T23:19:42Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 124,
    title: 'Module Normalization',
    createdAt: '2016-03-08T13:22:45Z',
    closed: true,
    closedAt: '2016-05-09T18:12:17Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 123,
    title: 'Model Lifecycle Hooks',
    createdAt: '2016-03-04T19:26:38Z',
    closed: true,
    closedAt: '2019-06-05T21:21:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-03-04T19:26:38Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-04-24T21:50:11Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 122,
    title: 'Linking Between Engines (and Applications)',
    createdAt: '2016-02-17T23:21:33Z',
    closed: true,
    closedAt: '2018-03-09T22:19:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2017-04-28T18:59:44Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 120,
    title: 'Introduce Route Serializers',
    createdAt: '2016-02-11T20:50:13Z',
    closed: true,
    closedAt: '2016-03-18T22:49:20Z',
    merged: true,
    mergedAt: '2016-03-18T22:49:20Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 119,
    title: 'Grand Testing Unification',
    createdAt: '2016-02-08T19:47:04Z',
    closed: true,
    closedAt: '2020-05-22T20:45:33Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 118,
    title: 'RFC process improvements.',
    createdAt: '2016-02-08T03:56:33Z',
    closed: true,
    closedAt: '2016-02-13T17:20:22Z',
    merged: true,
    mergedAt: '2016-02-13T17:20:22Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 116,
    title: 'Define routes without `this`',
    createdAt: '2016-02-01T17:20:49Z',
    closed: true,
    closedAt: '2016-07-23T14:43:32Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 115,
    title: 'Add Ember.run.callback()',
    createdAt: '2016-01-29T05:32:45Z',
    closed: true,
    closedAt: '2022-07-23T17:47:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 114,
    title: 'Complete infos about RFCs',
    createdAt: '2016-01-27T19:05:44Z',
    closed: true,
    closedAt: '2016-02-08T02:29:00Z',
    merged: true,
    mergedAt: '2016-02-08T02:29:00Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 113,
    title: 'Expose query param defaults',
    createdAt: '2016-01-27T14:37:21Z',
    closed: true,
    closedAt: '2022-12-16T19:36:00Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2022-12-02T15:35:46Z',
          label: {
            name: 'S-Proposed',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-02T15:36:39Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2022-12-06T23:46:53Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 112,
    title: 'Element Modifiers',
    createdAt: '2016-01-24T22:06:17Z',
    closed: true,
    closedAt: '2019-03-02T16:08:28Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 110,
    title: 'promise-aware templates',
    createdAt: '2016-01-17T03:59:13Z',
    closed: true,
    closedAt: '2016-02-09T02:47:58Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 107,
    title: 'fix typo',
    createdAt: '2015-12-07T14:19:37Z',
    closed: true,
    closedAt: '2015-12-07T14:21:32Z',
    merged: true,
    mergedAt: '2015-12-07T14:21:32Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 102,
    title: 'hasBlock.js',
    createdAt: '2015-10-27T23:06:54Z',
    closed: true,
    closedAt: '2017-07-30T17:25:38Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 101,
    title: 'Friendly Errors',
    createdAt: '2015-10-23T14:58:37Z',
    closed: true,
    closedAt: '2016-01-06T00:45:21Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-10-23T20:17:45Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 100,
    title: 'Attribute Actions',
    createdAt: '2015-10-18T15:58:33Z',
    closed: true,
    closedAt: '2016-01-18T05:12:41Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 99,
    title:
      "Allow query parameters to be specified when finding records via Ember Data's Store",
    createdAt: '2015-10-11T21:37:00Z',
    closed: true,
    closedAt: '2016-09-20T16:09:11Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-10-12T00:46:28Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 98,
    title: 'Service methods and method injection',
    createdAt: '2015-10-08T15:56:20Z',
    closed: true,
    closedAt: '2017-07-25T02:06:06Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 97,
    title: '[Route Prefetching] Allow routes to request data in parallel',
    createdAt: '2015-10-05T15:24:44Z',
    closed: true,
    closedAt: '2016-08-19T16:27:45Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 96,
    title: 'Assisted ember upgrades',
    createdAt: '2015-10-02T21:43:17Z',
    closed: true,
    closedAt: '2015-10-05T13:40:38Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 95,
    title: 'Create Router Service',
    createdAt: '2015-09-24T22:35:33Z',
    closed: true,
    closedAt: '2016-10-27T02:20:54Z',
    merged: true,
    mergedAt: '2016-10-27T02:20:54Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-09-30T20:04:43Z',
          label: {
            name: 'Final Comment Period',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 94,
    title: 'RFC: `network` Service',
    createdAt: '2015-09-21T20:57:42Z',
    closed: true,
    closedAt: '2015-11-18T17:40:31Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 92,
    title: '`url-for` helper',
    createdAt: '2015-09-13T13:46:40Z',
    closed: true,
    closedAt: '2016-10-14T19:25:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 91,
    title: 'WeakMap RFC',
    createdAt: '2015-09-12T01:13:15Z',
    closed: true,
    closedAt: '2016-06-14T20:20:46Z',
    merged: true,
    mergedAt: '2016-06-14T20:20:46Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 88,
    title: 'Addon Version Compatibility',
    createdAt: '2015-09-05T03:54:35Z',
    closed: true,
    closedAt: '2020-04-16T20:04:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 87,
    title: 'Ember.computed.sortBy',
    createdAt: '2015-08-26T12:52:30Z',
    closed: true,
    closedAt: '2016-01-29T21:12:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 86,
    title: 'Capture Based Eventing',
    createdAt: '2015-08-22T17:25:40Z',
    closed: true,
    closedAt: '2021-04-24T04:14:59Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 85,
    title: 'Heavy petting for the contextual component RFC',
    createdAt: '2015-08-15T04:09:55Z',
    closed: true,
    closedAt: '2015-08-15T17:42:03Z',
    merged: true,
    mergedAt: '2015-08-15T17:42:03Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 84,
    title: 'Process for Deprecation Warnings',
    createdAt: '2015-08-12T20:15:12Z',
    closed: true,
    closedAt: '2015-08-13T05:55:57Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 79,
    title: 'Improve CPs ergonomics by changing caching strategy',
    createdAt: '2015-07-31T08:57:09Z',
    closed: true,
    closedAt: '2020-05-22T19:27:56Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-05-15T19:23:12Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 75,
    title: '[meta] Add note about filing issues before full RFC PRs',
    createdAt: '2015-07-06T19:37:12Z',
    closed: true,
    closedAt: '2015-07-06T19:48:45Z',
    merged: true,
    mergedAt: '2015-07-06T19:48:45Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 73,
    title: 'Make jQuery Optional',
    createdAt: '2015-07-06T12:46:22Z',
    closed: true,
    closedAt: '2018-01-18T09:59:17Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 72,
    title: 'Named yields for components',
    createdAt: '2015-07-04T10:17:36Z',
    closed: true,
    closedAt: '2017-07-30T14:43:30Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 71,
    title: 'Actions (aka Rails Service Objects)',
    createdAt: '2015-06-29T16:00:18Z',
    closed: true,
    closedAt: '2015-09-29T03:40:02Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 70,
    title: 'Namespaced components & helpers lookup',
    createdAt: '2015-06-29T09:46:43Z',
    closed: true,
    closedAt: '2019-01-18T18:34:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 69,
    title: 'Using an initializer customEvents can be added to an application',
    createdAt: '2015-06-29T07:11:57Z',
    closed: true,
    closedAt: '2015-08-14T16:34:47Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 68,
    title: 'ES6 modules',
    createdAt: '2015-06-23T18:28:23Z',
    closed: true,
    closedAt: '2016-11-07T15:02:42Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 67,
    title: 'Better record polymorphism',
    createdAt: '2015-06-19T17:08:35Z',
    closed: true,
    closedAt: '2022-07-25T18:13:25Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-07-13T01:15:26Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 66,
    title: 'Outlet Focusing',
    createdAt: '2015-06-14T23:40:15Z',
    closed: true,
    closedAt: '2016-02-28T18:15:30Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 65,
    title: 'Deprecation warning handlers',
    createdAt: '2015-06-14T21:16:54Z',
    closed: true,
    closedAt: '2015-07-08T01:27:09Z',
    merged: true,
    mergedAt: '2015-07-08T01:27:09Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 64,
    title: 'Contextual components RFC',
    createdAt: '2015-06-12T18:48:54Z',
    closed: true,
    closedAt: '2015-08-26T02:42:58Z',
    merged: true,
    mergedAt: '2015-08-26T02:42:58Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 62,
    title: 'Redirects',
    createdAt: '2015-06-06T23:43:42Z',
    closed: true,
    closedAt: '2022-07-20T18:56:53Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2020-11-03T19:10:39Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 61,
    title: 'Ember Data background fetch RFC',
    createdAt: '2015-06-03T22:41:16Z',
    closed: true,
    closedAt: '2016-01-06T00:49:45Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-06-07T22:21:31Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 60,
    title: 'Component Unification (angle brackets)',
    createdAt: '2015-05-25T00:42:24Z',
    closed: true,
    closedAt: '2016-04-15T21:05:19Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 59,
    title: 'Move completed RFCs and fixup numbering',
    createdAt: '2015-05-24T23:42:59Z',
    closed: true,
    closedAt: '2015-05-25T01:08:29Z',
    merged: true,
    mergedAt: '2015-05-25T01:08:29Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 58,
    title: 'Helper listing (dashless helpers)',
    createdAt: '2015-05-24T17:36:53Z',
    closed: true,
    closedAt: '2015-06-13T22:17:14Z',
    merged: true,
    mergedAt: '2015-06-13T22:17:14Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 57,
    title: 'RFC for reference unification',
    createdAt: '2015-05-23T01:10:45Z',
    closed: true,
    closedAt: '2016-01-11T18:22:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2016-01-25T19:09:33Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 56,
    title: 'Release cycle improvements',
    createdAt: '2015-05-22T05:32:15Z',
    closed: true,
    closedAt: '2015-10-02T18:51:04Z',
    merged: true,
    mergedAt: '2015-10-02T18:51:04Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 55,
    title: 'Update table format in "Stateful Helpers"',
    createdAt: '2015-05-19T20:13:03Z',
    closed: true,
    closedAt: '2015-05-19T20:56:33Z',
    merged: true,
    mergedAt: '2015-05-19T20:56:33Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 54,
    title: 'Update 0000-stateful-helpers.md',
    createdAt: '2015-05-18T03:08:02Z',
    closed: true,
    closedAt: '2015-05-18T03:09:54Z',
    merged: true,
    mergedAt: '2015-05-18T03:09:54Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 53,
    title: 'Helpers',
    createdAt: '2015-05-18T03:02:20Z',
    closed: true,
    closedAt: '2015-06-07T20:15:25Z',
    merged: true,
    mergedAt: '2015-06-07T20:15:25Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 52,
    title: 'Expression RFC',
    createdAt: '2015-05-17T19:03:07Z',
    closed: true,
    closedAt: '2015-05-18T02:29:51Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 51,
    title: 'Fix typo & add hbs to code fences where missing',
    createdAt: '2015-05-07T08:45:34Z',
    closed: true,
    closedAt: '2015-05-07T09:51:26Z',
    merged: true,
    mergedAt: '2015-05-07T09:51:26Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 50,
    title: 'Add improved actions RFC',
    createdAt: '2015-05-07T00:27:38Z',
    closed: true,
    closedAt: '2015-05-11T18:19:22Z',
    merged: true,
    mergedAt: '2015-05-11T18:19:22Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 48,
    title: 'Query params that reloadModel should not trigger loading route.',
    createdAt: '2015-04-14T02:25:35Z',
    closed: true,
    closedAt: '2022-07-23T17:24:36Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 47,
    title: 'Named Template Blocks',
    createdAt: '2015-04-13T04:31:52Z',
    closed: true,
    closedAt: '2015-06-07T22:20:42Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 46,
    title: 'Registry / Container reform',
    createdAt: '2015-04-09T14:17:23Z',
    closed: true,
    closedAt: '2015-07-23T15:36:54Z',
    merged: true,
    mergedAt: '2015-07-23T15:36:54Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 45,
    title: 'Solicit feedback about IE8 and IE9 support in Ember 2.x',
    createdAt: '2015-04-04T02:14:50Z',
    closed: true,
    closedAt: '2015-06-07T19:01:10Z',
    merged: true,
    mergedAt: '2015-06-07T19:01:09Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 44,
    title: 'Route driven pod structure',
    createdAt: '2015-04-03T17:08:17Z',
    closed: true,
    closedAt: '2015-06-07T21:51:54Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 43,
    title: 'Multiple yields',
    createdAt: '2015-04-02T05:21:13Z',
    closed: true,
    closedAt: '2015-06-07T21:48:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 42,
    title: 'Global Action Bubbling for Components',
    createdAt: '2015-03-30T19:19:58Z',
    closed: true,
    closedAt: '2015-05-11T15:24:12Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-30T19:44:14Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 41,
    title: 'Add glossary section of detailed',
    createdAt: '2015-03-18T23:31:17Z',
    closed: true,
    closedAt: '2015-03-27T19:20:50Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 40,
    title: 'Substate routing RFC',
    createdAt: '2015-03-14T15:49:46Z',
    closed: true,
    closedAt: '2015-06-07T21:44:19Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:05:15Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 39,
    title: 'Changing top level dynamic segments while preserving others',
    createdAt: '2015-03-10T02:58:02Z',
    closed: true,
    closedAt: '2022-07-23T17:26:28Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:05:27Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 38,
    title: 'Routable Components RFC',
    createdAt: '2015-02-27T20:32:33Z',
    closed: true,
    closedAt: '2018-01-07T05:25:17Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:05:45Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T19:05:45Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 37,
    title: 'Element and Fragment RFC',
    createdAt: '2015-02-27T20:31:56Z',
    closed: true,
    closedAt: '2015-06-07T18:48:26Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:05:55Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T19:05:55Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-04-03T16:16:21Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2015-04-03T16:16:21Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2015-04-06T01:05:08Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-04-06T01:05:08Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 36,
    title: 'RFC: Optional Segments in Routing',
    createdAt: '2015-02-24T01:39:22Z',
    closed: true,
    closedAt: '2022-07-23T18:08:39Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:06:12Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-04-13T20:16:54Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-04-13T20:16:54Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2020-11-03T19:10:34Z',
          label: {
            name: 'T-routing',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 35,
    title: 'RFC: Create attrTypes to describe the interface of a component',
    createdAt: '2015-02-21T02:32:04Z',
    closed: true,
    closedAt: '2015-06-07T18:52:37Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T19:06:23Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 34,
    title: 'RFC: Default Container Values',
    createdAt: '2015-02-15T23:59:50Z',
    closed: true,
    closedAt: '2015-05-28T02:20:31Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:56:20Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 33,
    title: 'Remove records from record arrays only in deleted.saved state',
    createdAt: '2015-02-13T22:26:24Z',
    closed: true,
    closedAt: '2018-06-22T00:10:15Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-23T05:14:57Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:53:37Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 32,
    title: 'Ember-Data and non-CRUD endpoints',
    createdAt: '2015-02-05T03:33:27Z',
    closed: true,
    closedAt: '2016-04-15T14:48:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:12:40Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:52:07Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 31,
    title: 'Ember data partial record loading',
    createdAt: '2015-01-26T17:19:41Z',
    closed: true,
    closedAt: '2015-05-24T23:49:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:12:10Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:51:48Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 30,
    title: "Don't update query params if there was no transition",
    createdAt: '2015-01-23T23:35:18Z',
    closed: true,
    closedAt: '2015-06-07T18:43:35Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:51:17Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 29,
    title: 'HTMLBars Component Attribute Types',
    createdAt: '2015-01-18T14:12:47Z',
    closed: true,
    closedAt: '2015-04-21T22:21:49Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:50:57Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 27,
    title: 'ember data loading methods',
    createdAt: '2014-12-31T08:47:45Z',
    closed: true,
    closedAt: '2019-06-05T21:33:28Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:14:41Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:50:41Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 26,
    title: 'RFC: toggle-visibility',
    createdAt: '2014-12-24T21:58:59Z',
    closed: true,
    closedAt: '2015-06-07T18:39:14Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:50:20Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 25,
    title: 'typo',
    createdAt: '2014-12-22T08:33:57Z',
    closed: true,
    closedAt: '2014-12-22T13:38:07Z',
    merged: true,
    mergedAt: '2014-12-22T13:38:07Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 24,
    title: 'HTMLBars Bound Attributes',
    createdAt: '2014-11-27T15:10:19Z',
    closed: true,
    closedAt: '2015-05-07T00:14:16Z',
    merged: true,
    mergedAt: '2015-05-07T00:14:16Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 23,
    title: 'Ember Data Filter Objects',
    createdAt: '2014-11-17T22:51:55Z',
    closed: true,
    closedAt: '2018-02-28T19:54:52Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:11:32Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:45:30Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 21,
    title:
      'Provide a way to mark a model as dirty when relationships or related model properties change.',
    createdAt: '2014-11-13T23:49:03Z',
    closed: true,
    closedAt: '2021-04-28T21:26:26Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:11:15Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:44:57Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-08-21T21:29:03Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'UnlabeledEvent',
        },
        {
          createdAt: '2019-08-21T21:29:03Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 20,
    title: 'Add Ember issue to 0001-improved-cp-syntax.md',
    createdAt: '2014-11-13T04:22:50Z',
    closed: true,
    closedAt: '2015-02-05T08:10:43Z',
    merged: true,
    mergedAt: '2015-02-05T08:10:43Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 17,
    title: 'ember data testing helpers',
    createdAt: '2014-11-04T03:20:57Z',
    closed: true,
    closedAt: '2016-11-08T14:43:27Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-02-05T08:08:57Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:44:15Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 16,
    title: 'Embedded handlebars draft 1',
    createdAt: '2014-11-03T17:23:07Z',
    closed: true,
    closedAt: '2014-11-04T14:53:14Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 15,
    title: 'The Road to Ember 2.0 RFC',
    createdAt: '2014-11-03T17:03:17Z',
    closed: true,
    closedAt: '2015-06-07T18:47:10Z',
    merged: true,
    mergedAt: '2015-06-07T18:47:10Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 14,
    title: 'Fix typo',
    createdAt: '2014-11-03T15:53:22Z',
    closed: true,
    closedAt: '2014-11-03T16:10:58Z',
    merged: true,
    mergedAt: '2014-11-03T16:10:58Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 13,
    title: 'English Mother@#$%*&^ Do You Speak It?',
    createdAt: '2014-11-02T17:58:27Z',
    closed: true,
    closedAt: '2014-11-02T18:11:48Z',
    merged: true,
    mergedAt: '2014-11-02T18:11:48Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 12,
    title: 'RFC: Getter CP readOnly by default',
    createdAt: '2014-10-31T03:41:07Z',
    closed: true,
    closedAt: '2015-06-07T18:28:41Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 11,
    title: 'RFC: Improved CP Syntax',
    createdAt: '2014-10-31T03:35:37Z',
    closed: true,
    closedAt: '2014-11-02T17:43:59Z',
    merged: true,
    mergedAt: '2014-11-02T17:43:59Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 10,
    title: 'RFC: Engines',
    createdAt: '2014-10-25T00:32:05Z',
    closed: true,
    closedAt: '2016-04-11T14:40:10Z',
    merged: true,
    mergedAt: '2016-04-11T14:40:10Z',
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:40:21Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:40:21Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 9,
    title: 'Computed properties change gate',
    createdAt: '2014-10-02T17:31:09Z',
    closed: true,
    closedAt: '2014-10-10T18:50:20Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 8,
    title: 'RFC: ES6 container',
    createdAt: '2014-09-22T12:18:09Z',
    closed: true,
    closedAt: '2015-06-07T18:25:12Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2015-03-27T18:43:46Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 7,
    title: 'Mixer and Mixin Recipes proposal',
    createdAt: '2014-08-30T09:20:30Z',
    closed: true,
    closedAt: '2014-10-10T18:53:19Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 6,
    title: 'first draft of namespaced resolver proposal',
    createdAt: '2014-08-29T18:08:58Z',
    closed: true,
    closedAt: '2014-08-30T09:01:23Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 5,
    title: 'RFC: JSON Patch support for Ember Data',
    createdAt: '2014-08-23T00:32:07Z',
    closed: true,
    closedAt: '2016-01-09T00:03:24Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2014-10-01T21:04:17Z',
          label: {
            name: 'T-ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:43:29Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 4,
    title: 'RFC: Ember Data url templates',
    createdAt: '2014-08-20T21:38:09Z',
    closed: true,
    closedAt: '2019-08-21T21:18:42Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2014-08-22T18:30:31Z',
          label: {
            name: 'ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:42:59Z',
          label: {
            name: 'Needs Champion',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2019-06-26T21:11:30Z',
          label: {
            name: 'FCP to close',
          },
          __typename: 'LabeledEvent',
        },
      ],
    },
  },
  {
    number: 3,
    title: 'RFC: Block params',
    createdAt: '2014-08-18T17:39:26Z',
    closed: true,
    closedAt: '2014-11-20T14:51:27Z',
    merged: true,
    mergedAt: '2014-11-20T14:51:27Z',
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 2,
    title: 'RFC: Better Actions',
    createdAt: '2014-08-16T01:31:17Z',
    closed: true,
    closedAt: '2015-01-07T04:58:28Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [],
    },
  },
  {
    number: 1,
    title: 'RFC: Pass through attribute meta data to related Transform',
    createdAt: '2014-08-14T18:00:42Z',
    closed: true,
    closedAt: '2016-01-27T18:18:58Z',
    merged: false,
    mergedAt: null,
    timelineItems: {
      nodes: [
        {
          createdAt: '2014-08-22T18:30:31Z',
          label: {
            name: 'ember-data',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2015-03-27T18:42:17Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2016-01-06T18:23:03Z',
          label: {
            name: 'Needs Implementer',
          },
          __typename: 'LabeledEvent',
        },
        {
          createdAt: '2016-01-06T18:23:03Z',
          label: {
            name: 'Needs Response',
          },
          __typename: 'UnlabeledEvent',
        },
      ],
    },
  },
];

export default class IndexRoute extends Route {
  countOpenRFCs(rfcs) {
    return rfcs.filter((rfc) => !rfc.merged && !rfc.closed).length;
  }

  findFirstStage(rfc) {
    if (rfc.merged) {
      return 'accepted'
    } else if (!rfc.closed) {
      return 'proposed'
    } else {
      return 'closed'
    }
  }

  condenseRFCs(rfcs) {
    let rfcMap = {};
    rfcs.forEach((rfc) => {
      if (rfc.title.includes('Advance RFC')) {
        let advanceRFC = rfc.title.match(/[0-9]+/);
        let num = parseInt(advanceRFC, 10);
        let stage = rfc.title.split(' ').pop().toLowerCase();
        rfcMap[num].stages[`${stage}Days`] = Math.round(
          (new Date(rfc.mergedAt) - new Date(rfc.createdAt)) /
            (1000 * 60 * 60 * 24),
        );
        if (rfc.merged) {
          rfcMap[num].currentStage = stage;
        }
        rfcMap[num].connected.push(rfc);
      } else {
        rfcMap[rfc.number] = {
          ...rfc,
          currentStage: this.findFirstStage(rfc),
          stages: {
            acceptedDays: Math.round(
              (new Date(rfc.mergedAt) - new Date(rfc.createdAt)) /
                (1000 * 60 * 60 * 24),
            ),
            releaseDays: null,
            releasedDays: null,
            recommendedDays: null,
          },
          connected: [],
        };
      }
    });
    return Object.values(rfcMap);
  }
  model() {
    return {
      rfcs: this.condenseRFCs(rfcs.sort((a, b) => a.number > b.number)),
      countOpen: this.countOpenRFCs(rfcs),
    };
  }
}
