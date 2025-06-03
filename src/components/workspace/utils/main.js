export const getOptions = (queries) => [
  {
    key: "0",
    type: "group",
    label: "Suggested Questions",
    children: queries.map(({ key, name }) => ({
      key,
      label: name,
    })),
  },
];
