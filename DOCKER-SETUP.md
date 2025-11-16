# 🐳 Docker Development Setup - Getting Started

## First Time Setup

### 1. Install Required Software

- **Docker Desktop**: https://www.docker.com/products/docker-desktop
- **VS Code**: https://code.visualstudio.com/
- **VS Code Extensions**: The workspace will prompt you to install recommended extensions

### 2. Start the Application

Open a terminal in the project root and run:

```bash
docker-compose up -d
```

This will:

- Build the backend (.NET 6) container
- Build the frontend (Angular 16) container
- Start both services with hot reload enabled
- Create a network for them to communicate

### 3. Verify Everything is Running

```bash
docker ps
```

You should see:

- `eshop-backend` - running on ports 5175, 7277
- `eshop-frontend` - running on port 4200

### 4. Access the Application

Open your browser:

- **Frontend**: http://localhost:4200
- **Backend Swagger**: http://localhost:5175/swagger

## 🐛 Debugging Setup

### For Backend (.NET) Debugging:

1. **Start debug containers** (different from regular containers):

   ```bash
   docker-compose -f docker-compose.debug.yml up -d
   ```

2. **Start the backend process**:

   - Open Command Palette (Ctrl+Shift+P)
   - Run Task: `docker-start-backend-debugger`
   - Wait 5-10 seconds for the process to start

3. **Attach debugger**:
   - Press F5
   - Select "Docker: Debug Backend (.NET)"
   - Pick the `dotnet` process from the list
   - Set breakpoints and debug!

### For Frontend (Angular) Debugging:

1. **Start regular containers**:

   ```bash
   docker-compose up -d
   ```

2. **Launch debugger**:
   - Press F5
   - Select "Docker: Launch Frontend (Chrome)" or "Docker: Launch Frontend (Edge)"
   - VS Code will open a browser with debugging enabled
   - Set breakpoints in TypeScript files

### Full Stack Debugging:

Press F5 and select "Docker: Debug Backend + Frontend" to debug both at once!

## 🔄 Hot Reload

### Backend

Make changes to any `.cs` file - the backend will automatically rebuild and restart (takes 3-5 seconds).

Watch the logs:

```bash
docker logs -f eshop-backend
```

### Frontend

Make changes to any TypeScript, HTML, or CSS file - the browser will automatically refresh.

Watch the logs:

```bash
docker logs -f eshop-frontend
```

## 🛑 Stopping the Application

```bash
docker-compose down
```

Or for debug containers:

```bash
docker-compose -f docker-compose.debug.yml down
```

## 🧹 Clean Reset

If things get messy:

```bash
# Stop and remove everything (including volumes)
docker-compose down -v

# Remove images
docker rmi eshop-angular-dotnet-backend eshop-angular-dotnet-frontend

# Rebuild from scratch
docker-compose up -d --build
```

## 💡 Tips

1. **First build takes time** (~5-10 minutes) - Docker is downloading images and installing dependencies
2. **Subsequent builds are fast** - Docker caches layers
3. **Check logs if something fails**: `docker logs eshop-backend` or `docker logs eshop-frontend`
4. **Port conflicts?** - Make sure ports 4200, 5175, 7277 are not used by other apps

## 📚 Next Steps

- Check the main [README.md](README.md) for full documentation
- Explore VS Code tasks (Ctrl+Shift+P → "Tasks: Run Task")
- Try setting breakpoints and debugging!

## ❓ Common Issues

**"Cannot connect to Docker daemon"**

- Make sure Docker Desktop is running

**"Port already in use"**

- Another app is using the ports. Either stop it or change ports in `docker-compose.yml`

**"Backend not responding"**

- Check logs: `docker logs eshop-backend`
- Verify it's running: `docker ps`

**"Frontend can't reach backend"**

- Both containers must be running
- Check network: `docker network ls`
- Backend should be accessible at `http://backend:80` from frontend container

---

Need help? Check the logs first! Most issues are visible there.
