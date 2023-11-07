import { connectDB } from "@/util/database"


export default async function handler(req, res) {
    const selectedValue1 = req.body.selectedCondition1
    const selectedValue2 = req.body.selectedCondition2
    const selectedValue3 = req.body.selectedCondition3

    const db = (await connectDB).db("chem")
    let result = await db.collection('process').find({
        condition1: selectedValue1,
        condition2: selectedValue2,
        condition3: selectedValue3,
    }).toArray()
    // console.log(result)
    res.status(200).json(result);
  }