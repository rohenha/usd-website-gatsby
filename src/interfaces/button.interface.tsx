export interface IButtonProps {
    component: {
        name: string,
        href: string | null,
        target: string | null
    },
    type: number,
    children: React.ReactElement<any>
}