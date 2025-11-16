# EShop Angular .NET

Full-stack e-commerce application with Angular frontend and .NET 6 backend, fully Dockerized for development and production.

## 🚀 Quick Start

### Prerequisites

- Docker Desktop
- VS Code with recommended extensions

### Development with Docker

1. **Start the application:**

   ```bash
   docker-compose up -d
   ```

2. **Access the application:**

   - Frontend: http://localhost:4200
   - Backend API: http://localhost:5175
   - Swagger: http://localhost:5175/swagger

3. **Stop the application:**
   ```bash
   docker-compose down
   ```

## 🐛 Debugging in VS Code

### Debug Backend (.NET)

1. Start debug containers:

   ```bash
   docker-compose -f docker-compose.debug.yml up -d
   ```

2. In VS Code, run the task: `docker-start-backend-debugger`

3. Press `F5` and select **"Docker: Debug Backend (.NET)"**

4. Attach to the process (select `backend.dll` or `dotnet`)

5. Set breakpoints in your C# code - they'll be hit!

### Debug Frontend (Angular)

1. Start the containers:

   ```bash
   docker-compose up -d
   ```

2. In VS Code, press `F5` and select **"Docker: Launch Frontend (Chrome)"** or **"Docker: Launch Frontend (Edge)"**

3. Set breakpoints in TypeScript files - Chrome DevTools will stop at them

### Debug Both (Full Stack)

1. Press `F5` and select **"Docker: Debug Backend + Frontend"**
   - Automatically starts containers
   - Launches backend debugger
   - Opens Chrome with Angular app
   - Debugs both simultaneously!

## 🔧 VS Code Tasks

Available tasks (Ctrl+Shift+P → "Tasks: Run Task"):

- `docker-up` - Start all containers
- `docker-down` - Stop all containers
- `docker-rebuild` - Rebuild and restart containers
- `docker-debug-up` - Start debug containers
- `docker-logs-backend` - View backend logs
- `docker-logs-frontend` - View frontend logs
- `docker-backend-shell` - Open bash in backend container

## 📁 Project Structure

```
├── backend/                 # .NET 6 Web API
│   ├── Dockerfile          # Multi-stage Docker build
│   ├── Controllers/
│   └── Program.cs
├── frontend/               # Angular 16 SPA
│   ├── Dockerfile         # Node.js + nginx multi-stage
│   ├── src/
│   └── proxy.conf.docker.js
├── .vscode/
│   ├── launch.json        # Debug configurations
│   ├── tasks.json         # Docker tasks
│   └── extensions.json    # Recommended extensions
├── .devcontainer/         # Dev Container support
├── docker-compose.yml     # Development environment
└── docker-compose.debug.yml  # Debug environment
```

## 🔥 Hot Reload

Both frontend and backend support hot reload in Docker:

- **Frontend**: File changes automatically refresh the browser (polling enabled for Docker)
- **Backend**: Uses `dotnet watch` - C# changes rebuild and restart automatically

## 🎯 Key Features

✅ Full Docker development environment  
✅ VS Code debugging support for .NET  
✅ Chrome/Edge debugging for Angular  
✅ Hot reload for both frontend and backend  
✅ Docker Compose orchestration  
✅ Dev Container support  
✅ Production-ready multi-stage builds  
✅ Network isolation and service discovery

## 📝 Development Notes

### Backend Development

- Backend runs on port 5175 (HTTP only)
- Swagger UI available at `/swagger`
- Debugging uses remote attach with vsdbg
- Volume mounted for live code updates
- HTTPS disabled in Docker for simplicity

### Frontend Development

- Frontend runs on port 4200
- Proxies API requests to backend via `proxy.conf.docker.js`
- Poll interval set to 2000ms for Docker file watching
- Source maps enabled for debugging

### HTTPS in Development

The current setup uses HTTP in Docker for simplicity. To enable HTTPS:

1. Generate development certificates
2. Mount them in docker-compose.yml
3. Update environment variables

## 🛠️ Useful Commands

```bash
# View running containers
docker ps

# View backend logs in real-time
docker logs -f eshop-backend

# Execute command in backend container
docker exec -it eshop-backend dotnet --version

# Rebuild specific service
docker-compose up -d --build backend

# Clean everything (including volumes)
docker-compose down -v
```

## 🆘 Troubleshooting

**Frontend not updating?**

- File polling is enabled with 2s interval
- Check `docker logs eshop-frontend` for build errors

**Backend debugger not attaching?**

- Ensure vsdbg is installed (check Dockerfile)
- Verify backend process is running: `docker exec eshop-backend-debug ps aux`
- Check that C# extension is installed

**Port conflicts?**

- Change ports in docker-compose.yml
- Update launch.json URLs accordingly

## 📦 Production Build

Build production images:

```bash
docker-compose -f docker-compose.prod.yml build
```

(You'll need to create `docker-compose.prod.yml` targeting `production` stage in Dockerfiles)

## 🤝 Contributing

1. Make changes in your local environment
2. Test with Docker Compose
3. Ensure both frontend and backend work
4. Submit PR

---

**Happy Coding! 🚀**
