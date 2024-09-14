import DayResourcePlannerGrid from "./components/DayResourcePlannerGrid";
import { Event, Resource } from "./types";

function App() {
  const noOfResources = 7;

  const resources: Resource[] = Array.from(
    { length: noOfResources },
    (_, index): Resource => ({
      id: (index + 1).toString(),
      name: `Table ${index + 1}`,
      description: Math.random() < 0.5 ? "2 person" : "4 person",
    })
  );

  const reservations: Event[] = [
    {
      id: "1",
      title: "John's Birthday",
      color: "#90EE90",
      startTime: "09:00",
      endTime: "10:30",
      remarks: null,
      resourcesIds: ["1"],
    },
    {
      id: "2",
      title: "Mike's Family",
      color: "#FF7F7F",
      startTime: "13:45",
      endTime: "17:10",
      remarks: null,
      resourcesIds: ["2"],
    },
    {
      id: "3",
      title: "Mike's Family",
      color: "#FF7F7F",
      startTime: "09:05",
      endTime: "11:20",
      remarks: null,
      resourcesIds: ["3"],
    },
    {
      id: "4",
      title: "Dane's Lunch",
      color: "#90EE90",
      startTime: "16:25",
      endTime: "18:50",
      remarks: null,
      resourcesIds: ["3", "4"],
    },
    {
      id: "5",
      title: "John's Family",
      color: "#90EE90",
      startTime: "11:15",
      endTime: "13:40",
      remarks: null,
      resourcesIds: ["5"],
    },
    {
      id: "6",
      title: "Mike's Dinner",
      color: "#ffeb3b",
      startTime: "17:15",
      endTime: "19:30",
      remarks: null,
      resourcesIds: ["6"],
    },
    {
      id: "7",
      title: "John's Birthday 2",
      color: "#90EE90",
      startTime: "11:00",
      endTime: "13:00",
      remarks: null,
      resourcesIds: ["1"],
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
