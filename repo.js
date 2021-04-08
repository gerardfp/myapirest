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

    eliminar(titulo){
        return this.db.result("DELETE FROM mensajes WHERE titulo = $1", [titulo], r => r.rowCount);
    }
}


module.exports = MensajesRepo;