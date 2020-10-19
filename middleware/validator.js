// Check parameter type in request body.
module.exports.checkTypeFilter = (req,res,next)=>{
   const params = req.body;
   //Regex for YYYY-MM-DD format.
   const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

   //Params type control
   if((typeof params.startDate  === "string" && params.startDate.match(dateRegex)) &&(typeof params.endDate  === "string"  && params.endDate.match(dateRegex) 
      &&(typeof params.minCount === "number" && params.minCount >0) &&(typeof params.maxCount === "number" && params.maxCount > 0)) &&  params.maxCount >= params.minCount){
      next();
   }
   else{
      res.status(400).json({
         code: 101,
         msg: 'Unexpexted type for request.Must be Dates=YYYY-MM-DD or Counts= number.'
      });
   }
}

//Check empty parameters in request body.
module.exports.checkEmptyFilter= (req,res,next)=>{
   const params = req.body;
   if(Object.keys(params).length<4 || params.startDate === undefined || params.endDate === undefined ||params.minCount === undefined ||params.maxCount  === undefined){
      res.status(400).json({
         code: 102,
         msg: 'Parameter missing.'
      });
   }
   else{
      next();
   }
}
