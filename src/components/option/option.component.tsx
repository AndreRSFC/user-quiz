import { SelectedOptionModel } from '@/app/quiz/quiz.models';
import { Radio } from '../radio';

import styles from './option.module.css';

interface OptionProps {
  value: string;
  setSelected: ({ isRejection, value }: SelectedOptionModel) => void;
  selectedOption: SelectedOptionModel;
  display: string;
  type: string;
  displayIsHtmlElement: boolean;
  isRejection: boolean;
}

export const Option = ({
  value,
  selectedOption,
  setSelected,
  display,
  type,
  displayIsHtmlElement,
  isRejection,
}: OptionProps) => {
  return (
    <div
      key={value + ''}
      className={`${styles.option} ${displayIsHtmlElement ? styles['option--image'] : ''}`}
      onClick={() => {
        setSelected({ value, isRejection });
      }}
    >
      {displayIsHtmlElement ? (
        <div
          className={`${styles.option_imageContainer} ${value === selectedOption?.value ? styles['option_imageContainer--checked'] : ''}`}
          data-testid="option-image-container"
        >
          <div
            key={display}
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
          onSelect={() => {
            setSelected({ value, isRejection });
          }}
          checked={value === selectedOption?.value}
          display={display}
        />
      )}
    </div>
  );
};
