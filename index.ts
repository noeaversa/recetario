import { Clase_com } from "./clase_com";
import { Clase_sim } from "./clase_sim";
import express from 'express';


const agua: Clase_sim = new Clase_sim("agua", "-", 500, 0)
const harina: Clase_sim = new Clase_sim("harina", "-", 500, 1)
const sal: Clase_sim = new Clase_sim("sal", "-", 1, 1)

const masa: Clase_com = new Clase_com("masa", " de pizza", 1, 2, [])
masa.addHijo(agua)
masa.addHijo(harina)
masa.addHijo(sal)

const pizza_a_la_prusci: Clase_com = new Clase_com("Pizza a la Prusci", "con Salsa Blanca y Espinaca", 1, 2, [])
pizza_a_la_prusci.addHijo(masa)



var app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send(pizza_a_la_prusci)
})

app.listen(9090);
console.log("Server is listening on port 9090")