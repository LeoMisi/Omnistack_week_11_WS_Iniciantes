const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){

        //Criar a tabela

        db.run(`
             CREATE TABLE IF NOT EXISTS ideas(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                img TEXT,
                title TEXT,
                category TEXT,
                description TEXT,
                link TEXT           
            );
        `)
 })

 module.exports = db

 
// SÓ PRECISA EXECUTAR ESSE CÓDIGO ABAIXO CASO EXCLUA O BANCO DE DADOS MANUALMENTE.


 //        //Inserir dado na tabela
 //        const query = `
 //             INSERT INTO ideas (
 //                 img,
 //                 title,
 //                 category,
 //                 description,
 //                 link
 //             ) VALUES (?,?,?,?,?);
 //         `
 //        const values = [
 //            "https://image.flaticon.com/icons/svg/2729/2729007.svg",
 //            "Cursos de Programação",
 //            "Estudo",
 //            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vitae veniam aspernatur earum illo labore?",
 //           "https://rocketseat.com.br"
 //       ]
 //        db.run(query, values, function(err) {
 //            if (err) return console.log(err)
 //    
 //            console.log(this)
 //        })

        
 //       Deletar um dado da tabela
 //       db.run(` DELETE FROM ideas WHERE id= ?`, [1], function(err){
 //           if (err) return console.log(err)
 //
 //          console.log("DELETEI", this)
 //             })
 //
 //       Consultar dados na tabela
 //        db.all(`SELECT * FROM ideas`, function(err, rows){
 //            if (err) return console.log(err)
 //
 //            console.log(rows)
 //             })


