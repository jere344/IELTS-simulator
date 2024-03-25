import mongoose from "mongoose";

const labellingSchema = new mongoose.Schema({

    startQuestionNum : {
        type : Number,
        required: true
    },
    endQuestionNum : {
        type : Number,
        required: true
    },
    qType: {
        type: Number,   
        enum: [1, 2],  // 1 for listening and 2 for reading
        required: true
    },
    image: {
        type: Buffer, 
        contentType: String,
        required : true
    },
    questionOptions: {
        type: [String],
        required: function validate(){
            return this.qType === 1 ? true : false;
        }
    },
    numStatements : {
        type: [String],
        required: true
    },
    
});


labellingSchema.pre('validate', function(next){
    const numOfQuestion = this.endQuestionNum - this.startQuestionNum + 1;
    const numConsistency = this.numStatements === numOfQuestion ? true : false;

    if(!numConsistency){
        const err = new Error('number of questions and number of question statements mismatch');
        next(err);
    }else{
        next();
    }
})

const labellingQuestion = mongoose.model('labellingQuestion', labellingSchema);


export default labellingQuestion;