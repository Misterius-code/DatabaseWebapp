
const TotalTerror = require('../models/TerrorismData');
console.log(TotalTerror);
exports.list = async (req, res) => {
    console.log(req.session);
    console.log(TotalTerror.list);

    try {
       // const totalCountries = 3
       // console.log(totalCountries)
       // const tasterCountSummaryRef = 4
       const totalTastings = await TotalTerror.countDocuments({});
       //const totalTastings = await TotalTerror.find({}).count();
       console.log(totalTastings +"LOOOOOOOOOOOL")
       // const tasterCountSummary = tasterCountSummaryRef.map(t => ({ name: t._id, total: t.total }));
        res.render("index", {  totalTastings: totalTastings });

    } catch (e) {
        res.status(404).send({
            message: `error rendering page`,
        });
    }
}