async function getUser(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );
  const user = await response.json();
  console.log(user.name); // Validar que existe
  return user;
}

// Ejercicio extendido: obtener todos los posts de un usuario
async function getUserPosts(userId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  const posts = await response.json();
  console.log(`El usuario ${userId} tiene ${posts.length} posts`);

  // Mostrar los titulos
  posts.forEach((post) => {
    console.log(`- ${post.title}`);
  });

  return posts;
}

// Combinar ambas funciones
async function getUserWithPosts(userId) {
  const user = await getUser(userId);
  const posts = await getUserPosts(userId);

  return {
    ...user,
    posts,
    totalPosts: posts.length,
  };
}

// Ejecutar
const result = await getUserWithPosts(1);
console.log(`${result.name} tiene ${result.totalPosts} posts`);

// Secuencial (lento): espera una por una
async function sequentialFetch() {
  const user1 = await getUser(1); // Espera...
  const user2 = await getUser(2); // Luego espera...
  const user3 = await getUser(3); // Luego espera...
  return [user1, user2, user3];
}

// Paralelo (rapido): todas al mismo tiempo
async function parallelFetch() {
  const [user1, user2, user3] = await Promise.all([
    getUser(1),
    getUser(2),
    getUser(3),
  ]);
  return [user1, user2, user3];
}
