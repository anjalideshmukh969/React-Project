
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: 3,
    tasks: [
      {
        title: "Build login page",
        description: "Create a responsive login page using React.",
        date: "2025-09-27",
        category: "Frontend",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Fix API errors",
        description: "Debug and fix issues in authentication API.",
        date: "2025-09-28",
        category: "Backend",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Add usage examples for new components.",
        date: "2025-09-29",
        category: "Documentation",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      }
    ],
    taskSummary: {
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 0
    }
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: 4,
    tasks: [
      {
        title: "Design database schema",
        description: "Plan database schema for new project.",
        date: "2025-09-27",
        category: "Database",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add Jest unit tests for user module.",
        date: "2025-09-28",
        category: "Testing",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Refactor navbar",
        description: "Simplify navbar component with hooks.",
        date: "2025-09-30",
        category: "Frontend",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "Fix deployment script",
        description: "Resolve errors in CI/CD pipeline.",
        date: "2025-10-01",
        category: "DevOps",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      }
    ],
    taskSummary: {
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
  },
  {
    id: 3,
    firstName: "Isha",
    email: "employee3@example.com",
    password: "123",
    taskCount: 3,
    tasks: [
      {
        title: "Create dashboard UI",
        description: "Develop dashboard with charts and stats.",
        date: "2025-09-27",
        category: "Frontend",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "API performance check",
        description: "Run load testing for API endpoints.",
        date: "2025-09-28",
        category: "Backend",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      },
      {
        title: "Write blog post",
        description: "Document recent tech upgrade for team.",
        date: "2025-09-29",
        category: "Documentation",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      }
    ],
    taskSummary: {
      activeTasks: 1,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
  },
  {
    id: 4,
    firstName: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskCount: 4,
    tasks: [
      {
        title: "Setup project repo",
        description: "Initialize repo with README and guidelines.",
        date: "2025-09-27",
        category: "DevOps",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Bug fixing",
        description: "Fix UI bugs reported by QA team.",
        date: "2025-09-28",
        category: "Frontend",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Optimize queries",
        description: "Improve SQL queries for faster results.",
        date: "2025-09-29",
        category: "Database",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "Prepare slides",
        description: "Make presentation for sprint demo.",
        date: "2025-09-30",
        category: "Management",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      }
    ],
    taskSummary: {
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
  },
  {
    id: 5,
    firstName: "Ananya",
    email: "employee5@example.com",
    password: "123",
    taskCount: 4,
    tasks: [
      {
        title: "User feedback form",
        description: "Build feedback form with validation.",
        date: "2025-09-27",
        category: "Frontend",
        active: true,
        newTask: true,
        completedTask: false,
        failed: false
      },
      {
        title: "Implement JWT auth",
        description: "Add authentication using JWT in API.",
        date: "2025-09-28",
        category: "Backend",
        active: true,
        newTask: false,
        completedTask: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review pull requests from teammates.",
        date: "2025-09-29",
        category: "Collaboration",
        active: false,
        newTask: false,
        completedTask: true,
        failed: false
      },
      {
        title: "Database migration",
        description: "Migrate database to new server.",
        date: "2025-09-30",
        category: "Database",
        active: false,
        newTask: false,
        completedTask: false,
        failed: true
      }
    ],
    taskSummary: {
      activeTasks: 2,
      newTasks: 1,
      completedTasks: 1,
      failedTasks: 1
    }
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))  //method to save data in localstorage
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees =  JSON.parse(localStorage.getItem('employees'));
    const admin =  JSON.parse(localStorage.getItem('admin'))
    return {employees,admin};
}

