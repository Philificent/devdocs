---
sidebar_position: 2
---

# Set up a Global .gitignore

In the following example I want to set my global ignore at the root of where I place my GitHub projects:

```bash
git config --global core.excludesfile ~/Documents/GitHub/.gitignore
```

This will not stop my project from using the `.gitignore` it already contains but will add the contents of this file the one in the project folder.

:::tip Inheritence

If you have a project and the file you want checked in isn't showing up, check your global .gitignore to make sure isn't being ignored there first 👍

:::
