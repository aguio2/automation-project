const users = [
  { id: 1, name: "Ana", role: "admin", active: true },
  { id: 2, name: "Carlos", role: "user", active: false },
  { id: 3, name: "Maria", role: "user", active: true },
];

// 1. Filtrar usuarios activos
const activeUsers = users.filter((user) => user.active);
console.log("Activos:", activeUsers);
// [{ id: 1, name: 'Ana', ... }, { id: 3, name: 'Maria', ... }]

// 2. Obtener solo los nombres
const names = users.map((user) => user.name);
console.log("Nombres:", names);
// ['Ana', 'Carlos', 'Maria']

// 3. Encontrar el admin
const admin = users.find((user) => user.role === "admin");
console.log("Admin:", admin);
// { id: 1, name: 'Ana', role: 'admin', active: true }

// 4. Validar que todos tienen email (agregar campo y validar)
const usersWithEmail = users.map((user) => ({
  ...user,
  email: `${user.name.toLowerCase()}@empresa.com`,
}));
console.log("Con email:", usersWithEmail);

const allHaveEmail = usersWithEmail.every((user) => user.email.includes("@"));
console.log("Todos tienen email:", allHaveEmail); // true

// Ejercicio 1: Dado un array de precios, calcular el total
const precios = [29.99, 49.99, 9.99, 199.99];
const total = precios.reduce((sum, precio) => sum + precio, 0);
console.log(`Total: $${total.toFixed(2)}`);

// Ejercicio 2: Dado un array de productos, encontrar los que cuestan mas de $20
const productos = [
  { nombre: "Camiseta", precio: 29.99 },
  { nombre: "Sticker", precio: 2.99 },
  { nombre: "Taza", precio: 12.99 },
  { nombre: "Sudadera", precio: 59.99 },
];
const caros = productos.filter((p) => p.precio > 20);
console.log("Productos > $20:", caros);

// Ejercicio 3: Convertir nombres a mayusculas
const nombres = ["ana", "carlos", "maria"];
const mayusculas = nombres.map((n) => n.toUpperCase());
console.log(mayusculas); // ['ANA', 'CARLOS', 'MARIA']
