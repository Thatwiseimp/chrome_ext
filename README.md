### Pre-requisites
``` sudo npm install --global browserify ```
``` sudo npm install --global watchify ```
These two packages aid in wrapping the js files and serving them on to the browser

### browserify
```browserify script.js -o bundle.js   ```
Browserify helps in bundling and serving

### watchify
``` watchify script.js -o bundle.js -v ```
watchify does the job of hot-reload on browserify

### eslint
``` eslint --init```
``` eslint target_file_name.js```
eslint supports file import/export utilities and tools