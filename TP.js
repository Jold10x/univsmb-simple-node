const fs = require("fs");
class GestionFichier {

    constructor(fichier){
        this.fichier=fichier;
    }
    
    LireFichier(){
        this.contenu = fs.readFile(this.fichier, "utf8", (err, file) => {
            if (err) throw err;
            console.log(file);
        });
    }

    EcrireFichier(text){
        fs.writeFileSync(this.fichier, text, {flag: 'a+'} , (err) => {
        if (err) throw err;
        console.log("Completed!");
        });
    }

    SupprimerFichier(){
        fs.unlink(this.fichier, (err) => {
            if (err) throw err;
            console.log("File deleted!");
        });
    }
}

test = new GestionFichier("test.txt")
test.LireFichier()
test.EcrireFichier("World \n")


class GestionFichierJson extends GestionFichier {
    constructor(fichier){
        super(fichier);
    }

    LireJson(){
        this.contenujson = JSON.parse(this.contenu)
    }

    EcrireJson(key,value){
        this.contenujson = valeur
        this.EcrireFichier(JSON.stringify(this.contenujson))
    }

}

test2 = new GestionFichierJson("test.json")
test2.LireJson()

