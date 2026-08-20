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


# CREATE
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


# READ ALL
@app.route("/usuarios", methods=["GET"])
def listar_usuarios():

    usuarios = Usuario.query.all()

    return jsonify([
        {
            "id": usuario.id,
            "nome": usuario.nome,
            "email": usuario.email
        }
        for usuario in usuarios
    ])


# READ ONE
@app.route("/usuarios/<int:id>", methods=["GET"])
def buscar_usuario(id):

    usuario = Usuario.query.get(id)

    if usuario is None:
        return jsonify({
            "erro": "Usuário não encontrado"
        }), 404

    return jsonify({
        "id": usuario.id,
        "nome": usuario.nome,
        "email": usuario.email
    })


# UPDATE
@app.route("/usuarios/<int:id>", methods=["PUT"])
def atualizar_usuario(id):

    usuario = Usuario.query.get(id)

    if usuario is None:
        return jsonify({
            "erro": "Usuário não encontrado"
        }), 404

    dados = request.get_json()

    usuario.nome = dados["nome"]
    usuario.email = dados["email"]

    db.session.commit()

    return jsonify({
        "mensagem": "Usuário atualizado com sucesso!"
    })


# DELETE
@app.route("/usuarios/<int:id>", methods=["DELETE"])
def deletar_usuario(id):

    usuario = Usuario.query.get(id)

    if usuario is None:
        return jsonify({
            "erro": "Usuário não encontrado"
        }), 404

    db.session.delete(usuario)
    db.session.commit()

    return jsonify({
        "mensagem": "Usuário removido com sucesso!"
    })


if __name__ == "__main__":
    app.run(debug=True)