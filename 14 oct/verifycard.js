

// it exports the module

Module.exports.verifyCard = (cb)=>{

    setTimeout(()=>{
        console.log("card verified");
        cb();
    } ,2000);

}