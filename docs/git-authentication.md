---
sidebar_position: 3
---

# Git Authentication

Git usually works out of the box... or is supposed to. When it doesn't, the following should help you get set up and rolling.

A year or three ago GitHub removed CLI authentication with your user:pass from the CLI. Why? Well it makes a lot of sense when you think about the ways that usernames, passwords, and the like are leaked, shared, and stolen. This allowed them to adopt a more secure method that allows an extra layer of identity to be added.

You could ignore the command line interface (CLI), but when so many other tools depend on it (and the power and convenience of it are something you don't want to miss), you'll need to either generate a personal access token or generate and use an SSH key.

## Git, Tokens, SSH, and the CLI

Git users need authentication, and depending on how you are accessing your repos you may find one of the following ways the missing piece of your dev puzzle.

### Personal Access Token

If you have an application that needs access to your github account to push and pull from your repo you can generate a token and then use that in place of your credentials. This is actually what I set up in VSCode on my Windows environment.

Generating tokens is done from your GitHub account `Settings → Developer Settings → Personal Access Tokens`.

<figure>
  <img src="/img/github-devsetting-pat-aerate.jpg" alt="Screenshot of Github Developer Settings" width="351" height="260" />
  <figcaption>The Developer Settings sub-menu should look something like this</figcaption>
</figure>

On this page you can create new tokens and revoke access to existing ones. In this instance you would want to generate one and follow the prompts to give permissions and an experation date (if you want to limit how long access will be available for).

Make sure to place the generated token in a very secure location because GitHub is only going to show it once. If you forget it, you'll need to generate a new one.

If that was all you needed, then congrats! you are good to go. Code and save all the things like a true champion-dev.

### SSH

Another option you have is that if you are going to be doing work (especially from the CLI) from multiple applications that are on the same machine is to use an SSH key.

If you haven't already generated an SSH key, that is where you should start. The tip below gives you the link to the official generation and trouble shooting guides.

:::tip Official GitHub Docs for SSH

For the guide to generating and adding SSH keys to your computer and GitHub see https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

For official documentation on troubleshooting SSH issues see https://docs.github.com/en/authentication/troubleshooting-ssh/

:::

Seeing as you are already here though, I'll give you the condensed version.

```bash
# Generate your key using either Ed25519 or RSA

# Using Ed25519
ssh-keygen -t ed25519

# Using older RSA 4096
ssh-keygen -t rsa -b 4096
```

After you have generated and saved the key pair (private and public), you can then upload your public key to your GitHub account under your account `Settings → SSH and GPG keys` and clicking on the `New SSH key` button. A modal should appear and walk you through the uploading the contents of your `.pub` file.

Now that your key has been uploaded to your account, let's make sure that terminal is using your key.

```bash
#Start SSH Agent - should return the Agent pid
ssh-agent -s

# add your key
ssh-add
```

Try using `git` now from the CLI, IDE, or app and make sure it works. If it fails, you'll need to reference the above tip to view the official docs.
