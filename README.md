# clicky-game

# Summaries
  This application was created with React. The game will render a set of images where users is trying to pick an image once. The score will increase by 1 every time users pick an image, but the score will reset if the users pick the image twice. So let's test your memomry.

# Deploy Link
 https://taile96.github.io/clicky-game/

# Direction
  - git clone
  - npm start
    

# Techonologies Used
    - React: JavaScript library for building user interfaces
    - CSS: used to style elements on the page
    - JavaScript: high level programming language
    - Node.js: JavaScript runtime, allows users to run JavaScript on the server.
    - Node.js: JavaScript runtime, allows users to run JavaScript on the server.
    -GitHub: used to deploy the application.

# Code Snippet
```js
shuffleImages = newClick => {
    for (var i = newClick.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i+1))
      const shuffle = newClick[i];
      newClick[i] = newClick[j];
      newClick[j] = shuffle
    }
  }
```
 This will shuffle the images randomly using "Math.floor(Math.random() * (i+1))". Everytime a user picks an image, the images in the array shuffle.

# Author
- [LinkedIn](www.linkedin.com/in/tu-tai-le-2a9646139)
- [GitHub](https://github.com/TaiLe96)