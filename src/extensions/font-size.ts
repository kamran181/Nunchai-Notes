import { Extension } from "@tiptap/react";
import "@tiptap/extension-text-style";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    fontSize :{
    setFontSize: (size: string) => ReturnType
    unsetFontSize: () => ReturnType
    }
  }
}

export const FontSizeExtension = Extension.create({
  name: 'fontSize',

  // Add options to define which types this extension affects (e.g., textStyle)
  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  // Add global attributes for font size
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null, // Default size is null (no font size)
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) return {}
              return {
                style: `font-size: ${attributes.fontSize}`, // Corrected this to fontSize
              }
            },
          },
        },
      },
    ]
  },

  // Add commands for setting and unsetting the font size
  addCommands() {
    return {
      // Command to set a font size
      setFontSize: (fontSize: string) => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize }) // Apply the fontSize to textStyle
          .run()
      },

      // Command to unset the font size
      unsetFontSize: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { fontSize: null }) // Remove the fontSize from textStyle
          .removeEmptyTextStyle() // Optionally remove empty textStyle marks
          .run()
      },
    }
  },
})

