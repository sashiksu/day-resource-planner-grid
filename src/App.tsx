import DayResourcePlannerGrid from "./components/DayResourcePlannerGrid";
import { Event, Resource } from "./types";

function App() {
  const noOfResources = 7;

  const resources: Resource[] = Array.from(
    { length: noOfResources },
    (_, index): Resource => ({
      id: (index + 1).toString(),
      name: `Table ${index + 1}`,
      description: Math.random() < 0.5 ? "2 X 2" : "4 X 4",
    })
  );

  const reservations: Event[] = [
    {
      id: "1",
      title: "John's Birthday",
      color: "#ffeb3b",
      startTime: "09.30",
      endTime: "11",
      remarks: null,
      resourcesIds: ["1"],
    },
    {
      id: "2",
      title: "Mike's Family",
      color: "#FF7F7F",
      startTime: "13",
      endTime: "17",
      remarks: null,
      resourcesIds: ["2"],
    },
    {
      id: "3",
      title: "Mike's Family",
      color: "#FF7F7F",
      startTime: "09",
      endTime: "11",
      remarks: null,
      resourcesIds: ["3"],
    },
    {
      id: "4",
      title: "Dane's Lunch",
      color: "#90EE90",
      startTime: "16",
      endTime: "18",
      remarks: null,
      resourcesIds: ["3", "4"],
    },
    {
      id: "5",
      title: "John's Family",
      color: "#90EE90",
      startTime: "11",
      endTime: "13",
      remarks: null,
      resourcesIds: ["5"],
    },
    {
      id: "6",
      title: "Mike's Dinner",
      color: "#ffeb3b",
      startTime: "17",
      endTime: "19",
      remarks: null,
      resourcesIds: ["6"],
    },
  ];

  return (
    <DayResourcePlannerGrid
      resources={resources}
      events={reservations}
      startTime={8}
      endTime={24}
    />
  );
}

export default App;
