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

The 'Hello Rails Front-End' App is a basic front-end application configured with React and Redux designed to display a random 'Hello World' message. It connects to an API endpoint set up in a complementary back-end Rails application.

Front-end application name: hello-react-front-end-2
  link: https://github.com/jcmunav63/hello-react-front-end-2.git

Back-end application name: hello-rails-back-end-2
  link: https://github.com/jcmunav63/hello-rails-back-end-2.git


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <ul>
    <li><a href="https://ruby-doc.org/">Ruby v 3.2.2</a></li>
    <li><a href="https://rubyonrails.org/">Rails v 7.1.2</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL v 16.1.1</a></li>
  </ul>

### Key Features <a name="key-features"></a>
- **Set up a Ruby on Rails project together with React.js as the front-end.**
- **Set up linters using Stylelint and Rubocop**
- **Connect the Rails project to a PostgreSQL database.**
- **Implement an API endpoint to display a random 'Hello World' message in JSON format.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

[Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)

[Set Up Rails](https://www.ruby-lang.org/en/documentation/installation/)

Prerequisites: Ruby, Ruby Development Kit (for Windows), Ruby Gems packaging system, and PostgreSQL database server. Run the following commands...
```sh
$ gem install rails
```

### Setup

```sh
  cd my-folder
  git clone https://github.com/jcmunav63/hello-rails-back-end-2.git
```

### Install

This project requires the following dependencies: the Ruby interpreter, the Gem package manager, the Ruby on Rails web framework, a PostgreSQL database server, the Webpack JS module bundler, the jsbundling-rails gem, and two linters checkers: RuboCop (Ruby) and Stylelint (CSS styles).

```sh
bundle install
```

### Usage

To run the project, navigate to the project directory and execute the following command:

Start the Ruby on Rails web server (Puma server) typing the following command...
```sh
  rails s , or the complete command,
  rails server
```

### Check linters

* Install the Rubocop linters checker.

Install the Rubocop linters checker using the following steps...
- First add the following code to the Gem file:
```sh
gem 'rubocop', '>= 1.0', '< 2.0'
```
- Second run the command to install dependicies in your project:
```sh
bundle install
```
- Remember to copy the .rubocop.yml file to your root directory.

gem 'rubocop', '>= 1.0', '< 2.0'

- Copy the linters.yml file inside of path .github/workflows


To run LINTERS, run the following command:

Run the following command for Ruby code...
```sh
rubocop
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

  - It is a simple Ruby on Rails project on the backend with connection to React.js on the frontend. It uses two separate repos, this one for the back-end (Ruby on Rails), and another repor for the front-end (React & Redux).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
