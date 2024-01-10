# Blog Readme

Welcome to the 9epoch blog! Managing and adding new content is a breeze with our simple process. Follow the steps below to add new posts to the blog.

## Setup Instructions
1. Clone the Repository.
2. Ensure you have Gatsby CLI and Node.js installed on your device.
3. Install Node Modules using "npm install".
4. Run the app locally using "gatsby develop".

## Adding a New Blog Post

1. Navigate to the `/content/blog` directory in our repository.

2. Create a new folder that directly relates to your blog post. Choose a name that succinctly represents the topic or theme of your post.

3. Inside the newly created folder, add a Markdown file (`.md`). This file will contain the content of your blog post.

4. At the top of the Markdown file, include metadata enclosed in three dashes `---`. This metadata provides essential information about your blog post. Here's an example:

    ```markdown
    ---
    title: Your Blog Post Title
    date: "2024-01-10T08:00:00.000Z"
    description: "A Brief Description of Your Exciting Blog Post"
    ---
    ```

    Replace `Your Blog Post Title` and `A Brief Description of Your Exciting Blog Post` with your actual title and description.

5. Below the metadata, write your blog post content using Markdown syntax. Feel free to include headings, lists, images, and any other elements to enhance your post.

6. Save the file and commit your changes to the repository.

## Markdown Writing Tips

- Use `#` for headings, and the number of `#` symbols determines the heading level (e.g., `# Heading 1`, `## Heading 2`).

- Create lists using `-` or `1.`, and indent items for nested lists.

- Embed images with `![Alt Text](image-url)`.

- To include code snippets, use triple backticks (```).

- Check out the [Markdown Guide](https://www.markdownguide.org/) for more detailed syntax and formatting options.

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/docs/tutorial/getting-started/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On Netlify](https://netlify.com)

The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. And also the best place to build, deploy, and host your Gatsby sites.

<!-- AUTO-GENERATED-CONTENT:END -->
