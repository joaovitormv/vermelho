import { ReactNode } from "react"
interface IList{
    children: ReactNode
}

export function list({ children }: IList){
    return{
        <li>(children)</li>
    }
}


