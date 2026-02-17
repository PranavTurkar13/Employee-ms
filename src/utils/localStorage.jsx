export const employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@company.com",
    password: "123",
    taskCounts: {
      active: 2,
      newtask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Build Login Page",
        taskdescription: "Create a responsive login page using Tailwind.",
        date: "2026-02-15",
        category: "Development",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Fix Navbar Bug",
        taskdescription: "Resolve alignment issue in header navbar.",
        date: "2026-02-16",
        category: "Bug Fix",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Update Footer",
        taskdescription: "Redesign footer section UI.",
        date: "2026-02-10",
        category: "Design",
      },
    ],
  },

  {
    id: 2,
    name: "Amit Verma",
    email: "amit@company.com",
    password: "123",
    taskCounts: {
      active: 1,
      newtask: 2,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Dashboard UI",
        taskdescription: "Create modern dashboard layout.",
        date: "2026-02-18",
        category: "UI",
      },
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "API Integration",
        taskdescription: "Integrate backend API for tasks.",
        date: "2026-02-20",
        category: "Backend",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Optimize Images",
        taskdescription: "Compress images for performance.",
        date: "2026-02-05",
        category: "Performance",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        tasktitle: "Payment Gateway",
        taskdescription: "Integrate Stripe payment system.",
        date: "2026-02-01",
        category: "Finance",
      },
    ],
  },

  {
    id: 3,
    name: "Sneha Patil",
    email: "sneha@company.com",
    password: "123",
    taskCounts: { active: 1, newtask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Mobile Responsive Fix",
        taskdescription: "Fix layout on smaller screens.",
        date: "2026-02-17",
        category: "UI",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "SEO Update",
        taskdescription: "Improve meta tags and keywords.",
        date: "2026-02-09",
        category: "Marketing",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Landing Page Redesign",
        taskdescription: "Improve hero section visuals.",
        date: "2026-02-08",
        category: "Design",
      },
    ],
  },

  {
    id: 4,
    name: "Vikas Mehta",
    email: "vikas@company.com",
    password: "123",
    taskCounts: { active: 2, newtask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Database Setup",
        taskdescription: "Configure MongoDB collections.",
        date: "2026-02-14",
        category: "Backend",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Auth Middleware",
        taskdescription: "Create JWT middleware.",
        date: "2026-02-19",
        category: "Security",
      },
      {
        active: false,
        newtask: false,
        completed: false,
        failed: true,
        tasktitle: "Notification System",
        taskdescription: "Implement email notifications.",
        date: "2026-02-03",
        category: "Feature",
      },
    ],
  },

  {
    id: 5,
    name: "Neha Kapoor",
    email: "neha@company.com",
    password: "123",
    taskCounts: { active: 1, newtask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        active: false,
        newtask: true,
        completed: false,
        failed: false,
        tasktitle: "Add Dark Mode",
        taskdescription: "Implement dark theme toggle.",
        date: "2026-02-21",
        category: "UI",
      },
      {
        active: true,
        newtask: false,
        completed: false,
        failed: false,
        tasktitle: "Fix Form Validation",
        taskdescription: "Add proper input validation.",
        date: "2026-02-18",
        category: "Bug Fix",
      },
      {
        active: false,
        newtask: false,
        completed: true,
        failed: false,
        tasktitle: "Deploy Project",
        taskdescription: "Deploy to Vercel.",
        date: "2026-02-07",
        category: "Deployment",
      },
    ],
  },
];

export const admin = {
  id: 101,
  email: "admin@company.com",
  password: "123",
};

export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    return{employees,admin}
}