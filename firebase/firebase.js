import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import firebaseConfig from "./config";

class Firebase {
  constructor() {
    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
  // Registar un usuario
  async registrar(nombre, email, password) {
    console.log("funcion de firebase");
    const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return await nuevoUsuario.user.updateProfile({
      displayName: nombre
    });
  }

  // Inicio de sesion
  async login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesion
  async cerrarSesion() {
    await this.auth.signOut();
  }
}

const firebase = new Firebase();
export default firebase;
