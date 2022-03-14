import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";

// create plugin
export default class Custom1 extends Plugin {
  init() {
    console.log("custom1.js");
    // create button
    this.editor.ui.componentFactory.add("custom1", (locale) => {
      const view = new ButtonView(locale);
      view.set({
        label: "Custom1",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGe0aEgfyfMkMB9_7Wt9Gl4yS8e3wqLAA7VA&usqp=CAU",
        tooltip: true,
      });
      // listen to click event
      view.on("execute", () => {
        console.log("custom1.js: execute");
        // insert custom element
        this.editor.model.insertContent("custom1");
      });
      return view;
    });
  }
}
