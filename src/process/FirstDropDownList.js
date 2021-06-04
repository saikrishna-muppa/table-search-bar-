// const firstDropDownList = [
//   {
//     name: "Name",
//     status: "input",
//     content: [
//       { text: "contains" },
//       { text: "isequal" },
//       { text: "is not equal" },
//       { text: "does not equal" },
//     ],
//   },
//   {
//     name: "Assigness",
//     status: "mutliplenames",
//     content: [{ text: "contains" }, { text: "does not contains" }],
//   },
//   {
//     name: "Started",
//     status: "inputdate",
//     content: [
//       { text: "isbefore" },
//       { text: "is after" },
//       { text: "is between" },
//     ],
//   },
//   {
//     name: "Activity",
//     status: "inputdate",
//     content: [
//       { text: "isbefore" },
//       { text: "is after" },
//       { text: "is between" },
//     ],
//   },
//   {
//     name: "Due",
//     status: "inputdate",
//     content: [
//       { text: "isbefore" },
//       { text: "is after" },
//       { text: "is between" },
//     ],
//   },
//   {
//     name: "Completed",
//     status: "inputdate",
//     content: [
//       { text: "isbefore" },
//       { text: "is after" },
//       { text: "is between" },
//     ],
//   },
//   {
//     name: "Status",
//     status: "mutliplecolors",
//     content: [{ text: "contains" }, { text: "does not contains" }],
//   },
//   {
//     name: "OverDueTask",
//     status: "mutliplecolors",
//     content: [{ text: "contains" }, { text: "does not contains" }],
//   },
//   {
//     name: "TaskCompleted",
//     status: "mutliplecolors",
//     content: [{ text: "contains" }, { text: "does not contains" }],
//   },
// ];

export const firstDropDownList = [
  {
    name: "Name",
    status: "input",
    content: [
      { text: "contains" },
      { text: "isequal" },
      { text: "is not equal" },
      { text: "does not equal" }
    ]
  },
  {
    name: "Assigness",
    status: "mutliplenames",
    content: [{ text: "contains" }, { text: "does not contains" }],
    select: [
      { value: "CurrentUser" },
      { value: "Finance" },
      { value: "Human Resources" },
      { value: "Marketing" },
      { value: "Sales" }
    ]
  },
  {
    name: "Started",
    status: "inputdate",
    content: [
      { text: "isbefore" },
      { text: "is after" },
      { text: "is between" }
    ]
  },
  {
    name: "Activity",
    status: "inputdate",
    content: [
      { text: "isbefore" },
      { text: "is after" },
      { text: "is between" }
    ]
  },
  {
    name: "Due",
    status: "inputdate",
    content: [
      { text: "isbefore" },
      { text: "is after" },
      { text: "is between" }
    ]
  },
  {
    name: "Completed",
    status: "inputdate",
    content: [
      { text: "isbefore" },
      { text: "is after" },
      { text: "is between" }
    ]
  },
  {
    name: "status",
    status: "mutliplecolors",
    content: [{ text: "contains" }, { text: "does not contains" }],
    colors: [
      { colorValue: "Archived" },
      { colorValue: "Completed" },
      { colorValue: "Due Soon" },
      { colorValue: "on_Track" },
      { colorValue: "Overdue" }
    ]
  },
  {
    name: "OverDueTask",
    status: "mutliplecolors",
    content: [{ text: "contains" }, { text: "does not contains" }],
    colors: [
      { colorValue: "Archived" },
      { colorValue: "Completed" },
      { colorValue: "Due Soon" },
      { colorValue: "on_Track" },
      { colorValue: "Overdue" }
    ]
  },
  {
    name: "TaskCompleted",
    status: "mutliplecolors",
    content: [{ text: "contains" }, { text: "does not contains" }],
    colors: [
      { colorValue: "Archived" },
      { colorValue: "Completed" },
      { colorValue: "Due Soon" },
      { colorValue: "on_Track" },
      { colorValue: "Overdue" }
    ]
  }
];
