const express = require('express');
const multer = require('multer');
const app = express();
var connection = require('./mysql');
const cors = require('cors');
app.use(cors());

const storage = multer.diskStorage({
  destination: './img', 
  filename: function (req, file, fileName)
  {
    fileName(null, file.originalname); 
  }

});

console.log('hi');
const upload = multer({ storage: storage });
app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
 const file =req.file;
 const fileDetail={
 originalname:file.originalname,
 size:file.size
 };

  var sql = 'INSERT INTO registration (name, size) VALUES (?, ?)';
  const values = [fileDetail.originalname, fileDetail.size];
  console.log(values);
  connection.query(sql, values, (err, result) => {
    
    if (err)
    {
      console.error('Database insertion error: ', err);
     res.status(500).send('File upload failed.');
    }

    console.log('File uploaded and inserted into the database.');
    res.status(200).json({ status: 0, message: 'Successfully uploaded' });
  });
});
app.get('/display', (req, res) => {
  console.log('hi');
  var sql = 'SELECT name FROM registration';
console.log(sql);
  connection.query(sql, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Error querying the database' });
    } else {
      let jsonResponse = {};
      if (rows.length > 0) {
        jsonResponse = {
          status: 1,
          records: rows,
        };
      }
      console.log(jsonResponse);
      res.json(jsonResponse);
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});