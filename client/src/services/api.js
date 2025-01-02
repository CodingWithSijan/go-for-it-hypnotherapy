
// Mock data
const mockData = {
  stats: {
    totalBlogs: 10,
    totalBookings: 25,
    totalUsers: 50
  },
  recentBookings: [
    { id: 1, status: 'Completed', date: '2024-01-02' },
    { id: 2, status: 'Pending', date: '2024-01-03' },
    { id: 3, status: 'In Progress', date: '2024-01-04' }
  ]
};

// Mock API calls
export const getDashboardStats = async () => {
  // Simulating API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: mockData });
    }, 1000);
  });
};
