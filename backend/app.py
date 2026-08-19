from flask import Flask
from database import db
from models import Usuario

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = (
    "postgresql://postgres:250a@127.0.0.1:5432/Arandu"
)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "AranDu conectado ao PostgreSQL!"

if __name__ == "__main__":
    app.run(debug=True)