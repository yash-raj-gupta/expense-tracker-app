const Transaction = require('../models/Transaction');


// get all the transactions, it is a GET request
exports.getTransactions = async (req,res,next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }



}


// add a transaction, it is a POST request
exports.addTransactions = async (req,res,next) => {
    try {
        const {text, amount} = req.body;

    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
        success: true,
        data: transaction
    })
    } catch (error) {
      if(error.name === 'ValidationError'){
         const messages = Object.values(error.errors).map(val => val.message);

         return res.status(400).json({
            success: false,
            error: messages
         })
      }else {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
      }
    }
}

// delete the transaction, it is a DELETE request
exports.deleteTransactions = async (req,res,next) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })       
    }
}
