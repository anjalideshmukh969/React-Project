const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile the sales data for Q1.",
        "date": "2025-01-10",
        "category": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Team Meeting",
        "description": "Attend weekly team sync-up.",
        "date": "2025-01-12",
        "category": "Meeting",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Client Follow-Up",
        "description": "Follow up with the Alpha Corp client.",
        "date": "2025-01-14",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstname": "Ishan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Update Website Content",
        "description": "Refresh homepage banners and texts.",
        "date": "2025-01-11",
        "category": "Web",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write Blog Article",
        "description": "Create a draft article about new product features.",
        "date": "2025-01-15",
        "category": "Content",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Fix UI Bugs",
        "description": "Resolve UI glitches reported in app version 1.2.",
        "date": "2025-01-17",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Test New Module",
        "description": "Perform QA on the new user dashboard.",
        "date": "2025-01-19",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstname": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Inventory Check",
        "description": "Verify and log warehouse inventory.",
        "date": "2025-01-09",
        "category": "Inventory",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "title": "Vendor Communication",
        "description": "Discuss supply delays with vendors.",
        "date": "2025-01-13",
        "category": "Communication",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Material Request Approval",
        "description": "Review and approve material requisitions.",
        "date": "2025-01-18",
        "category": "Operations",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 4,
    "firstname": "Vihaan",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "System Backup",
        "description": "Run full system backup for the week.",
        "date": "2025-01-08",
        "category": "IT",
        "active": false,
        "newTask": true,
        "completed": true,
        "failed": false
      },
      {
        "title": "Security Audit",
        "description": "Check system logs for unauthorized access.",
        "date": "2025-01-11",
        "category": "Security",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server Maintenance",
        "description": "Upgrade server OS and security patches.",
        "date": "2025-01-16",
        "category": "Maintenance",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Network Optimization",
        "description": "Improve internal network performance.",
        "date": "2025-01-20",
        "category": "Network",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Database Cleanup",
        "description": "Remove outdated records from database.",
        "date": "2025-01-21",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstname": "Anika",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Customer Survey Review",
        "description": "Analyze customer satisfaction results.",
        "date": "2025-01-10",
        "category": "Analysis",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Support Ticket Response",
        "description": "Respond to high-priority customer tickets.",
        "date": "2025-01-14",
        "category": "Support",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Training Session",
        "description": "Attend training on the new CRM tool.",
        "date": "2025-01-18",
        "category": "Training",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  }
]

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

