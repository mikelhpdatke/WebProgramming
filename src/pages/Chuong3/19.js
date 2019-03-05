import React from 'react';
import styles from './style.less';

export default () => (
  <p className={styles.bgColor}>
    <p className={styles.bold}>Điều 19. Chỉ huy trong Công an nhân dân</p>
    <p>
      <ul>
        <li>1. Bộ trưởng Bộ Công an là người chỉ huy cao nhất trong Công an nhân dân.</li>
        <li>
          2. Chỉ huy công an cấp dưới chịu trách nhiệm trước chỉ huy công an cấp trên về tổ chức và
          hoạt động của đơn vị công an được giao phụ trách. Chỉ huy công an địa phương chịu trách
          nhiệm trước chỉ huy công an cấp trên và trước cấp ủy Đảng, chính quyền cùng cấp.
        </li>
        <li>
          3. Sĩ quan, hạ sĩ quan, chiến sĩ Công an nhân dân có chức vụ hoặc cấp bậc hàm cao hơn là
          cấp trên của sĩ quan, hạ sĩ quan, chiến sĩ có chức vụ hoặc cấp bậc hàm thấp hơn. Trường
          hợp sĩ quan, hạ sĩ quan, chiến sĩ có chức vụ cao hơn nhưng cấp bậc hàm ngang hoặc thấp hơn
          là cấp trên của sĩ quan, hạ sĩ quan, chiến sĩ có cấp bậc hàm ngang hoặc cao hơn nhưng chức
          vụ thấp hơn.
        </li>
      </ul>
    </p>
  </p>
);
