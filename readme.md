## Endpoints de Usuarios

| Método  | Ruta            | Cuerpo (JSON)                                      | Descripción                                      | Posibles Respuestas                           |
|---------|----------------|----------------------------------------------------|------------------------------------------------|----------------------------------------------|
| **POST**   | `/api/users/register` | `{ "username": "user", "password": "pass" }`   | Registra un nuevo usuario en el sistema        | `201 Created` - Usuario creado <br> `400 Bad Request` - Datos inválidos |
| **GET**    | `/api/users/{id}`     | _N/A_                                          | Obtiene los datos de un usuario por su ID      | `200 OK` - Devuelve el usuario <br> `404 Not Found` - Usuario no encontrado |
| **PUT**    | `/api/users/{id}`     | `{ "username": "newUser", "password": "newPass" }` | Actualiza los datos de un usuario              | `200 OK` - Usuario actualizado <br> `400 Bad Request` - Datos inválidos <br> `404 Not Found` - Usuario no encontrado |
| **DELETE** | `/api/users/{id}`     | _N/A_                                          | Elimina un usuario por su ID                   | `200 OK` - Usuario eliminado <br> `404 Not Found` - Usuario no encontrado |

Se le ha añadido a la web un servicio de login, mediante el cual los usuarios pueden registrarse (POST),
eliminar cuenta (DELETE), cambiar contraseña (PUT), y obtener información de su cuenta (GET).

Además, se ha añadido una configuración de seguridad para limitar el acceso de los usuarios al endpoint
foro, de manera que solo los usuarios registrados puedan acceder a él.