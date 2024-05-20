import { Radio } from '../radio';

import styles from './option.module.css';

interface OptionProps {
  value: string;
  setSelected: (selected: string) => void;
  selectedOption: string;
  display: string;
  type: string;
  displayIsHtmlElement: boolean;
}

export const Option = ({
  value,
  selectedOption,
  setSelected,
  display,
  type,
  displayIsHtmlElement,
}: OptionProps) => {
  return (
    <div
      key={value + ''}
      className={`${styles.option} ${displayIsHtmlElement ? styles['option--image'] : ''}`}
      onClick={() => {
        setSelected(value);
      }}
    >
      {displayIsHtmlElement ? (
        <div
          className={`${styles.option_imageContainer} ${value === selectedOption ? styles['option_imageContainer--checked'] : ''}`}
          data-testid="option-image-container"
        >
          <div
            className={styles.option_image}
            dangerouslySetInnerHTML={{ __html: display }}
          />
          {value}
        </div>
      ) : (
        <Radio
          name={type}
          value={value}
          id={display}
          checked={value === selectedOption}
          display={display}
        />
      )}
    </div>
  );
};
