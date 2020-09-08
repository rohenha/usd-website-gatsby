export interface IButtonProps {
    link: string,
    className: string,
    type: number,
    event: () => void | null,
    children: React.ReactElement<any>
}