import { v4 as uuidv4 } from "uuid";
export const Doing =[
    {
        id:" 10",
        title: "Full Calendar Extension",
        Task: "Make new events and store in global states",
        Due_Date: "09-feb-2024",
      },
      {
        id: "11",
        title: "Custom Kanban Board",
        Task: "Setup react-kanban dep within Dashboard as seperate page",
        Due_Date: "5-feb-2024",
      }
]
export const Done = [
  {
    id: "14",
    title: "Database Setup",
    Task: "Firebase Integration",
    Status: "To-do",
    Priority: "Low",
    Due_Date: "15-feb-2024",
  },
  {
    id: "15",
    title: "Data Flow",
    Task: "Setup Diagram with other developers",
    Status: "To-do",
    Priority: "Low",
    Due_Date: "27-feb-2024",
  },
];
export const data = [
  {
    id: "1",
    Task: "Create React js Project with firebase",
    Assigned_To: "Beltran",
    Assignee: "Romona",
    Status: "To-do",
    Priority: "Low",
    Due_Date: "25-feb-2024",
  },

  {
    id: "3",
    Task: "Learn About tech and next js",
    Assigned_To: "Roman",
    Assignee: "Romona",
    Status: "To-do",
    Priority: "Low",
    Due_Date: "27-jan-2024",
  },
  {
    id: "4",
    Task: "Done your payment for bewrage",
    Assigned_To: "Gawen",
    Assignee: "Kai",
    Status: "Done",
    Priority: "High",
    Due_Date: "23-Aug-2024",
  },
  {
    id: "5",
    Task: "Run 10 km per week",
    Assigned_To: "Bondon",
    Assignee: "Antoinette",
    Status: "In Progress",
    Priority: "Medium",
    Due_Date: "05-Jan-2021",
  },
];

export const columnsFromBackend = {
  [uuidv4()]: {
    title: "To-do",
    items: data,
  },
  [uuidv4()]: {
    title: "In Progress",
    items: Doing,
  },
  [uuidv4()]: {
    title: "Done",
    items: Done,
  },
};
