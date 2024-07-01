# yoopta-editor-clone


## Setup

First, you need to build the image:
```bash
$ docker build -t <test_name> .
```

Now run the container:
```bash
$ docker run -it <test_name> /bin/bash
```

..and finally run the script, inside the container:
```bash
$ node src/App.js
```

you should find the exported HTML file:
```bash
$ cat test_file.
```



