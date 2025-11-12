# KOMPLEX Backend Routes Documentation

## Overview

The KOMPLEX backend API is organized into two main route categories that serve different purposes:

- **`/feed`** - Public content discovery and read-only access
- **`/me`** - User-specific actions and authenticated resource management

## Route Structure Analysis

### `/feed` Routes - Public Content Discovery

The `/feed` routes provide **public, read-only access** to content for discovery and browsing purposes. These routes don't require authentication and are designed for content consumption.

#### Available Feed Routes:

| Route                      | Method | Purpose               | Description                        |
| -------------------------- | ------ | --------------------- | ---------------------------------- |
| `/feed/blogs`              | GET    | Get all blogs         | Curated blog feed for discovery    |
| `/feed/blogs/:id`          | GET    | Get specific blog     | Individual blog details            |
| `/feed/forums`             | GET    | Get all forums        | Curated forum feed with pagination |
| `/feed/forums/:id`         | GET    | Get specific forum    | Individual forum details           |
| `/feed/videos`             | GET    | Get all videos        | Curated video feed                 |
| `/feed/videos/:id`         | GET    | Get specific video    | Individual video details           |
| `/feed/exercises`          | GET    | Get all exercises     | Exercise catalog                   |
| `/feed/exercises/:id`      | GET    | Get specific exercise | Exercise details                   |
| `/feed/forum-comments/:id` | GET    | Get forum comments    | Comments for a specific forum      |
| `/feed/forum-replies/:id`  | GET    | Get forum replies     | Replies for a specific comment     |
| `/feed/video-comments/:id` | GET    | Get video comments    | Comments for a specific video      |
| `/feed/video-likes/:id`    | GET    | Get video likes       | Users who liked a video            |
| `/feed/video-replies/:id`  | GET    | Get video replies     | Replies for a video comment        |

**Key Characteristics:**

- ✅ No authentication required
- ✅ Read-only operations
- ✅ Pagination support
- ✅ Public content discovery
- ✅ Optimized for browsing and exploration

---

### `/me` Routes - User Actions & Resource Management

The `/me` routes handle **authenticated user actions** and personal resource management. These routes require user authentication and are designed for content creation, modification, and personal interactions.

#### Available Me Routes:

| Route                           | Method                 | Purpose                  | Description                        |
| ------------------------------- | ---------------------- | ------------------------ | ---------------------------------- |
| `/me/dashboard`                 | GET                    | User dashboard           | Personal content overview          |
| `/me/blogs`                     | GET, POST, PUT, DELETE | Blog management          | CRUD operations for user's blogs   |
| `/me/blogs/:id/save`            | PATCH                  | Save blog                | Bookmark a blog                    |
| `/me/blogs/:id/unsave`          | PATCH                  | Unsave blog              | Remove bookmark                    |
| `/me/forums`                    | GET, POST, PUT, DELETE | Forum management         | CRUD operations for user's forums  |
| `/me/forums/:id/like`           | PATCH                  | Like forum               | Like a forum post                  |
| `/me/forums/:id/unlike`         | PATCH                  | Unlike forum             | Remove like                        |
| `/me/forum-comments`            | POST, PUT, DELETE      | Forum comment management | CRUD operations for forum comments |
| `/me/forum-comments/:id/like`   | PATCH                  | Like comment             | Like a forum comment               |
| `/me/forum-comments/:id/unlike` | PATCH                  | Unlike comment           | Remove like                        |
| `/me/forum-replies`             | POST, PUT, DELETE      | Forum reply management   | CRUD operations for forum replies  |
| `/me/forum-replies/:id/like`    | PATCH                  | Like reply               | Like a forum reply                 |
| `/me/forum-replies/:id/unlike`  | PATCH                  | Unlike reply             | Remove like                        |
| `/me/videos`                    | GET, POST, PUT, DELETE | Video management         | CRUD operations for user's videos  |
| `/me/videos/:id/like`           | PATCH                  | Like video               | Like a video                       |
| `/me/videos/:id/unlike`         | PATCH                  | Unlike video             | Remove like                        |
| `/me/videos/:id/save`           | PATCH                  | Save video               | Bookmark a video                   |
| `/me/videos/:id/unsave`         | PATCH                  | Unsave video             | Remove bookmark                    |
| `/me/video-comments`            | POST, PUT, DELETE      | Video comment management | CRUD operations for video comments |
| `/me/video-comments/:id/like`   | PATCH                  | Like comment             | Like a video comment               |
| `/me/video-comments/:id/unlike` | PATCH                  | Unlike comment           | Remove like                        |
| `/me/video-replies`             | POST, PUT, DELETE      | Video reply management   | CRUD operations for video replies  |
| `/me/video-replies/:id/like`    | PATCH                  | Like reply               | Like a video reply                 |
| `/me/video-replies/:id/unlike`  | PATCH                  | Unlike reply             | Remove like                        |
| `/me/video-history`             | GET                    | Video history            | User's video viewing history       |
| `/me/exercises`                 | GET, POST              | Exercise management      | Exercise history and submissions   |
| `/me/feedback`                  | POST                   | Submit feedback          | User feedback submission           |
| `/me/ai-history`                | GET, POST              | AI interaction history   | AI chat history management         |

**Key Characteristics:**

- ✅ Authentication required
- ✅ Full CRUD operations
- ✅ User-specific data filtering
- ✅ Personal resource management
- ✅ Interaction capabilities (like, save, comment)

---

## Design Philosophy

### Why This Division?

#### 1. **Separation of Concerns**

- **Feed routes** focus on **content discovery** and **public browsing**
- **Me routes** focus on **personal management** and **authenticated actions**

#### 2. **Security & Access Control**

- **Feed routes** are **publicly accessible** - no authentication barriers
- **Me routes** are **user-scoped** - all actions are filtered through the authenticated user

#### 3. **Performance Optimization**

- **Feed routes** can be **cached aggressively** and **optimized for read performance**
- **Me routes** can implement **user-specific caching** and **write optimizations**

#### 4. **API Clarity**

- **Feed routes** clearly indicate **public content consumption**
- **Me routes** clearly indicate **personal resource management**

#### 5. **Scalability**

- **Feed routes** can be **scaled independently** for high read traffic
- **Me routes** can be **scaled independently** for user-specific operations

---

## Route Patterns

### Feed Route Pattern

```
GET /feed/{resource}           # List all resources
GET /feed/{resource}/:id       # Get specific resource
GET /feed/{resource}/:id/{sub} # Get related data (comments, likes, etc.)
```

### Me Route Pattern

```
GET    /me/{resource}              # List my resources
POST   /me/{resource}              # Create new resource
PUT    /me/{resource}/:id          # Update my resource
DELETE /me/{resource}/:id          # Delete my resource
PATCH  /me/{resource}/:id/{action} # Perform action (like, save, etc.)
```

---

## Implementation Benefits

1. **Clear API Boundaries** - Developers immediately understand the purpose of each route
2. **Security by Design** - User actions are automatically scoped to the authenticated user
3. **Performance Optimization** - Different caching strategies for public vs. private data
4. **Maintainability** - Clear separation makes the codebase easier to maintain
5. **Scalability** - Independent scaling of public and private operations

This architecture ensures that public content discovery remains fast and accessible while user-specific operations remain secure and properly scoped.
