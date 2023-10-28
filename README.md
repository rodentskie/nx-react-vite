## Description

Monorepo powered by [NX](https://nx.dev/)

[TypeScript Getting Started](https://nx.dev/getting-started/nx-and-typescript#create-a-typescript-based-application)

### Create a new TypeScript based library

`nx g @nx/node:lib delay --bundler tsc --directory library`

### Create a TypeScript based application

`nx g @nx/node:app api --bundler webpack --directory apps`

### Create a react application

`nx g @nx/react:app web.app --bundler=vite --directory apps`

### Create a react library

`nx g @nx/react:lib user.button --bundler=vite --directory library`