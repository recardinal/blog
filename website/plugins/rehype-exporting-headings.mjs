import { visit } from 'unist-util-visit';
import { toString } from 'hast-util-to-string';

/**
 * @typedef {import('unist').Parent } Parent
 */

/**
 * @param {object} options
 * @param {string} [options.exportName="headings"]
 */
export default function rehypeExportHeadings(options = {}) {
  const { exportName = 'headings' } = options;

  /** @param {Parent} tree */
  return (tree) => {
    const headings = [];

    const visitor = (node) => {
      const value = toString(node);

      headings.push({
        title: value,
        depth: node.tagName.match(/[0-9]+/)?.[0] || 0,
      });
    };

    visit(
      tree,
      [
        { type: 'element', tagName: 'h2' },
        { type: 'element', tagName: 'h3' },
      ],
      visitor,
    );

    console.log(headings);

    tree.children.push({
      type: 'mdxjsEsm',
      data: {
        estree: {
          type: 'Program',
          sourceType: 'module',
          body: [
            {
              type: 'ExportNamedDeclaration',
              source: null,
              specifiers: [],
              declaration: {
                type: 'VariableDeclaration',
                kind: 'const',
                declarations: [
                  {
                    type: 'VariableDeclarator',
                    id: { type: 'Identifier', name: exportName },
                    init: {
                      type: 'Literal',
                      value: headings,
                      raw: JSON.stringify(headings),
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
}
