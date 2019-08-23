from flask import Flask, render_template

app = Flask(__name__,
            static_folder='../react-frontend/dist',
            template_folder='../react-frontend')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

