import styles from './radio.module.css';

interface RadioProps {
  checked: boolean;
  name: string;
  id: string;
  value: string;
  display: string;
}

export const Radio = ({ checked, name, id, value, display }: RadioProps) => (
  <label className={styles.container}>
    {display}
    <input type="radio" id={id} name={name} value={value} checked={checked} />
    <span className={styles.checkmark}></span>
  </label>
);
