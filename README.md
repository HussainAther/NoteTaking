# Note Taking

Hosted on Glitch: https://agate-lucky-stick.glitch.me

Users can register, log in, create notes, and upload files associated with those notes.

It's highly recommended to run the project in a virtual environment. Create one with the following:

```
python -m venv venv
```

Install the required packages: 

```
pip install -r requirements.txt
```

```
NoteTaking/
    |- venv/                          # Virtual environment directory
    |- app/
        |- static/                    # Static files (CSS, JS, images)
        |- templates/                 # HTML templates
        |- models.py                  # Database models
        |- forms.py                   # Flask-WTF forms
        |- routes.py                  # Flask routes/views
    |- config.py                      # Configuration file
    |- requirements.txt               # List of required packages
    |- run.py                         # Entry point to run the application
```

* venv: This directory contains the virtual environment for your Flask application. It will be created when you set up the virtual environment using the python -m venv venv command.

* app: This directory holds the main application code.

    * static: You can place your CSS, JavaScript, and image files in this directory.

    * templates: This directory is used to store your HTML templates. Flask will look for templates in this directory by default.

    * models.py: This file contains the database models using an ORM tool like SQLAlchemy. You define the structure of your database tables in this file.

    * forms.py: This file is used to define Flask-WTF forms for user input validation.

    * routes.py: This file contains the Flask routes and views that handle different URLs and HTTP requests.

* config.py: This file holds the configuration settings for your Flask application. You can define environment-specific configurations here.

* requirements.txt: This file lists the required packages and their versions for your Flask application. You generate this file using pip freeze > requirements.txt or manually specify the packages and versions.

* run.py: This file is the entry point to run your Flask application. It usually contains a few lines of code to create the Flask app object and run the application.

## Create database tables

```
flask db init
flask db migrate -m "Initial migration"
flask db upgrade
```

## Make API Requests to Twitter

```
npm install axios
```

Replace 'YOUR_RAPIDAPI_KEY' in the headers object with your actual RapidAPI key in the `src/ApiComponent.js` file.

### React commands

* `npm start` or `yarn start`: Starts the development server and opens your app in the browser.
* `npm run build` or `yarn build`: Builds the app for production and creates a build directory with optimized and minified files.
* `npm test` or `yarn test`: Runs the tests for your app.
