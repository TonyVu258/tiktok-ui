import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avata')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/9dce2297b15c4cfd9371fcd358ad2a22~c5_100x100.jpeg?x-expires=1678348800&x-signature=ue%2BIASV1VEtSCDJ8zSWCNeHI1g4%3D' alt="Hoaaa"/>
            <div className={cx('info')}>
                <h4 className={cx('name')}><span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;