# Add new element

1. Add file `src/elements/Elements<TagName>.ts`
1. Create class `Elements<TagName>` in this file
1. Add export this class to `src/elements/index.ts`
1. Add case state to `src/ElementsFactory.ts`
1. Add tests to `tests/ElementsFactory.test.ts`
1. Add tests for rendering to `tests/elements/Elements<TagName>.test.ts`

# Add new attribute

1. Describe attribute in `src/types/IAttribute.ts`
1. Add case in `src/Attribute.ts` if your attribute should have special value
    - For list of numbers use `ListOfNumbersProperty`
    - For number - `NumberProperty`
    - For color - `ColorProperty`
    - For [paint](https://developer.mozilla.org/en-US/docs/Web/SVG/Content_type#Paint) - `PaintProperty`
    - For string (default) - `Property`
