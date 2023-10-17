/**
* A Node represents an HTML Element. A node can have a tag name,
* a list of CSS classes and a list of children nodes.
*/
class Node {

    /**
     *
     * @param {String} tag the tag name
     * @param {Array} children the children nodes
     * @param {Array} classes the css classes
     * @param {String} id the node id
     */
    constructor(tag, children, classes,id) {
      // Tag name of the node.
      this.tag = tag;
      // Array of CSS class names (string) on this element.
      this.classes = classes;
      // Array of child nodes.
      this.children = children; // All children are of type Node
      this.id = id;
    }

    /**
    * Returns all nodes matching the tag name selector.
    *
    * For example:
    *
    * <div>
    *   <span id="span-1"></span>
    *   <span id="span-2"></span>
    *   <div>
    *     <span id="span-3"></span>
    *   </div>
    * </div>
    * Selector `span` should return 3 span nodes in this order
    * span-1 -> span-2 -> span-3.
    *
    * @param {string} the selector string.
    * @returns {Array} Array of selected nodes.
    * @public
    */

    search(selector) {
      return null;
    }
}


export class Node {
  constructor(tag, children, classes, id) {
      this.tag = tag;
      this.classes = classes || [];
      this.children = children || [];
      this.id = id;
  }

  search(selector) {
      let matchingNodes = [];

      // Ensure selector is a string
      if (typeof selector !== 'string') {
          return matchingNodes; // Return an empty array for invalid selectors
      }
    
      const checkSelector = (node, selector) => {
          if (selector.startsWith("#")) {
            return node.id === selector.slice(1);
          } else if (selector.startsWith(".")) {
            return node.classes.includes(selector.slice(1));
          } else {
            return node.tag === selector;
          }
      };
    
      const findMatchingNodes = (node) => {
          if (checkSelector(node, selector)) {
              matchingNodes.push(node.id);
          }

          for (const child of node.children) {
              findMatchingNodes(child);
          }
      };

      findMatchingNodes(this);

      return matchingNodes;
  }
}



// Testing console.log("Started...");
// Test case 1 
console.log(divNode1.search("span"));
// should print all the span tags inside divNode1
console.log("");
// Test case 2
console.log(divNode1.search(".note"));
// to search with ID, use "#note" as argument in your search function, the function should handle it accordingly
// should print all the elements with class note inside divNode1
console.log("");
// Test case 3
console.log(divNode1.search("label"));
console.log("");
// Test case 4
console.log(p1.search(".note"));
console.log("");
// Test case 5
console.log(divNode1.search("div"));
console.log("");
// Test case 6
// console.log(randomNode.search("div"));
console.log("");
// Test case 7
console.log(divNode2.search("section"));
console.log("");
// Test case 8
console.log(body.search()); // Error conditions need to be handled
console.log("");
// Test case 9
console.log(body.search("section"));
console.log("");
// Test case 10
console.log(divNode1.search(".randomSpan")); // randomSpan is some Span outside your divNode1