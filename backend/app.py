from flask import Flask, request, jsonify
from database import db
from models import Usuario, Comunidade, Post, ComunidadeMembro

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
        email=dados["email"],
        senha=dados["senha"],
        tipo=dados["tipo"],
        idade=dados["idade"],
        cidade=dados["cidade"],
        estado=dados["estado"],
        instituicao=dados["instituicao"],
        bio=dados["bio"]
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

# CREATE COMUNIDADE
@app.route("/comunidades", methods=["POST"])
def criar_comunidade():

    dados = request.get_json()

    nova_comunidade = Comunidade(
    nome=dados["nome"],
    descricao=dados["descricao"],
    criador_id=dados["criador_id"]
)

    db.session.add(nova_comunidade)
    db.session.commit()

    return jsonify({
        "mensagem": "Comunidade criada com sucesso!"
    })


# LISTAR COMUNIDADES
@app.route("/comunidades", methods=["GET"])
def listar_comunidades():

    comunidades = Comunidade.query.all()

    return jsonify([
        {
            "id": comunidade.id,
            "nome": comunidade.nome,
            "descricao": comunidade.descricao
        }
        for comunidade in comunidades
    ])

# LISTAR POSTS
@app.route("/posts", methods=["GET"])
def listar_posts():

    posts = Post.query.all()

    return jsonify([
        {
            "id": post.id,
            "conteudo": post.conteudo,
            "usuario_id": post.usuario_id,
            "comunidade_id": post.comunidade_id
        }
        for post in posts
    ])


# CREATE POST
@app.route("/posts", methods=["POST"])
def criar_post():

    dados = request.get_json()

    novo_post = Post(
        conteudo=dados["conteudo"],
        usuario_id=dados["usuario_id"],
        comunidade_id=dados["comunidade_id"]
    )

    db.session.add(novo_post)
    db.session.commit()

    return jsonify({
        "mensagem": "Post criado com sucesso!"
    })

# ENTRAR EM UMA COMUNIDADE
@app.route("/comunidades/entrar", methods=["POST"])
def entrar_comunidade():

    dados = request.get_json()

    membro = ComunidadeMembro(
        usuario_id=dados["usuario_id"],
        comunidade_id=dados["comunidade_id"]
    )

    db.session.add(membro)
    db.session.commit()

    return jsonify({
        "mensagem": "Usuario entrou na comunidade!"
    })

    # LISTAR MEMBROS DE UMA COMUNIDADE
@app.route("/comunidades/<int:id>/membros", methods=["GET"])
def listar_membros(id):

    membros = ComunidadeMembro.query.filter_by(
        comunidade_id=id
    ).all()

    return jsonify([
        {
            "usuario_id": membro.usuario_id,
            "comunidade_id": membro.comunidade_id
        }
        for membro in membros
    ])

if __name__ == "__main__":
    app.run(debug=True)