from database import db


class Usuario(db.Model):
    __tablename__ = "usuarios"

    id = db.Column(db.Integer, primary_key=True)

    nome = db.Column(db.String(100), nullable=False)

    email = db.Column(
        db.String(150),
        unique=True,
        nullable=False
    )

    senha = db.Column(
        db.String(255),
        nullable=False
    )

    tipo = db.Column(
        db.String(20),
        nullable=False
    )

    idade = db.Column(db.Integer)

    cidade = db.Column(db.String(100))

    estado = db.Column(db.String(2))

    instituicao = db.Column(
        db.String(150)
    )

    bio = db.Column(db.Text)


class Comunidade(db.Model):
    __tablename__ = "comunidades"

    id = db.Column(db.Integer, primary_key=True)

    nome = db.Column(
        db.String(100),
        nullable=False
    )

    descricao = db.Column(db.Text)

    criador_id = db.Column(
        db.Integer,
        db.ForeignKey("usuarios.id"),
        nullable=False
    )

class ComunidadeMembro(db.Model):
    __tablename__ = "comunidade_membros"

    id = db.Column(db.Integer, primary_key=True)

    usuario_id = db.Column(
        db.Integer,
        db.ForeignKey("usuarios.id"),
        nullable=False
    )

    comunidade_id = db.Column(
        db.Integer,
        db.ForeignKey("comunidades.id"),
        nullable=False
    )

class Post(db.Model):
    __tablename__ = "posts"

    id = db.Column(db.Integer, primary_key=True)

    conteudo = db.Column(db.Text, nullable=False)

    usuario_id = db.Column(
        db.Integer,
        db.ForeignKey("usuarios.id"),
        nullable=False
    )

    comunidade_id = db.Column(
        db.Integer,
        db.ForeignKey("comunidades.id"),
        nullable=False
    )