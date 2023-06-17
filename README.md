# samuraime

Welcome to `SamuraiME`

This is a small and ambitious learning environment.

## Get started

To start the project run the following commands in terminal:

Start the tsc watcher

```console
yarn watch
```

Start the server

```console
yarn dev
```

## API

The following endpoints are available:

### 1. `tasks`

See all tasks via the below endpoint:

```http
GET /tasks
GET /tasks/:frequency
```

You can add your own task by sending a POST request to:

```http
POST http://localhost:5000/tasks/create
```

The following request body data is required:

```json
{
  "name": "name",
  "frequency": "frequency"
}
```

### 2. `amisamurai`

Find out if you are a Backend Samurai by accessing the below endpoint:

```http
GET /amisamurai
```

If you are not, you can always access the recommendation endpoint to get an advice from the app to become one:

```http
GET /amisamurai/recommendation
```

## Notes

Please note that this project is all about exploring and experimenting with backend development. \
Therefore this repository is not to be taken too seriously, here we are embracing the craziness, making mistakes, and learning from them.

Enjoy the journey with `SamuraiME`! :yum:
