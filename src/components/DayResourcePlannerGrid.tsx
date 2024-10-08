import { Event, Resource } from "../types";
import "./DayResourcePlannerGrid.css";

interface DayResourcePlannerGridProps {
  resources: Resource[];
  events: Event[];
  startTime: number;
  endTime: number;
}

const DayResourcePlannerGrid = (props: DayResourcePlannerGridProps) => {
  const { resources, events, startTime, endTime } = props;

  const generateHeadings = () => {
    return Array.from(
      { length: endTime - startTime + 1 },
      (_, index) => `${startTime + index}:00`
    );
  };

  const headings = generateHeadings();

  return (
    <div className="reservation-grid">
      <div className="reservation-table-container">
        <table className="reservation-table">
          <thead>
            <tr>
              <th className="reservation-table-header reservation-table-sticky-column reservation-table-heading"></th>
              {headings.map((heading, index) => (
                <th key={index} className="reservation-table-header">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resources.map((table) => {
              const tableReservations = events.filter((r) =>
                r.resourcesIds.includes(table.id)
              );
              const occupiedHours = new Array(headings.length).fill(false);

              return (
                <tr key={table.id}>
                  <td className="reservation-table-sticky-column reservation-table-name">
                    <div className="reservation-table-name-content">
                      <div className="reservation-name">{table.name}</div>
                      <div className="reservation-size">
                        {table.description}
                      </div>
                    </div>
                  </td>
                  {headings.map((heading, index) => {
                    const hour = parseInt(heading.split(":")[0]);
                    const minute = parseInt(heading.split(":")[1] || "0");
                    const reservation = tableReservations.find(
                      (r) =>
                        hour >= parseInt(r.startTime.split(":")[0]) &&
                        hour < parseInt(r.endTime.split(":")[0])
                    );

                    if (reservation && !occupiedHours[index]) {
                      const startMinute = parseInt(
                        reservation.startTime.split(":")[1]
                      );
                      const endMinute = parseInt(
                        reservation.endTime.split(":")[1]
                      );
                      const colspan =
                        parseInt(reservation.endTime) -
                        parseInt(reservation.startTime) +
                        (endMinute > 0 ? 1 : 0); // Adjust colspan to include the end hour
                      const rowspan = reservation.resourcesIds.length;
                      const isFirstTable =
                        reservation.resourcesIds[0] === table.id;

                      for (let i = index; i < index + colspan; i++) {
                        occupiedHours[i] = true;
                      }

                      if (isFirstTable) {
                        return (
                          <td
                            key={index}
                            colSpan={colspan}
                            rowSpan={rowspan}
                            className={"reservation-table-cell"}
                            style={{
                              paddingLeft: `${startMinute}px`, // Add left padding based on start minute
                              paddingRight: `${
                                60 - endMinute ? endMinute : 60
                              }px`, // Adjust right padding based on end minute
                            }}
                          >
                            <div
                              className={"reservation-cell-content"}
                              style={{ backgroundColor: reservation.color }}
                            >
                              {reservation.title}
                            </div>
                          </td>
                        );
                      } else {
                        return null;
                      }
                    }
                    return occupiedHours[index] ? null : (
                      <td key={index} className="reservation-table-cell"></td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DayResourcePlannerGrid;
