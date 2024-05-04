# About

The DreamRealizer aims to provide a platform where one can organize todos conveniently.

# Personas

- PC user
- Mobile user
- Developer

# User stories

## New

- As a developer I would like to configure unit testing, so I can develop with TDD approach.
- As a developer I would like to configure E2E testing, so I can fully follow TDD and gain trust in the application.
- As a developer I would like to create a current week display, so the app is prepared for scheduling features.
- As I user I would like to schedule task, so I can plan ahead and be more productive.
- As a user, I would like to rearrange my unscheduled todos, so I can prioritize them.
- As a user I would like to edit the title and effort estimation of the unscheduled todos, so I can further refine them at a later time.
- As a user, I would like to a validation for the title (no empty title), so I can avoid to make a mess.
- As a user, I would like to view and edit my plans on my mobile, so I don't always have to use a laptop.
- As a user, I would like to have the chance to undo my delete operation, so I can avoid accidental information loss.

## Completed

- As an advanced user, I would like to use enter to submit the new todo
  , so my usual productivity is kept high.
- As a user I would like add quickly future todos in an unscheduled manner, so I can record them during rush hours.
- As a user, I would like to be able to delete a unscheduled todo, so I can remove irrelevant todos.

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
