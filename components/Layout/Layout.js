import styles from './Layout.module.scss';

export default function Layout(props) {
    return <div className={styles.html}>{props.children}</div>;
}
