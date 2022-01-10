---
sidebar_position: 1
---

# Using Docker with Apple Silicon

The ARM processor of newer Macs creates an environment with awesome power and battery life, however it causes some potential issues with some docker images.

Luckily, I have already ran into quite a few of these issues and have provided this epic guide on how I tricked images into working. Okay, working is a relative term, especially in the context of native vs emulation via Rosetta...

## Install Docker Desktop

Docker provides the desktop software that runs on the m1+ processors. So head over to the [docker desktop downloads page](https://www.docker.com/products/docker-desktop) and click on the download for "Mac with Apple Chip".

When downloaded go ahead and mount the dmg and install Docker Desktop (you know, the ole double-click then click-and-drag to applications).

After installation go ahead and start Docker Desktop (please note that drivers-and-such may need to be install and the computer rebooted). If it starts up, then so far so good.

### Run Docker-Compose

We use Docker Compose when writing our docker configs, so pull down your project that includes the `docker-compose.yml` you want to run. Go ahead and run the up command, for example:

```docker-compose up -d traefik-malouf redis-malouf hq```

This will either start those three projects and you are good to go, or you'll notice that in the Docker Desktop one or more images may be constantly restarting. If this is the case then you may also notice a little yellow triangle-with-an-exclaimation-point next to it. This should be a warning that the image may run poorly/slowly under emulation. However the constant restarting is the real issue here (and is probably coming from something dependent on Go).

To fix that, odds are that you will need to run a slightly modified image of the `nginx-php` that you are using from `webdevops`.

### Download/build the Modified Image

Make sure that your images are stopped and unmounted (generally the `docker-compose down` command will accomplish that). Now you can build the new and proper images through the use of some carefully crafted dockerfiles.

The following code is the contents of `php-nginx-73-arm.dockerfile`

```docker
FROM webdevops/php-nginx:7.3

RUN wget -O "/usr/local/bin/go-replace" "https://github.com/webdevops/goreplace/releases/download/1.1.2/gr-arm64-linux" \
    && chmod +x "/usr/local/bin/go-replace" \
    && "/usr/local/bin/go-replace" --version
```

Since I also use the PHP74 image, the following is the contents of my `php-nginx-74-arm.dockerfile`.

```docker
FROM webdevops/php-nginx:7.4

RUN wget -O "/usr/local/bin/go-replace" "https://github.com/webdevops/goreplace/releases/download/1.1.2/gr-arm64-linux" \
    && chmod +x "/usr/local/bin/go-replace" \
    && "/usr/local/bin/go-replace" --version
```

Now that we have a couple of dockerfiles, we need to fun them to create the images locally so that we can use them in our `docker-compose` file. If you installed the Docker extension in Visual Studio Code, then you can just right-click on one of those files and scroll to the bottom of the context-menu and click on "Build Image...". This will build the new image with the proper version of Go so that you can run emulation mode and not have the constant restart for your main image.

After you have built both of them you'll need to change the docker-compose file via an override.

### Overriding your docker-compose.yml

Docker is pretty smart when it comes to overrides. Rather than erase all of your original file, you'll instead create a file called `docker-compose.override.yml` and place it next to (read: in the same folder or directory as) the `docker-compose.yml` file you are about to run.

Now in our example, the `hq` image was the one that kept restarting over and over again, so we'll need to change our config that the `image` references our newly-built and local image:

```docker
services:
  hq:
    build:
      context: docker/dockerfiles/php-nginx-73-arm.dockerfile
      dockerfile: .
    image: php-nginx-73-arm
```

> Note that in the example above for the value of `context` the path to the image is where it exists in my filesystem; `docker/dockerfiles` directory+subdirectory. If your image lives elsewhere, make sure to change it!

Once you have the changes saved, try to re-run `docker-compose up -d traefik-malouf redis-malouf hq` and you should notice that this time the images all start up and the reboot/restart loop is gone.

## Go Forth and Dock the Containers

Now that you are running with that one, it is time to go through the other images you have that require the `nginx-php-73` and `nginx-php74` images and update them to use your new working images.

For more help on Docker, please visit the [developer portion of the Docker website](https://docs.docker.com/).
