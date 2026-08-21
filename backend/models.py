from database import db


class Usuario(db.Model):
    __tablename__ = "usuarios"

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)


class Comunidade(db.Model):
    __tablename__ = "comunidades"

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.Text)

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