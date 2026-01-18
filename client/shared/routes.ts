export const api = {
  dogs: {
    list: {
      path: "/api/dogs",
    },
  },
  inquiry: {
    submit: {
      path: "/api/inquiry",
    },
  },
} as const;

export type Inquiry = {
  name: string;
  phone: string;
  contactTime: "morning" | "afternoon" | "evening";
};
