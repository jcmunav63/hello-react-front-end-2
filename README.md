## Hello Rails App - Front-End

<a name="readme-top"></a>
<div align="center">
    <img src="/logo_jcm_md.png" alt="main-logo" width="500"  height="auto" />
  <br/>
  <h3><b>Hello Rails App - Front-End</b></h3>
</div>
📗 Table of Contents <a name="table_of-contents"></a>

- [📗 Table of Contents](#table-of-contents)
- [📖 About project ](#about-project)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)

## 📖 About project - Hello Rails App - Front-End <a name="about-project"></a>

The 'Hello Rails Front-End' App is a basic front-end application configured with React and Redux, designed to display a random 'Hello World' message. It connects to an API endpoint set up in a complementary back-end Ruby on Rails application.

Front-end application name: hello-react-front-end-2
  link: https://github.com/jcmunav63/hello-react-front-end-2.git

Back-end application name: hello-rails-back-end-2
  link: https://github.com/jcmunav63/hello-rails-back-end-2.git


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://react.dev/">React v 18.2.0</a></li>
    <li><a href="https://redux.js.org/">Redux v 5.0.1</a></li>
  </ul>

### Key Features <a name="key-features"></a>
- **Set up a React.js app to work as the front-end for displaying a random message.**
- **Install Redux and the main dependencies for React & Redux.**
- **Set up linters using Stylelint and ESLint.**
- **Set up a store, together with the required actions and reducers.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

[Install a React app](https://www.ruby-lang.org/en/documentation/installation/)

[Install Redux](https://www.ruby-lang.org/en/documentation/installation/)

Prerequisites: Node.js, npm package manager. Run the following command to create a regular React.js app...
```sh
$ npx create-react-app hello-react-front-end-2
```

Or, if you are inside of the project folder...
```sh
$ npx create-react-app .
```


### Setup

```sh
  cd my-folder
  git clone https://github.com/jcmunav63/hello-react-front-end-2.git
```

### Install

This project requires the following dependencies: Node.js, the npm package manager. For the app to work it need to install: React.js, Redux.js, react-redux, axios, redux-thunk, and reduxjs-toolkit.

```sh
bundle install
```

### Usage

To run the project, execute the following command on your terminal:

Start the React web server typing the following command...
```sh
  npm start
```

### Check linters

* Install the Stylelint and ESLint linters checkers.

Install the Stylelint linters checker using the following steps...
- First, install the Stylelint package:
```sh
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
```
- Second, run the Stylelint linters checker with the following command:
```sh
npx stylelint "**/*.{css,scss}"
```
- Remember to copy the .stylelintrc.json file to your root directory.


Install the ESlint linters checker using the following steps...
- First, install the ESlint package:
```sh
npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x  @babel/preset-react@7.x @babel/preset-react@7.x
```
- Second, run the Stylelint linters checker with the following command:
```sh
npx eslint "**/*.{js,jsx}"
```
- Remember to copy the .eslintrc.json and .babelrc files to your root directory.

- Finally, copy the linters.yml file inside of path .github/workflows


To run LINTERS, run the following command:

Run the following command for Ruby code...
Stylelint:
```sh
npx stylelint "**/*.{css,scss}"
```

ESlint:
```sh
npx eslint "**/*.{js,jsx}"
```

* Unit, request, and integration tests will be developed on another stage.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Juan Carlos Muñoz**

- GitHub: [@jcmunav63](https://github.com/jcmunav63)
- Twitter: [@jcmunav63](https://twitter.com/jcmunav63)
- LinkedIn: [@juan-carlos-muñoz](https://www.linkedin.com/in/juan-carlos-mu%C3%B1oz-5a15b6276/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Add instructions to this file in order to use it as a template for new projects using Rails & React.**
- *** Unit, request, and integration tests will be developed on another stage.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⭐️ Show your support <a name="support"></a>

If you like this project please give me a star on Github. Thanks in advance.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgments <a name="acknowledgements"></a>

I would like to thank all my colleagues, who inspire me to do my best everyday.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ❓ FAQ <a name="faq"></a>

**Did you create this project from scratch?**

  - It is a simple Ruby on Rails project on the front-end with connection to a Ruby on Rails app on the back-end. This project uses two separate repos, this one is for the front-end (React & Redux), and the other repo is for the back-end (Ruby on Rails).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
