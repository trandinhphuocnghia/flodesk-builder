import {
  ImageElement,
  ParagraphElement,
  TitleElement,
} from "../components/editor/Elements";
import type { BuilderElement } from "../types";

const ELEMENT_REGISTRY: Record<string, React.ElementType> = {
  image: ImageElement,
  title: TitleElement,
  paragraph: ParagraphElement,
  //add if have new type of Element like: table, video...
};

export function renderElement(element: BuilderElement) {
  const Component = ELEMENT_REGISTRY[element.type];

  if (!Component) {
    return null;
  }

  return <Component key={element.id} element={element} />;
}
