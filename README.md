# React Hook for inserting meta tags on each page

It's  a good idea to have unique and relevant meta tags for all pages of your React project. This will help search engines understand the content of your pages and display more accurate and informative search results for users. You can use this hook to set Open Graph meta tags as well. You would just need to specify the appropriate property names and values in the metaData object.

## Example

### Creating meta data

Lets first create js file where we will store our meta data. I will put it in data folder.
Keyword represent name or property of meta tag and the value is content of it.

```js
// data/metaData.js

export const homeMeta = {
  description: "Your site description",
  keywords: "kwOne, kwTwo",
  "og:title": "Your title for OGT meta data",
  "og:description": "Your description",
  "og:image": "path/to/img.png"
}

export const aboutMeta = {
  description: "Your site description",
  keywords: "kwOne, kwTwo",
  "og:title": "Your title for OGT meta data",
  "og:description": "Your description",
  "og:image": "path/to/img.png"
}
```

### Importing meta data

Now we will import our meta data into App.jsx file and send it as props to child components.

```jsx
//App.jsx file

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { homeMeta, aboutMeta } from "./data/metaData";
import { NavBar, Footer } from "./components";
import { Home, About } from "./pages";

function App() {
  const [homeMetaData] = useState(homeMeta);
  const [aboutMetaData] = useState(aboutMeta);
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home metaData={homeMetaData} />} />
        <Route path="about" element={<About metaData={aboutMetaData} />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
```

### Using meta data

Now we need to apply hook to child component. I will use Home component for it.

```jsx
// pages/Home.jsx

import { NavLink } from "react-router-dom";
import { useMetaTags } from "../hooks";

export const Home = ({ metaData }) => {
  useMetaTags(metaData);
  return (
    <div>
      {/* Rest of code here */}
    </div>
  );
};
```
