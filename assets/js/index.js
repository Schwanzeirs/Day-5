function getData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    let form = document.getElementById("form-contact")
    form.reset()
  
    let emailReceiver = "yatamisaki342@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name}, ${message}, this is my email ${email} and phone number ${phone}`
    a.click()
}


    
