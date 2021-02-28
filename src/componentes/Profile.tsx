import styles from '../styles/componentes/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://instagram.ffor13-1.fna.fbcdn.net/v/t51.2885-19/s150x150/149785625_420109775941382_7575515883011719512_n.jpg?_nc_ht=instagram.ffor13-1.fna.fbcdn.net&_nc_ohc=X7EePo3OMHcAX_EEbZT&tp=1&oh=96279c809016046604ea72bc963ea6eb&oe=606401F5" alt="kauê guedes"/>
            <div>
                <strong>Kauê Guedes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}