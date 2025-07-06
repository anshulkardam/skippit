interface Task {
  id: number;
  requester: number; // user id
  runner?: number;
  title: string;
  description: string;
  image?: string; // URL
  from_location?: string;
  from_latitude?: string;
  from_longitude?: string;
  to_location?: string;
  to_latitude?: string;
  to_longitude?: string;
  amount: string;
  status:
    | "Pending"
    | "Scheduled"
    | "Accepted"
    | "In Progress"
    | "Completed"
    | "Disputed"
    | "Cancelled";
  assignment: "Random" | "Chosen";
  accepted_at?: string;
  completed_at?: string;
  scheduled_at?: string;
  created_at: string;
}

interface TaskCreatePayload {
  title: string;
  description: string;
  image?: File; // FormData
  from_location?: string;
  from_latitude?: number;
  from_longitude?: number;
  to_location?: string;
  to_latitude?: number;
  to_longitude?: number;
  amount: number;
  assignment: "Random" | "Chosen";
}
