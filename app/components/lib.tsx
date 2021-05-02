import React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface ParagraphProps {
  children: React.ReactNode;
}

function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="text-gray-900 text-lg leading-relaxed py-2">{children}</p>
  );
}

const options = {
  renderMark: {
    [MARKS.BOLD]: () => <span style={{ fontFamily: "TimelessBold" }}></span>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
      <Paragraph>{children}</Paragraph>
    ),
  },
};

interface RichTextProps {
  richTextResponse: { json: any };
  maxElements?: number;
}

export function RichText({ richTextResponse, maxElements }: RichTextProps) {
  const components = documentToReactComponents(
    richTextResponse.json,
    options
  ) as Array<React.ReactElement>;
  if (typeof maxElements === "number") {
    return <>{components.slice(0, maxElements)}</>;
  }
  return <>{components}</>;
}
