export type Event = {
  id: string;
  title: string;
  remarks: string | null;
  startTime: string;
  endTime: string;
  color: string;
  resourcesIds: string[];
};

export type Resource = {
  id: string;
  name: string;
  description: string;
};
