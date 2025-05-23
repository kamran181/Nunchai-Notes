import { Extension } from "@tiptap/react";


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
      lineHeight :{
      setLineHeight: (lineHeight: string) => ReturnType
      unsetLineHeight: () => ReturnType
      }
    }
  }


  export const LineHeightExtension = Extension.create({
    name: 'lineHeight',
  
    // Add options to define which types this extension affects (e.g., textStyle)
    addOptions() {
      return {
        types: ['paragraph',"heading"],
        defaultLineHeight:"normal"
      }
    },
  
    // Add global attributes for line height
    addGlobalAttributes() {
      return [
        {
          types: this.options.types,
          attributes: {
            lineHeight: {
              default: this.options.default, 
              parseHTML: (element) => element.style.lineHeight || this.options.defaultLineHeight,
              renderHTML: (attributes) => {
                if (!attributes.lineHeight) return {}
                return {
                  style: `line-height: ${attributes.lineHeight}`, 
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
        // Command to set a line Height
        setLineHeight: (lineHeight: string) => ({ tr, state , dispatch }) => {
          
          const  {selection} = state;
          tr = tr.setSelection(selection);

          const {from , to} = selection;
          state.doc.nodesBetween(from , to ,(node,pos)=>{
            if(this.options.types.includes(node.type.name)){
              tr = tr.setNodeMarkup(pos ,undefined,{
                ...node.attrs,
                lineHeight,
              })
            }
          })

          if(dispatch) dispatch(tr)
          return true;
        },
  
        unsetLineHeight:()=>({tr,state,dispatch})=>{
           const {selection} = state;
           tr = tr.setSelection(selection);

           const {from , to} = selection;
           state.doc.nodesBetween(from , to ,(node,pos)=>{
            if(this.options.types.includes(node.type.name)){
              tr = tr.setNodeMarkup(pos, undefined ,{
                ...node.attrs,
                lineHeight:this.options.defaultLineHeight
              })
            }
           })
           if(dispatch) dispatch(tr)
           return true;
        }
      }
    },
  });