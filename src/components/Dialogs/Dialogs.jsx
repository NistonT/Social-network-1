import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Timur</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Vlad</NavLink>
                </div>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/3">Nastya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Artur</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/5">Danil</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message + ' ' + style.dialog}>
                    Hi
                </div>
                <div className={style.message + ' ' + style.dialog}>
                    How is your?
                </div>
                <div className={style.message + ' ' + style.dialog}>
                    Yo
                </div>
            </div>
        </div>
    )
}

export default Dialogs;