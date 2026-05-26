import {
  ImageElement,
  ParagraphElement,
  TitleElement,
} from "../components/editor/canvas/Elements";
import type { BuilderElement } from "../types";

//add the new record if we have a new type of Element like: table, video...
const ELEMENT_REGISTRY: Record<string, React.ElementType> = {
  image: ImageElement,
  title: TitleElement,
  paragraph: ParagraphElement,
};

export function renderInternalElement(element: BuilderElement) {
  const Component = ELEMENT_REGISTRY[element.type];

  if (!Component) {
    return null;
  }

  return <Component key={element.id} element={element} />;
}
