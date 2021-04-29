import {users} from '../../../data.js';

export default async(req, res) =>{
    const userId = req.query.userId;
    //const result = users.filter((user) => user.id === parseInt(userId));
    const result = users.filter(user => user.id === parseInt(userId));

    if(result.length > 0){
        res.status(200).json(result[0]);
    }else{
        res.status(404).json({message: "utilisateur "+userId+" non trouvé"});
    }
}