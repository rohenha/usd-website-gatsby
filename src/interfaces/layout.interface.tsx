export interface ILayoutComponentProps {
    seo: {
        tags: {
            tagName: string,
            content: string | undefined,
            attributes: {
                property: string | undefined,
                name: string | undefined,
                content: string
            }
        }[]
    },
    children: React.ReactElement<any>
}

export interface ILayoutComponentState {
}
