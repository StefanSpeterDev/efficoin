// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from '../../../utils/dbConnect'
import Price from "../../../models/Price"

dbConnect();



export default async (req,res) => {
    const { method } = req;


    switch (method) {
        case 'GET':
            try {
                const prices = await Price.findOne().sort({ _id: -1 }).limit(-1)
                res.status(200).json({ success: true, data: prices })
            } catch (error) {
                res.status(400).json({ success: false });
            }break;

        default:
            res.status(400).json({ success: false });
            break;

}
}
