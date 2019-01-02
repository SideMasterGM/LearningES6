# LearningES6
Learning ECMAScript  6 with short practices.

### Installations
- Node JS
- Babel

**Install Babel**
After installing NodeJS, keep doing this: 
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

To configure Babel, do this: `update the package.json file`
```json
"scripts": {
    "build": "babel src -d output"
}
```

Create `.babelrc` configuration file
```
{
  "presets": ["@babel/preset-env"]
}
```

---
To compile, do this: 
```
npm run build
```
---

### Variables type
```js
var name = "Side";
let name = "Master";
const name = "Side Master";
```