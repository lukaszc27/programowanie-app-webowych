import IAppStorage from "./IAppStorage";
import INote from "./INote";
import firebase from "firebase";


class FirebaseStorage implements IAppStorage {
    public db : firebase.firestore.Firestore;
    /**
     * Konstruktor nawiązuje połączenie z bazą
     */
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyDqunKhwMz3QrX_xfAKqsmjk3it-4A1NUw",
            authDomain: "notekeep-6ea13.firebaseapp.com",
            projectId: "notekeep-6ea13",
            storageBucket: "notekeep-6ea13.appspot.com",
            messagingSenderId: "540831301908",
            appId: "1:540831301908:web:c1bfd23a06397a3055c201"
          };

          firebase.initializeApp(firebaseConfig);
          this.db = firebase.firestore();
    }

    /**
     * Dodaje nową notatkę do bazy
     * @param note notatka która ma zostać dodana
     */
    public addNote = async (note : INote) : Promise<void> => {
        await this.db.collection('notekeep').add(note);
    }

    /**
     * Pobiera wszystkie notatki zapisane w bazie danych
     * @returns Tablica z notatkami
     */
    public getData = () : Array<INote> => {
        console.log(this.getDataFromFirebase());
        return [];
    }

    private getDataFromFirebase = () : Promise<any> => {
        return this.db.collection('notekeep')
            //.doc('XcNbu4kgVYtWCajAWyzA')
            .get()
            .then(res => console.log(res.docs));
    }
}
export default FirebaseStorage;