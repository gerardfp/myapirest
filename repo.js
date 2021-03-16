class MensajesRepo {
    constructor(db, pgp) {
        this.db = db;
    }

    getMensajes(){
        return this.db.any("SELECT * FROM mensajes");
    }

    anadir(titulo, contenido){
        this.db.none("INSERT INTO mensajes VALUES($1, $2)", [titulo, contenido]);
    }
}


module.exports = MensajesRepo;