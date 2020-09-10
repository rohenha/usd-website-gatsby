export interface ISEOTag {
    tagName: string,
    content: string | undefined,
    attributes: {
        property: string | undefined,
        name: string | undefined,
        content: string
    }
}