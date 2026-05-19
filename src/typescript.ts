interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user" | "viewer";
  active: boolean;
}

interface Task {
  id: number;
  title: string;
  assignee: User;
  status: "todo" | "in_progress" | "done";
}

// Usar las interfaces
const admin: User = {
  id: 1,
  name: "Andrea",
  email: "andrea@empresa.com",
  role: "admin",
  active: true,
};

const tarea: Task = {
  id: 101,
  title: "Implementar login",
  assignee: admin,
  status: "in_progress",
};

console.log(`${tarea.assignee.name} esta trabajando en: ${tarea.title}`);
