// export type BaseUserType = {
//   id: number;
//   phone_number: string;
//   role: "Runner" | "Requester" | "Reviewer" | "Admin";
//   first_name?: string;
//   last_name?: string;
//   email?: string;
//   address?: string;
//   city?: string;
//   state?: string;
//   zip_code?: string;
//   balance: string; // decimal as string
//   rating: string; // decimal as string
//   tasks_count: number;
// };

// interface RequesterUser extends BaseUserType {
//   profile_picture?: string; // URL
//   location?: { latitude: number; longitude: number };
// }

// interface RunnerUser extends BaseUserType {
//   profile_picture?: string;
//   verification_status: "Pending" | "Verified" | "Rejected";
//   is_available: boolean;
//   location?: { latitude: number; longitude: number };
// }

// export interface AuthState {
//   user: 
//   isInitialized: boolean;
//   hasSeenOnboarding: boolean;
//   setHasSeenOnboarding: (value: boolean) => void;
//   // Actions
//   setUser: (user: UserType | null) => void;
//   logout: () => void;
//   initialize: () => Promise<void>;
//   refreshUserData: () => Promise<void>;
// }
