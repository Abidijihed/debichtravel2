const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail", //replace with your email provider
 port: 587,
 host: 'smtp.gmail.com',
 secure: false,
  auth: {
    user: "abidij55@gmail.com",
    pass: 'npxftcsmwqlvmovg'
  },
  tls: {
    rejectUnauthorized: false,
  }
});
transporter.verify(function(error, success) {
  if (error) {
    console.log(error,'ttt');
  } else {
    console.log("Server is ready to take our Messages");
  }
});
const nodmail = async(req, res, next) => {
  const value =req.body.formData
  console.log(req.body)
  var depart = value.departure
  var destination = value.destination
  var tel = value.phone
  var nbPersonnes=value.nbPersonnes
  var bus = value.typeBus
  var dateDepart=value.dateDepart
  var dateRetour=value.dateRetour
  var heureDepart = value.heureDepart
  let html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Acme Web Design</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />
  <link rel="stylesheet" href="public/css/style.css">
</head>
<body>
  <div class="container">
  <h1>Depart : ${depart}</h1>
  <h1> Destination : ${destination}</h1>
    <h2 class="brand"> Nombre de personnes : ${nbPersonnes}</h1>
    <h2 class="brand"> Numero de Telephone : ${tel}</h1>
    <p>date depart : ${dateDepart}</p> 
    <p>Heure Depart : ${heureDepart} </p>
    <p>date retour : ${dateRetour}</p>
    <p>type de Bus :  ${bus}</p>
    <div class="wrapper animated bounceInLeft">
    <img src="https://vegibit.com/wp-content/uploads/2017/06/How-To-Send-Email-To-New-Users.png" alt="Trulli" width="500" height="333">
    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
    <img src="pic_trulli.jpg" alt="Trulli" width="500" height="333">
      
  </div>
</body>
</html>
  `

  var mail = {
    from: req.body.email,
    to: "abidij55@gmail.com",
    subject: "reservation",
    html:html
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
}
module.exports = {
  nodmail,
};