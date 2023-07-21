![🚧 Under construction 👷‍♂️](https://i.imgur.com/LEP2R3N.png)

# File System for anywhere

📂 FileSystemFileHandle polyfill for Node.js and more!

<div align="center">

</div>

## Installation

## Usage

```js
// Node.js
import { openFile } from "@webfill/fs";

const handle = openFile("file.txt");
const file1 = await handle.getFile();
const text1 = await file1.text();
console.log(text1);
//=> 'I am a file!'

const writable = await handle.createWritable();
await writable.write("Hello world!");
await writable.close();

const file2 = await handle.getFile();
const text2 = await file2.text();
console.log(text2);
//=> 'Hello world!'
```

```js
// Node.js and browser
import "@webfill/fs";


```
