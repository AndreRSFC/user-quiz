import styles from './radio.module.css';

interface RadioProps {
  checked: boolean;
  name: string;
  id: string;
  value: string;
  display: string;
  onSelect: () => void;
}

export const Radio = ({
  checked,
  name,
  id,
  value,
  display,
  onSelect,
}: RadioProps) => (
  <label className={styles.container}>
    {display}
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onSelect={onSelect}
    />
    <span className={styles.checkmark}></span>
  </label>
);
