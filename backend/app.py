from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = \
    "postgresql://postgres:SUA_SENHA@localhost/arandu"

db = SQLAlchemy(app)

@app.route("/")
def home():
    return "Conectado ao PostgreSQL!"

if __name__ == "__main__":
    app.run(debug=True)