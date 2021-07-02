// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/dbConnect'
import Price from "../../../models/Price"

dbConnect();

function generateRandomNumber() {
    var min = 0.95,
        max = 1.05
    let random = Math.random() * (max - min) + min

    console.log(random)

    return random  ;

};

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);

    return  h + ":" + m + ":" + s;

}


export default async (req,res) => {
    const { method } = req;


    switch (method) {
        case 'GET':
            try {
                const prices = await Price.find({});
                res.status(200).json({ success: true, data: prices })
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                req.body.value = generateRandomNumber()* req.body.value
                req.body.variation = (1 - generateRandomNumber()) * 100
                console.log(startTime())
                req.body.time = startTime()

                const price = await Price.create(req.body);
                res.status(201).json({ success: true, data: price })
            } catch (error) {
                res.status(400).json({ error: error});
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
