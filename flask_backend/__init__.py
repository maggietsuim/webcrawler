from flask import Flask

app = Flask(__name__,
            static_folder='../react-frontend/dist',
            template_folder='../react-frontend')

from flask_backend import views

