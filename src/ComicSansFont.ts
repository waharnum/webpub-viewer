import BookFont from "./BookFont";
import * as HTMLUtilities from "./HTMLUtilities";

export default class ComicSansFont implements BookFont {
  public readonly name = "comic-sans-font";
  public readonly label = "Comic Sans";

  public bookElement: HTMLIFrameElement;

  public start(): void {
    const rootFrame = HTMLUtilities.findRequiredIframeElement(this.bookElement.contentDocument, "html") as HTMLHtmlElement;

    HTMLUtilities.setAttr(rootFrame, "data-viewer-font", "comic-sans");
    HTMLUtilities.createStylesheet(rootFrame, "comic-sans-font-internal", "* {font-family: 'Comic Sans MS', sans-serif !important;}");
  }

  public stop(): void {
    const rootFrame = HTMLUtilities.findRequiredIframeElement(this.bookElement.contentDocument, "html") as HTMLHtmlElement;

    HTMLUtilities.removeAttr(rootFrame, "data-viewer-font");
    HTMLUtilities.removeStylesheet(rootFrame, "comic-sans-font-internal");
  }
}
