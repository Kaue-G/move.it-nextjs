import { useState, useEffect } from 'react';
import styles from '../styles/componentes/Countdown.module.css';

export function Countdown() {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const secunds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secundLeft, secundRight] = String(secunds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time -1);
            }, 1000)
        }
    }, [active, time])

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secundLeft}</span>
                    <span>{secundRight}</span>
                </div>
            </div>
            <button 
                type="button" 
                className={styles.countdownButton}
                onClick = {startCountdown}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}