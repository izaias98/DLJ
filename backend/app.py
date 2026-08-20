from flask import Flask, request, jsonify
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


@app.route("/usuarios", methods=["POST"])
def criar_usuario():

    dados = request.get_json()

    novo_usuario = Usuario(
        nome=dados["nome"],
        email=dados["email"]
    )

    db.session.add(novo_usuario)
    db.session.commit()

    return jsonify({
        "mensagem": "Usuário cadastrado com sucesso!"
    })


if __name__ == "__main__":
    app.run(debug=True)