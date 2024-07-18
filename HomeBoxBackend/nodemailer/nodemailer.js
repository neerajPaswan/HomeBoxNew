//this js file containes user emaile verification through nodemailer
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"neerajpaswan025@gmail.com",
      pass:"hayd wnsp xtfi pdgs",
    }});

    
  const gmailVerifier = ({email,password})=>{
    const mailOptions = {
        from: 'neerajpaswan025@gmail.com',
        to: email,
        subject: 'HomeBox email verification',
        // text: `${password}${firstName+lastName}.`,
        html:`<h1>Welcome to HomeBox</h1>
            <h2>your Email: ${email}</h2>
            <h2>your password: ${password}</h2>
            <br>
            <br>
            <h4>click here to login: <a href="http://localhost:5173/sign-in">Verify</a></h4>         
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return true;
        }
       
    });
}

export default gmailVerifier;