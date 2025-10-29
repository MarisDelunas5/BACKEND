import * as StudentModels from "../models/StudentModels.js";


export const fetchStudent = async (req, res) => {
    try {
        const Student = await StudentModels.getStudents();
            res.status(200).json({success: true, message: Student});
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"

        })

    }
}
