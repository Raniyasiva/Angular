const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const db = require('./mysql'); 
console.log('ji');

app.get('/countries', (req, res) => {

    console.log('send data');
    var query = "SELECT id,name FROM countries";
    db.query(query,(err,rows)=>{
        if(err)
        {
            console.error(err);
            res.status(500).json({message: 'Error querying the database'});
        }
        else{
            let jsonResponse ={};
            if(rows.length>0){
                jsonResponse={
                    status: 1,
                    records: rows
                };
            }
            res.json(jsonResponse);
            console.log(jsonResponse);
        }
    })

  });
  
  app.get('/states/:countryId',  (req, res) => {

    console.log('send data');
   // const { countryId } = req.params;
   const countryId=req.params.countryId
    var query = 'SELECT id,name FROM states WHERE country_id = ?';
    console.log(query);
    console.log(req.params);
    db.query(query,[countryId],(err,rows)=>{
        if(err){
            console.error(err);                                         
            res.status(500).json({message: 'Error querying the database'});
        }
        else{
          if (rows.length > 0) {
            res.json({ status: 1, records: rows });
          } else {
            res.json({ status: 0, message: 'No records found' });
          }
        }
    })
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    // const { countryId } = req.params;
    // try {
    //   const [rows] = await db.query('SELECT id, name FROM states WHERE country_id = ?', [countryId]);
    //   res.json(rows);
    // } catch (error) {
    //   console.error(error); 
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }
        // try {
    //   const [rows] = await db.query('SELECT id, name FROM countries');
    //   res.json(rows);
    // } catch (error) {
    //   console.error(error); 
    //   res.status(500).json({ error: 'Internal Server Error' });
    // }