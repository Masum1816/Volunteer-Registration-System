const generateUniqueId = require("generate-unique-id");

let dataStorage = [];

const DefaultController = (req, res) => {

    console.log("Default Controler");

    res.render('index', {data: dataStorage});

}

const AddTodoController = (req, res) => {

    console.log("ADD TODO CONTROLLER");

    let uniqueId = generateUniqueId({
        length: 4,
        useLetters: false
    })

    console.log("UNIQUE ID : ", uniqueId);

    let dataObj = {
        id: uniqueId,
        name: req.body.name,
        mail: req.body.mail,
        number: req.body.number,
        skills: req.body.skills
    }

    console.log("DATA OBJ : ", dataObj);

    dataStorage = [...dataStorage, dataObj];

    console.log("DATA STORAGE", dataStorage);

    res.redirect('/');

}

const EditTodoController = (req, res) => {

    console.log("EDIT TODO CONTROLLER");

    console.log("REQ ID : ", req.params.id);

    let {id} = req.params;

    let SingleTodo = dataStorage.find((data) => {

        return data.id === id;

    });

    console.log("SINGLE TODO : ", SingleTodo);

    res.render('editTodo', SingleTodo);

}

const UpdateTodoController = (req, res) => {

    console.log("UPDATE TODO CONTROLLER");

    console.log("REQ ID : ", req.body.id);

    let updateData = dataStorage.map((data) => {

        if(data.id === req.body.id){
            return{
                id: data.id,
                name: req.body.name,
                mail: req.body.mail,
                number: req.body.number,
                skills: req.body.skills
            }
        }
        else{
            return data
        }

    })

    console.log("UPDATE DATA : ", updateData);

    dataStorage = updateData;

    res.redirect('/');

}

const DeleteTodoController = (req,res) => {

    console.log("DELETE TODO CONTROLER");

    console.log("REQ ID : ", req.params.id);

    let todosData = dataStorage.filter((data) => {
        return data.id != req.params.id
    })

    console.log("TODOS DATA : ", todosData);

    dataStorage = todosData;
    
    res.redirect('/');

}

module.exports = {DefaultController, AddTodoController, EditTodoController, UpdateTodoController, DeleteTodoController};








