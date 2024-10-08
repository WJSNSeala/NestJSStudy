# NestJS API Server Practice with OOP & Repository Pattern

This project follows a one-month curriculum to practice building an API server using NestJS. The curriculum is divided into four weeks, starting from basic NestJS features and progressing to advanced topics like performance optimization and design patterns.

## Curriculum Overview

### Week 1: Basic to Intermediate Level

**Goal:** Learn the core features of NestJS and practice basic MongoDB design.

#### Key Learning Concepts:

- **NestJS Basic Structure:** Understand `Controller`, `Service`, `Module`, and `Dependency Injection` in NestJS.
- **MongoDB & Mongoose:** Learn how to use MongoDB and Mongoose for basic CRUD (Create, Read, Update, Delete) operations.
- **DTO & Validation Pipes:** Use Data Transfer Objects (DTO) to handle incoming requests and implement validation with `class-validator`.
- **Environment Configuration:** Manage application settings using `.env` files to handle different environments.

#### Example Implementation:

- Create a `Post` API with MongoDB and perform CRUD operations.
- Build a simple REST API and use DTO and Validation Pipes to validate requests.

---

### Week 2: Intermediate to Advanced Level

**Goal:** Learn about authentication and additional security-related libraries in NestJS.

#### Key Learning Concepts:

- **JWT Authentication:** Implement JWT-based authentication using `@nestjs/passport` and `@nestjs/jwt`.
- **Guards & Interceptors:** Use Guards to apply authentication logic, and Interceptors to handle request and response lifecycle.
- **Role-Based Access Control:** Implement role-based access control using Guards.
- **Middleware:** Use NestJS Middleware to manage request/response processing steps.

#### Example Implementation:

- Implement user authentication and JWT-based token issuance.
- Use Middleware and Guards to control access based on user roles.

---

### Week 3: OOP Principles & Design Patterns

**Goal:** Optimize code based on OOP principles and apply design patterns for flexible design.

#### Key Learning Concepts:

- **SOLID Principles:** Apply the 5 SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) to code refactoring.
- **Repository Pattern:** Use Repository Pattern to separate data access logic and achieve flexible data handling.
- **Factory Pattern:** Apply Factory Pattern to decouple object creation from the business logic.
- **Builder Pattern:** Use Builder Pattern to handle complex object creation in a structured manner.

#### Example Implementation:

- Refactor code to follow SOLID principles and apply Repository Pattern.
- Implement Factory and Builder patterns to make user object creation more flexible.

---

### Week 4: Advanced Performance Optimization

**Goal:** Learn advanced techniques to optimize server performance.

#### Key Learning Concepts:

- **Caching:** Use NestJS Cache Module to cache frequently used data and improve performance.
- **Lazy Loading & Module Splitting:** Apply lazy loading techniques to load only necessary services per module.
- **Database Indexing & Query Optimization:** Optimize MongoDB queries by applying indexing strategies.
- **Logging & Monitoring:** Use `winston` and other libraries for structured logging and server monitoring.
- **API Rate Limiting:** Implement rate limiting using `@nestjs/throttler` to manage API traffic.

#### Example Implementation:

- Improve MongoDB query performance using indexing.
- Implement caching for frequently accessed data to reduce response times.
- Add API rate limiting to control server load.

---

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/nestjs-oop-api-server.git
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file with the following variables:

   ```
   MONGO_URI=mongodb://localhost:27017/nestjs-api
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```bash
   yarn run start:dev
   ```

5. Access the API at `http://localhost:3000`.

## Conclusion

This project follows a structured curriculum to help developers build robust and scalable NestJS API servers while adhering to OOP principles and repository patterns. By the end of the four-week curriculum, you will have a strong understanding of both foundational and advanced NestJS concepts.