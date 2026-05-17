# Historias Épicas y de Usuaria — Harry Potter DataBase

# HE-1 Visualización de personajes

## HU-1 Mostrar listado de personajes

**Estado:** [✔]

COMO usuaria  
QUIERO ver un listado de personajes  
PARA explorar la información de personajes del universo mágico

### Tareas

- [✔] T1 Crear estructura principal de la aplicación
  **Criterios de aceptación:**
  - ✔ Existe un componente App
  - ✔ Existe una estructura semántica básica

- [✔] T2 Realizar petición a la API
  **Criterios de aceptación:**
  - ✔ Los datos se obtienen correctamente desde la API
  - ✔ No hay errores en consola
  - ✔ Se usa useEffect para la petición

- [✔] T3 Guardar personajes en el estado
  **Criterios de aceptación:**
  - ✔ Los personajes se almacenan en state
  - ✔ App controla el estado principal

- [✔] T4 Pintar listado de personajes
  **Criterios de aceptación:**
  - ✔ Se usa map()
  - ✔ Cada personaje tiene key única
  - ✔ El listado se renderiza correctamente

- [✔] T5 Crear tarjetas de personaje
  **Criterios de aceptación:**
  - ✔ Cada tarjeta muestra imagen
  - ✔ Cada tarjeta muestra nombre
  - ✔ Cada tarjeta muestra especie

---

## HU-2 Mostrar imagen por defecto

**Estado:** [✔]

COMO usuaria  
QUIERO ver una imagen alternativa cuando un personaje no tenga foto  
PARA mantener una interfaz consistente

### Tareas

- [✔] T1 Detectar personajes sin imagen
  **Criterios de aceptación:**
  - ✔ Se comprueba si image está vacío

- [✔] T2 Mostrar imagen fallback
  **Criterios de aceptación:**
  - ✔ Se renderiza una imagen por defecto
  - ✔ La interfaz no se rompe

---

# HE-2 Filtrado de personajes

## HU-3 Filtrar personajes por nombre

**Estado:** [✔]

COMO usuaria  
QUIERO buscar personajes por nombre  
PARA encontrar personajes concretos rápidamente

### Tareas

- [✔] T1 Crear input de búsqueda
  **Criterios de aceptación:**
  - ✔ Existe un input accesible
  - ✔ Tiene label asociado

- [✔] T2 Controlar el input mediante estado
  **Criterios de aceptación:**
  - ✔ El valor del input está sincronizado con state

- [✔] T3 Filtrar personajes dinámicamente
  **Criterios de aceptación:**
  - ✔ El listado cambia mientras escribo
  - ✔ Se usa filter()

- [✔] T4 Ignorar mayúsculas y minúsculas
  **Criterios de aceptación:**
  - ✔ La búsqueda funciona en ambos casos

- [✔] T5 Evitar submit accidental
  **Criterios de aceptación:**
  - ✔ Pulsar Enter no recarga la página

---

## HU-4 Mostrar mensaje sin resultados

**Estado:** [✔]

COMO usuaria  
QUIERO recibir feedback cuando no haya coincidencias  
PARA entender que mi búsqueda no tiene resultados

### Tareas

- [✔] T1 Mostrar mensaje vacío
  **Criterios de aceptación:**
  - ✔ Se muestra mensaje personalizado
  - ✔ Incluye el texto buscado

---

## HU-5 Filtrar personajes por casa

**Estado:** [✔]

COMO usuaria  
QUIERO filtrar personajes por casa  
PARA explorar personajes concretos de Hogwarts

### Tareas

- [✔] T1 Crear select de casas
  **Criterios de aceptación:**
  - ✔ Existe un select funcional

- [✔] T2 Controlar casa seleccionada
  **Criterios de aceptación:**
  - ✔ El valor del select está en state

- [✔] T3 Filtrar personajes por casa
  **Criterios de aceptación:**
  - ✔ Solo aparecen personajes de la casa seleccionada

- [✔] T4 Establecer Gryffindor por defecto
  **Criterios de aceptación:**
  - ✔ La aplicación carga Gryffindor inicialmente

---

## HU-6 Filtrar personajes por género

**Estado:** [✔]

COMO usuaria  
QUIERO filtrar personajes por género  
PARA acotar los resultados

### Tareas

- [✔] T1 Crear select de género
  **Criterios de aceptación:**
  - ✔ Existe un select funcional

- [✔] T2 Filtrar por género
  **Criterios de aceptación:**
  - ✔ El listado cambia correctamente

---

## HU-7 Resetear filtros

**Estado:** [✔]

COMO usuaria  
QUIERO resetear los filtros  
PARA volver rápidamente al listado inicial

### Tareas

- [✔] T1 Crear botón reset
  **Criterios de aceptación:**
  - ✔ Existe un botón reset visible

- [✔] T2 Restablecer estados iniciales
  **Criterios de aceptación:**
  - ✔ El input vuelve a vacío
  - ✔ La casa vuelve a Gryffindor
  - ✔ El género vuelve al valor inicial

---

# HE-3 Navegación y detalle

## HU-8 Navegar al detalle de personaje

**Estado:** [✔]

COMO usuaria  
QUIERO acceder al detalle de un personaje  
PARA consultar información ampliada

### Tareas

- [✔] T1 Configurar React Router
  **Criterios de aceptación:**
  - ✔ Existen rutas funcionales

- [✔] T2 Hacer tarjetas clicables
  **Criterios de aceptación:**
  - ✔ Cada tarjeta navega a detalle

- [✔] T3 Crear componente CharacterDetail
  **Criterios de aceptación:**
  - ✔ Existe un componente separado

---

## HU-9 Mostrar información ampliada

**Estado:** [✔]

COMO usuaria  
QUIERO ver información detallada del personaje  
PARA conocer más datos sobre él

### Tareas

- [✔] T1 Mostrar imagen en detalle
  **Criterios de aceptación:**
  - ✔ La imagen aparece correctamente

- [✔] T2 Mostrar datos del personaje
  **Criterios de aceptación:**
  - ✔ Se muestra nombre
  - ✔ Se muestra casa
  - ✔ Se muestra estado vivo/muerto
  - ✔ Se muestra género
  - ✔ Se muestra especie
  - ✔ Se muestra patronus
  - ✔ Se muestran nombres alternativos

- [✔] T3 Mostrar emblema de casa
  **Criterios de aceptación:**
  - ✔ Cada casa tiene su emblema correspondiente

---

## HU-10 Mantener filtros al volver atrás

**Estado:** [✔]

COMO usuaria  
QUIERO mantener mi búsqueda al volver atrás  
PARA no perder el contexto de navegación

### Tareas

- [✔] T1 Conservar estados de filtros
  **Criterios de aceptación:**
  - ✔ El texto buscado permanece
  - ✔ Los filtros permanecen

---

## HU-11 Gestionar rutas inexistentes

**Estado:** [✔]

COMO usuaria  
QUIERO recibir feedback si un personaje no existe  
PARA entender el error de navegación

### Tareas

- [✔] T1 Detectar ID inexistente
  **Criterios de aceptación:**
  - ✔ Se detecta personaje inexistente

- [✔] T2 Mostrar mensaje de error
  **Criterios de aceptación:**
  - ✔ Se muestra mensaje claro

---

# HE-4 Diseño y experiencia de usuario

## HU-12 Mejorar la interfaz visual

**Estado:** [ ] pendiente

COMO usuaria  
QUIERO una interfaz moderna y clara  
PARA tener una mejor experiencia visual

### Tareas

- [✔] T1 Crear sistema de diseño
  **Criterios de aceptación:**
  - ✔ Existen variables CSS
  - ✔ Los colores son consistentes

- [✔] T2 Crear layout responsive
  **Criterios de aceptación:**
  - ✔ Mobile funciona correctamente
  - ✔ Tablet funciona correctamente
  - ✔ Desktop funciona correctamente

- [✔] T3 Implementar grid de tarjetas
  **Criterios de aceptación:**
  - ✔ Se usa CSS Grid
  - ✔ Las tarjetas se adaptan al ancho

- [ ] T4 Añadir estados hover/focus accesibles
      **Criterios de aceptación:**
  - ✔ Existe feedback visual
  - ✔ Los focus son visibles

---

# HE-5 Calidad de código

## HU-13 Mantener código limpio y mantenible

**Estado:** [ ] pendiente

COMO desarrolladora  
QUIERO una arquitectura limpia  
PARA facilitar mantenimiento y escalabilidad

### Tareas

- [ ] T1 Separar componentes correctamente
      **Criterios de aceptación:**
  - ✔ Cada componente tiene una responsabilidad clara

- [ ] T2 Usar props correctamente
      **Criterios de aceptación:**
  - ✔ Los datos fluyen correctamente

- [✔] T3 Usar destructuring
  **Criterios de aceptación:**
  - ✔ Las props usan destructuring

- [ ] T4 Mantener consola limpia
      **Criterios de aceptación:**
  - ✔ No existen errores
  - ✔ No existen warnings
