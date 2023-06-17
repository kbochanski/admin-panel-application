# Admin Panel

- [Refine](https://refine.dev/docs/getting-started/quickstart/)
- [FeathersJS](https://feathersjs.com/guides/basics/generator.html)

# Develop

Backend:
Using Feathers CLI to handle service creation.
Frontend:
Using `dataProvider={dataProvider("http://localhost:3030/")}` to connect to Feathers backend. Refine automatically creates forms from data it receives using an [Inferencer](https://refine.dev/docs/packages/documentation/inferencer/). You can always customize Refine [data providers](https://refine.dev/docs/tutorial/understanding-dataprovider/index/) and/or [components](https://refine.dev/docs/tutorial/adding-crud-pages/mui/index/).


```bash
docker compose up
```

## Data Migrations

See [here](https://feathersjs.com/guides/basics/schemas.html#creating-a-migration)

```bash
# Create file for migration
npm run migrate:make -- <migration-name>
# Edit file then run
npm run migrate
```
