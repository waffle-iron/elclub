import { Email } from 'meteor/email'

// El codigo de tu servidor: define un metodo que es llamado en el cliente.
Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);
    // deja que otros metodos del cliente empiecen a correr,
    // sin esperar a que el envío de correo electrónico para completar.
    this.unblock();
    console.log("Enviando...");
    console.log([to, from, subject, text]);
    //LA SIGUIENTE LINEA NO FUNCIONA EN C9
    //Email.send({      to: to,      from: from,      subject: subject,      text: text    });
  }
});

// en el codigo cliente: asincrona enviar un correo electronico.
Meteor.call('sendEmail',
            'josedanielmelean@gmail.com',
            'soporte@elclubdelapelicula.com.ve',
            'Hello from Meteor!',
            'This is a test of Email.send Probando.' );
            
console.log("sending...");