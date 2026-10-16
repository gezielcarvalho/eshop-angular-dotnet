# Architecture

```text
Angular 16 starter
       |
       | development proxy / container network
       v
ASP.NET Core 6 WeatherForecast API
       |
       +--> Swagger in development

Docker Compose supports local containers, hot reload, and debugger attachment.
```

The current repository is chiefly a development-environment exercise. Dockerfiles and Compose files establish a local frontend/backend workflow; VS Code configuration supports browser and .NET debugging. No e-commerce domain layer connects the two starters.
