from flask import render_template, jsonify
from flask_backend import app
from flaskext.mysql import MySQL
import pymysql
from flask_backend.config import aws_rds

mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = aws_rds.USER
app.config['MYSQL_DATABASE_PASSWORD'] = aws_rds.PASSWORD
app.config['MYSQL_DATABASE_DB'] = aws_rds.DB
app.config['MYSQL_DATABASE_HOST'] = aws_rds.HOST
app.config['MYSQL_DATABASE_PORT'] = aws_rds.PORT
app.config['MYSQL_DATABASE_DB'] = aws_rds.DB
mysql.init_app(app)

@app.route('/db')
def db():
    try:
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute("SELECT * FROM SecurityRoles;")
        rows = cur.fetchall()
        resp = jsonify(rows)
        resp.status_code = 200
        return resp
    except Exception as e:
        print(e)
    finally:
        cur.close()
        conn.close()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")
