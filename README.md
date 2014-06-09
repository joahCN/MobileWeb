## Environment Setup

This project uses [Yeoman](http://yeoman.io) to manage workflow. So we need to install Yeoman first.
Here is a short guide:

* Install [Node.js](http://nodejs.org).
  
    - If you are on windows, you can go to Node.js official site, download and install following the wizard.
    - If you are on Mac OS, you can use [Homebrew](http://brew.sh) to install Node.js:
            
            brew install nodejs
    
* Install Yeoman. After Node.js has been installed. It's time to install Yeoman.
Open up a command line window, and enter the following command:

        npm install -g yo
        
Note the `-g` (global) option.

* Install [Grunt](http://gruntjs.com). The build tool used by Yeoman.

        npm install -g grunt-cli
        
* Install [Bower](http://bower.io). Front-end dependency management tool.

        npm install -g bower
        
* Install [Ruby](http://www.ruby-lang.org). Required by compass.

* Install [Compass](http://compass-style.org).

        gem update --system
        gem install compass

Use [RubyGems TaoBao](https://ruby.taobao.org/), if you have problem in connecting to official gems site.

## Project Setup

After setting up the development environment, we are ready to setup our project.
First we need to checkout the project.

### Checkout Project

We host our project on the [GitHub](http://github.com).Fortunately, GitHub supplies their clients for both 
[Windows](http://windows.github.com) and [Mac OSX](https://mac.github.com) platforms.
So you can simply use the GitHub client to checkout the project.

You can also use git command line tools. 
Maybe you need to install [git](http://git-scm.com) first if you have not has git installed on your system.
Then, fire up a command line window:

    git clone https://github.com/%username%/MobileWeb.git MobileWeb
    
Replace `%username%` with your GitHub username. 

**Note**, we use the team repository as our central repository shared by all team members. 
To avoid messing this repository up, we encourage you to fork this repo to your personal account.
And when you are sure your code is ready to share with others, you can issue a pull request to the central repository.
All team members can (and should review) this pull request.

### Install Dependencies

Next, navigate to the project directory and install dependencies:

    npm install
    
If you are on windows, you maybe encounter a error complain that failed to fetch PhamtomJS.
This is a network issue, you can ignore this error now.

Install front-end dependencies:

    bower install

All dependencies have been resolved.

## Start Server

OK. We are ready to go. Yeoman supplies a built-in server. You can run

    grunt serve
    
to start this server. Yeoman watches files, if any modification happens then this server will reload automatic.