export function extractText(data: any): string {
  let result = "";

  function traverse(node: any) {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(traverse);
      return;
    }

    if (typeof node === "object") {
      if (node.text && typeof node.text === "string") {
        result += node.text + " ";
      }
      Object.values(node).forEach(traverse);
    }
  }

  traverse(data);
  return result.trim();
}

export default function ReadBlogTime({
  blogContent,
  className = "",
}: {
  blogContent: any;
  className?: string;
}) {
  if (!blogContent || !Array.isArray(blogContent)) {
    return <span className={className}>0 minute read</span>;
  }

  let textContent = "";

  blogContent.forEach((block: any) => {
    if (!block || typeof block !== "object") return;

    switch (block._type) {
      case "hero":
        textContent += [block.heading, block.subheading, block.content]
          .filter(Boolean)
          .join(" ") + " ";
        block?.buttons?.forEach(
          (button: any) => (textContent += (button?.label || "") + " ")
        );
        break;

      case "heading":
        textContent += (block.text || "") + " ";
        break;

      case "paragraph":
        textContent += (block.paragraph || "") + " ";
        break;

      case "richText": {
        const plainText = extractText(block.content);
        textContent += (plainText || "") + " ";
        break;
      }

      case "button":
        textContent += (block.label || "") + " ";
        break;

      case "buttons":
        block?.items?.forEach(
          (btn: any) => (textContent += (btn?.label || "") + " ")
        );
        break;

      case "mediaText":
        textContent += [block.heading, block.subHeading].filter(Boolean).join(" ") + " ";
        textContent += extractText(block.content) + " ";
        block?.buttons?.forEach(
          (btn: any) => (textContent += (btn?.label || "") + " ")
        );
        break;

      case "faqsContent":
        textContent += [block.heading, block.subheading].filter(Boolean).join(" ") + " ";
        block?.faqs?.forEach((faq: any) => {
          textContent += (faq?._ref || "") + " ";
        });
        block?.buttons?.forEach(
          (btn: any) => (textContent += (btn?.label || "") + " ")
        );
        break;

      case "logoGrid":
        block?.logos?.forEach(
          (logo: any) => (textContent += (logo?.label || "") + " ")
        );
        break;

      case "cta":
        textContent +=
          [block.heading, block.subHeading, block.content]
            .filter(Boolean)
            .join(" ") + " ";
        block?.buttons?.forEach(
          (btn: any) => (textContent += (btn?.label || "") + " ")
        );
        break;

      case "subscribe":
      case "contactForm":
        textContent +=
          [block.heading, block.subHeading, block.content, block.buttonLabel]
            .filter(Boolean)
            .join(" ") + " ";
        break;

      case "featuresSteps":
        textContent +=
          [block.heading, block.subHeading, block.content]
            .filter(Boolean)
            .join(" ") + " ";
        block?.features?.forEach((feature: any) => {
          textContent +=
            [feature?.heading, feature?.content].filter(Boolean).join(" ") + " ";
        });
        break;

      case "cards":
        textContent +=
          [block.heading, block.subheading, block.content]
            .filter(Boolean)
            .join(" ") + " ";
        block?.cardsLists?.forEach((cardsList: any) => {
          textContent +=
            [
              cardsList?.heading,
              cardsList?.subheading,
              cardsList?.label,
              cardsList?.content,
            ]
              .filter(Boolean)
              .join(" ") + " ";
        });
        break;

      case "blogLists":
        textContent +=
          [block.heading, block.subHeading, block.content, block.buttonLabel]
            .filter(Boolean)
            .join(" ") + " ";
        break;

      default:
        if (typeof block.text === "string") {
          textContent += block.text + " ";
        }
        break;
    }
  });

  const cleanText = textContent.replace(/\s+/g, " ").trim();
  const wordCount = cleanText ? cleanText.split(" ").length : 0;
  const time = wordCount ? Math.ceil(wordCount / 200) : 0;

  return <span className={className}>{time} minute read</span>;
}
