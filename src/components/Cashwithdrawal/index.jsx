import React, { useState } from 'react'
import styles from './Cashwithdrawal.module.scss';
import Withdrawbtn from '../Withdrawbtn';

const withdrawnvalues = [
  {
    id: 1,
    value: 50
  },
  {
    id: 2,
    value: 100
  },
  {
    id: 3,
    value: 200
  },
  {
    id: 4,
    value: 500
  },
]

function Cashwithdrawal() {
  const [withdrawVal, setWithdrawVal] = useState({ balance: 2000 });
  const [active, setActive] = useState(true);

  const handleWithdraw = value => {
    if (withdrawVal.balance >= value) {
      setWithdrawVal({ balance: withdrawVal.balance - value });
    }
    (withdrawVal.balance <= 0 || withdrawVal.balance < value) && alert("low balance")
    if (withdrawVal.balance <= 0) {
      setActive(false)
    }
  }

  const className = active ? 'active' : 'deactive';

  return (
    <div className={styles.appBg}>
      <div className={styles.appContent}>
        <div className={styles.userDetails}>
          <div className={styles.username}>
            <span className={styles.firstLetter}>V</span>
            <p className={styles.fullname}>Venkat Yashwanth</p>
          </div>
          <div className={styles.userBalance}>
            <span>Your Balance</span>
            <p>{withdrawVal.balance} <span>In Rupees</span></p>
          </div>
        </div>
        <div className={styles.userInterface}>
          <p>Withdraw <span>choose sum (in rupees)</span> </p>
          <ul className={`${styles.withdrawBtnsWrapper} ${styles[className]}`}>
            {
              withdrawnvalues.map(each =>
                <Withdrawbtn key={each.id} value={each.value} withdrawAmnt={handleWithdraw} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cashwithdrawal