import INote from './INote'

class LocalNote implements INote {
    public caption : string;
    public content : string;
    public background : string;

    public constructor(caption : string,
        content : string,
        bg : string)
    {
        this.caption = caption;
        this.content = content;
        this.background = bg;
    }

    // public setCaption = (name : string) => this.caption = name;
    // public setContent = (name : string) => this.content = name;
    // public setBackground = (name : string) => this.background = name;
}
export default LocalNote;