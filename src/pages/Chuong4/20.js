import React from 'react';
import styles from './style.less';

export default () => (
  <p className={styles.bgColor}>
    <p className={styles.bold}>
      Điều 20. Phân loại, bố trí sĩ quan, hạ sĩ quan, chiến sĩ Công an nhân dân
    </p>
    <p>
      <ul>
        <li>
          1. Phân loại theo tính chất hoạt động, trong Công an nhân dân có: a) Sĩ quan, hạ sĩ quan
          nghiệp vụ; b) Sĩ quan, hạ sĩ quan chuyên môn kỹ thuật; c) Hạ sĩ quan, chiến sĩ nghĩa vụ.
        </li>
        <li>
          2. Bộ trưởng Bộ Công an quy định cụ thể việc phân loại, bố trí sĩ quan, hạ sĩ quan, chiến
          sĩ Công an nhân dân theo tính chất hoạt động.
        </li>
      </ul>
    </p>
  </p>
);
