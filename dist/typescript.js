"use strict";
// Usar las interfaces
const admin = {
    id: 1,
    name: "Andrea",
    email: "andrea@empresa.com",
    role: "admin",
    active: true,
};
const tarea = {
    id: 101,
    title: "Implementar login",
    assignee: admin,
    status: "in_progress",
};
console.log(`${tarea.assignee.name} esta trabajando en: ${tarea.title}`);
