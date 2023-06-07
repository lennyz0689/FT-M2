import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export default function Contact () {
  return (
  <div>
    <form>
      <label>Nombre:</label>
      <input name='name' placeholder='Escribe tu nombre...' type='text' />
      <label>Correo Electrónico:</label>
      <input name='email' placeholder='Escribe tu email...' type="text" />
      <label>Mensaje:</label>
      <textarea name="message" placeholder='Escribe tu mensaje...' type='text'></textarea>
      <button type='submit'>Enviar</button>
    </form>
  </div>
  )
}
