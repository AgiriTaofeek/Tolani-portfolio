const sendMail = function (e) {
  e.preventDefault();

  const params = {
    name_from: document.querySelector("#name").value,
    email_from: document.querySelector("#email").value,
    message_from: document.querySelector("#message").value,
  };

  const serviceID = "service_0snx4ls";
  const templateID = "template_dp2fy4y";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Email sent successfully");
      console.log(res);
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((err) => console.log(err));

  // emailjs.sendForm(serviceID, templateID, form, params).then(
  //   (response) => {
  //     console.log(params.email_from);
  //     console.log("SUCCESS!", response.status, response.text);
  //     alert("SUCCESS!", response.status, response.text);
  //   },
  //   (error) => {
  //     console.log("FAILED...", error);
  //   }
  // );
};
export default sendMail;
