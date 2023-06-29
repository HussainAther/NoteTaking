# Note Taking

Users can register, log in, create notes, and upload files associated with those notes.

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
