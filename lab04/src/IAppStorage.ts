import INote from './INote'

interface IAppStorage {
    // addNote(INote): void;
    // getData(): Array<INote>;
    addNote: ( note: INote )=>void;
    getData: () => Array<INote>;
}
export default IAppStorage;