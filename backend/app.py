from flask import Flask, request, jsonify
from database import db
from models import (
    Usuario,
    Comunidade,
    Post,
    ComunidadeMembro,
    Comentario,
    Curtida,
    Notificacao,
    Mensagem
)

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

    resultado = []

    for membro in membros:

        usuario = Usuario.query.get(
            membro.usuario_id
        )

        resultado.append({
            "id": usuario.id,
            "nome": usuario.nome,
            "tipo": usuario.tipo,
            "instituicao": usuario.instituicao,
            "cidade": usuario.cidade,
            "estado": usuario.estado
        })

    return jsonify(resultado)

    # FEED DA COMUNIDADE
@app.route("/comunidades/<int:id>/posts", methods=["GET"])
def listar_posts_da_comunidade(id):

    posts = Post.query.filter_by(
        comunidade_id=id
    ).all()

    resultado = []

    for post in posts:

        usuario = Usuario.query.get(
            post.usuario_id
        )

        # Proteção contra usuário inexistente
        if usuario is None:
            continue

        resultado.append({
            "id": post.id,
            "autor": usuario.nome,
            "tipo": usuario.tipo,
            "conteudo": post.conteudo
        })

    return jsonify(resultado)

# CREATE COMENTARIO
@app.route("/comentarios", methods=["POST"])
def criar_comentario():

    dados = request.get_json()

    novo_comentario = Comentario(
        conteudo=dados["conteudo"],
        usuario_id=dados["usuario_id"],
        post_id=dados["post_id"]
    )

    db.session.add(novo_comentario)
    db.session.commit()

    return jsonify({
        "mensagem": "Comentario criado com sucesso!"
    })

# LISTAR COMENTARIOS DE UM POST
@app.route("/posts/<int:id>/comentarios", methods=["GET"])
def listar_comentarios(id):

    comentarios = Comentario.query.filter_by(
        post_id=id
    ).all()

    resultado = []

    for comentario in comentarios:

        usuario = Usuario.query.get(
            comentario.usuario_id
        )

        if usuario is None:
            continue

        resultado.append({
            "id": comentario.id,
            "autor": usuario.nome,
            "tipo": usuario.tipo,
            "conteudo": comentario.conteudo
        })

    return jsonify(resultado)

# CURTIR POST
@app.route("/curtidas", methods=["POST"])
def curtir_post():

    dados = request.get_json()

    curtida_existente = Curtida.query.filter_by(
        usuario_id=dados["usuario_id"],
        post_id=dados["post_id"]
    ).first()

    if curtida_existente:
        return jsonify({
            "erro": "Usuario ja curtiu este post"
        }), 400

    nova_curtida = Curtida(
        usuario_id=dados["usuario_id"],
        post_id=dados["post_id"]
    )

    db.session.add(nova_curtida)
    db.session.commit()

    return jsonify({
        "mensagem": "Post curtido com sucesso!"
    })

# DESCURTIR POST
@app.route("/curtidas", methods=["DELETE"])
def descurtir_post():

    dados = request.get_json()

    curtida = Curtida.query.filter_by(
        usuario_id=dados["usuario_id"],
        post_id=dados["post_id"]
    ).first()

    if curtida is None:
        return jsonify({
            "erro": "Curtida nao encontrada"
        }), 404

    db.session.delete(curtida)
    db.session.commit()

    return jsonify({
        "mensagem": "Curtida removida com sucesso!"
    })

# CONTAR CURTIDAS DE UM POST
@app.route("/posts/<int:id>/curtidas", methods=["GET"])
def contar_curtidas(id):

    total = Curtida.query.filter_by(
        post_id=id
    ).count()

    return jsonify({
        "post_id": id,
        "curtidas": total
    })

# CRIAR NOTIFICACAO
@app.route("/notificacoes", methods=["POST"])
def criar_notificacao():

    dados = request.get_json()

    notificacao = Notificacao(
        mensagem=dados["mensagem"],
        usuario_id=dados["usuario_id"]
    )

    db.session.add(notificacao)
    db.session.commit()

    return jsonify({
        "mensagem": "Notificacao criada com sucesso!"
    })

# LISTAR NOTIFICACOES DE UM USUARIO
@app.route("/usuarios/<int:id>/notificacoes", methods=["GET"])
def listar_notificacoes(id):

    notificacoes = Notificacao.query.filter_by(
        usuario_id=id
    ).all()

    return jsonify([
        {
            "id": notificacao.id,
            "mensagem": notificacao.mensagem,
            "lida": notificacao.lida
        }
        for notificacao in notificacoes
    ])

# MARCAR NOTIFICACAO COMO LIDA
@app.route("/notificacoes/<int:id>/ler", methods=["PUT"])
def marcar_notificacao_como_lida(id):

    notificacao = Notificacao.query.get(id)

    if notificacao is None:
        return jsonify({
            "erro": "Notificacao nao encontrada"
        }), 404

    notificacao.lida = True

    db.session.commit()

    return jsonify({
        "mensagem": "Notificacao marcada como lida!"
    })

# ENVIAR MENSAGEM
@app.route("/mensagens", methods=["POST"])
def enviar_mensagem():

    dados = request.get_json()

    mensagem = Mensagem(
        conteudo=dados["conteudo"],
        remetente_id=dados["remetente_id"],
        destinatario_id=dados["destinatario_id"]
    )

    db.session.add(mensagem)
    db.session.commit()

    return jsonify({
        "mensagem": "Mensagem enviada com sucesso!"
    })

# LISTAR MENSAGENS
@app.route("/mensagens", methods=["GET"])
def listar_mensagens():

    mensagens = Mensagem.query.all()

    resultado = []

    for mensagem in mensagens:

        remetente = Usuario.query.get(
            mensagem.remetente_id
        )

        destinatario = Usuario.query.get(
            mensagem.destinatario_id
        )

        resultado.append({
            "id": mensagem.id,
            "remetente": remetente.nome,
            "destinatario": destinatario.nome,
            "conteudo": mensagem.conteudo
        })

    return jsonify(resultado)

if __name__ == "__main__":
    app.run(debug=True)