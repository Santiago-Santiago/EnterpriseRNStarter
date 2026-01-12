# EnterpriseRNStarter

> Plantilla profesional de React Native enfocada en arquitectura limpia, mantenibilidad y flujos empresariales reales.

---

## Tabla de Contenido
1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Principales Capacidades](#principales-capacidades)
3. [Arquitectura y Organizacion](#arquitectura-y-organizacion)
4. [Flujo de Autenticacion](#flujo-de-autenticacion)
5. [Stack Tecnologico](#stack-tecnologico)
6. [Guia de Ejecucion](#guia-de-ejecucion)
7. [Credenciales Demo](#credenciales-demo)
8. [Buenas Practicas Implementadas](#buenas-practicas-implementadas)
9. [Autor](#autor)

---

## Resumen Ejecutivo
EnterpriseRNStarter es una aplicacion movil multiplataforma (Android/iOS) construida con React Native 0.83 y TypeScript. El repositorio muestra como estructurar proyectos enterprise utilizando Clean Architecture, inyeccion manual de dependencias, separacion estricta de capas y servicios reales como Firebase Authentication.

La meta principal es entregar una base solida para equipos senior que valoran el dominio en arquitectura, pruebas unitarias y escalabilidad mas que en componentes visuales aislados.

---

## Principales Capacidades
- Autenticacion real con Firebase (email/password) desacoplada mediante repositorios.
- Navegacion con React Navigation y flujo protegido segun estado de sesion.
- Theming centralizado (colores, tipografia, espaciados) y estilos reutilizables.
- Casos de uso unitariamente testeados con Jest para garantizar reglas de negocio.
- Configuracion lista para Android (Gradle moderno, Google Services) y preparada para iOS.

---

## Arquitectura y Organizacion
El proyecto aplica Clean Architecture con la siguiente estructura:

```
src/
 domain/        Casos de uso, entidades y contratos (sin dependencias externas)
 data/          Implementaciones concretas (Firebase, repositorios)
 app/           Providers, navegacion y contenedores de dependencias
 presentation/  UI declarativa, estilos y temas
```

**Principios aplicados**
- Dependency Rule: solo el dominio conoce sus reglas; las capas externas dependen del dominio y nunca al reves.
- Separation of Concerns: cada modulo tiene responsabilidades acotadas y testeables.
- Inyeccion manual de dependencias para mantener control fino y facilitar pruebas.

---

## Flujo de Autenticacion
```
LoginScreen -> LoginUseCase -> AuthRepository -> FirebaseAuthDataSource -> Firebase Auth
```
- Los casos de uso validan datos basicos antes de delegar en el repositorio.
- FirebaseAuthDataSource encapsula las llamadas modernas del SDK modular (getApp, getAuth).
- Los errores de Firebase se traducen en mensajes amigables a nivel de UI.

---

## Stack Tecnologico
| Capa | Tecnologia |
|------|------------|
| Presentacion | React Native 0.83, TypeScript, React Navigation |
| Dominio | Clean Architecture, casos de uso unitarios |
| Datos | Firebase Auth modular, repositorios concretos |
| Tooling | Jest, ESLint, Gradle 8+, Kotlin 2.1 |

---

## Guia de Ejecucion
1. Clonar el repositorio y ubicarse en la raiz.
2. Instalar dependencias: npm install.
3. Android: npx react-native run-android. Para iOS, abrir el workspace en Xcode y ejecutar.
4. Colocar google-services.json bajo android/app y configurar Firebase en iOS si aplica.

> Requisitos previos: Node 20+, JDK 17, Android SDK actualizado y CocoaPods instalado en macOS.

---

## Credenciales Demo
Para probar el flujo completo de inicio de sesion utilizar:

- Usuario: admin@gmail.com
- Contrasena: admin2025

Estas credenciales permiten validar el estado autenticado y navegar hacia el Dashboard.

---

## Buenas Practicas Implementadas
- Validacion y manejo de errores a nivel de casos de uso y UI con mensajes de negocio.
- Modularizacion de Firebase para evitar APIs obsoletas y facilitar pruebas unitarias.
- Temas y estilos centralizados que reducen duplicacion.
- Tests de dominio (LoginUseCase, LogoutUseCase) que ejecutan en milisegundos y no dependen de la UI.
- Documentacion clara del arbol de directorios y responsabilidades.

---

## Autor
**Santiago Santiago**  
React Native Developer | Arquitectura de Software

> Este proyecto sirve como punto de partida para equipos que necesitan entregar aplicaciones enterprise con fundamentos solidos y mantenibles.
