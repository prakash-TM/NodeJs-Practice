const express = require("express");
const app = express();
const port = 5000;

app.get("/get_api/:id", (req, res) => {
    console.log({ query: req.query, params: req.params });
    res.send("Request");
});

app.get("/", (req, res) => {
    console.log("I am the first route");
    res.send("Welcome to Vidhya Skill School");
});

app.get("/priyanka", (req, res) => {
    res.send("My name is Priyanka. I'm from Indore");
});

app.get("/arun", (req, res) => {
    res.send("My name is Arun. I'm from Morena");
});

app.get("/nikhil", (req, res) => {
    const response = {
        name: "Nikhil",
        city: "Dhule",
        message: "My name is Nikhil. I'm from Dhule",
    };
    res.json(response);
});

app.get("/prakash", (req, res) => {
    res.send("My name is Prakash. I', from Tirupur");
});

app.post("/register-user", (req, res) => {
    const response = {
        message: "Post request loaded successfully",
    };
    res.json(response);
});



app.get("/fly", (req, res) => {
    const { name } = req.query;
    if (!name) {
        const response = {
            data: {},
            meta: {
                message: "Name is a mandatory params",
                code: 400,
            },
        };
        return res.status(400).json(response);
    }

    const response = {
        data: {
            message: `My name is ${name}`,
        },
        meta: {
            message: "Name is a mandatory params",
            code: 400,
        },
    };
    return res.json(response);
});

app.patch("/user", (req, res) => {
    res.send("I'm a Patch request");
});

prepareOTPEmail = (params) => {
    const { memberEmail, memberName, otpCode } = params;
    const emailMessage = `<!DOCTYPE html>
  <html>
     <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <title>Welcome. You’re all set to join InOffice.</title>
     </head>
     <body>
        <title>InOffice</title>
        <style type="text/css"> .apple-footer a{text-decoration: none !important; color: #999999 !important;
           border: none !important;}.apple-email a{text-decoration: none !important; color: #448BFF !important;
           border: none !important;}
        </style>
        <div id="wrapper" style="background-color:#ffffff; margin:0 auto;
           text-align:center; width:100%" bgcolor="#ffffff" align="center" width="100%">
           <table class="main-table" align="center" style="-premailer-cellpadding:0; -premailer-cellspacing:0;
              background-color:#ffffff; border:0; margin:0 auto; max-px; mso-table-lspace:0; mso-table-rspace:0;
              padding:0; text-align:center; " cellpadding="0" cellspacing="0" bgcolor="#ffffff" >
              <tbody>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:75; -premailer-width:100%; line-height:30px; margin:0 auto;
                       padding:0" height="75" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td class="logo" align="center" style="background-color:#ffffff; text-align:center; " bgcolor="#ffffff" > <a href="https://www.inoffice.co" target="_blank"><img style="width:90px;" src="https://www.inoffice.co/img/logo.png" title="InOffice" alt="InOffice"></a> </td>
                 </tr>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:75; -premailer-width:100%; line-height:30px; margin:0 auto; padding:0" height="75" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:75; -premailer-width:100%; line-height:30px; margin:0 auto; padding:0" height="75" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td> </td>
                 </tr>
                 <tr>
                    <td class="headline" style="color:#34495e; font-family:&quot;Roboto&quot;, Helvetica, Arial, san-serif; font-size:22px; font-weight:300; line-height:14px; margin:0 auto; padding:0; text-align:center" align="center">Hey <span style="text-transform: capitalize;">${memberName}</span>, Thanks for signing up to InOffice.</td>
                 </tr>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:0; -premailer-width:100%; margin:0 auto; padding:0" height="0" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td class="headline" style="color:#34495e; font-family:&quot;Roboto&quot;, Helvetica, Arial, san-serif; font-size:18px; font-weight:400; line-height:36px; margin:0 auto; padding:0; text-align:center" align="center">Your Email OTP code is <strong>${otpCode}</strong></td>
                 </tr>
                 <tr>
                    <td class="spacer-sm" style="-premailer-height:20; -premailer-width:100%; line-height:10px; margin:0 auto; padding:0" height="20" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:75; -premailer-width:100%; line-height:30px; margin:0 auto; padding:0" height="75" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td class="spacer-lg" style="-premailer-height:75; -premailer-width:100%; line-height:30px; margin:0 auto; padding:0" height="75" width="100%">&nbsp;</td>
                 </tr>
                 <tr>
                    <td>
                       <table class="footer-table" style="-premailer-; background-color:#ececec; margin:0 auto; text-align:center" bgcolor="#ececec" align="center">
                          <tbody>
                             <tr>
                                <td class="spacer-sm" style="-premailer-height:20; -premailer-width:100%; line-height:10px; margin:0 auto; padding:0" height="20" width="100%">&nbsp;</td>
                             </tr>
                             <tr>
                                <td class="social-text" style="color:#999999; font-family:&quot;Roboto&quot;, Helvetica, Arial, san-serif; font-size:16px; line-height:26px">STAY CONNECTED</td>
                             </tr>
                             <tr>
                                <td class="spacer-sm" style="-premailer-height:20; -premailer-width:100%; line-height:10px; margin:0 auto; padding:0" height="20" width="100%">&nbsp;</td>
                             </tr>
                             <tr>
                                <td class="border-line" style="-premailer-height:1px; -premailer-; background-color:#e5e5e5; font-size:1px; line-height:1px; margin:0; padding:0" height="1px" bgcolor="#e5e5e5">&nbsp;</td>
                             </tr>
                             <tr>
                                <td class="spacer-sm" style="-premailer-height:20; -premailer-width:100%; line-height:10px; margin:0 auto; padding:0" height="20" width="100%">&nbsp;</td>
                             </tr>
                             <tr>
                                <td>
                                   <table class="footer-content" align="center" style="-premailer-width:420; margin:0 auto; padding:0; text-align:center" width="420">
                                      <tbody>
                                         <tr>
                                            <td class="footer-text" style="-webkit-text-size-adjust:100%; color:#999999; font-family:&quot;Roboto&quot;, Helvetica, Arial, san-serif; font-size:10px; line-height:16px; text-align:center" align="center"> INOFFICE LABS PVT. LTD. <br><br>This email was sent to <span class="apple-email"><a style="border:none; color:#448bff; text-decoration:none" target="_blank">${memberEmail}</a></span> because you asked to receive information through our InOffice Application.</span>. </td>
                                         </tr>
                                      </tbody>
                                   </table>
                                </td>
                             </tr>
                             <tr>
                                <td class="spacer-sm" style="-premailer-height:20; -premailer-width:100%; line-height:10px; margin:0 auto; padding:0" height="20" width="100%">&nbsp;</td>
                             </tr>
                          </tbody>
                       </table>
                    </td>
                 </tr>
              </tbody>
           </table>
        </div>
     </body>
  </html>`;
    return emailMessage;
};

app.get("*", (req, res) => {
    //res.set("x-powered-by", "Ashwary");
    const response = prepareOTPEmail({
        memberEmail: "xdankitjain@gmail.com",
        memberName: "Ankit Jain",
        otpCode: 1254,
    });
    res.send(response);
});

app.listen(port, () => {
    console.log(`My application is running on http://localhost:${port}`);
});