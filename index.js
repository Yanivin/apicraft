const express = require('express');
const PORT = 8080;

const aewjson = require('./json/aew.json');
const attackjson = require('./json/attack.json');
const bomberjson = require('./json/bomber.json');
const carrierjson = require('./json/carrier.json');
const json = require('./json/civil.json');
const electronicjson = require('./json/electronic.json');
const fighterjson = require('./json/fighter.json');
const floatplanejson = require('./json/floatplane.json');
const maritimejson = require('./json/maritime.json');
const racingjson = require('./json/racing.json');
const rotorcraftjson = require('./json/rotorcraft.json');


const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

app.set('json spaces', 2)

function capitalize(string) {
    return string.toUpperCase();
}

app.get('/', (req, res) => {
    res.send('Hello World, from Vinay Saravana Ruban. Go to <b>/path</b> to see the different aircraft on our system.');
});

app.get('/path', (req, res) => {
    res.send('<b>Availible paths (from website root):</b> /civil, /fighter, /bomber, /carrier, /maritime, /aew, /attack, /electronic, /floatplane, /racing, /rotorcraft <br /> <b>In progress:</b> /experimental <br /> <b>Unable to do (Wikipedia pages not complete):</b> /reconaissance');
});

app.get('/aew', (req, res) => {
    res.type('json').status(200).send(aewjson);
});

app.get('/aew/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of aewjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }

    res.status(404).send('Aircraft not found');
});

app.get('/attack', (req, res) => {
    res.type('json').status(200).send(attackjson);
});

app.get('/attack/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of attackjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/bomber/', (req, res) => {
    res.type('json').status(200).json(bomberjson);
});

app.get('/bomber/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of bomberjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }

    res.status(404).send('Aircraft not found');
});

app.get('/carrier', (req, res) => {
    res.type('json').status(200).send(carrierjson);
});

app.get('/carrier/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of carrierjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/civil', (req, res) => {
    res.type('json').status(200).json(json);
});

app.get('/civil/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of json) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }

    res.status(404).send('Aircraft not found');
});

app.get('/electronic', (req, res) => {
    res.type('json').status(200).send(electronicjson);
});

app.get('/electronic/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of electronicjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/fighter', (req, res) => {
    res.type('json').status(200).json(fighterjson);
});

app.get('/fighter/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of fighterjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }

    res.status(404).send('Aircraft not found');
});

app.get('/floatplane', (req, res) => {
    res.type('json').status(200).send(floatplanejson);
});

app.get('/floatplane/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of floatplanejson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/maritime', (req, res) => {
    res.type('json').status(200).send(maritimejson);
});

app.get('/maritime/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of maritimejson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/racing', (req, res) => {
    res.type('json').status(200).send(racingjson);
});

app.get('/racing/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of racingjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});

app.get('/rotorcraft', (req, res) => {
    res.type('json').status(200).send(rotorcraftjson);
});

app.get('/rotorcraft/:name', (req, res) => {
    let search = req.params.name;
    search = capitalize(search);

    for (let aircraft of rotorcraftjson) {
        let name = aircraft.name
        name = capitalize(name)
        if (name === search) {
            return res.type('json').status(200).json(aircraft);
        }
    }
});