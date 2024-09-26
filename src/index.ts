function greet(name: string): void {
    const greeting = `Hello, ${name}!`;
    const element = document.getElementById("greeting");
    if (element) {
        element.innerText = greeting;
    }
}

greet("World");


document.addEventListener('DOMContentLoaded', () => {

  const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
  const messageInput = document.getElementById('messageInput') as HTMLInputElement;
  const cardContainer = document.getElementById('cardContainer');

 
  function enviarMensaje(mensaje: string): Promise<string> {
    return new Promise((resolve, reject) => {

      setTimeout(() => {
        if (mensaje.trim()) {
          resolve(`${mensaje}`);
        } else {
          reject('El mensaje no puede estar vacío');
        }
      }, 1500);
    });
  }

  submitButton.addEventListener('click', () => {

    const mensaje = messageInput.value as string;

    
    enviarMensaje(mensaje)
      .then((respuesta) => {
    
        const newCard = document.createElement('ion-card');
        newCard.innerHTML = `<ion-card-content>${respuesta}</ion-card-content>`;
        cardContainer?.appendChild(newCard);

        messageInput.value = '';
      })
      .catch((error) => {
        console.error(error);
        alert(error)
      });
  });
});


