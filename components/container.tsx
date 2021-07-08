import { ReactNode, FunctionComponent} from "react";
import styles from '../styles/container.module.scss'

type Props = {
    children?: ReactNode
}

const Container:FunctionComponent = ({children}:Props) => {
    return <div className={styles.Container}>{children}</div>
}

export default Container